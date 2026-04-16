import { ChevronRight } from "lucide-react";
import boy4 from "../../assets/boy4.jpg";

const heroImage = boy4;

export default function DonationBanner() {
  return (
    <>
      {/* ── Outer wrapper: full width with centered content ── */}
      <div
        className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8"
        style={{ background: "#fff" }}
      >
        {/* ── Centered container with max-w-9xl ── */}
        <div className="w-full max-w-6xl mx-auto">
          {/* ── Inner banner card - responsive column layout ── */}
          <div
            className="rounded-2xl flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12"
            style={{ background: "#89CAF6" }}
          >
            {/* ── Left: Text + Buttons ── */}
            <div className="flex-1 text-center w-full">
              <h2
                className="text-black font-bold leading-tight mb-4 md:mb-6"
                style={{ fontSize: "clamp(1.8rem, 6vw, 2.6rem)" }}
              >
                Gift Nutrition <br />To Needy Children
              </h2>

              <p
                className="text-black font-semibold mb-6 md:mb-8 leading-snug"
                style={{ fontSize: "clamp(1.25rem, 4vw, 1.75rem)" }}
              >
                Just
                <span style={{ color: "var(--text-purple-dark, #5e2a7c)" }}> US$ 188</span> a year
              </p>

              {/* Buttons Container - stacked vertically */}
              <div className="flex flex-col items-center gap-4">
                {/* PayPal Button */}
                <button
                  className="group w-full max-w-[260px] font-bold rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-[var(--button-yellow)] hover:bg-[var(--dark-p2)] hover:text-white flex items-center justify-center gap-2 px-5 py-3"
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
                  className="group w-full max-w-[260px] font-bold rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-[var(--button-blue)] hover:bg-[var(--dark-p2)] flex items-center justify-center gap-2 px-5 py-3"
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

            {/* ── Right: Image - responsive sizing ── */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
              <img
                src={heroImage}
                alt="Child in need"
                className="w-full object-cover rounded-xl"
                style={{
                  maxWidth: "100%",
                  width: "min(420px, 100%)",
                  height: "auto",
                  maxHeight: 380,
                  borderRadius: "1rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}