import children2 from "../../assets/children2.jpg";

const heroImage = children2;

export default function DonationBanner() {
  return (
    <>
      {/* ── Outer wrapper: page-level background + padding ── */}
      <div
        className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--dark-p4)" }}
      >
        {/* ── Inner banner card ── */}
        <div
          className="max-w-5xl mx-auto rounded-2xl px-6 sm:px-8 md:px-12 py-8 sm:py-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          style={{ background: "var(--bg-p4)" }}
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

            {/* PayPal Button */}
            <button
              className="block mx-auto mb-4 font-bold rounded-full cursor-pointer transition hover:opacity-90 w-full sm:w-auto"
              style={{
                background: "var(--button-yellow)",
                color: "#000000",
                fontSize: "clamp(0.9rem, 3vw, 1rem)",
                padding: "10px 0",
                border: "none",
                width: "min(260px, 100%)",
                maxWidth: 260,
              }}
            >
              Donate With PayPal
            </button>

            {/* Stripe Button */}
            <button
              className="block mx-auto font-bold rounded-full cursor-pointer transition hover:opacity-90 w-full sm:w-auto"
              style={{
                background: "var(--button-blue)",
                color: "#ffffff",
                fontSize: "clamp(0.9rem, 3vw, 1rem)",
                padding: "10px 0",
                border: "none",
                width: "min(260px, 100%)",
                maxWidth: 260,
              }}
            >
              Donate With Stripe
            </button>
          </div>

          {/* ── Right: Image ── */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <img
              src="https://happybarnutrition.org/wp-content/uploads/2024/06/biy-with-big-smile-1-scaled-1.webp"
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