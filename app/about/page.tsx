import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-background">
      <section className="py-12 md:py-16 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 md:px-8 grid gap-10 md:grid-cols-[1.2fr,1fr] items-center">
          <div className="space-y-4 md:space-y-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#0A66FF] uppercase">
              About CourtWave
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Elevating padel, one racket at a time.
            </h1>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-xl">
              CourtWave is an online destination dedicated to padel players who
              demand more from their gear. We carefully curate high-performance
              rackets from leading brands and make it simple to find the frame
              that matches your style of play.
            </p>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-xl">
              Whether you’re just starting out or competing at club level, our
              goal is to help you step on court with confidence – every single
              match.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-6 w-40 h-40 bg-[#0A66FF22] blur-3xl pointer-events-none" />
            <div className="rounded-3xl border border-neutral-200 bg-white shadow-xl px-6 py-6 md:px-8 md:py-8 space-y-4">
              <h2 className="text-lg font-semibold text-neutral-900">
                Built for modern padel players
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                We combine clean design, honest product information and a smooth
                online experience — so you can spend less time searching and
                more time playing.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2 text-sm">
                <div>
                  <p className="text-xl font-bold text-neutral-900">50+</p>
                  <p className="text-neutral-600 text-xs">
                    Rackets across power, control & hybrid categories.
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold text-neutral-900">1000+</p>
                  <p className="text-neutral-600 text-xs">
                    Sets played with CourtWave rackets worldwide.
                  </p>
                </div>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center text-xs font-semibold text-[#0A66FF] hover:underline"
              >
                Browse all rackets
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm px-6 py-8 md:px-10 md:py-10 space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Our Story
            </h2>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
              CourtWave started with a simple observation: padel is exploding,
              but finding the right racket still feels confusing. Specs are
              overwhelming, reviews are scattered, and most stores treat every
              player the same.
            </p>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
              We set out to change that. Instead of listing everything, we focus
              on a curated selection of frames that stand out for build quality,
              performance and feel on court. Each product is chosen with a clear
              use-case in mind — from power-heavy smashers to control-focused
              counter-attackers.
            </p>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
              The result is a cleaner, more thoughtful way to shop for padel
              gear: fewer tabs, more clarity, and gear you’re excited to swing.
            </p>
          </div>
        </div>
      </section>


      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8 space-y-8">
          <div className="text-center space-y-2 md:space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
              What We Stand For
            </h2>
            <p className="text-sm md:text-base text-neutral-600 max-w-xl mx-auto">
              Three simple principles guide how we choose products and build the
              CourtWave experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* VALUE 1 */}
            <div className="group relative rounded-3xl border border-neutral-200 bg-white shadow-sm p-6 md:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0A66FF11,transparent_55%)] opacity-80 pointer-events-none" />
              <div className="relative space-y-2">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Curated, not cluttered.
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  We’d rather offer fewer options that we truly believe in than
                  pages of products you have to sort through yourself.
                </p>
              </div>
            </div>

            {/* VALUE 2 */}
            <div className="group relative rounded-3xl border border-neutral-200 bg-white shadow-sm p-6 md:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0A66FF0F,transparent_55%)] opacity-80 pointer-events-none" />
              <div className="relative space-y-2">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Made for real players.
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Power, control, comfort – we think about how a racket feels in
                  long rallies, tight tie-breaks and everyday club matches.
                </p>
              </div>
            </div>

            {/* VALUE 3 */}
            <div className="group relative rounded-3xl border border-neutral-200 bg-white shadow-sm p-6 md:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0A66FF11,transparent_55%)] opacity-80 pointer-events-none" />
              <div className="relative space-y-2">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Effortless experience.
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  From clean product pages to a streamlined checkout, we design
                  every step to feel simple, fast and trustworthy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
