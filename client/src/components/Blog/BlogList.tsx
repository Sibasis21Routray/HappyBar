import { Link } from "react-router-dom"
import { blogPosts } from "./blogData"

const BlogList = () => {
  return (
    <>
    <section className="w-full bg-[#fff] py-16 px-4 sm:px-6 lg:px-18">
      <div className="mx-auto max-w-10/12">

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Card image — no padding, flush to top */}
              <div className="h-56 w-full flex-shrink-0 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col px-6 py-6">
                {/* Title */}
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  {post.title}
                </h3>

                {/* Date | Category */}
                <p className="mt-2 text-[13px] font-semibold text-[var(--dark-pink)]">
                  {post.date} | {post.category.replace(/\s*\|\s*/g, ", ")}
                </p>

                {/* Excerpt */}
                <p className="mt-3 flex-1 text-[13.5px] leading-7 text-slate-600">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-5 text-[13.5px] font-extrabold text-[var(--dark-pink)] hover:underline"
                >
                  read more
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
     {/* ── Multi-color Wave ── */}
        <div className="relative -mt-1 overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="block w-full"
            style={{ height: "clamp(60px, 8vw, 120px)" }}
          >
            <rect width="1440" height="120" fill="#ffffff" />
            <path
              d="M0,20 C300,80 700,0 1000,50 C1200,80 1350,20 1440,40 L1440,120 L0,120 Z"
              fill="var(--light-orange)"
              opacity="0.5"
            />
            <path
              d="M0,45 C200,10 500,75 800,35 C1050,5 1280,65 1440,30 L1440,120 L0,120 Z"
              fill="var(--mid-orange)"
              opacity="0.7"
            />
            <path
              d="M0,65 C250,30 600,90 900,55 C1100,30 1300,75 1440,55 L1440,120 L0,120 Z"
              fill="var(--dark-orange)"
            />
          </svg>
        </div>
    </>
  )
}

export default BlogList