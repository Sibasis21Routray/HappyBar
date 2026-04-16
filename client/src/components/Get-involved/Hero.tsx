import getInvolved from "../../assets/getInvolved.jpg";

export default function Hero() {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-full max-w-9xl  ">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[520px]">

          {/* ── Left: Image overlapping orange bar ── */}
          <div className="relative lg:flex-shrink-0 w-full lg:w-1/2">
            {/* Orange bar — top portion only */}
            <div
              className="absolute top-0 left-0 right-0"
              style={{ height: 190, background: "var(--text-skyblue)" }}
            />
            {/* Image sits over the bar, indented from left edge */}
            <div className="relative z-10 lg:pl-20 pl-4 pr-4 md:pr-0 pt-6 pb-10">
              <img
                src={getInvolved}
                alt="Happy child"
                className="w-full object-cover object-top rounded-4xl"
                
              />
            </div>
          </div>

          {/* ── Right: Orange title bar + body ── */}
          <div className="flex-1 flex flex-col w-full lg:w-1/2">

            {/* Orange title bar — centered */}
           <div
  className="flex items-center justify-center bg-transparent lg:bg-[#29abe2] lg:h-50"
  style={{  flexShrink: 0 }}
>
  <h1
    className="text-black font-bold tracking-tight text-center px-4 text-5xl md:text-5xl lg:text-7xl"
    style={{ lineHeight: 1.1 }}
  >
    Get Involved
  </h1>
</div>

            {/* Body — white, centred */}
            <div
              className="flex flex-col justify-center items-center text-center py-10 sm:py-4 px-4 sm:px-6 lg:px-10"
              style={{ flex: 1 }}
            >
              <p
                className="font-bold mb-6 sm:mb-8 text-3xl md:text-4xl lg:text-6xl"
                style={{ 
                  color: "var(--text-skyblue)", 
                  // fontSize: "clamp(4.5rem, 3vw, 3rem)",
                  lineHeight: 1.2
                }}
              >
                MAKE A DIFFERENCE IN A CHILD'S LIFE
              </p>
              
              <p
                className="leading-relaxed mb-6 sm:mb-8 max-w-3xl"
                style={{ fontSize: "clamp(1rem, 3vw, 1.18rem)", color: "#1a1a1a" }}
              >
                Explore the many opportunities to get involved and make a difference, whatever your age is, no matter where in the world you are.
                <br />
                Your time, energy, and a passion will go a long way.
              </p>

              <p
                className="font-bold max-w-lg text-sm sm:text-base"
                style={{ color: "var(--link-blue)", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", lineHeight: 1.5 }}
              >
                <a href="/" className="hover:underline transition">Happy Bar Nutrition</a>{" "}
                <span style={{ color: "var(--text-purple)" }}>Inc. (est. 2016) is a US 501(c)(3) non-profit organisation</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}