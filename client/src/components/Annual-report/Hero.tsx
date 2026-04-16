import annual from "../../assets/annual.jpg";

export default function Hero() {
  return (
    <div className="w-full bg-white flex justify-center overflow-hidden">
      <div className="w-full max-w-9xl mx-auto">
        {/* Main Content - responsive column layout */}
        <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">
          
          {/* ── Left: Image overlapping yellow bar ── */}
          <div className="relative flex-shrink-0 w-full lg:w-[45%] xl:w-[850px]">
            {/* Yellow bar — top portion only */}
            <div
              className="absolute top-0 left-0 right-0"
              style={{ height: 130, background: "var(--button-yellow, #f5a623)" }}
            />
            {/* Image sits over the bar, indented from left edge - extended height to half page */}
           <div className="relative z-10 px-4 md:px-0 md:pl-[3vw] pt-5 mx-auto">
  <img
    src={annual}
    alt="Annual report cover"
    className="
      w-full 
      max-w-[600px] 
      md:max-w-[700px] 
      lg:max-w-[900px]
      h-[220px] 
      sm:h-[280px] 
      md:h-[400px] 
      lg:h-[55vh]
      object-cover 
      object-top 
      rounded-3xl
    "
  />
</div>
          </div>

          {/* ── Right: Yellow title bar + body ── */}
          <div className="flex-1 flex flex-col">
            
            {/* Yellow title bar — centered */}
           <div className="flex items-center justify-center px-4 text-center bg-transparent md:bg-[#f5a623] py-6 sm:py-8 md:py-10">
  <h1
    className="text-black font-bold"
    style={{
      fontSize: "clamp(2.5rem, 8vw, 5rem)",
      lineHeight: 1
    }}
  >
    Annual Reports
  </h1>
</div>

            {/* Body — white, centered with responsive padding */}
            <div
              className="flex flex-col justify-center items-center text-center py-2 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-10"
              style={{ flex: 1 }}
            >
              <p
                className="font-extrabold mb-3 md:mb-8 max-w-2xl leading-tight"
                style={{ 
                  color: "var(--text-purple, #5e2a7c)", 
                  fontSize: "clamp(1.5rem, 5vw, 3.2rem)",
                  // lineHeight: 1.2
                }}
              >
                Thank You to Our Donors. <br />
                Nothing is possible without YOU!
              </p>
              
              <p
                className=" mb-6 md:mb-8 max-w-3xl  md:font-semibold text-gray-500 leading-relaxed md:leading-tight text-xl"
               
              >
                Our Annual Reports are published with an intent to update our donors, partners, 
                volunteers and the general public on our activities, progress and goals.
                <br /><br />
                They also contain metrics on the number of children/elders supported, the number 
                of locations/campaigns supported, etc.
                <br /><br />
                The Annual Report is typically released in February of the following year.
              </p>

              <p
                className="font-bold max-w-2xl"
                style={{ 
                  color: "var(--link-blue, #2c6e9e)", 
                  fontSize: "clamp(0.75rem, 2.5vw, 1rem)", 
                  lineHeight: 1.5 
                }}
              >
                <a href="/" className="hover:underline">Happy Bar Nutrition</a>{" "}
                <span style={{ color: "var(--text-purple, #5e2a7c)" }}>
                  Inc. (est. 2016) is a US 501(c)(3) non-profit organisation
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ── Multi-color Wave - Responsive height ── */}
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
              fill="var(--light-blue, #7bc5d9)"
              opacity="0.5"
            />
            <path
              d="M0,45 C200,10 500,75 800,35 C1050,5 1280,65 1440,30 L1440,120 L0,120 Z"
              fill="var(--mid-blue, #4ba0b8)"
              opacity="0.7"
            />
            <path
              d="M0,65 C250,30 600,90 900,55 C1100,30 1300,75 1440,55 L1440,120 L0,120 Z"
              fill="var(--dark-blue, #1f6d84)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}