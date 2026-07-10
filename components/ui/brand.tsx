import Image from "next/image";
import Link from "next/link";

export default function Brand({
  className = "",
  size = "md",
  asLink = false,
  href = "/",
  showLogo = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  asLink?: boolean;
  href?: string;
  showLogo?: boolean;
}) {
  const sizeMap: Record<string, string> = {
    sm: "text-sm",
    md: "text-xl md:text-2xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-5xl md:text-7xl",
  };

  const textClass = `font-heading font-light uppercase tracking-widest ${
    sizeMap[size] || sizeMap.md
  } ${className}`;

  const brandText = (
    <span className={textClass} aria-hidden>
      {"VIV LA VIV".split("").map((ch, i) => {
        if (ch === " ") return (
          <span key={`sp-${i}`} className="mx-1 inline-block" />
        );
        const isI = ch.toLowerCase() === "i";
        const colorClass = isI ? "text-yellow-400" : "text-red-600";
        return (
          <span key={`${ch}-${i}`} className={`${colorClass} inline-block`}>
            {ch}
          </span>
        );
      })}
    </span>
  );

  const content = (
    <span className="inline-flex items-center gap-3">
      {showLogo && (
        <Image src="/images/logo.jpeg" alt="Viv La Viv logo" width={44} height={44} className="object-contain" />
      )}
      {brandText}
    </span>
  );

  if (asLink) {
    return (
      <Link href={href} aria-label="Viva La Viv" className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
