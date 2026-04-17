
import React from "react";
import child1 from "../../assets/child1.jpg";
import child2 from "../../assets/child2.jpg";
import child3 from "../../assets/child3.jpg";
import child4 from "../../assets/child4.jpg";
import child5 from "../../assets/child5.jpg";
import child6 from "../../assets/child6.jpg";
import child7 from "../../assets/child7.jpg";
import child8 from "../../assets/child8.jpg";
import child9 from "../../assets/child9.jpg";
import child10 from "../../assets/child10.jpg";
import child11 from "../../assets/child11.jpg";
import child12 from "../../assets/child12.jpg";
import child13 from "../../assets/child13.jpg";
import child14 from "../../assets/child14.jpg";


const mosaicImages = [
  child1, child2, child3, child4, child5, child6, child7,
  child8, child9, child10, child11, child12, child13, child14,
];

const causesList = [
  "CHILDREN WITH CANCER",
  "CHILDREN WITH HIV",
  "CHILDREN WITH OTHER SEVERE ILLNESSES",
  "ORPHANAGES",
  "LEPROSY",
  "ABANDONED CHILDREN",
  "CHILDREN IN SLUMS",
];

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
      <path d="M16 28s-14-8.5-14-17A8 8 0 0116 6.93 8 8 0 0130 11c0 8.5-14 17-14 17z" fill="#A13D63" />
    </svg>
  );
}

function ImageMosaic() {
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-[700px]">
      {/* Column 1 */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <img src={mosaicImages[0]} alt="" className="w-full aspect-[3/4] object-cover rounded-sm shadow-sm" />
        <img src={mosaicImages[1]} alt="" className="w-full aspect-[4/3] object-cover rounded-sm shadow-sm" />
        <img src={mosaicImages[2]} alt="" className="w-full aspect-square object-cover rounded-sm shadow-sm" />
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <img src={mosaicImages[3]} alt="" className="w-full aspect-[4/5] object-cover rounded-sm shadow-sm" />
        <img src={mosaicImages[4]} alt="" className="w-full aspect-square object-cover rounded-sm shadow-sm" />
        <img src={mosaicImages[5]} alt="" className="w-full aspect-[3/4] object-cover rounded-sm shadow-sm" />
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <img src={mosaicImages[6]} alt="" className="w-full aspect-square object-cover rounded-sm shadow-sm" />
        <img src={mosaicImages[7]} alt="" className="w-full aspect-[4/5] object-cover rounded-sm shadow-sm" />
        <img src={mosaicImages[8]} alt="" className="w-full aspect-square object-cover rounded-sm shadow-sm" />
        <img src={mosaicImages[9]} alt="" className="w-full aspect-video object-cover rounded-sm shadow-sm" />
      </div>

      {/* Column 4 */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <img src={mosaicImages[10]} alt="" className="w-full aspect-[3/4] object-cover rounded-sm shadow-sm" />
        <img src={mosaicImages[11]} alt="" className="w-full aspect-square object-cover rounded-sm shadow-sm" />
        <img src={mosaicImages[12]} alt="" className="w-full aspect-[4/5] object-cover rounded-sm shadow-sm" />
      </div>
    </div>
  );
}

export default function OurCauses() {
  return (
    <div className="bg-white font-sans overflow-x-hidden" id="our-causes">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Title Section */}
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">
            <span style={{ color: "#5C1A3A" }}>Our </span>
            <span style={{ color: "#F2B84B" }}>Causes</span>
          </h1>
          {/* Decorative Dotted line */}
          <div className="mt-3 flex gap-1.5">
             {[...Array(24)].map((_, i) => (
               <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: "#5C1A3A" }} />
             ))}
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Bento Grid Mosaic */}
          <div className="w-full lg:w-[55%]">
            <ImageMosaic />
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-[45%]">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black mb-6 tracking-wide" style={{ color: "#5C1A3A" }}>
                WHAT WE DO
              </h2>
              <div className="text-gray-700 space-y-6 text-lg md:text-xl leading-relaxed font-medium">
                <p>Since 2016, our mission has remained unchanged and unwavering.</p>
                <p>We strongly believe in the value and importance of protein in the diet of children including those who are sick.</p>
                <p>We have seen remarkable results and only wish we could do more.</p>
              </div>
            </div>

            {/* Causes List Section */}
            <div className="flex flex-col border-t-2 border-gray-100">
              {causesList.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-5 py-5 border-b-2 border-gray-100 hover:bg-gray-50 transition-all cursor-default"
                >
                  <HeartIcon />
                  <span className="text-base md:text-lg font-extrabold tracking-widest text-[#5C1A3A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}