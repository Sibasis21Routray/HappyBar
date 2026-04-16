import { Link, useNavigate, useParams } from "react-router-dom"
import { blogPosts, ContentBlock } from "./blogData"

const renderBlock = (block: ContentBlock, idx: number) => {
  switch (block.type) {
    case "text":
      return (
        <p key={idx} className="text-[20px] leading-relaxed text-stone-700">
          {block.content}
        </p>
      )
    case "bold":
      return (
        <p key={idx} className="text-[16px] leading-relaxed font-bold text-stone-900">
          {block.content}
        </p>
      )
    case "image":
      return (
        <img
          key={idx}
          src={block.src}
          alt={block.alt}
          className="w-150 rounded-xl shadow-md my-2"
        />
      )
    case "link":
      return (
        <p key={idx} className="mt-2">
          {block.prefix && (
            <span className="text-sm text-stone-500">{block.prefix}</span>
          )}
          <Link
            to={block.href}
            className="text-sm font-bold text-[#f92c8e] hover:underline"
          >
            {block.label}
          </Link>
        </p>
      )
    default:
      return null
  }
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)
  const navigate = useNavigate();

  if (!post) {
    return (
      <div className="w-full bg-white py-24 text-center">
        <p className="text-xl font-semibold text-stone-900">Blog post not found.</p>
        <Link to="/blog" className="mt-4 inline-block text-[#f92c8e] hover:underline">
          Back to blog
        </Link>
      </div>
    )
  }

  // Get current post index and previous/next posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <div className="w-full bg-white">

      {/* ── Wave Header ── */}
      <div
        className="relative overflow-hidden text-center px-6 pt-14 pb-32"
        style={{ background: "#29abe2" }}
      >
        <h1
          className="relative z-10 text-4xl md:text-6xl font-black text-white leading-snug"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {post.title}
        </h1>
        <svg
          className="absolute bottom-0 left-0 w-full"
          style={{ height: "110px", display: "block" }}
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,110 Q300,10 1440,0 L1440,110 Z"  fill="#a8ddf0" opacity="0.55" />
          <path d="M0,110 Q300,35 1440,18 L1440,110 Z" fill="#c9ecf8" opacity="0.6" />
          <path d="M0,110 Q300,62 1440,42 L1440,110 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ── Page Content ── */}
      <div className="mx-auto max-w-5xl px-8 pb-24">

        {/* Hero image + Meta */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px] -mt-16 relative z-10 items-start">
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]"
          />
          <div className="flex flex-col gap-5 pt-24">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 opacity-40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              <span className="text-sm font-semibold text-[#f92c8e]">{post.category}</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 opacity-40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              <span className="text-sm font-semibold text-[#f92c8e]">0 Comments(s)</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 opacity-40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <span className="text-sm font-semibold text-[#f92c8e]">{post.date}</span>
            </div>
          </div>
        </div>

        {/* ── Dynamic Body Blocks ── */}
        <article className="mt-12 space-y-4 font-serif text-stone-800">
          {post.blocks.map((block, idx) => renderBlock(block, idx))}
          <div className="flex flex-row justify-between mt-8 pt-4 border-t border-stone-200">
            {previousPost && (
              <button
                onClick={() => navigate(`/blog/${previousPost.slug}`)}
                className="group flex items-center gap-2 text-sm font-semibold text-[#f92c8e] hover:cursor-pointer"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span >Prev: {previousPost.title}</span>
              </button>
            )}
            {nextPost && (
              <button
                onClick={() => navigate(`/blog/${nextPost.slug}`)}
                className="group flex items-center gap-2 text-sm font-semibold text-[#f92c8e] hover:cursor-pointer ml-auto"
              >
                <span>Next: {nextPost.title}</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </article>

        <hr className="border-stone-200 mt-10" />

        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2
              className="text-4xl font-black text-stone-900 mb-8"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              You May Also Like...
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedPosts.map((rp) => (
                <div
                  key={rp.slug}
                  onClick={() => navigate(`/blog/${rp.slug}`)}
                  className="block rounded-2xl bg-white border border-purple-50 shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer"
                >
                  <img
                    src={rp.image}
                    alt={rp.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 space-y-2">
                    <h3
                      className="text-base font-extrabold text-stone-900 leading-snug"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      {rp.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#f92c8e]">{rp.date}</p>
                    <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
                      {rp.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default BlogDetail