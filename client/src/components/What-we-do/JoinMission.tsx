import { use, useState } from "react";
import { ArrowBigRight, ArrowRight, ArrowRightIcon, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type ArrowButtonProps = {
  label: string;
  filled: boolean;
};

function ArrowButton({ label, filled }: ArrowButtonProps) {
  const [hovered, setHovered] = useState(false);
  

  const baseStyle = {
    borderRadius: "999px",
    padding: "18px 48px",
    fontSize: "0.85rem",
    letterSpacing: "0.12em",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: hovered ? "10px" : "0px",
    transition: "all 0.25s ease",
    fontWeight: 900,
    textTransform: "uppercase",
    ...(filled
      ? {
          backgroundColor: "#E07840",
          border: "none",
          color: "#ffffff",
          opacity: hovered ? 0.92 : 1,
        }
      : {
          backgroundColor: hovered ? "#E07840" : "transparent",
          border: hovered ? "none" : "2.5px solid #E07840",
          color: hovered ? "#ffffff" : "#E07840",
        }),
  };

  return (
    <button
      style={baseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          overflow: "hidden",
          width: hovered ? "20px" : "0px",
          opacity: hovered ? 1 : 0,
          transition: "width 0.25s ease, opacity 0.2s ease",
        }}
      >
        <ChevronRight size={18} strokeWidth={2.5} />
      </span>
    </button>
  );
}

export default function JoinMission() {
  const navigate=useNavigate();
  return (
    <div
      className="w-full py-16 px-6 flex flex-col items-center justify-center text-center rounded-t-2xl"
      style={{ background: "#6e2050" }}
    >
      <h2
        className="text-white font-semibold mb-12 leading-relaxed"
        style={{
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          maxWidth: "1000px",
         
        }}
      >
        Join our mission. Volunteer, Donate,
       
        Advocate. Get Started Today.
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        <div> <ArrowButton label="Browse Causes" filled={true} /></div>
        <div onClick={()=>navigate("/get-involved")}><ArrowButton label="Get Involved" filled={false} /></div>
      </div>
    </div>
  );
}