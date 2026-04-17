import { Link } from "react-router-dom";
import child1 from "../../assets/child1.1.jpg";
import child2 from "../../assets/child1.2.jpg";

export default function Year2024() {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-12">
      <div className=" mx-auto">

        {/* ── Heading ── */}
        <div className="flex justify-center mb-16">
          <div style={{ width: "fit-content", textAlign: "center" }}>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.2rem)" }}
            >
              <span style={{ color: "var(--text-purple-dark)" }}>Year </span>
              <span style={{ color: "var(--text-yellow)" }}>2024</span>
            </h2>

            {/* Two-color dotted underline */}
            <div className="-mt-2 flex" style={{ width: "100%" }}>
              <div
                style={{
                  flex: 1,
                  height: "6px",
                  backgroundImage: "radial-gradient(circle, var(--text-yellow) 3px, transparent 1.5px)",
                  backgroundSize: "10px 6px",
                }}
              />
              
            </div>
          </div>
        </div>

        {/* ── Three-column layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* Left photo */}
          <div className="flex justify-center md:justify-start items-start mx-10">
            <img
              src={child1}
              alt="Child in poverty"
              className="w-full max-w-md object-cover h-120"
              style={{ borderRadius: "18px", aspectRatio: "3/4" }}
            />
          </div>

          {/* Center text */}
          <div
            className="text-gray-800 text-lg leading-relaxed"
            style={{ lineHeight: 1.85 }}
          >
            <p className="mb-6">
              <Link to="/" style={{ color: "#5bb8d4", fontWeight: 700 }}>Happy Bar Nutrition</Link>{" "}
              Inc has donated over{" "}
              <strong>2.1 million</strong> Happy Bars to undernourished children and elderly
              in poverty since 2014.
            </p>

            <p className="mb-6">
              In 2024, we supported ~
              <strong>
                3,000 children &amp; 100 adults in 14 locations/campaigns
              </strong>{" "}
              covering children in 1 leprosy program, 4 HIV/AIDS orphanages, 10 schools
              for the disadvantaged, 11 cancer and special needs wards for children, and
              several pre-school &amp; kindergarten child care programs for the
              underprivileged.
            </p>

            <p className="font-bold">
              Our goal for 2025 is to donate 500,000 bars.
            </p>
          </div>

          {/* Right photo — offset lower */}
          <div className="flex justify-center md:justify-start md:pt-16 mx-10">
            <img
              src={child2}
              alt="Smiling child"
              className="w-full max-w-md object-cover"
              style={{ borderRadius: "18px", aspectRatio: "3/4" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}