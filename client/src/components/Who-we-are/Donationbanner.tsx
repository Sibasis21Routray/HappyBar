import { ChevronRight } from "lucide-react";
import boy3 from "../../assets/boy3.jpg";

const heroImage = boy3;

export default function DonationBanner() {
  return (
    <>
      {/* ── Outer wrapper: page-level background + padding ── */}
      <div className="w-full overflow-hidden flex justify-center" style={{ background: "#fff" }}>
        <div className="w-full max-w-9xl mx-auto">
          <div className="w-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
            {/* ── Inner banner card ── */}
            <div
              className="w-full max-w-6xl mx-auto rounded-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12"
              style={{ background: "var(--text-purple-dark)" }}
            >
              {/* ── Left: Text + Buttons ── */}
              <div className="order-2 md:order-1 flex-1 text-center">
                <h2
                  className="text-white font-bold leading-tight mb-4 sm:mb-5 md:mb-6 text-3xl md:text-4xl lg:text-5xl"
                  
                >
                  Help 2 Small KidsFight <br />Cancer
                </h2>

                <p
                  className="text-white font-semibold mb-6 sm:mb-7 md:mb-8 leading-snug text-xl md:text-2xl lg:text-3xl"
                  
                >
                  Just
                  <span style={{ color: "var(--text-yellow)" }}> US$ 188</span> a year
                </p>

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

              {/* ── Right: Image ── */}
              <div className="order-1 md:order-2 flex-shrink-0 w-full md:w-auto flex justify-center mb-6 md:mb-0">
                <img
                  src={heroImage}
                  alt="Child in need"
                  className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] object-cover"
                  style={{ borderRadius: "1rem", height: "auto", maxHeight: "380px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ── Multi-color Wave ── */}
      <div className="relative -mt-1 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "120px" }}
        >
          <rect width="1440" height="120" fill="#ffffff" />
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
    </>
  );
}