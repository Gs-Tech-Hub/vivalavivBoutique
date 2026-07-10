import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Vive La Viv — Luxury Flagship Boutique",
  description:
    "VIV LA VIV luxury fashion boutique. Discover our flagship head office, collections, and boutique locations.",
};

export default function Home2Page() {
  return (
    <div className="overflow-hidden bg-brand-ivory text-brand-charcoal">
      <section className="relative isolate min-h-[80vh] overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_transparent_45%),radial-gradient(circle_at_center,_rgba(205,163,73,0.08),_transparent_35%),var(--background-image-marble)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.65),_transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle,_rgba(255,255,255,0.35),transparent_70%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,164,184,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(205,163,73,0.06),transparent_18%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <div className="mb-12 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border border-brand-border/70 bg-white/90 shadow-soft md:h-64 md:w-64">
            <Image
              src="/images/logo.jpeg"
              alt="VIV LA VIV logo"
              width={220}
              height={220}
              className="h-full w-full object-contain p-4"
            />
          </div>

          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-brand-primary">
            Established • 2000
          </p>
          <h1 className="mb-6 max-w-3xl text-5xl font-heading font-light uppercase tracking-[0.18em] md:text-7xl">
            <span className="text-brand-primary">V</span>
            <span className="text-brand-secondary">I</span>
            <span className="text-brand-primary">V</span>
            <span className="ml-3 text-brand-primary">L</span>
            <span className="text-brand-primary">A</span>
            <span className="ml-3 text-brand-primary">V</span>
            <span className="text-brand-secondary">I</span>
            <span className="text-brand-primary">V</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-xl italic text-brand-muted md:text-2xl">
            Your Fashion Is Your IQ
          </p>
          <div className="mb-16 flex justify-center">
            <a
              href="#head-office"
              className="inline-flex rounded-full bg-brand-primary px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-luxury transition hover:bg-[#8c151a] md:text-base"
            >
              Visit Head Office
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="inline-block h-px w-16 bg-gold" />
            <span className="text-xs uppercase tracking-[0.35em] text-brand-muted">
              Scroll
            </span>
            <span className="inline-block h-px w-16 bg-gold" />
          </div>
        </div>
      </section>

      <section id="head-office" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="section-subtitle mb-4 text-brand-secondary">Head Office</p>
            <div className="mx-auto mb-6 h-px w-16 bg-gold" />
            <h2 className="font-heading text-4xl font-light uppercase tracking-widest text-brand-charcoal md:text-5xl">
              Luxury Flagship Store
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
              Welcome to our flagship boutique in Benin City, where elegance, craftsmanship, and timeless fashion converge.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-8 rounded-[2rem] border border-brand-border bg-brand-ivory/90 p-8 shadow-soft md:p-12">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-brand-primary">
                  Benin City, Nigeria
                </p>
                <h3 className="font-heading text-3xl font-light uppercase tracking-[0.18em] text-brand-charcoal">
                  Head Office
                </h3>
              </div>

              <div className="space-y-6 text-sm leading-7 text-brand-muted">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">Full Address</p>
                  <p className="mt-2 text-base text-brand-charcoal">
                    12 Royal Avenue, Victoria Island, Benin City, Edo State, Nigeria
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">Business Hours</p>
                  <p className="mt-2 text-base text-brand-charcoal">Mon–Sat 9am–7pm</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">Contact</p>
                  <p className="mt-2 text-base text-brand-charcoal">Phone: <a className="underline decoration-brand-primary/50" href="tel:+2348012345678">+234 801 234 5678</a></p>
                  <p className="text-base text-brand-charcoal">Email: <a className="underline decoration-brand-primary/50" href="mailto:hello@vivalavivboutique.com">hello@vivalavivboutique.com</a></p>
                </div>
              </div>

              <p className="rounded-3xl border border-brand-border/70 bg-white/90 p-6 text-base leading-7 text-brand-charcoal shadow-soft">
                Every visit feels like a private appointment at an atelier. Step inside an interior defined by marble veining, polished gold accents, and a carefully curated selection of luxury fashion.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Benin+City+Nigeria"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-brand-charcoal/10 bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-brand-charcoal sm:w-auto"
                >
                  Get Directions
                </a>
                <Link
                  href="/locations"
                  className="inline-flex w-full items-center justify-center rounded-full border border-brand-primary bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary transition hover:border-brand-charcoal sm:w-auto"
                >
                  Explore Other Branches
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-brand-marble shadow-soft">
              <Image
                src="/images/head-office.jpeg"
                alt="Luxury flagship boutique interior"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {[
              { label: "Women’s Collection", href: "/collections" },
              { label: "Men’s Collection", href: "/collections" },
              { label: "Accessories", href: "/collections" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-[1.75rem] border border-brand-border bg-white/90 px-6 py-5 text-center text-sm font-semibold uppercase tracking-[0.25em] text-brand-charcoal transition hover:border-brand-charcoal/20 hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] border border-brand-border bg-brand-ivory/90 p-10 text-center shadow-soft">
            <p className="section-subtitle mb-3 text-brand-secondary">Our Clients</p>
            <h3 className="font-heading text-3xl font-light uppercase tracking-[0.18em] text-brand-charcoal md:text-4xl">
              Read stories from customers.
            </h3>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#8c151a] sm:w-auto"
              >
                Testimonials
              </Link>
              <Link
                href="/locations"
                className="inline-flex w-full items-center justify-center rounded-full border border-brand-charcoal/10 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-charcoal transition hover:border-brand-charcoal sm:w-auto"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
