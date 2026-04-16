import React, { useEffect, useRef, useState } from "react";

const Stats: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Only animate once when component mounts
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Counter 1: 0 → 2.1 million
    const duration = 2000; // 2 seconds
    const target1 = 2.1;
    const stepTime = 16; // ~60fps
    const steps = duration / stepTime;
    const increment1 = target1 / steps;
    let current1 = 0;
    let timer1: number;

    // Counter 2: 0 → 500,000
    const target2 = 500000;
    const increment2 = target2 / steps;
    let current2 = 0;
    let timer2: number;

    const updateCounter1 = () => {
      current1 += increment1;
      if (current1 >= target1) {
        setCount1(target1);
        clearInterval(timer1);
        return;
      }
      setCount1(parseFloat(current1.toFixed(1)));
    };

    const updateCounter2 = () => {
      current2 += increment2;
      if (current2 >= target2) {
        setCount2(target2);
        clearInterval(timer2);
        return;
      }
      setCount2(Math.round(current2));
    };

    timer1 = window.setInterval(updateCounter1, stepTime);
    timer2 = window.setInterval(updateCounter2, stepTime);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  // Format number for display
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return num.toFixed(1) + " million";
    }
    return num.toLocaleString();
  };

  return (
    <div className="w-full flex justify-center bg-[#C1E6F1]">
      <div className="w-full max-w-9xl mx-auto">
        <section className="w-full py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 flex flex-col items-center gap-8 md:gap-10">
          
          {/* ── Title + Dotline - Fits Content ── */}
          <div className="flex flex-col items-center" style={{ width: "fit-content" }}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-center leading-tight">
              <span style={{ color: "var(--text-purple-dark, #5e2a7c)" }}>Since </span>
              <span style={{ color: "var(--text-yellow, #f5a623)" }}>2016</span>
            </h2>
            <div
              className="-mt-2"
              style={{
                height: "6px",
                width: "100%",
                backgroundImage:
                  "radial-gradient(circle, var(--text-purple-dark, #5e2a7c) 3px, transparent 1.5px)",
                backgroundSize: "10px 6px",
              }}
            />
          </div>

          {/* ── Stats Row - Fully Centered ── */}
          <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-26">
            {/* Stat 1 - Centered */}
            <div className="flex flex-col items-center text-center gap-2 md:gap-3 flex-1">
              <span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ color: "#e8420a" }}
              >
                {formatNumber(count1)}
              </span>
              <p
                className="text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-wide max-w-xs mx-auto"
                style={{ color: "#333" }}
              >
                protein energy bars donated to date
              </p>
            </div>

            {/* Stat 2 - Centered */}
            <div className="flex flex-col items-center text-center gap-2 md:gap-3 flex-1">
              <span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ color: "#e8420a" }}
              >
                {count2.toLocaleString()}
              </span>
              <p
                className="text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-wide"
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