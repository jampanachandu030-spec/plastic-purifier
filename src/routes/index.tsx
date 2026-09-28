import { createFileRoute } from "@tanstack/react-router";

import machineHero from "@/assets/machine-hero.jpg";
import productTrowel from "@/assets/product-trowel.jpg";
import productPlanter from "@/assets/product-planter.jpg";
import productTile from "@/assets/product-tile.jpg";
import productChairleg from "@/assets/product-chairleg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ReForm — Portable Plastic Waste-to-Product Machine" },
      {
        name: "description",
        content:
          "ReForm is a portable machine that shreds, melts, and molds discarded plastic into durable tools and tiles — anywhere, in under 40 minutes.",
      },
      {
        property: "og:title",
        content: "ReForm — Portable Plastic Waste-to-Product Machine",
      },
      {
        property: "og:description",
        content:
          "Turn plastic waste into useful products anywhere. Shred, melt, and mold discarded plastic into durable tools and tiles in under 40 minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  {
    n: "01",
    title: "Load & shred",
    body: "Drop in clean bottles, containers, or film. The hopper grinds it into uniform flakes ready for melting.",
    chip: "bg-brand/10 text-brand",
  },
  {
    n: "02",
    title: "Melt & feed",
    body: "A low-energy extruder melts the flakes and pushes the molten plastic through a chosen mold profile.",
    chip: "bg-amber/15 text-amber",
  },
  {
    n: "03",
    title: "Mold & cool",
    body: "Swappable molds shape the output, then a quick cool cycle delivers a finished, usable product.",
    chip: "bg-ink/10 text-ink",
  },
];

const products = [
  { img: productTrowel, name: "Garden trowel", meta: "18 min · 0.4 kg" },
  { img: productPlanter, name: "Planter pot", meta: "22 min · 0.6 kg" },
  { img: productTile, name: "Deck tile", meta: "35 min · 1.1 kg" },
  { img: productChairleg, name: "Chair leg", meta: "40 min · 0.9 kg" },
];

