import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import girlImage from "../../assets/girl.jpg";

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  target: number;
  prefix?: string;
  suffix?: string;
  color: string;
  label: string;
  format?: "comma" | "plain";
}

const Year2024: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = useMemo<StatItem[]>(
    () => [
      { target: 309025, color: "var(--text-orange)", label: "protein energy bars donated", format: "comma" },
      { target: 14, color: "var(--text-purple-dark)", label: "locations/causes", format: "plain" },
      { target: 3000, prefix: "~", color: "var(--text-yellow)", label: "children supported", format: "comma" },
      { target: 100, suffix: "%", color: "var(--text-blue-purple)", label: "of funds goes to production of Happy Bars", format: "plain" },
      { target: 6, color: "var(--text-purple)", label: "volunteer staff", format: "plain" },
      { target: 0, color: "var(--text-blue)", label: "paid staff", format: "plain" },
    ],
    []
  );

  // GSAP scroll animation for image
  useEffect(() => {
    const ctx = gsap.context(() => {
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

  // Count up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            stats.forEach((stat, index) => {
              if (stat.target === 0) {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = 0;
                  return newCounts;
                });
                return;
              }
              
              const duration = 2000;
              const interval = 20;
              const steps = duration / interval;
              const increment = stat.target / steps;
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.target) {
                  setCounts(prev => {
                    const newCounts = [...prev];
                    newCounts[index] = stat.target;
                    return newCounts;
                  });
                  clearInterval(timer);
                } else {
                  setCounts(prev => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.round(current);
                    return newCounts;
                  });
                }
              }, interval);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated, stats]);

  const formatValue = (value: number, stat: StatItem): string => {
    let display = "";
    if (stat.format === "comma") {
      display = Math.round(value).toLocaleString();
    } else {
      display = Math.round(value).toString();
    }
    return (stat.prefix ?? "") + display + (stat.suffix ?? "");
  };

  return (
    <div className="w-full overflow-hidden flex flex-col justify-center" style={{ background: "#ffffff" }}>
      <div className="w-full max-w-9xl mx-auto">
        <section
          ref={sectionRef}
          className="w-full py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-14 px-4 sm:px-6 md:px-8 lg:px-12"
        >
          {/* ── Title + Dotline ── */}
          <div className="inline-flex flex-col items-center justify-center" style={{ width: "fit-content" }}>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center">
              <span style={{ color: "var(--text-purple-dark)" }}>Year </span>
              <span style={{ color: "var(--text-yellow)" }}>2024</span>
            </h2>
            <div
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
            {/* Left: Image with GSAP scroll animation */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
              <img
                ref={imageRef}
                src={girlImage}
                alt="Girl smiling"
                className="rounded-2xl object-cover w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:w-[300px] h-auto lg:h-[400px]"
                style={{
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                }}
              />
            </div>

            {/* Right: Stats 2x3 Grid */}
            <div className="flex-1 max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-12 gap-x-8 sm:gap-x-12 md:gap-x-16 w-full">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 sm:gap-2 text-center sm:text-left">
                  <span
                    className="font-bold block"
                    style={{
                      color: stat.color,
                      fontSize: "clamp(3rem, 6vw, 4.5rem)",
                      lineHeight: 1.1,
                    }}
                  >
                    {formatValue(counts[i], stat)}
                  </span>
                  <p
                    className="text-xs sm:text-sm md:text-xl font-bold"
                    style={{ color: "#333" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── Multi-color Wave at bottom ── */}
      <div className="relative overflow-hidden w-full">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "clamp(60px, 8vw, 120px)" }}
        >
          <rect width="1440" height="20" fill="#ffffff" />
          <path
            d="M0,20 C300,80 700,0 1000,50 C1200,80 1350,20 1440,40 L1440,120 L0,120 Z"
            fill="var(--light-blue)"
            opacity="0.5"
          />
          <path
            d="M0,45 C200,10 500,75 800,35 C1050,5 1280,65 1440,30 L1440,120 L0,120 Z"
            fill="var(--mid-blue)"
            opacity="0.7"
          />
          <path
            d="M0,65 C250,30 600,90 900,55 C1100,30 1300,75 1440,55 L1440,120 L0,120 Z"
            fill="var(--dark-blue)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Year2024;