import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import children2 from "../../assets/boingDuck.png";

const heroImage = children2;

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function DonationBanner() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Create timeline for the animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Animation starts when top of section hits 80% of viewport
          end: "top 30%",   // Animation completes when top of section hits 30% of viewport
          scrub: 1,         // Smooth scrub with 1 second lag
          toggleActions: "play reverse play reverse", // Play forward on scroll down, reverse on scroll up
          // markers: true, // Uncomment to see start/end markers for debugging
        }
      });

      // Image slides in from right (translateX(100%) to 0)
      tl.from(imageRef.current, {
        x: "100%",
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }, 0);

      // Optional: Add fade-in effect for content
      tl.from(contentRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
      }, 0.2); // Delay by 0.2 seconds for sequential animation
    });

    return () => {
      ctx.revert(); // Clean up GSAP animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all scroll triggers
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="w-full overflow-hidden flex justify-center" 
      style={{ background: "#fff" }}
    >
      <div className="w-full max-w-9xl mx-auto">
        <div className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-8">
          <div
            className="w-full max-w-5xl mx-auto rounded-2xl px-6 sm:px-8 md:px-12 py-8 sm:py-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            style={{ background: "#322BE1" }}
          >
            <div ref={contentRef} className="flex-1 text-center w-full">
              <h2
                className="text-white font-bold leading-tight mb-4 sm:mb-6"
                style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)" }}
              >
                Help with Hunger by <br /> Donating Just <span style={{ color: "var(--button-yellow)" }}>US$ 8 a <br />month</span> per child
              </h2>

              {/* Buttons Container - stacked vertically */}
              <div className="flex flex-col items-center gap-4">
                {/* PayPal Button */}
                <button
                  className="group w-full max-w-[260px] font-bold rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-[var(--button-yellow)] hover:bg-[var(--dark-p2)] hover:text-white flex items-center justify-center gap-2 px-5 py-2.5"
                  style={{
                    color: "#000000",
                    fontSize: "clamp(0.875rem, 3vw, 1rem)",
                    border: "none",
                  }}
                >
                  <span>Donate With PayPal</span>
                  <ChevronRight
                    className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
                    strokeWidth={2.5}
                  />
                </button>

                {/* Stripe Button */}
                <button
                  className="group w-full max-w-[260px] font-bold rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-[var(--button-blue)] hover:bg-[var(--dark-p2)] flex items-center justify-center gap-2 px-5 py-2.5"
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(0.875rem, 3vw, 1rem)",
                    border: "none",
                  }}
                >
                  <span>Donate With Stripe</span>
                  <ChevronRight
                    className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </div>

            {/* Image with GSAP scroll animation */}
            <div
              ref={imageRef}
              className="flex-shrink-0 w-full lg:w-auto"
            >
              <img
                src={heroImage}
                alt="Child in need"
                className="w-full object-cover"
                style={{
                  borderRadius: "1rem",
                  height: "auto",
                  maxHeight: 300,
                  width: "100%",
                  maxWidth: 420,
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}