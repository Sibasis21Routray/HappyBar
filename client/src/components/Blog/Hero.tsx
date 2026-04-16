import annual from "../../assets/meet-boing.jpg";

export default function Hero() {
  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* 🔥 CHANGE: lg:flex-row instead of md */}
      <div className="flex flex-col lg:flex-row items-stretch min-h-[520px]">

        {/* ── Left: Image ── */}
        <div className="relative lg:flex-shrink-0 w-full lg:w-[800px]">
          
          {/* ✅ Small responsive strip (ALL screens) */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: "clamp(40px, 8vw, 130px)",
              background: "#FF8154"
            }}
          />

          <div className="relative z-10 px-4 sm:px-8 lg:pl-28 pt-6 pb-10">
            <img
              src={annual}
              alt="Happy child"
              className="w-full object-cover object-top rounded-4xl"
              // style={{ height: "auto", maxHeight: 450 }}
            />
          </div>
        </div>

        {/* ── Right: Title + Body ── */}
        <div className="flex-1 flex flex-col">

          {/* ✅ Orange bg ONLY on lg */}
          <div
            className="flex items-center justify-center px-4 lg:bg-[#FF8154]"
            style={{
              height: "clamp(60px, 10vw, 130px)",
              flexShrink: 0
            }}
          >
            <h1
              className="w-full text-center text-black font-bold tracking-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                lineHeight: 1.2
              }}
            >
              The Boing Logs (Blogs)
            </h1>
          </div>

          {/* Body */}
          <div
            className="flex flex-col justify-center items-center text-center py-10 sm:py-14 px-6 sm:px-8 lg:px-10"
            style={{ flex: 1 }}
          >
            <p
              className="leading-relaxed mb-8 max-w-2xl text-sm sm:text-base md:text-lg"
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
  );
}