interface SectionHeaderProps {
  title: string;
  id?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  id,
  align = "left",
}: SectionHeaderProps) {
  if (align === "center") {
    return (
      <div className="flex items-center gap-4 mb-10 md:mb-14">
        <div className="h-px bg-[var(--color-border)] flex-1" />
        <h2
          id={id}
          className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)]"
        >
          {title}
        </h2>
        <div className="h-px bg-[var(--color-border)] flex-1" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 mb-10 md:mb-14">
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
