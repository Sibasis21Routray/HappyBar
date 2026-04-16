import React, { useRef, useState } from "react";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";

const RealChange: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentVideo, setCurrentVideo] = useState("srSoRImGc4o");

  // Video options
  const videos = {
    video1: {
      id: "srSoRImGc4o",
      title: "Feeding children in under-privileged societies",
      thumbnail: photo1,
      alt: "Child receiving care"
    },
    video2: {
      id: "Q92zJDVfLrE?si=F76nyd9T4tB-jfIg", // Replace with your second video ID
      title: "Happy children enjoying nutritious meals",
      thumbnail: photo2,
      alt: "Child smiling"
    }
  };

  const handleVideoChange = (videoId: string) => {
    setCurrentVideo(videoId);
    // Scroll to video smoothly when changed (optional)
    const videoElement = document.getElementById('main-video');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <div className="w-full overflow-hidden flex justify-center bg-white">
        <div className="w-full max-w-9xl mx-auto">
          <section
            ref={sectionRef}
            className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 flex flex-col items-center gap-2"
            style={{ background: "#ffffff" }}
          >
            {/* ── Title (centered) ── */}
            <div style={{ textAlign: "center" }}>
              <h2
                className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
                style={{ color: "var(--text-purple-dark)" }}
              >
                <div>
                  Make A <span style={{ color: "var(--text-yellow)" }}>Real Change</span> In Someone's Life
                </div>
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

            {/* ── Subtitle (centered) ── */}
            <p className="text-center text-sm sm:text-base" style={{ color: "#555", fontSize: "16px", marginTop: "14px" }}>
              Take the first step by watching these videos
            </p>

            {/* ── Main YouTube Video (centered) ── */}
            <div className="w-full flex justify-center mt-4" id="main-video">
              <div
                style={{
                  width: "100%",
                  maxWidth: "1100px",
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                }}
              >
                <div style={{ position: "relative", paddingTop: "56.25%" }}>
                  <iframe
                    key={currentVideo}
                    src={`https://www.youtube.com/embed/${currentVideo}`}
                    title={currentVideo === videos.video1.id ? videos.video1.title : videos.video2.title}
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
            </div>

            {/* ── Two Clickable Video Previews Below ── */}
            <div className="w-full flex justify-center">
              <div
                style={{
                  width: "100%",
                  maxWidth: "900px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "16px",
                    width: "50%",
                    maxWidth: "392px",
                    marginTop: "16px",
                    paddingRight: "8px"
                  }}
                >
                  {/* Video 1 Preview */}
                  <div
                    onClick={() => handleVideoChange(videos.video1.id)}
                    style={{
                      // borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: currentVideo === videos.video1.id 
                        ? "0 0 0 3px var(--text-yellow), 0 4px 16px rgba(0,0,0,0.10)" 
                        : "0 4px 16px rgba(0,0,0,0.10)",
                      aspectRatio: "4/3",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      if (currentVideo !== videos.video1.id) {
                        e.currentTarget.style.transform = "scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentVideo !== videos.video1.id) {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)";
                      }
                    }}
                  >
                    <img
                      src={photo1}
                      alt={videos.video1.alt}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    {currentVideo !== videos.video1.id && (
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "48px",
                          height: "48px",
                          backgroundColor: "rgba(0,0,0,0.7)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          pointerEvents: "none",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="white"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                    {currentVideo === videos.video1.id && (
                      <div
                        style={{
                          position: "absolute",
                          top: "8px",
                          right: "8px",
                          backgroundColor: "var(--text-yellow)",
                          color: "#fff",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontWeight: "bold",
                          pointerEvents: "none",
                        }}
                      >
                        PLAYING
                      </div>
                    )}
                  </div>

                  {/* Video 2 Preview */}
                  <div
                    onClick={() => handleVideoChange(videos.video2.id)}
                    style={{
                      // borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: currentVideo === videos.video2.id 
                        ? "0 0 0 3px var(--text-yellow), 0 4px 16px rgba(0,0,0,0.10)" 
                        : "0 4px 16px rgba(0,0,0,0.10)",
                      aspectRatio: "4/3",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      if (currentVideo !== videos.video2.id) {
                        e.currentTarget.style.transform = "scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentVideo !== videos.video2.id) {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)";
                      }
                    }}
                  >
                    <img
                      src={photo2}
                      alt={videos.video2.alt}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    {currentVideo !== videos.video2.id && (
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "48px",
                          height: "48px",
                          backgroundColor: "rgba(0,0,0,0.7)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          pointerEvents: "none",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="white"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                    {currentVideo === videos.video2.id && (
                      <div
                        style={{
                          position: "absolute",
                          top: "8px",
                          right: "8px",
                          backgroundColor: "var(--text-yellow)",
                          color: "#fff",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontWeight: "bold",
                          pointerEvents: "none",
                        }}
                      >
                        PLAYING
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── Multi-color Wave ── */}
      <div className="relative -mt-1 overflow-hidden w-full">
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
            fill="var(--light-pink)"
            opacity="0.5"
          />
          <path
            d="M0,45 C200,10 500,75 800,35 C1050,5 1280,65 1440,30 L1440,120 L0,120 Z"
            fill="var(--mid-pink)"
            opacity="0.7"
          />
          <path
            d="M0,65 C250,30 600,90 900,55 C1100,30 1300,75 1440,55 L1440,120 L0,120 Z"
            fill="var(--dark-pink)"
          />
        </svg>
      </div>
    </>
  );
};

export default RealChange;