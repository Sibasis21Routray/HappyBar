import React from "react";

export default function BeingSocial() {
    return (
        <div className="w-full overflow-hidden flex justify-center bg-white">
            <div className="w-full max-w-9xl mx-auto">
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 md:py-16 bg-white">
                    {/* ── Title with underline (fits content) ── */}
                    <div className="mb-8 sm:mb-10 md:mb-12 text-center">
                        <div className="inline-flex flex-col items-center" style={{ width: "fit-content", margin: "0 auto" }}>
                            <h1
                                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                                style={{ fontFamily: "Oswald, sans-serif" }}
                            >
                                <span style={{ color: "var(--text-purple-dark)" }}>Being </span>
                                <span style={{ color: "var(--text-yellow)" }}>Social</span>
                            </h1>
                            <div
                                className="-mt-2"
                                style={{
                                    height: "6px",
                                    width: "100%",
                                    backgroundImage: "radial-gradient(circle, var(--text-purple-dark) 3px, transparent 1.5px)",
                                    backgroundSize: "10px 6px",
                                }}
                            />
                        </div>
                    </div>

                    {/* ── No Posts Message ── */}
                    <div className="text-center ">
                        <p className="text-gray-500 text-base  py-5 mx-7">
                            No posts to display. The specified resources might be empty, or there could be set filters not satisfying any post.
                        </p>

                        <span className="mt-15 inline-flex items-center gap-1.5 bg-gray-100 border border-gray-200 rounded-full px-3.5 py-1.5 text-sm text-gray-500 font-medium">
                            <svg className="w-[15px] h-[15px]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
                                <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Free Social Feed Widget
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}