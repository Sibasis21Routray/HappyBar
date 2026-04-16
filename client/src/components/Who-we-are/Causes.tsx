import React from "react";
import girl3 from "../../assets/girl3.jpg";

const Causes: React.FC = () => {
  return (
    <div className="w-full overflow-hidden flex justify-center" style={{ background: "var(--dark-p2)" }}>
      <div className="w-full max-w-7xl mx-auto">
        <section className="w-full pb-8 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* ── Left: Text ── */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-5 items-center text-center">
            <div className="inline-flex flex-col items-center" style={{ width: "fit-content" }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight md:leading-normal">
                <span className="text-white">Our </span>
                <span style={{ color: "var(--text-yellow)" }}>Causes</span>
              </h2>
              <div
                className="-mt-2"
                style={{
                  height: "6px",
                  width: "100%",
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 3px, transparent 1.5px)",
                  backgroundSize: "10px 6px",
                }}
              />
            </div>

            <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed font-medium max-w-2xl">
              The Happy Bar program arose from the collective experiences of Dr. Jack Kennedy, Ph.D. Agriculture, working with 
              <a
                href="/what-we-do/#nutrition"
                style={{ color: "var(--link-blue)" }}
                className="hover:opacity-80 transition-opacity"
              >
                {" "}nutrition{" "}
              </a>
              programs for Embrace a Village leprosy services and
              <a
                href="https://aliceclaraaugustine.com/"
                style={{ color: "var(--link-blue)" }}
                className="hover:opacity-80 transition-opacity"
              >
                {" "}Dr. Alice (Clare) Augustine{" "}
              </a>
              , Ph.D. Biology, working with various orphanages and charitable programs. Seeing that protein deficiency is rampant in children living in poverty, they tried several approaches to supplement protein before developing a simple recipe that children love, and parents approved.
            </p>
          </div>

          {/* ── Right: Image ── */}
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <img
              src={girl3}
              alt="Happy child"
              className="object-cover rounded-4xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] h-auto md:h-[400px] lg:h-[550px]"
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

export default Causes;