import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import girlImage from "../../assets/girl5.jpg";

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  ref: React.RefObject<HTMLSpanElement | null>;
  target: number;
  prefix?: string;
  suffix?: string;
  color: string;
  label: string;
  isDecimal?: boolean;
  format?: "comma" | "plain" | "percent";
}

const Year2024: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dotlineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const count1Ref = useRef<HTMLSpanElement>(null);
  const count2Ref = useRef<HTMLSpanElement>(null);
  const count3Ref = useRef<HTMLSpanElement>(null);
  const count4Ref = useRef<HTMLSpanElement>(null);
  const count5Ref = useRef<HTMLSpanElement>(null);
  const count6Ref = useRef<HTMLSpanElement>(null);

  const labelRefs = [
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
  ];

  const stats = useMemo<StatItem[]>(
    () => [
      { ref: count1Ref, target: 309025, color: "var(--text-orange)", label: "protein energy bars donated", format: "comma" },
      { ref: count2Ref, target: 14, color: "var(--text-purple-dark)", label: "locations/causes", format: "plain" },
      { ref: count3Ref, target: 3000, prefix: "~", color: "var(--text-yellow)", label: "children supported", format: "comma" },
      { ref: count4Ref, target: 100, suffix: "%", color: "var(--text-blue-purple)", label: "of funds goes to production of Happy Bars", format: "plain" },
      { ref: count5Ref, target: 6, color: "var(--text-purple)", label: "volunteer staff", format: "plain" },
      { ref: count6Ref, target: 0, color: "var(--text-blue)", label: "paid staff", format: "plain" },
    ],
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            stats.forEach((stat) => {
              if (stat.target === 0) {
                if (stat.ref.current) stat.ref.current.textContent = "0";
                return;
              }
              gsap.to({ val: 0 }, {
                val: stat.target,
                duration: 2,
                ease: "power2.out",
                delay: 0.7,
                onUpdate: function () {
                  if (!stat.ref.current) return;
                  const v = this.targets()[0].val;
                  let display = "";
                  if (stat.format === "comma") {
                    display = Math.round(v).toLocaleString();
                  } else {
                    display = Math.round(v).toString();
                  }
                  stat.ref.current.textContent =
                    (stat.prefix ?? "") + display + (stat.suffix ?? "");
                },
              });
            });
          },
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(titleRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6 })
        .fromTo(dotlineRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "center center" },
          "-=0.2"
        )
        .fromTo(imageRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.3")
        .fromTo(
          [count1Ref.current, count2Ref.current, count3Ref.current,
           count4Ref.current, count5Ref.current, count6Ref.current],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          labelRefs.map(r => r.current),
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 },
          "-=0.3"
        );

      gsap.fromTo(
        imageRef.current,
        { scale: 0.6, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [stats]);

  return (
    <div className="w-full overflow-hidden flex justify-center" style={{ background: "#ffffff" }}>
      <div className="w-full max-w-9xl mx-auto">
        <section
          ref={sectionRef}
          className="w-full py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-14 px-4 sm:px-6 md:px-8 lg:px-12"
        >
          {/* ── Title + Dotline ── */}
          <div className="inline-flex flex-col items-center justify-center" style={{ width: "fit-content" }}>
            <h2
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-center"
            >
              <span style={{ color: "var(--text-purple-dark)" }}>Year </span>
              <span style={{ color: "var(--text-yellow)" }}>2024</span>
            </h2>
            <div
              ref={dotlineRef}
              className="-mt-1"
              style={{
                height: "6px",
                width: "100%",
                maxWidth: "300px",
                backgroundImage: "radial-gradient(circle, var(--text-purple-dark) 3px, transparent 1.5px)",
                backgroundSize: "10px 6px",
              }}
            />
          </div>

          {/* ── Main Row: Image + Stats Grid ── */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 xl:gap-16">
            {/* Left: Image */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
              <img
                ref={imageRef}
                src={girlImage}
                alt="Girl smiling"
                className="rounded-2xl object-cover w-full sm:max-w-[320px] md:max-w-[450px] lg:w-[500px] h-auto lg:h-[600px]"
                style={{
                  opacity: 0,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                }}
              />
            </div>

            {/* Right: Stats 2x3 Grid */}
            <div className="flex-1 max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-12 gap-x-8 sm:gap-x-12 md:gap-x-16 w-full">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 sm:gap-2 text-center sm:text-center">
                  <span
                    ref={stat.ref}
                    className="font-bold block"
                    style={{
                      color: stat.color,
                      opacity: 0,
                      fontSize: "clamp(2rem, 6vw, 4.5rem)",
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.prefix ?? ""}0{stat.suffix ?? ""}
                  </span>
                  <p
                    ref={labelRefs[i]}
                    className="text-xs sm:text-sm md:text-base font-medium"
                    style={{ color: "#333", opacity: 0 }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Year2024;