import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="relative rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 py-12 sm:py-20 mb-24 shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0A66FF11,transparent_60%)]" />

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-8 sm:px-16 max-w-7xl">
          <div className="space-y-6 relative">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#0A66FF22] blur-3xl opacity-40 pointer-events-none" />

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-neutral-900">Unleash</span>{" "}
              <span className="text-[#0A66FF]">Your Game</span>
            </h2>

            <p className="text-neutral-700 text-lg max-w-md">
              Premium padel rackets engineered for champions. Experience the perfect
              blend of power, control, and precision.
            </p>

            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-black hover:bg-neutral-900 text-white text-sm font-semibold shadow-lg transition-all"
            >
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>

          <div className="flex justify-center">
            <Image
              alt="Hero Image"
              src="/Hero1.jpg"
              width={500}
              height={500}
              className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-background mb-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              POWER & PRECISION
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
              Find the perfect racket for your playing style
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/products"
              className="group relative h-56 md:h-72 rounded-2xl overflow-hidden 
                   bg-gradient-to-br from-neutral-900 to-neutral-800
                   border border-white/5 shadow-lg shadow-black/20
                   hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40
                   transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff22,transparent_55%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
                  POWER • DURABILITY
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-1.5">
                  Carbon Rackets
                </h3>
                <p className="text-sm text-white/80">
                  Maximum power & durability
                </p>
              </div>
            </Link>

            <Link
              href="/products"
              className="group relative h-56 md:h-72 rounded-2xl overflow-hidden 
                   bg-gradient-to-br from-[#0A66FF] to-[#0040C8]
                   border border-white/5 shadow-lg shadow-black/20
                   hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40
                   transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffffff33,transparent_55%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">
                  EXPLOSIVE POWER
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-1.5">
                  Power Series
                </h3>
                <p className="text-sm text-white/85">
                  For aggressive players
                </p>
              </div>
            </Link>

            <Link
              href="/products"
              className="group relative h-56 md:h-72 rounded-2xl overflow-hidden 
                   bg-gradient-to-br from-neutral-900 to-neutral-700
                   border border-white/5 shadow-lg shadow-black/20
                   hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40
                   transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0A66FF33,transparent_55%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">
                  FINESSE & CONTROL
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-1.5">
                  Control Series
                </h3>
                <p className="text-sm text-white/80">
                  Precision & touch
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background mb-24">
        <div className="mx-auto max-w-7xl px-8 sm:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-[0.25em] text-[#0A66FF]">
                ABOUT COURTWAVE
              </p>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900">
                Built for players who demand more.
              </h2>

              <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                CourtWave is an online padel destination focused on performance-driven gear.
                We curate premium rackets engineered for players who care about power, precision,
                and feel on every point — whether you’re playing club nights, league matches or
                high-pressure tournaments.
              </p>

              <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                Every product in our store is selected with one goal in mind: helping you play
                your best padel. From powerful attacking frames to ultra-controlled rackets for
                defensive specialists, we test, compare and bring only the stand-out options
                to CourtWave.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-2">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-neutral-900">
                    50+
                  </p>
                  <p className="text-xs md:text-sm text-neutral-600">
                    Curated rackets across power, control & hybrid categories.
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-neutral-900">
                    1000+
                  </p>
                  <p className="text-xs md:text-sm text-neutral-600">
                    Sets played with CourtWave rackets by players worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-8 -right-6 w-40 h-40 bg-[#0A66FF22] blur-3xl pointer-events-none" />
              <div className="rounded-3xl border border-neutral-200 bg-white shadow-xl p-8 sm:p-10 space-y-6">
                <h3 className="text-lg md:text-xl font-semibold text-neutral-900">
                  Why players choose CourtWave
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-neutral-700">
                  <li>• Clear categories for Power, Control and All-round playstyles.</li>
                  <li>• Honest specs so you know exactly what you’re getting on court.</li>
                  <li>• A focus on comfort and arm-friendly frames, not just raw power.</li>
                  <li>• Fast, online ordering designed around padel players’ schedules.</li>
                </ul>
                <p className="text-xs md:text-sm text-neutral-500 border-t border-neutral-200 pt-4">
                  From your first padel session to your next tournament win — we’re here to help
                  you find the racket that actually matches your game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/40 pt-8 md:pt-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">
              PLAYER REVIEWS
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Hear from our community of champions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-500">
              <div className="flex gap-0.5 mb-5">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
              </div>
              <p className="text-foreground mb-6 leading-relaxed text-sm md:text-base">
                &quot;The best rackets I’ve ever used. Control, power, balance — everything feels world-class.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  A
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Alex Moreno</p>
                  <p className="text-xs text-muted-foreground">Semi-Pro Player</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-500">
              <div className="flex gap-0.5 mb-5">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
              </div>
              <p className="text-foreground mb-6 leading-relaxed text-sm md:text-base">
                &quot;Amazing feel and responsiveness. Perfect for players who want more control in tight rallies.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  J
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Jaden Smith</p>
                  <p className="text-xs text-muted-foreground">Intermediate Player</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-500">
              <div className="flex gap-0.5 mb-5">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
              </div>
              <p className="text-foreground mb-6 leading-relaxed text-sm md:text-base">
                &quot;Instant improvement in my smashes! The balance and power transfer are unreal.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  S
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Sofia Martinez</p>
                  <p className="text-xs text-muted-foreground">Club Player</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