function Index() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#F4FBFA] via-[#E7F1F0] to-[#DCEBEA] font-body text-ink">
      {/* ambient light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
        <div className="animate-floaty absolute -left-20 top-40 size-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="animate-floaty-slow absolute right-0 top-72 size-80 rounded-full bg-amber/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-72 rounded-full bg-brand/10 blur-3xl" />
      </div>

      {/* nav */}
      <header className="relative z-10 mx-auto max-w-6xl px-6 pt-6">
        <nav className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/40 px-5 py-3 shadow-[0_8px_30px_rgba(16,32,31,0.06)] backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-brand font-display text-lg font-bold text-white">
              R
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              ReForm
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
            <a href="#how" className="hover:text-brand">
              How it works
            </a>
            <a href="#outputs" className="hover:text-brand">
              Outputs
            </a>
            <a href="#impact" className="hover:text-brand">
              Impact
            </a>
          </div>
          <a
            href="#reserve"
            className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-ink/20"
          >
            Pre-order
          </a>
        </nav>
      </header>

      {/* hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand backdrop-blur-md">
            <span className="size-2 rounded-full bg-amber" /> Portable ·
            Solar-ready · 12 kg
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl">
            Turn plastic waste into{" "}
            <span className="text-brand">useful products</span> — anywhere.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
            The ReForm compact machine shreds, melts, and molds discarded
            plastic into durable tools and tiles in under 40 minutes. No
            factory. No grid. Just a bag of bottles and a spark.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#reserve"
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/30"
            >
              Reserve yours — $1,490
            </a>
            <a
              href="#how"
              className="rounded-full border border-ink/15 bg-white/50 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-md"
            >
              Watch the 90s film
            </a>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/60 bg-white/40 p-4 backdrop-blur-xl">
              <div className="font-display text-3xl font-bold text-brand">
                40<span className="text-lg">min</span>
              </div>
              <div className="mt-1 text-xs text-ink/60">per output</div>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/40 p-4 backdrop-blur-xl">
              <div className="font-display text-3xl font-bold text-brand">
                12<span className="text-lg">kg</span>
              </div>
              <div className="mt-1 text-xs text-ink/60">portable unit</div>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/40 p-4 backdrop-blur-xl">
              <div className="font-display text-3xl font-bold text-amber">
                3.2<span className="text-lg">kg</span>
              </div>
              <div className="mt-1 text-xs text-ink/60">input per cycle</div>
            </div>
          </div>
        </div>

        {/* hero image card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-[28px] border border-white/70 bg-white/40 p-3 shadow-[0_30px_60px_rgba(16,32,31,0.12)] backdrop-blur-2xl">
            <img
              src={machineHero}
              alt="ReForm portable plastic recycling machine"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                Now molding
              </div>
              <div className="font-display text-lg font-semibold text-brand">
                Garden trowel
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section
        id="how"
        className="relative z-10 mx-auto max-w-6xl px-6 py-10"
      >
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            How it works
          </h2>
          <span className="text-sm text-ink/50">Three steps, one machine</span>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl border border-white/60 bg-white/40 p-6 shadow-[0_10px_30px_rgba(16,32,31,0.05)] backdrop-blur-xl"
            >
              <div
                className={`grid size-12 place-items-center rounded-2xl font-display text-xl font-bold ${s.chip}`}
              >
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* outputs */}
      <section
        id="outputs"
        className="relative z-10 mx-auto max-w-6xl px-6 py-10"
      >
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            What you can make
          </h2>
          <span className="text-sm text-ink/50">
            Swap the mold, change the output
          </span>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.name}
              className="rounded-3xl border border-white/60 bg-white/40 p-3 shadow-[0_10px_30px_rgba(16,32,31,0.05)] backdrop-blur-xl"
            >
              <img
                src={p.img}
                alt={p.name}
                width={512}
                height={512}
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="px-2 pb-2 pt-3">
                <div className="font-display font-semibold">{p.name}</div>
                <div className="text-xs text-ink/55">{p.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* impact band */}
      <section
        id="impact"
        className="relative z-10 mx-auto max-w-6xl px-6 py-10"
      >
        <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white/40 p-8 shadow-[0_20px_50px_rgba(16,32,31,0.08)] backdrop-blur-2xl md:p-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="font-display text-3xl font-bold tracking-tight">
                Small machine, big footprint
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Every cycle diverts plastic from landfills and oceans while
                producing a product you actually keep. ReForm is built for
                communities, schools, and off-grid workshops.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 md:col-span-7">
              <div className="rounded-2xl bg-brand/10 p-4">
                <div className="font-display text-3xl font-bold text-brand">
                  68%
                </div>
                <div className="mt-1 text-xs text-ink/60">
                  less energy than factory
                </div>
              </div>
              <div className="rounded-2xl bg-amber/15 p-4">
                <div className="font-display text-3xl font-bold text-amber">
                  1,200
                </div>
                <div className="mt-1 text-xs text-ink/60">
                  kg diverted / year
                </div>
              </div>
              <div className="rounded-2xl bg-ink/10 p-4">
                <div className="font-display text-3xl font-bold text-ink">
                  24
                </div>
                <div className="mt-1 text-xs text-ink/60">swappable molds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* reserve CTA */}
      <section
        id="reserve"
        className="relative z-10 mx-auto max-w-6xl px-6 py-10"
      >
        <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white/40 p-8 text-center shadow-[0_20px_50px_rgba(16,32,31,0.08)] backdrop-blur-2xl md:p-12">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Reserve your ReForm
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/65">
            A fully refundable $200 deposit holds your place in the first
            production run, shipping Q3.
          </p>
          <a
            href="mailto:hello@reform.example"
            className="mt-6 inline-block rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/30"
          >
            Reserve now — $200 deposit
          </a>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-10 pt-4">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-sm text-ink/50 md:flex-row">
          <span className="font-display font-semibold text-ink">ReForm</span>
          <span>Designed for a circular future. © 2026 ReForm Labs.</span>
        </div>
      </footer>
    </div>
  );
}
