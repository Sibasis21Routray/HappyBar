import { ChevronRight } from "lucide-react";
import baby1 from "../../assets/baby1.jpg";

const heroImage = baby1;
const stripeLink = import.meta.env.VITE_STRIPE_USD_8_PER_MONTH;
const paypalLink = import.meta.env.VITE_PAYPAL_USD_8_PER_MONTH;

export default function DonationBanner() {
  return (
    <>
      {/* ── Outer wrapper: full width with centered content ── */}
      <div
        className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8"
        style={{ background: "#B3D8F2" }}
      >
        {/* ── Centered container with max-w-7xl ── */}
        <div className="w-full max-w-5xl mx-auto">
          {/* ── Inner banner card - responsive column layout ── */}
          <div
            className="rounded-2xl flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12 p-6 sm:p-8 md:p-10"
            style={{ background: "#2EA3F2" }}
          >
            {/* ── Left: Text + Buttons ── */}
            <div className="flex-1 text-center w-full">
              <h2
                className="text-white font-bold leading-tight mb-4 md:mb-6"
                style={{ fontSize: "clamp(1.8rem, 6vw, 2.6rem)" }}
              >
                Change a Life!
              </h2>

              <p
                className="text-white font-bold mb-6 md:mb-8 leading-snug"
                style={{ fontSize: "clamp(1.2rem, 4vw, 1.75rem)" }}
              >
                Sponsor a needy child for <br />just 
                <span style={{ color: "var(--text-purple-dark, #5e2a7c)" }}> US$ 8 a month</span>
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
                  onClick={() => window.open(paypalLink, "_blank")}
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
                  onClick={() => window.open(stripeLink, "_blank")}
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
                  maxHeight: 300,
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