import whoWeAreGirl from "../../assets/whoWeAreGirl.jpg";

export default function Hero() {
  return (
    <div className="w-full overflow-hidden flex justify-center bg-white">
      <div className="w-full max-w-9xl mx-auto">
        <div className="w-full bg-white">

          {/* 🔥 CHANGE: md:flex-row → lg:flex-row */}
          <div className="flex flex-col lg:flex-row items-stretch min-h-[520px]">

            {/* ── Left: Image ── */}
            <div className="relative flex-shrink-0 w-full lg:w-[40%]">
              
              {/* ✅ Small strip on ALL screens (responsive height) */}
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: "clamp(40px, 8vw, 130px)",
                  background: "var(--bg-orange)"
                }}
              />

              <div className="relative z-10 pl-4 sm:pl-8 md:pl-12 lg:pl-28 pr-4 sm:pr-6 md:pr-8 lg:pr-10 pt-6 pb-10">
                <img
                  src={whoWeAreGirl}
                  alt="Happy child"
                  className="w-full object-cover object-top"
                  style={{ borderRadius: "0.75rem", height: "auto", maxHeight: 450 }}
                />
              </div>
            </div>

            {/* ── Right: Title + Body ── */}
            <div className="flex-1 flex flex-col">

              {/* ✅ Orange bg ONLY on lg */}
              <div
                className="flex items-center justify-center lg:bg-[var(--bg-orange)]"
                style={{
                  height: "clamp(60px, 10vw, 130px)",
                  flexShrink: 0
                }}
              >
                <h1
                  className="text-black font-bold tracking-tight text-center px-4"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                    lineHeight: 1
                  }}
                >
                  Donate
                </h1>
              </div>

              {/* Body */}
              <div
                className="flex flex-col justify-start items-center text-center py-10 sm:py-12 md:py-14 px-6 sm:px-8 md:px-10"
                style={{ flex: 1 }}
              >
                <p
                  className="leading-loose max-w-2xl"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 1.18rem)",
                    color: "#1a1a1a"
                  }}
                >
                  Donate any amount
                </p>

                {/* Buttons */}
                <div className="flex gap-3 justify-center flex-wrap mb-2">
                  
                  <button
                    className="flex items-center gap-2 rounded-2xl cursor-pointer hover:opacity-90 transition-opacity bg-[var(--button-yellow)] hover:bg-[var(--dark-p2)]"
                    style={{
                      padding: "12px 24px",
                      border: "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "#1a1a2e",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Donate
                    </span>

                    <svg width="22" height="26" viewBox="0 0 50 60" fill="none">
                      <path d="M38 6H16C14 6 12.5 7.2 12.2 9.2L6 46.8C5.8 48.2 6.8 49.5 8.2 49.5H16.5C17 49.5 17.4 49.1 17.5 48.6L19.2 38H26C34.5 38 40.5 34 42.5 26C43.5 22 43 18.5 41 16C39.2 13.7 36.2 12 32 12" fill="#1a1f71"/>
                      <path d="M44 16C46 18.5 46.5 22 45.5 26.5C43.5 35 37 38.5 28 38.5H22L20 50H28.5L30 43H35C42 43 47 39.5 48.8 32.5C49.8 28.5 49 25 47 22.5" fill="#009cde" opacity="0.9"/>
                    </svg>
                  </button>

                  <button
                    className="flex items-center gap-2 rounded-2xl cursor-pointer hover:opacity-90 transition-opacity bg-[var(--button-blue)] hover:bg-[var(--dark-p2)]"
                    style={{
                      padding: "12px 24px",
                      border: "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "#ffffff",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Donate
                    </span>

                    <svg width="18" height="26" viewBox="0 0 30 40" fill="none">
                      <text x="0" y="32" fontWeight="900" fontSize="34" fill="white">
                        S
                      </text>
                    </svg>
                  </button>
                </div>

                <p
                  className="font-bold max-w-2xl"
                  style={{
                    color: "var(--link-blue)",
                    fontSize: "clamp(0.85rem, 2.5vw, 1.05rem)",
                    lineHeight: 1.5
                  }}
                >
                  <a href="/">Happy Bar Nutrition </a>
                  <span style={{ color: "var(--text-purple)" }}>
                    Inc. (est. 2016) is a US 501(c)(3) non-profit organisation
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}