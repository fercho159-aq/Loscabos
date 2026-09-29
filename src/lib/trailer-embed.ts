/** Convert supported video links to player URLs; folders are not videos. */
export function getTrailerEmbedUrl(value?: string): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:") return undefined;
    const host = url.hostname.toLowerCase();

    if (host === "drive.google.com") {
      const id = url.pathname.match(/^\/file\/d\/([\w-]+)(?:\/|$)/)?.[1]
        || (url.pathname === "/open" ? url.searchParams.get("id") : null);
      if (!id || !/^[\w-]+$/.test(id)) return undefined;
      const player = new URL(`https://drive.google.com/file/d/${id}/preview`);
      const resourceKey = url.searchParams.get("resourcekey");
      if (resourceKey) player.searchParams.set("resourcekey", resourceKey);
      return player.href;
    }

    if (["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be", "www.youtube-nocookie.com"].includes(host)) {
      const id = host === "youtu.be"
        ? url.pathname.slice(1)
        : url.pathname === "/watch"
          ? url.searchParams.get("v")
          : url.pathname.match(/^\/(?:embed|shorts)\/([\w-]+)\/?$/)?.[1];
      return id && /^[\w-]{11}$/.test(id)
        ? `https://www.youtube-nocookie.com/embed/${id}?rel=0`
        : undefined;
    }

    if (["vimeo.com", "www.vimeo.com", "player.vimeo.com"].includes(host)) {
      const match = url.pathname.match(/^\/(?:video\/)?(\d+)(?:\/([a-zA-Z0-9]+))?\/?$/);
      if (!match) return undefined;
      const player = new URL(`https://player.vimeo.com/video/${match[1]}`);
      const hash = url.searchParams.get("h") || match[2];
      if (hash) player.searchParams.set("h", hash);
      return player.href;
    }
  } catch { /* Missing or invalid trailer links have no player. */ }
  return undefined;
}
