import whoWeAreGirl from "../../assets/whoWeAreGirl.jpg";

export default function Hero() {
  return (
    <div className="w-full overflow-hidden flex justify-center bg-white">
      <div className="w-full max-w-9xl mx-auto">
        <div className="w-full bg-white">
          {/* 🔥 CHANGE: md:flex-row → lg:flex-row */}
          <div className="flex flex-col lg:flex-row items-stretch min-h-[520px]">

            {/* ── Left: Image overlapping orange bar ── */}
            <div className="relative flex-shrink-0 w-full lg:w-[40%]">
              
              <div
  className="absolute top-0 left-0 right-0"
  style={{
    height: "clamp(40px, 8vw, 130px)",
    background: "var(--bg-orange)"
  }}
/>

              <div className="relative z-10 pl-4 sm:pl-8 md:pl-12 lg:pl-28 pr-4 lg:pr-0 pt-6 pb-10">
                <img
                  src={whoWeAreGirl}
                  alt="Happy child"
                  className="w-full object-cover object-top rounded-4xl"
                  style={{ height: "auto", maxHeight: 450 }}
                />
              </div>
            </div>

            {/* ── Right: Orange title bar + body ── */}
            <div className="flex-1 flex flex-col">
              
<div
  className="flex items-center justify-center lg:bg-[var(--bg-orange)]"
  style={{
    height: "clamp(60px, 10vw, 130px)",
    flexShrink: 0
  }}
>
                <h1
                  className="text-black font-bold tracking-wide text-center px-4"
                  style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", lineHeight: 1 }}
                >
                  Who We Are
                </h1>
              </div>

              {/* Body */}
              <div
                className="flex flex-col justify-center items-center text-center py-10 sm:py-12 md:py-14 px-6 sm:px-8 md:px-10"
                style={{ flex: 1 }}
              >
                <p
                  className="leading-relaxed mb-6 sm:mb-7 md:mb-8 max-w-2xl"
                  style={{ fontSize: "clamp(1.3rem, 3vw, 1.18rem)", color: "#1a1a1a" }}
                >
                  Happy Bar Nutrition's mission is to feed children in
                  under-privileged societies to give them an equitable chance at
                  life. Your gifts to help feed an undernourished child will make a
                  huge and positive difference. Private donors cover our operating
                  costs so 100% of your donation goes to the production of Happy
                  Bars. Each Happy Bar costs US 25 cents and delivers 5g of protein
                  per serving plus other{" "}
                  <a href="/what-we-do/#nutrition" style={{ color: "var(--link-blue)", textDecoration: "none" }}>
                    nutrition
                  </a>
                  .
                </p>

                <p
                  className="font-bold max-w-2xl"
                  style={{ color: "var(--link-blue)", fontSize: "clamp(1.3rem, 2.5vw, 1.05rem)", lineHeight: 1.5 }}
                >
                  <a href="/">Happy Bar Nutrition </a>
                  <span style={{ color: "var(--text-purple)" }}>
                    Inc. (est. 2016) is a US 501(c)(3) non-profit organisation
                  </span>
                </p>
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
              style={{ height: "clamp(60px, 8vw, 120px)" }}
            >
              <rect width="1440" height="120" fill="#ffffff" />
              <path
                d="M0,20 C300,80 700,0 1000,50 C1200,80 1350,20 1440,40 L1440,120 L0,120 Z"
                fill="var(--light-p2)"
                opacity="0.5"
              />
              <path
                d="M0,45 C200,10 500,75 800,35 C1050,5 1280,65 1440,30 L1440,120 L0,120 Z"
                fill="var(--mid-p2)"
                opacity="0.7"
              />
              <path
                d="M0,65 C250,30 600,90 900,55 C1100,30 1300,75 1440,55 L1440,120 L0,120 Z"
                fill="var(--dark-p2)"
              />
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
}