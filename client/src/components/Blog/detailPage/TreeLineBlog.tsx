import React from 'react'
import { Link } from 'react-router-dom'

function TreeLineBlog() {
  return (
    <div className="w-full bg-white">
      {/* Header with blue background */}
      <div className="relative overflow-hidden text-center px-6 pt-14 pb-32" style={{ background: "#29abe2" }}>
        <h1 className="relative z-10 text-4xl md:text-6xl font-black text-white leading-snug" >
          What Lies Beyond the Tree Line?
        </h1>
        <svg className="absolute bottom-0 left-0 w-full" style={{ height: "110px", display: "block" }} viewBox="0 0 1440 110" preserveAspectRatio="none">
          <path d="M0,110 Q300,10 1440,0 L1440,110 Z" fill="#a8ddf0" opacity="0.55" />
          <path d="M0,110 Q300,35 1440,18 L1440,110 Z" fill="#c9ecf8" opacity="0.6" />
          <path d="M0,110 Q300,62 1440,42 L1440,110 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="mx-auto max-w-5xl px-8 pb-24">
        {/* Hero image + Meta */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px] -mt-16 relative z-10 items-start">
          <img 
            src="https://happybarnutrition.org/wp-content/uploads/2024/05/kid-sitting-on-bench.jpg" 
            alt="Child sitting on bench" 
            className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]" 
          />
          <div className="flex flex-col gap-5 pt-24">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 opacity-40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              <span className="text-sm font-semibold text-[#f92c8b]">Leprosy</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 opacity-40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              <span className="text-sm font-semibold text-[#f92c8b]">0 Comments(s)</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 opacity-40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <span className="text-sm font-semibold text-[#f92c8b]">May 16, 2024</span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <article className="mt-12 space-y-4  text-stone-800">
          <p className="text-[20px] leading-relaxed text-stone-700">
            In February of 2014, accompanied by some like-minded friends, I visited several ostracized, leprosy-ridden villages in the south of India, with the aim of improving the nutritional status of children in these villages, by providing a high protein energy bar. It was then that I first came to know that there existed a "World without Physical Pain". It was also the first time, I understood what a blessing it is that these leprosy patients that suffer so much ghastly disfigurement literally do not feel physical pain.
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700">
            Quite in contrast, our children with leprosy endure, day in and day out a different kind of pain – pain of separation, the pain of not looking beautiful, the pain of being kept out of schools and colleges, the pain of being cut-off from the society and the pain of losing out on news, food rations, medicines, healthcare etc.
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700">
            The Happy Bar and the Happy Bar team were created to help bring nutrition and good health to them in their villages, so that their health would improve, and they would be less prone to catch the disease. Our hope is that over time, some will be healthy enough to leave the village and become part of the society that they are kept out of.
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700">
            The Happy Bar team and all its champions strive to get Happy Bars to the children and adults of the villages so that they can grow to step into a world outside theirs.
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700">
            I cannot imagine how one of our children might be feeling but I thought I'd jot down a few lines that express what the children or their parents have told me over time about their hopes and aspirations, that they would like told.
          </p>

          <div className="mt-6 mb-6">
            <p className="text-[18px] font-bold text-stone-900 mb-3">Thoughts of a child:</p>
            <div className="pl-6 border-l-4 border-[#f92c8b] italic">
              <p className="text-[18px] leading-relaxed text-stone-700 mb-1">I look yonder beyond the tree line.</p>
              <p className="text-[18px] leading-relaxed text-stone-700 mb-1">Wondering how good it would be.</p>
              <p className="text-[18px] leading-relaxed text-stone-700 mb-1">To step into the new world</p>
              <p className="text-[18px] leading-relaxed text-stone-700 mb-3">The world beyond me</p>
              
              <p className="text-[18px] leading-relaxed text-stone-700 mb-1">Lend me a hand dear stranger.</p>
              <p className="text-[18px] leading-relaxed text-stone-700 mb-1">Let me peek at the wonder.</p>
              <p className="text-[18px] leading-relaxed text-stone-700 mb-1">A wonder lies beyond the trees.</p>
              <p className="text-[18px] leading-relaxed text-stone-700 mb-3">The dreams beyond my means.</p>
              
              <p className="text-[18px] leading-relaxed text-stone-700 mb-1">Look at me dear brother.</p>
              <p className="text-[18px] leading-relaxed text-stone-700 mb-1">See me, beyond my skin.</p>
              <p className="text-[18px] leading-relaxed text-stone-700 mb-1">We both are hurting.</p>
              <p className="text-[18px] leading-relaxed text-stone-700 mb-3">From outside and within.</p>
              
              <p className="text-[18px] leading-relaxed text-stone-700 mb-1">Lend me your hand dear friend.</p>
              <p className="text-[18px] leading-relaxed text-stone-700 mb-1">And help me cross the threshold.</p>
              <p className="text-[18px] leading-relaxed text-stone-700 mb-1">I know I can make it.</p>
              <p className="text-[18px] leading-relaxed text-stone-700">If you meet me there.</p>
            </div>
          </div>

          {/* Previous/Next Navigation */}
          <div className="flex flex-row justify-between mt-8 pt-4 border-t border-stone-200">
            <Link 
              to="/blog/leprosy-international-impact" 
              className="group flex items-center gap-2 text-sm font-semibold text-[#f92c8b] hover:cursor-pointer"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Prev: Leprosy's International Impact.</span>
            </Link>
            <Link 
              to="/blog/empathy-in-classroom" 
              className="group flex items-center gap-2 text-sm font-semibold text-[#f92c8b] hover:cursor-pointer ml-auto"
            >
              <span>Next: When I think about Empathy......</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>

        <hr className="border-stone-200 mt-10" />

        {/* You May Also Like Section */}
        <section className="mt-12">
          <h2 className="text-4xl font-black text-stone-900 mb-8" >
            You May Also Like...
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Related Post 1 - Leprosy's International Impact */}
            <Link to="/blog/leprosy-international-impact" className="block rounded-2xl bg-white border border-purple-50 shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
              <img 
                src="https://happybarnutrition.org/wp-content/uploads/2024/06/leprosy-feet.webp" 
                alt="Leprosy's International Impact" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-5 space-y-2">
                <h3 className="text-base font-extrabold text-stone-900 leading-snug" >
                  Leprosy's International Impact.
                </h3>
                <p className="text-sm font-semibold text-[#f92c8b]">May 16, 2024</p>
                <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
                  A quick google search will show - leprosy isn't a part of the past. 150 years since it's discovery and this biblical...
                </p>
              </div>
            </Link>

            {/* Related Post 2 - When I think about Empathy */}
            <Link to="/blog/empathy-in-classroom" className="block rounded-2xl bg-white border border-purple-50 shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
              <img 
                src="https://happybarnutrition.org/wp-content/uploads/2024/06/kids-in-front-of-run-down-school.webp" 
                alt="When I think about Empathy" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-5 space-y-2">
                <h3 className="text-base font-extrabold text-stone-900 leading-snug" >
                  When I think about Empathy.......
                </h3>
                <p className="text-sm font-semibold text-[#f92c8b]">May 18, 2024</p>
                <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
                  In a remote village far from the city, the school bell rings, children walk into their classrooms, few dragging their feet...
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TreeLineBlog