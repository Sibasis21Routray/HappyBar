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

export default function OurCausesCard() {
  const titleRef = useRef(null);

  return (
    <div
      className="w-full min-h-screen py-16 px-4 lg:px-18 bg-[#3a0024]"
    //   style={{ background: "var(--dark-pink)" }}
    >
      <div className="max-w-9xl mx-auto">

        {/* ── Heading ── */}
        <div className="flex justify-center mb-16">
          <div style={{ width: "fit-content", textAlign: "center" }}>
            <h2
              ref={titleRef}
              className="font-black leading-tight text-5xl md:text-6xl lg:text-7xl"
              style={{ color: "#ffffff",  }}
            >
              Our{" "}
              <span style={{ color: "var(--text-yellow, #D4A017)" }}>Causes</span>
            </h2>
            <div
              className="-mt-2"
              style={{
                height: "6px",
                width: "100%",
                backgroundImage:
                  "radial-gradient(circle, #ffffff 3px, transparent 1.5px)",
                backgroundSize: "10px 6px",
              }}
            />
          </div>
        </div>

        {/* ── Four-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
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
  className="mb-6 w-[145px] h-[145px] object-contain"
  style={{
    filter: "sepia(1) saturate(2) hue-rotate(290deg)"
  }}
/>

              {/* Card title with dotted underline */}
              <div className="" style={{ width: "fit-content", margin: "0 auto 12px" }}>
                <h3
                  className="font-bold text-lg uppercase leading-tight"
                  style={{
                    color: "#ffffff",
                    textAlign: "center",
                  }}
                >
                  {cause.title.map((line, j) => (
                    <span key={j} className="">{line}</span>
                  ))}
                </h3>
               
              </div>

              {/* Body text */}
              <p className=" text-white text-lg  text-justify"
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