#!/usr/bin/env python3
"""
Optimiza las fotos del Sneak Peek de /programacion-2026.

Origen:  ~/Downloads/ (los archivos tal cual los manda el cliente)
Destino: public/images/programacion-2026/
           <slug>.jpg            foto del evento, 16:9
           personas/<slug>.jpg   retrato, 1:1
           logos/<slug>.png      logo de aliado, sin margen blanco

Las fotos llegan por tandas. Al recibir material nuevo:
  1. agrega la entrada al bloque correspondiente (EVENTOS / PERSONAS / LOGOS),
  2. corre `python3 scripts/optimize-programacion.py`,
  3. llena el `image` de esa persona/evento en src/lib/programacion-2026-data.ts.

Requiere Pillow (`pip3 install Pillow`).
"""

import os
import re
import sys
import unicodedata

from PIL import Image, ImageOps

SRC_ROOT = os.path.expanduser("~/Downloads")
OUT_ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                        "public", "images", "programacion-2026")

# Dos formatos de salida. Nunca se hace upscale: un original de 735x490 se
# queda en 735x413.
EVENT_W, EVENT_H = 1600, 900   # 16:9, la tarjeta del índice y el hero del detalle
PERSON_W, PERSON_H = 600, 600  # 1:1, la tarjeta de persona
QUALITY = 82

# nombre real -> archivo dentro de ~/Downloads/, o (archivo, cx, cy) para
# reencuadrar. cx/cy son 0..1 sobre el original: 0.5 = centro, 0 = izquierda/arriba.
# Solo se especifican cuando el recorte por defecto pierde al sujeto.

# Foto de cada evento. La clave es el `slug` del evento en programacion-2026-data.ts.
EVENTOS = {
    "homenaje-dolores-heredia": "DoloresHeredia.png",
    "laboratorio-de-escritura": "TallerdeEscritura.jpg",
    # Original vertical (1170x1560): el 16:9 por defecto se comería la escena.
    "brunch-girls-at-films": ("Brunch.jpg", 0.5, 0.30),
    "panel-the-next-wave": "Panel.png",
}

# Retratos. La clave es el nombre real; el archivo de salida es su slug.
PERSONAS = {
    # Laboratorio de Escritura — mentores
    "Carlos Cuarón": "CarlosCuaron.jpg",
    "Fernando Frías": "FernandoFrias.jpg",
    "Alejandra Márquez Abella": "AlejandraMarquezAbella.jpg",
    "Gibrán Portela": "GibranPortela.jpg",
    # Brunch Girls At Films — invitada especial
    "Griselda Siciliani": ("IMAGEN GRISELDA SICILIANI .jpg", 0.5, 0.30),  # apaisada 6048x4032
    # Panel The Next Wave — cineastas
    "Natalia León": "NataliaLeon.jpg",
    "Mariana Mendívil": "MarianaMendivil.png",
    "Diego Gaxiola": "DiegoGaxiola.png",
    "Karla Condado": "KarlaCondado.jpg",
    "Leo Aguirre": "LeoAguirre.jpg",
    "Amandine Thomas": "AmandineThomas.png",
    "Gerardo Coello Escalante": "GerardoCoelloEscalante.jpeg",
    "Federico Luis": "FedericoLuis.jpg",
    # Pendientes de foto: Eduardo Braun Costa, Gabriela Ortega.
}

# Logos de aliado: PNG con fondo blanco y mucho margen. Se recorta el margen y se
# guarda como PNG; el blanco restante se neutraliza en CSS con mix-blend-mode:
# multiply sobre crema. El script imprime el tamaño final para `presentedBy`.
LOGOS = {
    "girls-at-films": "46_FICC_Logos_Aliados_2026_Mesa de trabajo 1 copia 59.png",
    "salomon": "25_FICC_Logos_Aliados-44.png",
}


def slugify(name: str) -> str:
    """Misma convención que public/images/comunidad: sin acentos, ñ->n, kebab-case."""
    ascii_name = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-zA-Z0-9]+", "-", ascii_name).strip("-").lower()


def fit(im: Image.Image, max_w: int, max_h: int, centering) -> Image.Image:
    """Recorta al ratio max_w:max_h alrededor de `centering`, sin ampliar."""
    im = ImageOps.exif_transpose(im).convert("RGB")
    w, h = im.size
    ratio = max_w / max_h

    out_w = min(max_w, w)
    out_h = round(out_w / ratio)
    if out_h > h:
        out_h = h
        out_w = round(h * ratio)
    return ImageOps.fit(im, (out_w, out_h), Image.LANCZOS, centering=centering)


def convert(src_path: str, out_path: str, max_w: int, max_h: int, centering) -> int:
    with Image.open(src_path) as im:
        if centering is None:
            # Apaisadas: el sujeto rara vez está arriba, así que se centra vertical.
            centering = (0.5, 0.40) if im.size[0] > im.size[1] else (0.5, 0.28)
        out = fit(im, max_w, max_h, centering)
    out.save(out_path, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    return os.path.getsize(out_path)


def trim_logo(src_path: str, out_path: str) -> tuple:
    """Recorta el margen blanco del logo y lo guarda como PNG."""
    with Image.open(src_path) as im:
        im = ImageOps.exif_transpose(im)
        rgb = im.convert("RGB")
        # El bbox de lo que NO es blanco: invertir y pedir el área con contenido.
        bbox = ImageOps.invert(rgb.convert("L")).getbbox()
        out = im.crop(bbox) if bbox else im
        out.save(out_path, "PNG", optimize=True)
        return out.size


def unpack(entry):
    if isinstance(entry, tuple):
        return entry[0], (entry[1], entry[2])
    return entry, None


def main() -> int:
    total = count = missing = 0
    personas_dir = os.path.join(OUT_ROOT, "personas")
    logos_dir = os.path.join(OUT_ROOT, "logos")
    for d in (OUT_ROOT, personas_dir, logos_dir):
        os.makedirs(d, exist_ok=True)

    batches = (
        ("evento", EVENTOS, OUT_ROOT, EVENT_W, EVENT_H),
        ("persona", PERSONAS, personas_dir, PERSON_W, PERSON_H),
    )

    for label, mapping, out_dir, max_w, max_h in batches:
        for name, entry in mapping.items():
            filename, centering = unpack(entry)
            src = os.path.join(SRC_ROOT, filename)
            if not os.path.isfile(src):
                print(f"[{label}] FALTA: {filename} ({name})", file=sys.stderr)
                missing += 1
                continue
            out = os.path.join(out_dir, f"{slugify(name)}.jpg")
            size = convert(src, out, max_w, max_h, centering)
            total += size
            count += 1
            print(f"[{label}] {name:28s} -> {os.path.basename(out):34s} {size // 1024:4d} KB")

    for name, filename in LOGOS.items():
        src = os.path.join(SRC_ROOT, filename)
        if not os.path.isfile(src):
            print(f"[logo] FALTA: {filename} ({name})", file=sys.stderr)
            missing += 1
            continue
        out = os.path.join(logos_dir, f"{name}.png")
        w, h = trim_logo(src, out)
        size = os.path.getsize(out)
        total += size
        count += 1
        print(f"[logo]    {name:28s} -> {os.path.basename(out):34s} {size // 1024:4d} KB  {w}x{h}")

    print(f"\n{count} archivos, {total / 1024 / 1024:.2f} MB en {OUT_ROOT}")
    if missing:
        print(f"{missing} archivo(s) de origen no encontrados.", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
