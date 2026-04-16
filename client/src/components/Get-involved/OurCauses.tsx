import { useRef } from "react";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const causes = [
  {
    icon: icon1,
    marginTop: 0,
    title: ["Children with Cancer,", "HIV and Other Severe", "Illnesses"],
    text: "We provide protein-rich Happy Bars to children battling cancer, HIV, and other severe illnesses. Our nutritious Happy Bars are specially designed to meet the dietary needs of young patients, helping to sustain their strength and resilience during treatment. By delivering all-important protein and vitamins, we aim to bring a small but significant comfort to these brave children, supporting their health and well-being during their most challenging times.",
  },
  {
    icon: icon2,
    marginTop: 80,
    title: ["Abandoned Children & Children in Orphanages"],
    text: "We are committed to aiding abandoned children and those living in orphanages by providing them with protein-rich Happy Bars. These nutritious snacks are designed to fill crucial dietary gaps and support the health and development of these vulnerable young individuals. By delivering these essential bars, we aim to offer not just nourishment, but also a symbol of hope and care, reinforcing our commitment to improving the lives of children in need.",
  },
  {
    icon: icon3,
    marginTop: 0,
    title: ["Schools"],
    text: "We focus on providing Happy Bars to children attending public schools and institutions that are underfunded. These schools often struggle with limited resources, which can affect the quality of education and nutrition the students receive. By supplying these nutritious snacks, we aim to support the health and learning capabilities of these children, helping to level the playing field and ensure they have the energy and focus needed to succeed in their studies.",
  },
  {
    icon: icon4,
    marginTop: 0,
    title: ["Children in Slums"],
    text: "Children living in slums face numerous challenges, from inadequate housing and sanitation to limited access to healthcare and education. These conditions can significantly hinder their development and overall well-being. Happy Bar Nutrition focuses on providing these children with our nutritious protein-rich Happy Bar. By addressing this critical need, we aim to improve their chances for a better future and help them rise above the difficult circumstances they face daily.",
  },
];

export default function OurCauses() {
  const titleRef = useRef(null);

  return (
    <div
      className="w-full min-h-screen py-16 lg:px-8"
      style={{ background: "var(--dark-p3)" }}
    >
      <div className=" mx-auto p-12">

        {/* ── Heading ── */}
        <div className="flex justify-center mb-16">
          <div style={{ width: "fit-content", textAlign: "center" }}>
            <h2
              ref={titleRef}
              className="font-black leading-tight text-3xl lg:text-6xl "
              style={{ color: "#ffffff" }}
            >
              Our{" "}
              <span style={{ color: "var(--text-yellow, #D4A017)" }}>Causes</span>
            </h2>
            <div
              className="mt-3"
              style={{
                height: "6px",
                width: "100%",
                backgroundImage:
                  "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
                backgroundSize: "10px 6px",
              }}
            />
          </div>
        </div>

        {/* ── Four-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          {causes.map((cause, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center"
              style={{ marginTop: cause.marginTop }}
            >

              {/* Icon image */}
             <img
  src={cause.icon}
  alt={cause.title.join(" ")}
  className="mb-6 flex-shrink-0"
  style={{
    width: 145,
    height: 145,
    objectFit: "contain",
    filter: "sepia(1) saturate(3) hue-rotate(290deg) brightness(1.05)"
  }}
/>

              {/* Card title with dotted underline */}
              <div style={{ width: "fit-content", margin: "0 auto 12px" }}>
                <h3
                  className="font-bold uppercase leading-snug"
                  style={{
                    color: "#ffffff",
                    fontSize: "1.rem",
                    textAlign: "center",
                  }}
                >
                  {cause.title.map((line, j) => (
                    <span key={j} className="text-xl">{line}</span>
                  ))}
                </h3>
               
              </div>

              {/* Body text */}
              <p className="text-white font-medium"
                style={{
                  fontSize: "1rem",
                  
                  lineHeight: 1.8,
                  textAlign: "justify",
                }}
              >
                {cause.text}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}