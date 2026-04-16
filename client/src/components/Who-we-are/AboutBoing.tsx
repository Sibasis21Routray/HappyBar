import boingDuck from "../../assets/boingDuck.png";

export default function AboutBoing() {
  return (
    <div className="w-full overflow-hidden flex justify-center" style={{ background: "#3BB8D8" }}>
      <div className="w-full max-w-9xl mx-auto relative">
        <div
          className="w-full relative overflow-hidden"
          style={{ background: "#3BB8D8", minHeight: 400 }}
        >
          {/* ── Wave layers — all originate from bottom-left, fan out upward-right ── */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Wave 1 — darkest teal, hugs top, fans from left origin */}
            <path
              d="M0,400 Q0,80 1440,0 L1440,400 Z"
              fill="#2196A8"
              opacity="0.55"
            />

            {/* Wave 2 — mid teal, slightly lower arc */}
            <path
              d="M0,400 Q0,160 1440,60 L1440,400 Z"
              fill="#1E8B9A"
              opacity="0.4"
            />

            {/* Wave 3 — sand, large sweep from bottom-left origin */}
            <path
              d="M0,400 Q200,400 1440,180 L1440,400 Z"
              fill="#E2C06A"
            />

            {/* Wave 4 — darker sand on top of lighter sand for depth */}
            <path
              d="M0,400 Q300,400 1440,240 L1440,400 Z"
              fill="#C9A84C"
              opacity="0.6"
            />
          </svg>

          {/* ── Content layer ── */}
          <div
            className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-32 py-8 sm:py-10 md:py-12"
            style={{ minHeight: 400 }}
          >
            {/* Left: Title + Text */}
            <div className="flex-1 max-w-xl pt-6 text-center lg:text-center">
              {/* Title */}
              <div className="mb-3 inline-flex flex-col items-center lg:items-start" style={{ width: "fit-content" }}>
                <h2
                  className="font-black leading-none text-center lg:text-left"
                  style={{ fontSize: "clamp(2rem, 6vw, 3.8rem)" }}
                >
                  <span style={{ color: "#5C1A3A" }}>About </span>
                  <span style={{ color: "#D4A017" }}>BOING</span>
                </h2>
                {/* Dotted underline */}
                <div
                  className="-mt-0 mx-auto lg:mx-0"
                  style={{
                    width: "100%",
                    minWidth: "150px",
                    height: "6px",
                    backgroundImage:
                      "radial-gradient(circle, #5C1A3A 3px, transparent 1.5px)",
                    backgroundSize: "10px 6px",
                  }}
                />
              </div>

              {/* Body */}
              <p
                className="text-white font-bold text-center lg:text-center leading-relaxed"
                style={{ fontSize: "clamp(0.9rem, 3vw, 1.05rem)" }}
              >
                BOING is the mascot of purpose and focus. BOING is the ostrich that
                kept its eyes on the egg, guarded and nurtured it till it hatched
                without being distracted. BOING is telling us that good things come
                from keeping your eyes on a higher power, a job at hand or staying
                focused.
              </p>
            </div>

            {/* Right: Duck image — sits on the sand */}
            <div
              className="flex-shrink-0 relative flex justify-center"
              style={{ width: "100%", maxWidth: 320, alignSelf: "flex-end", marginBottom: 70 }}
            >
              <img
                src={boingDuck}
                alt="BOING the ostrich mascot"
                className="w-full object-contain"
                style={{ maxHeight: 300 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}