// utils/renderBlock.tsx (create this helper file)
import { Link } from "react-router-dom"
import { ContentBlock } from "./blogData"

const processTextWithLinks = (text: string) => {
  // Split the text by "Happy Bar Nutrition" and create an array of parts
  const parts = text.split(/(Happy Bar Nutrition)/g)
  
  return parts.map((part, index) => {
    if (part === "Happy Bar Nutrition") {
      return (
        <Link
          key={index}
          to="/"
          className="text-[#f92c8b] hover:underline font-medium"
        >
          Happy Bar Nutrition
        </Link>
      )
    }
    return part
  })
}

export const renderBlock = (block: ContentBlock, idx: number) => {
  switch (block.type) {
    case "text":
      return (
        <p key={idx} className="text-[20px] leading-relaxed text-stone-700">
          {processTextWithLinks(block.content)}
        </p>
      )
    case "bold":
      return (
        <p key={idx} className="text-[16px] leading-relaxed font-bold text-stone-900">
          {processTextWithLinks(block.content)}
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
            className="text-sm font-bold text-[#f92c8b] hover:underline"
          >
            {block.label}
          </Link>
        </p>
      )
    default:
      return null
  }
}