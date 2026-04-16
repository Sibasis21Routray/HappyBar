import React, { useEffect, useRef } from "react";

const RealChange: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <>
    <section
      ref={sectionRef}
      className="w-full px-12 md:px-20 py-16 flex flex-col items-center gap-2"
      style={{ background: "#ffffff" }}
    >
      {/* ── Title ── */}
      <div style={{ textAlign: "center" }}>
        <h2
          className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight"
          style={{ color: "var(--text-purple-dark)" }}
        >
          <div>Make A <span style={{ color: "var(--text-yellow)" }}>Real Change</span> In Someone's Life</div>
           <div
          style={{
            height: "6px",
            width: "100%",
            marginTop: "-4px",
            backgroundImage:
              "radial-gradient(circle, #6B2A6B 3px, transparent 1.5px)",
            backgroundSize: "10px 6px",
          }}
        />
         
        </h2>
       
       
      </div>

      {/* ── Subtitle ── */}
      <p style={{ color: "#555", fontSize: "16px", margin: "10px" }}>
        Take the first step by watching these videos
      </p>

      {/* ── Main YouTube Video ── */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          // borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        }}
      >
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/Q92zJDVfLrE"
            title="Feeding children in under-privileged societies"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      </div>

    </section>
     
    </>
  );
};

export default RealChange;