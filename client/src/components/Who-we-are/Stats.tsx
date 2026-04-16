import React, { useEffect, useRef, useState } from "react";

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Count 1: 0 → 2.1 million
            const duration = 2000; // 2 seconds
            const interval = 20; // update every 20ms
            const steps = duration / interval;
            const increment1 = 2.1 / steps;
            let current1 = 0;
            
            const timer1 = setInterval(() => {
              current1 += increment1;
              if (current1 >= 2.1) {
                setCount1(2.1);
                clearInterval(timer1);
              } else {
                setCount1(current1);
              }
            }, interval);

            // Count 2: 0 → 500,000
            const increment2 = 500000 / steps;
            let current2 = 0;
            
            const timer2 = setInterval(() => {
              current2 += increment2;
              if (current2 >= 500000) {
                setCount2(500000);
                clearInterval(timer2);
              } else {
                setCount2(Math.round(current2));
              }
            }, interval);
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
  }, [hasAnimated]);

  return (
    <div className="w-full overflow-hidden flex justify-center" style={{ background: "#EFCDDE" }}>
      <div className="w-full max-w-9xl mx-auto">
        <section
          ref={sectionRef}
          className="w-full py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-28 flex flex-col items-center gap-8 sm:gap-10"
        >
          {/* ── Title + Dotline ── */}
          <div className="flex flex-col items-center" style={{ width: "fit-content" }}>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-center">
              <span style={{ color: "var(--text-purple-dark)" }}>Since </span>
              <span style={{ color: "var(--text-yellow)" }}>2016</span>
            </h2>
            <div
              className="-mt-1"
              style={{
                height: "6px",
                width: "100%",
                minWidth: "200px",
                backgroundImage:
                  "radial-gradient(circle, var(--text-purple-dark) 3px, transparent 1.5px)",
                backgroundSize: "10px 6px",
              }}
            />
          </div>

          {/* ── Stats Row ── */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-6 md:gap-4 px-4 sm:px-6">
            {/* Stat 1 */}
            <div className="flex flex-col gap-2 sm:gap-3 items-center sm:items-center  text-center sm:text-left">
              <span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider"
                style={{ color: "#e8420a" }}
              >
                {count1.toFixed(1)} million
              </span>
              <p
                className="text-xs sm:text-sm md:text-base lg:text-xl font-bold tracking-wide"
                style={{ color: "#333" }}
              >
                protein energy bars donated to date
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-2 sm:gap-3 items-center sm:items-center text-center sm:text-left">
              <span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider"
                style={{ color: "#e8420a" }}
              >
                {count2.toLocaleString()}
              </span>
              <p
                className="text-xs sm:text-sm md:text-base lg:text-xl font-bold tracking-wide"
                style={{ color: "#333" }}
              >
                target for 2025
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stats;