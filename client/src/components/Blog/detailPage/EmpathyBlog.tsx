import { Link } from "react-router-dom"

const EmpathyBlog = () => {
  return (
    <div className="w-full bg-white">
      {/* Header with blue background */}
      <div className="relative overflow-hidden text-center px-6 pt-14 pb-32" style={{ background: "#29abe2" }}>
        <h1 className="relative z-10 text-4xl md:text-6xl font-black text-white leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
          When I think about Empathy…….
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
            src="https://happybarnutrition.org/wp-content/uploads/2024/06/kids-in-front-of-run-down-school.webp" 
            alt="Children in front of school" 
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
              <span className="text-sm font-semibold text-[#f92c8b]">General | Kids | Schools</span>
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
              <span className="text-sm font-semibold text-[#f92c8b]">May 18, 2024</span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <article className="mt-12 space-y-4 font-serif text-stone-800">
          <p className="text-[20px] leading-relaxed text-stone-700">
            In a remote village far from the city, the school bell rings, children walk into their classrooms.
          </p>
          <p className="text-[20px] leading-relaxed text-stone-700">
            Few dragging their feet, some with big smiles, some with tired eyes.
          </p>
          <p className="text-[20px] leading-relaxed text-stone-700">
            Miss Mary walks in and starts teaching. She tries engaging the children by asking questions.
          </p>
          <p className="text-[20px] leading-relaxed text-stone-700">
            "No hands up."
          </p>
          <p className="text-[20px] leading-relaxed text-stone-700">
            She wants to shake them up, to get them going. She asks them to stand up and look to 
            the right, look to the left, and greet the person next to them. Children stand up reluctantly 
            and their silent sighs fill the classroom.
          </p>
          <p className="text-[20px] leading-relaxed text-stone-700">
            The teacher knows what the problem is.
          </p>
          <p className="text-[20px] leading-relaxed text-stone-700">
            She asks everyone to sit back down. They cannot focus on what she is saying as they are 
            hungry. They have not had anything to eat. The last they have eaten was the previous day at 
            lunch time. Despite this, they have walked miles to get to school barefoot or with tattered 
            footwear.
          </p>

          <img 
            src="https://happybarnutrition.org/wp-content/uploads/2024/06/image-e1715999318759.webp" 
            alt="Children in classroom" 
            className="w-full rounded-xl shadow-md my-2"
          />

          <p className="text-[20px] leading-relaxed text-stone-700">
            Its heart wrenching for Miss Mary although it is a small burden to bear, compared to what 
            the children are going through. Miss Mary continues, doing her best. Every so often, 
            the children's eyes keep looking at the door. The tired eyes, looking longingly for something 
            to arrive.
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700">
            Miss Mary is disturbed by the rustling and the whispers behind her and turns around to face 
            the children. She faces a joyous sight; all children their eyes lit up like a beautiful Christmas 
            tree, stare back at her.
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700">
            Miss Mary meets the Happy Bar Delivery Man at the door picks up a box of bars that have 
            come all the way from a far-off city to their very remote village and school. Miss Mary knows 
            the children cannot wait any longer and rushes to give them the one bar that they have 
            waited 20 hours for.
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700">
            She watches while the children quickly unwrap the bars and gobble it down with gladness.
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700">
            Few of them stop to look up and smile, some start chatting with their friends, there is an 
            occasional chuckle and giggle, sounds that seem to come from their inner being. There is 
            chatter, playful banter and so much energy in the cramped classroom its infectious and Miss 
            Mary now begins class in real earnest knowing that the children are now ready to listen, 
            their little bodies relishing the sweet delight of the Happy Bar.
          </p>

          <img 
            src="https://happybarnutrition.org/wp-content/uploads/2024/06/image-1-e1715999344175.webp" 
            alt="Girl smiling" 
            className="w-full rounded-xl shadow-md my-2"
          />

          <p className="text-[20px] leading-relaxed text-stone-700">
            The Happy Bar team and all its champions strive to get that one bar to every child who has 
            walked many miles in tattered shoes to get to school.
          </p>

          <p className="text-[20px] leading-relaxed text-stone-700">
            Thank you Happy Bar champion donors, you have put yourself in their shoes.
          </p>

          <p className="text-[16px] leading-relaxed font-bold text-stone-900">
            Boing – the Happy Bar mascot says,
          </p>
          <p className="text-[16px] leading-relaxed font-bold text-stone-900">
            Walk in my shoes,
          </p>
          <p className="text-[16px] leading-relaxed font-bold text-stone-900">
            come chase away the blues.
          </p>
          <p className="text-[16px] leading-relaxed font-bold text-stone-900">
            Peek into my classroom
          </p>
          <p className="text-[16px] leading-relaxed font-bold text-stone-900">
            come shoo away the gloom.
          </p>
          <p className="text-[16px] leading-relaxed font-bold text-stone-900">
            Bring us a happy bar.
          </p>
          <p className="text-[16px] leading-relaxed font-bold text-stone-900">
            and you be the Star.
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
          </div>
        </article>

        <hr className="border-stone-200 mt-10" />

        {/* You May Also Like Section */}
        <section className="mt-12">
          <h2 className="text-4xl font-black text-stone-900 mb-8" style={{ fontFamily: "'Nunito', sans-serif" }}>
            You May Also Like...
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Related Post 1 */}
            <Link to="/blog/tree-line-journey" className="block rounded-2xl bg-white border border-purple-50 shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
              <img 
                src="https://happybarnutrition.org/wp-content/uploads/2024/05/kid-sitting-on-bench.jpg" 
                alt="What Lies Beyond the Tree Line?" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-5 space-y-2">
                <h3 className="text-base font-extrabold text-stone-900 leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  What Lies Beyond the Tree Line?
                </h3>
                <p className="text-sm font-semibold text-[#f92c8b]">May 16, 2024</p>
                <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
                  In February of 2014, accompanied by some like-minded friends, I visited several ostracized, leprosy-ridden villages in the south of India...
                </p>
              </div>
            </Link>

            {/* Related Post 2 */}
            <Link to="/blog/leprosy-international-impact" className="block rounded-2xl bg-white border border-purple-50 shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
              <img 
                src="https://happybarnutrition.org/wp-content/uploads/2024/06/leprosy-feet.webp" 
                alt="Leprosy's International Impact" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-5 space-y-2">
                <h3 className="text-base font-extrabold text-stone-900 leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  Leprosy's International Impact.
                </h3>
                <p className="text-sm font-semibold text-[#f92c8b]">May 16, 2024</p>
                <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
                  A quick google search will show - leprosy isn't a part of the past. 150 years since it's discovery...
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default EmpathyBlog