import React from 'react'
import { Link } from 'react-router-dom'

function BarsSupportBlog() {
  return (
    <div className="w-full bg-white">
      {/* Header with blue background */}
      <div className="relative overflow-hidden text-center px-6 pt-14 pb-32" style={{ background: "#29abe2" }}>
        <h1 className="relative z-10 text-4xl md:text-5xl font-black text-white leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
          81,000 bars to 23 different groups – all due to YOUR support!!!
        </h1>
        <svg className="absolute bottom-0 left-0 w-full" style={{ height: "110px", display: "block" }} viewBox="0 0 1440 110" preserveAspectRatio="none">
          <path d="M0,110 Q300,10 1440,0 L1440,110 Z" fill="#a8ddf0" opacity="0.55" />
          <path d="M0,110 Q300,35 1440,18 L1440,110 Z" fill="#c9ecf8" opacity="0.6" />
          <path d="M0,110 Q300,62 1440,42 L1440,110 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-8 pb-24">
        {/* Hero image + Meta */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px] -mt-16 relative z-10 items-start">
          <img 
            src="https://happybarnutrition.org/wp-content/uploads/2024/05/My-granparents-have-leprosy.-I-have-to-live-with-them.-We-are-very-poor-scaled.jpg" 
            alt="Child with grandparents" 
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
              <span className="text-sm font-semibold text-[#f92c8b]">May 16, 2023</span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
       <div className="w-full bg-white font-sans text-[#4a4a4a] antialiased">
      {/* Container to mimic the mobile browser view */}
      <div className="mx-auto  px-4 py-8 md:px-6">
        
        {/* Main Content Area */}
        <article className="space-y-6">
          
          <h1 className="text-[32px] font-bold text-[#333] leading-tight mb-4">
            We want to express our deepest appreciation for your unwavering support of Happy Bar Nutrition.
          </h1>

          <div className="text-[18px] leading-relaxed space-y-5">
            <p className="text-gray-500">
              Thanks to your generous contributions, this year, we have been able to provide over 80,000 bars to children who are most in need.
            </p>

            <p>
              Since the beginning of this year, we have distributed these bars to 23 different organizations that focus on various aspects of child care, including schooling, cancer and special needs care, HIV care, and a church-based Leprosy Rehabilitation Center.
            </p>

            <p>
              One of these centers is the Sumanahalli Society, which was established by the Bangalore Archdiocese over 45 years ago to treat and rehabilitate patients with leprosy.
            </p>

            {/* Duplicate paragraph as seen in screenshot */}
            <p>
              One of these centers is the Sumanahalli Society, which was established by the Bangalore Archdiocese over 45 years ago to treat and rehabilitate patients with leprosy.
            </p>

            {/* Content wrapping around the map image */}
            <div className="block overflow-hidden">
              <div className="float-right ml-4 mb-2 w-1/2 max-w-[480px]">
                <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white">
                   <img 
                    src="https://static.wixstatic.com/media/42a459_90b63fa5f9ca4aca9c106c3e5b7473dd~mv2.jpg/v1/fill/w_350,h_359,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/42a459_90b63fa5f9ca4aca9c106c3e5b7473dd~mv2.jpg" 
                    alt="Map of Bengaluru showing Sumanahalli Society" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <p>
                To empower the cured individuals to reintegrate into mainstream society, Sumanahalli started a school in 2004 that has already educated more than 13,000 children. They have also successfully placed over 500 cured individuals in government jobs with some earning up to 80,000 rupees a month. Additionally, Sumanahalli has constructed over 300 houses for recovered patients in Bengaluru, settled 169 cured patients in marriages, and expanded its programs to support the disabled by establishing a home for HIV/AIDS patients called "Support" and a vocational training institute.
              </p>
            </div>

            <h2 className="text-[34px] font-bold text-[#333] pt-4">
              Your contributions are essential...
            </h2>

            <p>
              Your contributions have been essential in enabling us to distribute over 80,000 bars in the first few months of 2023, and we could not have achieved this without your support. We are deeply grateful for your continued partnership in our mission to provide nutritious and affordable snacks to those who need it most.
            </p>

            <p>
              We are heartened by the generosity of our community and its support for our efforts.
            </p>

            <p>
              Your support has made a significant impact on the lives of those we serve, and we are committed to working hard to ensure that we can reach as many individuals as possible and help them achieve optimal health and wellbeing.
            </p>

            <p>
              Once again, thank you for being an integral part of the <Link to="/" className="text-[#f92c8b] no-underline cursor-pointer">Happy Bar Nutrition</Link> family.
            </p>

            <p>
              Together, we can make a positive difference in the world.
            </p>
          </div>
        </article>

        {/* Navigation Link */}
        <div className="mt-12 py-6 border-t border-gray-100 text-right">
          <Link to="/blog/annual-report-2023" className="text-[#f92c8b] text-sm font-medium hover:underline">
            Next: Happy Bar Nutrition, Inc. Annual Report 2023 →
          </Link>
        </div>

      </div>
    </div>
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

            {/* Related Post 2 - What Lies Beyond the Tree Line */}
            <Link to="/blog/tree-line-journey" className="block rounded-2xl bg-white border border-purple-50 shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
              <img 
                src="https://happybarnutrition.org/wp-content/uploads/2024/05/kid-sitting-on-bench.jpg" 
                alt="What Lies Beyond the Tree Line" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-5 space-y-2">
                <h3 className="text-base font-extrabold text-stone-900 leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  What Lies Beyond the Tree Line?
                </h3>
                <p className="text-sm font-semibold text-[#f92c8b]">May 16, 2024</p>
                <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
                  In February of 2014, accompanied by some like-minded friends, I visited several ostracized, leprosy-ridden villages...
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BarsSupportBlog