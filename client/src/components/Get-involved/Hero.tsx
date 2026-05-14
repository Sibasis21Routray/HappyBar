import { Link } from "react-router-dom";
import getInvolved from "../../assets/getInvolved.jpg";
import bird from "../../assets/bird.gif"

export default function Hero() {
  return (
    <div className="w-full bg-white flex justify-center overflow-hidden">
      <div className="w-full max-w-9xl mx-auto">
        
        {/* Single Top Sky Blue Stripe */}
        <div 
          className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"
          style={{ height: "clamp(90px, 10vw, 180px)", background: "var(--text-skyblue, #29abe2)" }}
        />
        
        {/* Main Content - responsive column layout with overlap */}
       <div className="flex flex-col lg:flex-row items-stretch min-h-[520px] mt-[-50px] lg:mt-[-140px]">
          
          {/* ── Left: Image overlapping stripe ── */}
          <div className="relative lg:flex-shrink-0 w-full lg:w-1/2">
            {/* Image sits over the stripe - overlapping on mobile */}
            <div className="relative z-10 lg:pl-20 pl-4 pr-4 md:pr-0 pt-0 pb-10">
              <img
                src={getInvolved}
                alt="Happy child"
                className="w-full object-cover object-top rounded-4xl"
              />
            </div>
          </div>

          {/* ── Right: Title + body ── */}
          <div className="flex-1 flex flex-col w-full lg:w-1/2">

            {/* Title section - no background on desktop anymore */}
            <div
              className="flex items-center justify-center bg-transparent py-6 sm:py-8 md:py-10"
              style={{ flexShrink: 0 }}
            >
              <h1
                className="text-black font-bold tracking-tight text-center px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ lineHeight: 1.1 }}
              >
                Get Involved
              </h1>
            </div>

            <div className="absolute right-0 overflow-hidden w-28 h-30">
              <img
                src={bird}
                alt="Duck Peek"
                className="w-32 h-auto animate-peek z-80"
              />
            </div>

            {/* Body — white, centred */}
            <div
              className="flex flex-col justify-center items-center text-center py-10 sm:py-4 px-4 sm:px-6 lg:px-10"
              style={{ flex: 1 }}
            >
              <p
                className="font-bold mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
                style={{ 
                  color: "var(--text-skyblue)", 
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
                <Link to="/" className="hover:underline transition">Happy Bar Nutrition</Link>{" "}
                <span style={{ color: "var(--text-purple)" }}>Inc. (est. 2016) is a US 501(c)(3) non-profit organisation</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}