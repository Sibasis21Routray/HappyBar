import React from 'react'
import { Link } from 'react-router-dom'

function LeprosyImpactBlog() {
  return (
    <div className="w-full bg-white">
      {/* Header with blue background */}
      <div className="relative overflow-hidden text-center px-6 pt-14 pb-32" style={{ background: "#29abe2" }}>
        <h1 className="relative z-10 text-4xl md:text-6xl font-black text-white leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
          Leprosy's International Impact.
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
            src="https://happybarnutrition.org/wp-content/uploads/2024/06/leprosy-feet.webp" 
            alt="Leprosy feet" 
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
          <p className="text-[30px] ] font-bold leading-relaxed text-stone-700">
            A quick google search will show – leprosy isn't a part of the past.150 years since it's discovery and this biblical disease still causes problems and a severely separating social stigma!
          </p>
        

          <p className="text-[20px] leading-relaxed text-stone-700">
            Leprosy, also known as Hansen's disease, is a chronic infectious disease that affects the skin, nerves, and mucous membranes. Despite being curable and preventable, it continues to be a public health concern in many parts of the world, particularly in developing countries.
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700">
            In recent news, there have been several stories highlighting the ongoing challenges of leprosy in different parts of the world.
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700">
            We will briefly explore some of those stories below.
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700 italic">
            [As per the World Health Organization, below is a map of the annual new cases of leprosy around the world.]
          </p>

          <img 
            src="https://happybarnutrition.org/wp-content/uploads/2024/05/image.png" 
            alt="World map of leprosy cases" 
            className="w-full rounded-xl shadow-md my-4"
          />

          {/* Portugal Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-stone-900 mb-3" >
              "Two Cases in Portugal, Imported from Brazil"
            </h2>
            <p className="text-[20px] leading-relaxed text-stone-700">
              In February 2023, Portuguese health authorities confirmed two cases of leprosy in Lisbon, both of which were imported from Brazil. According to the officials, the patients had traveled to Brazil and had probably contracted the disease there.
            </p>
            <p className="text-[20px] leading-relaxed text-stone-700 mt-2">
              This incident highlights the importance of early diagnosis and treatment, as well as the need for international cooperation in controlling the spread of leprosy.
            </p>
          </div>

          {/* Brazil Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-stone-900 mb-3" >
              "Brazil States 17,000 Leprosy Cases in 2022"
            </h2>
            <p className="text-[20px] leading-relaxed text-stone-700">
              Brazil has one of the highest burdens of leprosy in the world, with an estimated 17,000 new cases reported in 2022. This figure represents a slight decrease from the previous year, but it is still a cause for concern.
            </p>
            <p className="text-[20px] leading-relaxed text-stone-700 mt-2">
              The Brazilian government has implemented several initiatives to improve leprosy control, including increasing access to diagnosis and treatment, providing support to patients and their families, and conducting educational campaigns to raise awareness about the disease.
            </p>
          </div>

          {/* India Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-stone-900 mb-3">
              "Leprosy is Spreading Faster than Ever Amongst Indian Tea Pickers"
            </h2>
            <p className="text-[20px] leading-relaxed text-stone-700">
              In India, leprosy continues to be a significant health problem, particularly amongst marginalized communities such as tea pickers. A recent study found that the incidence of leprosy among tea pickers was increasing at an alarming rate, with many cases going undiagnosed and untreated. According to the Leprosy Mission, tea plantations in Sylhet employ about 600,000 workers – mostly women from minority groups – have the highest rate of leprosy in the world!
            </p>
            <p className="text-[20px] leading-relaxed text-stone-700 mt-2">
              This highlights the need for targeted interventions that take into account the specific challenges faced by vulnerable groups such as tea pickers, as well as the importance of early detection and treatment.
            </p>
          </div>

          {/* Sri Lanka Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-stone-900 mb-3" >
              "Sri Lanka had Leprosy under Control Until Covid-19"
            </h2>
            <p className="text-[20px] leading-relaxed text-stone-700">
              Sri Lanka has been praised for its successful efforts in controlling leprosy in recent years, with the country achieving the World Health Organization's (WHO) target of reducing leprosy prevalence to less than one case per 10,000 population in 2016.
            </p>
            <p className="text-[20px] leading-relaxed text-stone-700 mt-2">
              However, the COVID-19 pandemic has had a significant impact on leprosy control efforts, with many health resources diverted to pandemic response activities. This has led to delays in diagnosis and treatment, as well as disruptions to surveillance and monitoring activities.
            </p>
            <p className="text-[20px] leading-relaxed text-stone-700 mt-2">
              According to statistics by the Anti-Leprosy Campaign under the country's Ministry of Health (MOH), more than 1,300 new cases were reported in 2022, with 10.6% of the patients being children. The number of cases for the year 2021 was 1,026 and in 2020, 1,213. The number of cases in 2015 was nearly 2,000.
            </p>
          </div>

          {/* 150 Years Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-stone-900 mb-3" >
              "150 Years since Leprosy was Discovered"
            </h2>
            <p className="text-[20px] leading-relaxed text-stone-700">
              2023 marks the 150th anniversary of the discovery of the causative agent of leprosy, Mycobacterium leprae. Since then, significant progress has been made in understanding the biology of the disease and developing effective treatments. However, much remains to be done in terms of reducing the burden of leprosy, particularly in the poorest and most marginalized communities. This includes ensuring access to early diagnosis and treatment, providing social and economic support to patients and their families, and addressing the stigma and discrimination that often accompanies the disease.
            </p>
          </div>

          <p className="text-[20px] leading-relaxed text-stone-700 mt-4">
            In conclusion, these recent news stories underscore the ongoing challenges of leprosy control and the need for sustained efforts to achieve the goal of eliminating leprosy as a public health problem. Happy Bar Nutrition is proud to be able to provide bars to provide strength for those fighting this awful disease, however we feel more needs to be done in raising awareness and erasing the stigma. If anything, Happy Bar Nutrition Inc wants you to know that Leprosy is not an American, Indian, Brazilian, or Sri Lankan problem…it is an 'US' problem, and together we can address the social stigma which has been attached to this sickness for so long.
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700 mt-4">
            Regards,
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700">
            The Happy Bar Nutrition Family
          </p>

          {/* Previous/Next Navigation */}
          <div className="flex flex-row justify-between mt-8 pt-4 border-t border-stone-200">
            <Link 
              to="/blog/tree-line-journey" 
              className="group flex items-center gap-2 text-sm font-semibold text-[#f92c8b] hover:cursor-pointer"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Prev: What Lies Beyond the Tree Line?</span>
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
          <h2 className="text-4xl font-black text-stone-900 mb-8">
            You May Also Like...
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Related Post 1 - What Lies Beyond the Tree Line */}
            <Link to="/blog/tree-line-journey" className="block rounded-2xl bg-white border border-purple-50 shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
              <img 
                src="https://happybarnutrition.org/wp-content/uploads/2024/05/kid-sitting-on-bench.jpg" 
                alt="What Lies Beyond the Tree Line" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-5 space-y-2">
                <h3 className="text-base font-extrabold text-stone-900 leading-snug" >
                  What Lies Beyond the Tree Line?
                </h3>
                <p className="text-sm font-semibold text-[#f92c8b]">May 16, 2024</p>
                <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
                  In February of 2014, accompanied by some like-minded friends, I visited several ostracized, leprosy-ridden villages...
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
                  In a remote village far from the city, the school bell rings, children walk into their classrooms...
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LeprosyImpactBlog