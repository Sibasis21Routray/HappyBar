import { useState } from "react";
import girl7 from "../../assets/girl7.jpg";
import { useNavigate } from "react-router";

const dotLineStyle: React.CSSProperties = {
  height: "6px",
  width: "100%",
  backgroundImage: "radial-gradient(circle, #3d0a35 3px, transparent 1.5px)",
  backgroundSize: "10px 6px",
  marginTop: "-1px",
};

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
}

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);
  const navigate = useNavigate();

  // Validation functions
  const validateName = (name: string): string => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (name.trim().length > 50) return "Name must be less than 50 characters";
    if (!/^[a-zA-Z\s\-'.]+$/.test(name.trim())) return "Name can only contain letters, spaces, hyphens, apostrophes, and periods";
    return "";
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    if (!emailRegex.test(email.trim())) return "Please enter a valid email address (e.g., name@example.com)";
    if (email.trim().length > 100) return "Email must be less than 100 characters";
    return "";
  };

  const validateMobile = (mobile: string): string => {
    if (!mobile.trim()) return "Mobile number is required";
    const phoneRegex = /^[\+\d\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(mobile.trim())) return "Please enter a valid phone number";
    const digitsOnly = mobile.replace(/\D/g, "");
    if (digitsOnly.length < 10) return "Mobile number must have at least 10 digits";
    if (digitsOnly.length > 15) return "Mobile number must be less than 15 digits";
    return "";
  };

  const validateMessage = (message: string): string => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10) return "Message must be at least 10 characters";
    if (message.trim().length > 1000) return "Message must be less than 1000 characters";
    return "";
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "mobile":
        return validateMobile(value);
      case "message":
        return validateMessage(value);
      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      mobile: validateMobile(form.mobile),
      message: validateMessage(form.message),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error && error.length > 0);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Clear field-specific error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async () => {
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      mobile: true,
      message: true,
    });

    // Validate all fields
    if (!validateForm()) {
      setMessage({ 
        type: "error", 
        text: "Please fix the errors above before submitting." 
      });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: data.message || "Email sent successfully!" });
        setForm({ name: "", email: "", mobile: "", message: "" });
        setErrors({});
        setTouched({});
      } else {
        setMessage({ type: "error", text: data.error || "Failed to send email. Please try again." });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: "error", text: "Failed to send email. Please check if the server is running." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen max-w-9xl mx-auto" style={{ fontFamily: "sans-serif" }}>

      {/* ── Purple top section ── */}
      <div
        className="w-full pb-72 sm:pb-48 md:pb-32 pt-8 sm:pt-12 px-4 relative"
        style={{ backgroundColor: "#d9c8e3" }}
      >
        {/* ── Title ── */}
        <div className="mb-6 sm:mb-8 md:mb-12 text-center px-2">
          <p className="text-xs font-bold tracking-[3px] mb-2" style={{ color: "#b23775" }}>
            CONTACT
          </p>
          <div className="inline-flex flex-col items-center" style={{ width: "fit-content", margin: "0 auto" }}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ fontFamily: "Oswald, sans-serif", color: "#71254c" }}
            >
              Get In Touch
            </h1>
            <div style={dotLineStyle} />
          </div>
          <p
            className="mt-4 text-sm sm:text-base md:text-lg font-semibold max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#3d0a35" }}
          >
            If you're interested in learning about our activities,{" "}
            <span onClick={() => { navigate("/causes") }} style={{ color: "#2eaacc" }} className="hover:cursor-pointer">
              causes
            </span>
            , and partner organizations, or if you'd like to volunteer or donate, please don't hesitate to contact us.
          </p>
        </div>

        {/* ── Image + Form grid ── */}
        <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Image — hidden on very small screens, shown from sm up */}
          <div className="hidden sm:block rounded-2xl overflow-hidden w-full">
            <img
              src={girl7}
              alt="Child in need"
              className="w-full h-56 sm:h-72 md:h-96 object-cover mt-4 md:mt-10 rounded-2xl"
            />
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-12 flex flex-col gap-4 mt-2 md:mt-10">
            {/* Show image inside form card on mobile only */}
            <div className="sm:hidden rounded-xl overflow-hidden mb-2">
              <img
                src={girl7}
                alt="Child in need"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            {/* Name Field */}
            <div>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Name *"
                className={`w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 transition-all ${
                  touched.name && errors.name ? "border-2 border-red-500 focus:ring-red-200" : "focus:ring-purple-200"
                }`}
                style={{ backgroundColor: "#f0eaef", color: "#3d0a35" }}
              />
              {touched.name && errors.name && (
                <p className="text-red-600 text-xs mt-1 ml-2">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="Email Address *"
                className={`w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 transition-all ${
                  touched.email && errors.email ? "border-2 border-red-500 focus:ring-red-200" : "focus:ring-purple-200"
                }`}
                style={{ backgroundColor: "#f0eaef", color: "#3d0a35" }}
              />
              {touched.email && errors.email && (
                <p className="text-red-600 text-xs mt-1 ml-2">{errors.email}</p>
              )}
            </div>

            {/* Mobile Field */}
            <div>
              <input
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                type="tel"
                placeholder="Mobile *"
                className={`w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 transition-all ${
                  touched.mobile && errors.mobile ? "border-2 border-red-500 focus:ring-red-200" : "focus:ring-purple-200"
                }`}
                style={{ backgroundColor: "#f0eaef", color: "#3d0a35" }}
              />
              {touched.mobile && errors.mobile && (
                <p className="text-red-600 text-xs mt-1 ml-2">{errors.mobile}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Message *"
                rows={5}
                className={`w-full px-4 py-3 rounded-xl text-sm outline-none resize-y focus:ring-2 transition-all ${
                  touched.message && errors.message ? "border-2 border-red-500 focus:ring-red-200" : "focus:ring-purple-200"
                }`}
                style={{ backgroundColor: "#f0eaef", color: "#3d0a35" }}
              />
              {touched.message && errors.message && (
                <p className="text-red-600 text-xs mt-1 ml-2">{errors.message}</p>
              )}
            </div>

            {/* Message Display */}
            {message && (
              <div
                className="px-4 py-3 rounded-xl text-sm font-medium"
                style={{
                  backgroundColor: message.type === "success" ? "#d4edda" : "#f8d7da",
                  color: message.type === "success" ? "#155724" : "#721c24",
                  border: `1px solid ${message.type === "success" ? "#c3e6cb" : "#f5c6cb"}`,
                }}
              >
                {message.text}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-7 py-3 rounded-full text-white text-xs font-bold tracking-widest cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#b03070" }}
                onMouseEnter={(e) =>
                  !loading && ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#8a1f55")
                }
                onMouseLeave={(e) =>
                  !loading && ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b03070")
                }
              >
                {loading ? "SENDING..." : "GET IN TOUCH"}
              </button>
            </div>
          </div>
        </div>

        {/* ── Contact info cards ── */}
        <div className="absolute inset-x-0 -bottom-24 sm:-bottom-20 md:-bottom-24 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="bg-white rounded-[32px] p-5 sm:p-8 flex items-start gap-4 shadow-xl border border-slate-100">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-3xl flex items-center justify-center bg-[#f5eef8] text-[#7a5070] shrink-0">
                <img src="https://happybarnutrition.org/wp-content/uploads/2024/03/ngo-icon-16.png" alt="Mail Icon" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-stone-500 mb-1 sm:mb-2">Email</p>
                <p className="text-sm sm:text-base font-semibold text-stone-900 truncate">
                  <a href="mailto:info@happybarnutrition.org" className="text-sky-600 hover:underline">
                    info@happybarnutrition.org
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-5 sm:p-8 flex items-start gap-4 shadow-xl border border-slate-100">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-3xl flex items-center justify-center bg-[#e5f3eb] text-[#3b6258] shrink-0">
               <img src="https://happybarnutrition.org/wp-content/uploads/2024/03/ngo-icon-17.png" alt="Location Icon" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-500 mb-1 sm:mb-2">Address</p>
                <p className="text-sm sm:text-base font-semibold text-stone-900 mb-1">
                  <a href="#" className="text-sky-600 hover:underline">Happy Bar Nutrition Inc.</a>
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  1177 Burtonwood Ave,<br />Thousand Oaks, CA 91360
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── White bottom spacer ── */}
      <div className="w-full px-4 pb-24 bg-white pt-36 sm:pt-28 md:pt-32">
        <div className="max-w-5xl mx-auto" />
      </div>
    </div>
  );
}