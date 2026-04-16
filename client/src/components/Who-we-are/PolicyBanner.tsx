import React from "react";
import girl4 from "../../assets/girl4.jpg";

const PolicyBanner: React.FC = () => {
  return (
    <div className="w-full overflow-hidden flex justify-center" style={{ background: "var(--dark-blue)" }}>
      <div className="w-full max-w-6xl mx-auto">
        <section className="w-full py-8  px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-stretch gap-6 md:gap-8 lg:gap-1">
          {/* ── Left: Image ── */}
          <div className="flex-1 flex items-center justify-center md:justify-start rounded-3xl overflow-hidden">
            <img
              src={girl4}
              alt="Happy child"
              className="w-full object-fill"
              style={{
                height: "auto",
                maxHeight: "500px",
                borderRadius: "1.5rem",
                maxWidth: "350px",
              }}
            />
          </div>

          {/* ── Right: Text with Title and Underline ── */}
          <div className="flex-1 flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12">
            <div className="text-center max-w-lg">
              <div style={{ width: "fit-content", margin: "0 auto" }}>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">
                  <span style={{ color: "white" }}>Our </span>
                  <span style={{ color: "var(--text-yellow)" }}>Policy</span>
                </h2>

                {/* Dotted underline */}
                <div
                  className="mb-6 -mt-4"
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
                Our company policy is to donate 100% of funds raised to produce and provide healthy, nutritional snacks to the undernourished. Private donors cover the operating expenses of the company.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PolicyBanner;