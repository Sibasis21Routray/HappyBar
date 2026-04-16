import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <>
        <div className="bg-[#E9F2FA] min-h-screen py-12 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Logo / Header */}
                <div className="flex justify-center mb-10">
                    <div style={{ width: "fit-content", textAlign: "center" }}>
                        <h1 className="font-black" style={{ fontSize: "3.4rem", margin: 0 }}>
                            <span style={{ color: "var(--dark-pink, #4a2a7a)" }}>Terms</span>{" "}
                            <span style={{ color: "var(--button-yellow, #D4A017)" }}>of Use</span>
                        </h1>
                        <div
                            style={{
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

                {/* Agreement to Terms */}
                <Section title="Agreement to Terms">
                    <p>
                        By accessing or using our website, located at{" "}
                        <Link to="/" style={{ color: "var(--link-blue, #4a2a7a)" }}>
                            https://www.happybarnutrition.org
                        </Link>{" "}
                        ("Site"), you agree to be bound by these Terms of Use and all terms incorporated by 
                        reference. If you do not agree to all of these terms, do not use our Site.
                    </p>
                </Section>

                {/* Use of the Site */}
                <Section title="Use of the Site">
                    <p className="font-semibold mt-2">a) Eligibility:</p>
                    <p>
                        You must be at least 18 years old or the age of majority in your jurisdiction, 
                        whichever is higher, to use our Site. By using our Site, you represent and warrant 
                        that you meet this requirement.
                    </p>
                    
                    <p className="font-semibold mt-4">b) Personal Use:</p>
                    <p>
                        The Site is for personal, non-commercial use only. You may not use the Site for 
                        commercial purposes without obtaining prior written consent from us.
                    </p>
                    
                    <p className="font-semibold mt-4">c) Prohibited Activities:</p>
                    <p>
                        You may not access or use the Site for any purpose other than that for which we make 
                        it available. Prohibited activities include:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Engaging in any automated use of the system, such as using scripts to send comments or messages.</li>
                        <li>Interfering with, disrupting, or creating an undue burden on the Site or the networks connected to the Site.</li>
                        <li>Attempting to impersonate another user or person.</li>
                    </ul>
                </Section>

                {/* Intellectual Property Rights */}
                <Section title="Intellectual Property Rights">
                    <p>
                        The content on our Site, including text, graphics, logos, images, as well as the 
                        compilation thereof, and any software used on the Site, is the property of Happy Bar 
                        Nutrition, Inc. or its suppliers and protected by copyright and intellectual property 
                        laws. You are granted a limited license to access and use the Site and to download or 
                        print a copy of any portion of the content to which you have properly gained access 
                        solely for your personal, non-commercial use.
                    </p>
                </Section>

                {/* User Contributions */}
                <Section title="User Contributions">
                    <p>
                        The Site may invite you to chat, contribute to, or participate in blogs, message boards, 
                        online forums, and other functionality, and may provide you with the opportunity to 
                        create, submit, post, display, transmit, perform, publish, distribute, or broadcast 
                        content and materials to us or on the Site, including but not limited to text, writings, 
                        video, audio, photographs, graphics, comments, suggestions, or personal information or 
                        other material (collectively, "Contributions"). Contributions may be viewable by other 
                        users of the Site and through third-party websites. As such, any Contributions you 
                        transmit may be treated as non-confidential and non-proprietary.
                    </p>
                    <p className="mt-4">
                        When you create or make available any Contributions, you thereby represent and warrant that:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>
                            The creation, distribution, transmission, public display, or performance, and the 
                            accessing, downloading, or copying of your Contributions do not and will not infringe 
                            the proprietary rights, including but not limited to the copyright, patent, trademark, 
                            trade secret, or moral rights of any third party.
                        </li>
                    </ul>
                </Section>

                {/* Third-Party Links & Ads */}
                <Section title="Third-Party Links & Ads">
                    <p>
                        The Site may contain links to third-party websites and services, and/or display 
                        advertisements for third parties. Such Third-Party Links & Ads are not under the control 
                        of Happy Bar Nutrition, Inc., and Happy Bar Nutrition, Inc. is not responsible for any 
                        Third-Party Links & Ads. Happy Bar Nutrition, Inc. provides access to these Third-Party 
                        Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, 
                        warrant, or make any representations with respect to Third-Party Links & Ads.
                    </p>
                </Section>

                {/* Modifications to the Terms */}
                <Section title="Modifications to the Terms">
                    <p>
                        We may revise these Terms from time to time. The most current version will always be 
                        posted on our Site. By continuing to access or use our Site after revisions become 
                        effective, you agree to be bound by the revised terms. If you do not agree to the new 
                        terms, you are no longer authorized to use the Site.
                    </p>
                </Section>

                {/* Contact Us */}
                <Section title="Contact Us">
                    <p>
                        If you have any questions about these Terms of Use, please contact us at:
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
                        <Link to="/" style={{ color: "var(--link-blue, #4a2a7a)" }}>
                            Happy Bar Nutrition
                        </Link>{" "}
                        Inc.
                        <br />
                        PO Box 2042, Thousand Oaks, CA 91358
                    </p>
                </Section>

            </div>
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