import React from "react";

export default function Hero() {
    return (
        <>
        <div className="bg-white min-h-screen py-12 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <div style={{ width: "fit-content", textAlign: "center" }}>
                        <h1 className="font-black" style={{ fontSize: "3.4rem", margin: 0 }}>
                            <span style={{ color: "var(--dark-pink, #4a2a7a)" }}>Privacy</span>{" "}
                            <span style={{ color: "var(--button-yellow, #D4A017)" }}>Policy</span>
                        </h1>
                        <div
                            style={{
                                //marginTop: "6px",
                                height: "6px",
                                width: "100%",
                                backgroundImage:
                                    "radial-gradient(circle, var(--dark-pink, #4a2a7a) 3px, transparent 1.5px)",
                                backgroundSize: "10px 6px, 10px 6px",
                                backgroundPosition: "0 0, 5px 0",
                            }}
                        />
                    </div>
                </div>

                {/* Effective Date */}
                <p className="font-bold mb-8" style={{ color: "#1a1a1a" }}>
                    Effective Date: 14 May 2024
                </p>

                {/* Introduction */}
                <Section title="Introduction">
                    <p>
                        Welcome to{" "}
                        <a href="/"  style={{ color: "var(--link-blue, #4a2a7a)" }}>
                            Happy Bar Nutrition
                        </a>{" "}
                        Inc. We are committed to protecting your privacy and ensuring you have a positive
                        experience on our website. This Privacy Policy applies to our website{" "}
                        <a href="/"  style={{ color: "var(--link-blue, #4a2a7a)" }}>
                            https://www.happybarnutrition.org
                        </a>{" "}
                        and covers how we collect, use, disclose, and store your personal information.
                    </p>
                </Section>

                {/* Information We Collect */}
                <Section title="Information We Collect">
                    <p>
                        1. <strong>Personal Information</strong>: We collect personal information that you
                        voluntarily provide to us. This may include your name, email address, telephone number,
                        and mailing address when you donate, sign up for our newsletter, or participate in our
                        events.
                    </p>
                    <p className="mt-4">
                        2. <strong>Cookies and Tracking Technologies</strong>: We use cookies and other
                        tracking technologies to collect information about your usage of our website, including
                        browsing behavior and engagement with our content.
                    </p>
                    <p className="mt-4">
                        3. <strong>Donation Information</strong>: When you make a donation, we collect payment
                        information, which may be processed by a third-party payment processor.
                    </p>
                </Section>

                {/* How We Use Your Information */}
                <Section title="How We Use Your Information">
                    <ul className="space-y-1">
                        <li>– To process and respond to your donations and provide you with information about our work.</li>
                        <li>– To communicate with you about updates, upcoming events, and other information related to our charity.</li>
                        <li>– To improve our website and tailor it to your preferences.</li>
                    </ul>
                </Section>

                {/* How We Share Your Information */}
                <Section title="How We Share Your Information">
                    <p>
                        We do not sell, rent, or lease your personal information to third parties. Your
                        information may be shared with third-party service providers to perform services on our
                        behalf, such as payment processing and website analytics. These third parties are
                        prohibited from using your personal information for any purpose other than to provide
                        this assistance and are obligated to protect your information.
                    </p>
                </Section>

                {/* Security */}
                <Section title="Security of Your Information">
                    <p>
                        We take reasonable steps to help protect your personal information in an effort to
                        prevent loss, misuse, and unauthorized access, disclosure, alteration, and destruction.
                        We follow industry standards to protect the personal information submitted to us.
                    </p>
                </Section>

                {/* Your Rights */}
                <Section title="Your Rights and Choices">
                    <p>
                        You have the right to access, correct, or delete your personal information. You can
                        also opt out of receiving marketing communications from us at any time by using the
                        unsubscribe link in our emails or contacting us directly.
                    </p>
                </Section>

                {/* Changes */}
                <Section title="Changes to This Privacy Policy">
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes
                        by posting the new Privacy Policy on this page. We encourage you to review this Privacy
                        Policy periodically for any changes.
                    </p>
                </Section>

                {/* Contact Us */}
                <Section title="Contact Us">
                    <p>
                        If you have any questions about this Privacy Policy or our privacy practices, please
                        contact us at:
                    </p>
                    <p className="mt-4">
                        <strong>Email</strong>:{" "}
                        <a
                            href="mailto:info@happybarnutrition.org"
                            className="hover:underline"
                            style={{ color: "var(--dark-pink, #4a2a7a)" }}
                        >
                            info@happybarnutrition.org
                        </a>
                    </p>
                    <p className="mt-4">
                        <strong>Mailing Address</strong>:
                    </p>
                    <p className="mt-1">
                        <a href="/"  style={{ color: "var(--link-blue, #4a2a7a)" }}>
                            Happy Bar Nutrition
                        </a>{" "}
                        Inc.
                        <br />
                        PO Box 2042, Thousand Oaks, CA 91358
                    </p>
                </Section>

            </div>
        </div>
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
              fill="var(--light-p4)"
              opacity="0.5"
            />
            <path
              d="M0,45 C200,10 500,75 800,35 C1050,5 1280,65 1440,30 L1440,120 L0,120 Z"
              fill="var(--mid-p4)"
              opacity="0.7"
            />
            <path
              d="M0,65 C250,30 600,90 900,55 C1100,30 1300,75 1440,55 L1440,120 L0,120 Z"
              fill="var(--dark-p4)"
            />
          </svg>
        </div>
</>
    );
}

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="mb-8">
            <h2
                className="font-bold mb-3"
                style={{ color: "var(--dark-pink, #4a2a7a)", fontSize: "1.35rem" }}
            >
                {title}
            </h2>
            <div className="text-gray-800 leading-relaxed text-md">{children}</div>
        </div>
    );
}