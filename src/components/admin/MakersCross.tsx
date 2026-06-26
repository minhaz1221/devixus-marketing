/** Devixus maker's cross brand mark (admin scope). */
export function MakersCross({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden="true"
      className={className ?? "h-7 w-auto"}
    >
      <line
        x1="3"
        y1="31"
        x2="31"
        y2="3"
        stroke="#C9FF3B"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line
        x1="3"
        y1="3"
        x2="31"
        y2="31"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
