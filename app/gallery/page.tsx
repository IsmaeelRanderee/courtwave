import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery-1.jpg",
    alt: "Player preparing to serve on a padel court",
    tag: "On Court",
  },
  {
    src: "/gallery-2.jpg",
    alt: "Close-up of a padel racket and ball",
    tag: "Gear Close-up",
  },
  {
    src: "/gallery-3.jpg",
    alt: "Doubles padel match in progress",
    tag: "Match Play",
  },
  {
    src: "/gallery-4.jpg",
    alt: "Racket resting on the back glass of a padel court",
    tag: "Details",
  },
  {
    src: "/gallery-5.jpg",
    alt: "Player celebrating a winning point",
    tag: "Moments",
  },
  {
    src: "/gallery-6.jpg",
    alt: "Multiple padel rackets laid out on the court",
    tag: "Lineup",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-background">

      <section className="py-12 md:py-16 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 md:px-8 space-y-4 md:space-y-6">
          <div className="space-y-2 md:space-y-3 text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#0A66FF] uppercase">
              Gallery
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
              CourtWave in action.
            </h1>
            <p className="text-sm md:text-base text-neutral-600 max-w-xl mx-auto">
              A look at the rackets, courts and moments that inspire us – from
              practice sessions to match days.
            </p>
          </div>


          <div className="relative mt-4 rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm overflow-hidden h-56 md:h-72">
            <Image
              src="/gallery-hero.jpg"
              alt="Padel racket and ball on a blue court"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
            <div className="absolute left-6 bottom-6 md:left-10 md:bottom-8 text-left text-white space-y-1">
              <p className="text-xs md:text-sm uppercase tracking-[0.2em]">
                Courts • Gear • Moments
              </p>
              <p className="text-lg md:text-2xl font-semibold">
                Built for players who live on court.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg md:text-xl font-semibold text-neutral-900">
              Highlights
            </h2>
            <p className="text-xs md:text-sm text-neutral-600">
              Hover over an image to see more detail.
            </p>
          </div>

          <div className="grid gap-5 md:gap-6 grid-cols-2 md:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="group relative rounded-2xl border border-neutral-200 bg-neutral-50 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>


                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-xs md:text-sm text-white p-3 md:p-4">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
