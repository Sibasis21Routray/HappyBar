import annual from "../../assets/meet-boing.jpg";
import bird from "../../assets/bird.gif"

export default function Hero() {
  return (
    <div className="w-full bg-white flex justify-center overflow-hidden">
      <div className="w-full max-w-9xl mx-auto">
        
        {/* Single Top Orange Stripe */}
        <div 
          className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"
          style={{ height: "clamp(90px, 10vw, 180px)", background: "#FF8154" }}
        />
        
        {/* Main Content - responsive column layout with overlap */}
        <div className="flex flex-col lg:flex-row items-stretch min-h-[520px] mt-[-40px] lg:mt-[-140px]">
          
          {/* ── Left: Image overlapping stripe ── */}
          <div className="relative lg:flex-shrink-0 w-full lg:w-[800px]">
            {/* Image sits over the stripe */}
            <div className="relative z-10 px-4 sm:px-8 lg:pl-28 pt-0 pb-10">
              <img
                src={annual}
                alt="Happy child"
                className="w-full object-cover object-top rounded-4xl"
              />
            </div>
          </div>

          {/* ── Right: Title + Body ── */}
          <div className="flex-1 flex flex-col">

            {/* Title section - no background on desktop */}
            <div
              className="flex items-center justify-center bg-transparent px-4"
              style={{
                height: "clamp(60px, 10vw, 130px)",
                flexShrink: 0
              }}
            >
              <h1
                className="w-full text-center text-black font-bold tracking-tight z-4"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4.5rem)",
                  lineHeight: 1.2
                }}
              >
                The Boing Logs (Blogs)
              </h1>
            </div>

            <div className="absolute right-0 overflow-hidden w-20 sm:w-24 md:w-28 h-auto z-10">
              <img
                src={bird}
                alt="Duck Peek"
                className="w-full h-auto animate-peek z-10"
              />
            </div>

            {/* Body */}
            <div
              className="flex flex-col justify-center items-center text-center py-6 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8 lg:px-10"
              style={{ flex: 1 }}
            >
              <p
                className="leading-relaxed mb-6 sm:mb-8 max-w-2xl text-sm sm:text-base md:text-lg"
                style={{ color: "#1a1a1a" }}
              >
                Happy Bar Nutrition's blog serves as a vibrant hub where we share regular updates and heartwarming stories from our various initiatives. Here, you can find posts about our latest activities, progress reports on how your contributions are helping children receive nutritious Happy Bars, and insights into our diverse programs. Each entry is designed to keep our supporters informed and engaged, showcasing the tangible impact of their generosity on the communities we serve. Whether you're looking to catch up on recent developments or discover more about our mission, our blog is your go-to source for all the latest news.
              </p>

              <p
                className="font-bold max-w-lg text-xs sm:text-sm md:text-base"
                style={{ color: "var(--link-blue)", lineHeight: 1.5 }}
              >
                <a href="/">Happy Bar Nutrition</a>{" "}
                <span style={{ color: "var(--text-purple)" }}>
                  Inc. (est. 2016) is a US 501(c)(3) non-profit organisation
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}