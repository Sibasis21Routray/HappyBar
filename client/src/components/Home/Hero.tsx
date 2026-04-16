import React from "react";
import kidsImage from "../../assets/kids.jpg";

const Hero: React.FC = () => {
  return (
    <div className="w-full overflow-hidden flex justify-center bg-white">
      <div className="w-full max-w-9xl mx-auto">
        {/* ── Hero Section ── */}
        <section
  className="
    relative flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12 pt-12 px-4 sm:px-6 lg:px-8
    bg-[linear-gradient(to_bottom,#b7a1b5_20%,#ffffff_20%)]
    lg:bg-[linear-gradient(to_bottom,#b7a1b5_60%,#ffffff_40%)]
  "
>
          {/* Left: Photo - moved upward with negative margin */}
          <div className="flex justify-center w-full md:w-auto  ml-0 ">
            <img
              src={kidsImage}
              alt="Children smiling"
              className="w-64 sm:w-72 md:w-80 lg:w-2xl h-auto max-h-[300px] md:max-h-[500px] object-cover rounded-4xl shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-4 sm:gap-5 flex-1 max-w-3xl items-center text-center">
            {/* Headline */}
            <div className="flex flex-col gap-2 sm:gap-4 ">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-normal">
                Help With Hunger by
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-normal">
                <span className="italic" style={{ color: "#7a0050" }}>
                  DONATING
                </span> just
                <span style={{ color: "#7a0050" }}> $8 US </span>
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic tracking-normal">
                <span style={{ color: "black" }}>a month</span>
              </span>
            </div>

            {/* <div className="h-4 lg:h-24"></div> */}

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-2 sm:mt-3 items-center md:items-start">
              <button
                className="rounded-full py-3 px-10 text-sm font-bold text-black hover:opacity-90 transition-opacity w-[240px]"
                style={{ background: "#f5a623" }}
              >
                Donate With PayPal
              </button>
              <button
                className="rounded-full py-3 px-10 text-sm font-bold text-white hover:opacity-90 transition-opacity w-[240px]"
                style={{ background: "#5b6fcf" }}
              >
                Donate With Stripe
              </button>
            </div>

            {/* Non-profit tagline */}
            <p
              className="text-base sm:text-lg font-bold mt-1"
              style={{ color: "#8b0057" }}
            >
              Happy Bar Nutrition Inc. (est. 2016) is a US 501(c)(3) non-profit
              organisation
            </p>
          </div>
        </section>

        {/* ── Multi-color Wave ── */}
        <div className="relative -mt-1 overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="block w-full"
            style={{ height: "clamp(60px, 8vw, 120px)" }}
          >
            <rect width="1440" height="120" fill="#ffffff" />
            <path
              d="M0,20 C300,80 700,0 1000,50 C1200,80 1350,20 1440,40 L1440,120 L0,120 Z"
              fill="#c9a0c4"
              opacity="0.5"
            />
            <path
              d="M0,45 C200,10 500,75 800,35 C1050,5 1280,65 1440,30 L1440,120 L0,120 Z"
              fill="#9d5c99"
              opacity="0.7"
            />
            <path
              d="M0,65 C250,30 600,90 900,55 C1100,30 1300,75 1440,55 L1440,120 L0,120 Z"
              fill="#6b2a6b"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;