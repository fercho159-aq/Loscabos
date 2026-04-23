export function BlobCoral({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M200 50c-30 0-60 20-90 50-40 40-70 30-80 60-10 30 10 60 30 80 20 20 10 50 30 70s60 20 90 10c30-10 50-40 70-30 20 10 50 20 60-10 10-30-10-60 10-90 20-30 10-60-10-80-20-20-50-10-60-30-10-20-20-30-50-30z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FilmReel({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="32" />
      <circle cx="200" cy="200" r="50" fill="currentColor" />
      <line x1="200" y1="40" x2="200" y2="160" stroke="currentColor" strokeWidth="28" />
      <line x1="200" y1="240" x2="200" y2="360" stroke="currentColor" strokeWidth="28" />
      <line x1="40" y1="200" x2="150" y2="200" stroke="currentColor" strokeWidth="28" />
      <line x1="250" y1="200" x2="360" y2="200" stroke="currentColor" strokeWidth="28" />
    </svg>
  );
}

export function SunBurst({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M200 40l22 50 45-35-8 55 55 5-40 38 35 43-54-10-5 55-38-40-43 35 10-54-55-5 40-38-35-43 54 10 5-55z"
        fill="currentColor"
      />
      <circle cx="200" cy="200" r="70" fill="currentColor" />
    </svg>
  );
}

export function StarShape({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M200 30l40 130h-10l100-90-60 120 130 10-120 60 90 100-130-40v10l-40 40-40-40v-10l-130 40 90-100-120-60 130-10-60-120 100 90h-10z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhaleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M42 4c-2-3-5-4-8-4-1 0-2 1-2 2s2 3 4 4c-8 1-16 5-22 12C8 25 4 30 2 34c-1 2 0 4 2 5 2 1 4 0 5-2 2-3 5-6 8-8-2 4-3 8-2 11 4-2 8-5 11-9 3 4 7 7 11 9 1-3 0-7-2-11 3 2 6 5 8 8 1 2 3 3 5 2 2-1 3-3 2-5-2-4-6-9-12-16l6-2c2-1 3-2 3-4 0-1-1-2-2-2l-3 1z" />
    </svg>
  );
}
