export const metadata = {
  title: "Locations",
  description:
    "Find VivaLaViv Boutique locations, contact details, and directions.",
};

import { getPublishedBranches } from "@/lib/queries";

export default async function LocationsPage() {
  const branches = await getPublishedBranches();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-subtitle mb-4" data-aos="fade-up">
              Visit Us
            </p>
            <div className="mx-auto mb-6 h-px w-16 bg-gold" />
            <h1
              className="font-heading text-4xl font-light uppercase tracking-widest text-brand-charcoal md:text-5xl"
              data-aos="fade-up"
            >
              Our Locations
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-brand-muted"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Visit one of our boutiques for a personalized styling experience.
            </p>
          </div>

          {branches.length === 0 ? (
            <p className="mt-16 text-center text-brand-muted">
              Location information coming soon.
            </p>
          ) : (
            <div className="mt-16 space-y-10">
              {branches.map((branch, index) => (
                <article
                  key={branch.id}
                  className="card-luxury overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="grid gap-0 lg:grid-cols-2">
                    <div className="p-8">
                      <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-secondary">
                        <span className="h-2 w-2 rounded-full bg-brand-secondary" />
                        Open for visits
                      </div>
                      <h2 className="font-heading text-2xl font-light uppercase tracking-wider text-brand-charcoal">
                        {branch.name}
                      </h2>
                      <p className="mt-4 leading-relaxed text-brand-text">{branch.address}</p>
                      <div className="mt-6 space-y-2 text-sm text-brand-muted">
                        {branch.phone && (
                          <p>
                            <span className="text-brand-secondary">Phone:</span>{" "}
                            <a
                              href={`tel:${branch.phone}`}
                              className="hover:text-brand-primary"
                            >
                              {branch.phone}
                            </a>
                          </p>
                        )}
                        {branch.email && (
                          <p>
                            <span className="text-brand-secondary">Email:</span>{" "}
                            <a
                              href={`mailto:${branch.email}`}
                              className="hover:text-brand-primary"
                            >
                              {branch.email}
                            </a>
                          </p>
                        )}
                      </div>
                      {branch.latitude && branch.longitude && (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${branch.latitude},${branch.longitude}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex text-sm text-brand-primary hover:text-red-800"
                        >
                          Open in Google Maps →
                        </a>
                      )}
                    </div>
                    <div className="min-h-[280px] bg-brand-marble lg:min-h-[320px]">
                      {branch.mapEmbedUrl ? (
                        <iframe
                          title={`Map for ${branch.name}`}
                          src={branch.mapEmbedUrl}
                          className="h-full min-h-[280px] w-full border-0 lg:min-h-[320px]"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          allowFullScreen
                        />
                      ) : (
                        <div className="flex h-full min-h-[280px] items-center justify-center text-sm text-brand-muted">
                          Map unavailable
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
