import { ChevronRight } from "lucide-react";
import boy2 from "../../assets/boy2.jpg";

const heroImage = boy2;
const stripeLink = import.meta.env.VITE_STRIPE_USD_94_PER_YEAR;
const paypalLink = import.meta.env.VITE_PAYPAL_USD_94_PER_YEAR;


export default function DonationBanner() {
  return (
    /* ── Outer wrapper: page-level background + padding ── */
    <div className="w-full overflow-hidden flex justify-center" style={{ background: "var(--dark-p1)" }}>
      <div className="w-full max-w-9xl mx-auto">
        <div className="w-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
          {/* ── Inner banner card ── */}
          <div
            className="w-full max-w-6xl mx-auto rounded-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-stretch gap-8 md:gap-10 lg:gap-12"
            style={{ background: "var(--dark-purple)" }}
          >
            {/* ── Left: Text + Buttons ── */}
            <div className="order-2 md:order-1 flex-1 flex flex-col justify-center text-center">
              <h2
                className="text-white font-bold leading-tight mb-4 sm:mb-5 md:mb-6 text-3xl md:text-4xl lg:text-5xl"
              >
                Be The Hero In A Child's <br /> Life!
              </h2>

              <p
                className="text-white font-semibold mb-6 sm:mb-7 md:mb-8 leading-snug text-xl md:text-2xl lg:text-4xl"
              >
                <span style={{ color: "#F5C518" }}>US$ 94</span> provides a child with
                <br />
                an energy bar every
               
                day for{" "}
                <br />
                <span style={{ color: "#F5C518" }}>a whole year</span>
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

            {/* ── Right: Image (full height) ── */}
            <div className="order-1 md:order-2 flex-shrink-0 w-full md:w-auto flex items-stretch justify-center">
              <img
                src={heroImage}
                alt="Child in need"
                className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px] object-cover"
                style={{ 
                  borderRadius: "1rem",
                  height: "100%",
                  maxHeight: "400px"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}