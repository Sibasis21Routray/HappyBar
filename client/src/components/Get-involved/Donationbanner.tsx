import { ChevronRight } from "lucide-react";
import children2 from "../../assets/children2.jpg";

const heroImage = children2;
const stripeLink = import.meta.env.VITE_STRIPE_USD_94_PER_YEAR;
const paypalLink = import.meta.env.VITE_PAYPAL_USD_94_PER_YEAR;

export default function DonationBanner() {
  return (
    <>
      {/* ── Outer wrapper: page-level background + padding ── */}
      <div
        className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--dark-p1)" }}
      >
        {/* ── Inner banner card ── */}
        <div
          className="max-w-5xl mx-auto rounded-2xl px-6 sm:px-8 md:px-12 py-8 sm:py-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          style={{ background: "var(--dark-purple)" }}
        >
          {/* ── Left: Text + Buttons ── */}
          <div className="flex-1 text-center w-full">
            <h2
              className="text-white font-bold leading-tight mb-4 sm:mb-6"
              style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)" }}
            >
              Make a lasting impact!
            </h2>

            <p
              className="text-white font-semibold mb-6 sm:mb-8 leading-snug px-2"
              style={{ fontSize: "clamp(1.1rem, 4vw, 1.75rem)" }}
            >
              Just
              <span style={{ color: "var(--text-yellow)" }}> US$ 94</span> provides a child with an energy bar every day for <span style={{ color: "var(--text-yellow)" }}> a whole year</span>
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
                className="group w-full max-w-[260px] font-bold rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-[var(--button-blue)] hover:bg-[var(--dark-p2)] flex items-center justify-center gap-2 px-5 py-2.5"
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

          {/* ── Right: Image ── */}
          <div className="flex-shrink-0 w-full lg:w-auto">
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
                margin: "0 auto"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}