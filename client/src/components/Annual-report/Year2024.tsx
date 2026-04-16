import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import girlImage from "../../assets/girl3.jpg"; 

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

  const count1Ref = useRef<HTMLSpanElement>(null); // 309,025
  const count2Ref = useRef<HTMLSpanElement>(null); // 14
  const count3Ref = useRef<HTMLSpanElement>(null); // ~3,000
  const count4Ref = useRef<HTMLSpanElement>(null); // 100%
  const count5Ref = useRef<HTMLSpanElement>(null); // 6
  const count6Ref = useRef<HTMLSpanElement>(null); // 0

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
      { ref: count1Ref, target: 309025, color: "var(--text-orange, #e8420a)", label: "protein energy bars donated", format: "comma" },
      { ref: count2Ref, target: 14, color: "var(--text-purple-dark, #5e2a7c)", label: "locations/causes", format: "plain" },
      { ref: count3Ref, target: 3000, prefix: "~", color: "var(--text-yellow, #f5a623)", label: "children supported", format: "comma" },
      { ref: count4Ref, target: 100, suffix: "%", color: "var(--text-blue-purple, #7b2cbf)", label: "of funds goes to production of Happy Bars", format: "plain" },
      { ref: count5Ref, target: 6, color: "var(--text-purple, #9b4d96)", label: "volunteer staff", format: "plain" },
      { ref: count6Ref, target: 0, color: "var(--text-blue, #2c6e9e)", label: "paid staff", format: "plain" },
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

      // Title
      tl.fromTo(titleRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6 })
        // Dotline
        .fromTo(dotlineRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "center center" },
          "-=0.2"
        )
        // Image drops from top
        .fromTo(imageRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.3")
        // All stat spans
        .fromTo(
          [count1Ref.current, count2Ref.current, count3Ref.current,
           count4Ref.current, count5Ref.current, count6Ref.current],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
          "-=0.4"
        )
        // All labels
        .fromTo(
          labelRefs.map(r => r.current),
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 },
          "-=0.3"
        );

      // ── Image: scroll-driven scale (grows on scroll down, shrinks on scroll up) ──
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
  }, []);

  return (
    <div className="w-full flex justify-center bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <section
          ref={sectionRef}
          className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center gap-8 md:gap-10"
        >
          {/* ── Title + Dotline - Fits Content ── */}
          <div className="flex flex-col items-center" style={{ width: "fit-content" }}>
            <h2
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight"
              style={{ opacity: 0 }}
            >
              <span style={{ color: "var(--text-purple-dark, #5e2a7c)" }}>Year </span>
              <span style={{ color: "var(--text-yellow, #f5a623)" }}>2024</span>
            </h2>
            <div
              ref={dotlineRef}
              className="-mt-2"
              style={{
                opacity: 0,
                height: "6px",
                width: "100%",
                backgroundImage: "radial-gradient(circle, var(--text-purple-dark, #5e2a7c) 3px, transparent 1.5px)",
                backgroundSize: "10px 6px",
              }}
            />
          </div>

          {/* ── Main Row: Image + Stats Grid - Centered content ── */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 md:gap-10 lg:gap-12">
            {/* Left: Image - Centered */}
            <div className="flex-shrink-0 flex justify-center items-start">
              <img
                ref={imageRef}
                src={girlImage}
                alt="Girl smiling"
                className="rounded-2xl object-cover"
                style={{
                  opacity: 0,
                  width: "clamp(200px, 50vw, 300px)",
                  height: "clamp(280px, 60vw, 400px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                }}
              />
            </div>

            {/* Right: Stats 2x3 Grid - Centered text on mobile, left on desktop */}
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:gap-y-10 gap-x-6 md:gap-x-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 text-center">
                  <span
                    ref={stat.ref}
                    className="font-bold text-center"
                    style={{
                      color: stat.color,
                      opacity: 0,
                      fontSize: "clamp(2rem, 6vw, 3.5rem)",
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.prefix ?? ""}0{stat.suffix ?? ""}
                  </span>
                  <p
                    ref={labelRefs[i]}
                    className="text-xs sm:text-sm md:text-base font-medium text-center max-w-xs mx-auto"
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