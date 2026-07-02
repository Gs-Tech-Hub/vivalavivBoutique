import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/public/images/hero-image-01.jpg";

export default function HeroHome() {
  return (
    <section className="relative min-h-[85vh] bg-brand-cream bg-marble">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-8 top-20 h-24 w-24 rotate-12 rounded-full bg-brand-accent/20 blur-2xl" />
        <div className="absolute bottom-32 left-10 h-32 w-32 -rotate-6 rounded-full bg-brand-secondary/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-brand-accent/40" />
        <div className="absolute left-1/4 top-1/2 h-2 w-2 rounded-full bg-brand-accent/30" />
        <div className="absolute bottom-1/4 right-1/3 h-4 w-4 rounded-full bg-brand-accent/25" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center py-24 text-center md:py-32">
          <p
            className="section-subtitle mb-6"
            data-aos="fade-up"
          >
            Established Luxury
          </p>

          <h1
            className="font-heading text-5xl font-light uppercase tracking-widest text-brand-charcoal md:text-7xl"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            VIV LA VIV
          </h1>

          <div className="my-8 h-px w-16 bg-gold" data-aos="fade-up" data-aos-delay={150} />

          <p
            className="font-script text-2xl italic text-brand-text md:text-3xl"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            &ldquo;Your Fashion Is Your IQ&rdquo;
          </p>

          <p
            className="mx-auto mt-8 max-w-2xl font-body text-base leading-8 text-brand-muted md:text-lg"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Discover handpicked collections, visit our boutique locations, and
            find pieces that celebrate your unique style.
          </p>

          <div
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <Link className="btn btn-primary" href="/collections">
              Browse Collections
            </Link>
            <Link className="btn btn-secondary" href="/locations">
              Find a Location
            </Link>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-luxury border border-brand-border shadow-soft"
          data-aos="fade-up"
          data-aos-delay={500}
        >
          <Image
            src={HeroImage}
            alt="VivaLaViv Boutique interior"
            className="h-[280px] w-full object-cover md:h-[420px]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
