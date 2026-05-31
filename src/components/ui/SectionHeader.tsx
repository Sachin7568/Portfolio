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
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px bg-outline-variant flex-1" />
        <h2
          id={id}
          className="font-headline text-[28px] md:text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-on-surface"
        >
          {title}
        </h2>
        <div className="h-px bg-outline-variant flex-1" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 mb-16">
      <h2
        id={id}
        className="font-headline text-[28px] md:text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-on-surface"
      >
        {title}
      </h2>
      <div className="h-px bg-outline-variant flex-1" />
    </div>
  );
}
