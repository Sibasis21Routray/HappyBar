import React from 'react'
import { Link } from 'react-router-dom'

function AnnualReportBlog() {
  return (
    <div className="w-full bg-white">
      {/* Header with blue background */}
      <div className="relative overflow-hidden text-center px-6 pt-14 pb-32" style={{ background: "#29abe2" }}>
        <h1 className="relative z-10 text-4xl md:text-6xl font-black text-white leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
          Happy Bar Nutrition, Inc. Annual Report 2023
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
            src="https://happybarnutrition.org/wp-content/uploads/2024/06/blog-for-annual-2023-hb-photo-1280x960.webp" 
            alt="Annual Report 2023" 
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
              <span className="text-sm font-semibold text-[#f92c8b]">General</span>
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
          <p className="text-[18px] leading-relaxed text-stone-700">
            We extend our heartfelt gratitude to you for your unwavering support, whether as a donor, a well-wisher, or a dedicated volunteer. Your generosity, in various forms, has significantly impacted the lives of countless children and elders, bringing hope and sustenance to those in need.
          </p>

          <p className="text-[18px] leading-relaxed text-stone-700">
            As we reflect on the past year, we invite you to delve into the pages of the Happy Bar Nutrition Annual Report for 2023. Within its contents, you'll discover the breadth of our endeavors, our ambitious goals, and the remarkable progress we've made in fulfilling our mission.
          </p>

          <p className="text-[18px] leading-relaxed text-stone-700">
            Should you have any queries or insights to share, we encourage you to reach out to Dr. Jack Kennedy (jack.kennedy@happybarnutrition.org) or Dr. Alice Augustine (alice.augustine@happybarnutrition.org). Your input is invaluable as we strive to continually improve and expand our efforts.
          </p>

          <p className="text-[18px] leading-relaxed text-stone-700">
            In these challenging times, the plight of malnourished children and elders is compounded by the burdens of stress and illness. They are deserving of a brighter future—a reality we can collectively create.
          </p>

          <p className="text-[18px] leading-relaxed text-stone-700">
            We humbly request your continued support in any of the following ways:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-[18px] leading-relaxed text-stone-700">
            <li>
              Contribute directly to Happy Bar Nutrition Inc through our website,{' '}
              <a 
                href="https://www.happybarnutrition.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#f92c8b] hover:underline"
              >
                https://www.happybarnutrition.org
              </a>
            </li>
            <li>
              Advocate for our cause by spreading awareness and encouraging potential donors to join our mission.
            </li>
          </ul>

          <p className="text-[18px] leading-relaxed font-bold text-stone-900 mt-6">
            Here's to a lifetime of health and happiness for you and your family!
          </p>

          <p className="text-[18px] leading-relaxed text-stone-700">
            Reach out at:
          </p>
          
          <div className="space-y-2">
            <a 
              href="https://www.instagram.com/happybarnutrition" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[15   px] md:text-[18px] text-[#f92c8b] hover:underline block"
            >
              https://www.instagram.com/happybarnutrition
            </a>
            <a 
              href="https://www.facebook.com/happybarnutrition" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[15px] md:text-[18px] text-[#f92c8b] hover:underline block"
            >
              https://www.facebook.com/happybarnutrition
            </a>
          </div>

          {/* Previous/Next Navigation */}
          <div className="flex flex-row justify-between mt-8 pt-4 border-t border-stone-200">
            <Link 
              to="/blog/81000-bars-support" 
              className="group flex items-center gap-2 text-sm font-semibold text-[#f92c8b] hover:cursor-pointer"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Prev: 81,000 bars to 23 different groups - all due to YOUR support!!!</span>
            </Link>
            <Link 
              to="/blog/leprosy-international-impact" 
              className="group flex items-center gap-2 text-sm font-semibold text-[#f92c8b] hover:cursor-pointer ml-auto"
            >
              <span>Next: Leprosy's International Impact.</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>

        <hr className="border-stone-200 mt-10" />

        {/* You May Also Like Section */}
        <section className="mt-12">
          <h2 className="text-4xl font-black text-stone-900 mb-8" style={{ fontFamily: "'Nunito', sans-serif" }}>
            You May Also Like...
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Related Post 1 - When I think about Empathy */}
            <Link to="/blog/empathy-in-classroom" className="block rounded-2xl bg-white border border-purple-50 shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
              <img 
                src="https://happybarnutrition.org/wp-content/uploads/2024/06/kids-in-front-of-run-down-school.webp" 
                alt="When I think about Empathy" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-5 space-y-2">
                <h3 className="text-base font-extrabold text-stone-900 leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  When I think about Empathy.......
                </h3>
                <p className="text-sm font-semibold text-[#f92c8b]">May 18, 2024</p>
                <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
                  In a remote village far from the city, the school bell rings, children walk into their classrooms, few dragging their...
                </p>
              </div>
            </Link>

            {/* Related Post 2 - 81,000 bars to 23 different groups */}
            <Link to="/blog/81000-bars-support" className="block rounded-2xl bg-white border border-purple-50 shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
              <img 
                src="https://happybarnutrition.org/wp-content/uploads/2024/05/My-granparents-have-leprosy.-I-have-to-live-with-them.-We-are-very-poor-scaled.jpg" 
                alt="81,000 bars to 23 different groups" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-5 space-y-2">
                <h3 className="text-base font-extrabold text-stone-900 leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  81,000 bars to 23 different groups - all due to YOUR support!!!
                </h3>
                <p className="text-sm font-semibold text-[#f92c8b]">May 16, 2023</p>
                <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
                  We want to express our deepest appreciation for your unwavering support of Happy Bar Nutrition. Thanks to you...
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AnnualReportBlog