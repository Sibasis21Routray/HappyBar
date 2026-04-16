import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import childImage from "../../assets/child.jpg";

gsap.registerPlugin(ScrollTrigger);

const Mission: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            start: "top bottom",   // when image top hits viewport bottom
            end: "center center",  // when image center hits viewport center
            scrub: true,           // links progress to scroll position
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full overflow-hidden flex justify-center" style={{ background: "#6B2A6B" }}>
      <div className="w-full max-w-7xl mx-auto">
        <section
          ref={sectionRef}
          className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-1 flex flex-col md:flex-row items-center text-center gap-8 lg:gap-12"
        >
          {/* ── Left: Text ── */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-5">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight md:leading-normal ">
                <span className="text-white">Our </span>
                <span style={{ color: "#f5a623" }}>Mission</span>
              </h2>
              <div
                className="-mt-1 md:-mt-3"
                style={{
                  height: "6px",
                  width: "100%",
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 3px, transparent 1.5px)",
                  backgroundSize: "10px 6px",
                }}
              />
            </div>

            <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed font-medium">
              Happy Bar Nutrition's mission is to feed children in under-privileged
              societies to give them an equitable chance at life.
            </p>

            <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed font-medium">
              Your gifts to help feed an undernourished child will make a huge and
              positive difference. Private donors cover our operating costs so 100%
              of your donation goes to the production of Happy Bars – an all-natural
              protein energy bar. Each Happy Bar costs US 25 cents and delivers &gt;5g
              of protein per serving, important vitamins and other{" "}
              {/* <a
                href="/what-we-do/#nutrition"
                style={{ color: "var(--link-blue)" }}
                className="hover:opacity-80 transition-opacity"
              > */}
                nutrition
              {/* </a> */}
              .
            </p>
          </div>

          {/* ── Right: Image (scroll-scrubbed scale only) ── */}
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <img
              ref={imageRef}
              src={childImage}
              alt="Happy child"
              className="object-cover rounded-3xl w-full max-w-[320px] sm:max-w-[360px] md:max-w-[500px] h-auto md:h-[420px] lg:h-[600px]"
              style={{
                boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mission;