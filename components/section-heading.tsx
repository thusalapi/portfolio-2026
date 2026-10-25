type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16 space-y-4">
      <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
        <span className="text-primary">{index}</span>
        <span className="mx-2">/</span>
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
