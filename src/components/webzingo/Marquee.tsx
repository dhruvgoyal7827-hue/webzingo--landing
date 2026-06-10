const brands = [
  "STARTUP X",
  "AGENCY Y",
  "BRAND Z",
  "STUDIO W",
  "NOVA LABS",
  "PARALLEL",
  "ORBIT.IO",
  "KINETIC",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center gap-10 pr-10 ${reverse ? "animate-[marquee-reverse_40s_linear_infinite]" : "animate-[marquee_30s_linear_infinite]"}`}
      >
        {[...brands, ...brands].map((b, i) => (
          <div key={i} className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-md border border-border-glass bg-bg-deep text-xs font-bold text-accent-glow">
                {b[0]}
              </div>
              <span className="text-sm tracking-[0.2em] text-text-muted">{b}</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-accent-violet/50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative border-y border-accent-violet/20 bg-[#0d0d1a] py-8">
      <div className="space-y-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
