import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 flex-col items-start gap-0.5"
      aria-label="VivaLaViv Boutique"
    >
      <span className="font-heading text-xl font-light uppercase tracking-widest text-brand-charcoal md:text-2xl">
        VIV LA VIV
      </span>
      <span className="hidden text-[0.55rem] uppercase tracking-[0.4em] text-brand-primary sm:block">
        Established Luxury
      </span>
    </Link>
  );
}
