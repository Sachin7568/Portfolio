export function SectionHeader({ title, id }: { title: string; id?: string }) {
  return (
    <div className="flex items-center gap-4 mb-10 md:mb-14">
      {/* Accent marker: gives every section a consistent visual anchor. */}
      <span
        aria-hidden="true"
        className="h-7 w-1 rounded-full bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent-2)] shrink-0"
      />
      <h2
        id={id}
        className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)] shrink-0"
      >
        {title}
      </h2>
      <div className="h-px bg-[var(--color-border)] flex-1" />
    </div>
  );
}
