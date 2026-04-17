import { useNavigate } from "react-router-dom";
import children from "../../assets/children.jpg";

export default function Hero() {
  const navigate=useNavigate();
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-full max-w-9xl">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[520px]">

          {/* ── Left: Image overlapping dark purple bar ── */}
          <div className="relative lg:flex-shrink-0 w-full lg:w-1/2">
            {/* Dark purple bar — top portion only */}
            <div
              className="absolute top-0 left-0 right-0"
              style={{ height: 190, background: "var(--dark-purple)" }}
            />
            {/* Image sits over the bar, indented from left edge */}
            <div className="relative z-10 lg:pl-20 pl-4 pr-4 md:pr-0 pt-6 pb-10">
              <img
                src={children}
                alt="Happy child enjoying nutritious Happy Bar"
                className="w-full object-cover object-top rounded-4xl"
              />
            </div>
          </div>

          {/* ── Right: Dark purple title bar + body ── */}
          <div className="flex-1 flex flex-col w-full lg:w-1/2">

            {/* Dark purple title bar — centered */}
            <div
              className="flex items-center justify-center bg-transparent lg:bg-[#823775] lg:h-50"
              style={{ flexShrink: 0 }}
            >
              <h1
                className="text-black font-bold tracking-tight text-center px-4 text-5xl md:text-5xl lg:text-7xl"
                style={{ lineHeight: 1.1 }}
              >
                What We Do
              </h1>
            </div>

            <div className="absolute right-0  overflow-hidden w-28 h-30">
  <img
    src="https://happybarnutrition.org/wp-content/uploads/2024/05/BOOING-PEEK.gif"
    alt="Duck Peek"
    className="w-32 h-auto animate-peek"
  />
</div>




            {/* Body — white, centred */}
            <div
              className="flex flex-col justify-center items-center text-center py-10 sm:py-4 px-4 sm:px-6 lg:px-10"
              style={{ flex: 1 }}
            >
              <p
                className="font-semibold text-gray-700 mb-6 sm:mb-8 text-xl md:text-xl lg:text-2xl max-w-xl mt-0 lg:mt-8 "
             
              >
                TASTY, HEALTHY PROTEIN-RICH ENERGY BARS FOR UNDERNOURISHED KIDS
              </p>
              
              <div
                className="leading-tight mb-6 sm:mb-8 max-w-3xl space-y-4"
                style={{ fontSize: "clamp(1rem, 3vw, 1.18rem)", color: "#1a1a1a" }}
              >
                <p>
                  Almost half of all childhood deaths globally are related to malnutrition. The diet of the poorer population is high in carbohydrates and low in protein leading to stunting, suboptimal neurological and intellectual development and inability to repair tissue.
                </p>
                <p>
                  Proteins are the building blocks of all cells and are critical for production of antibodies, hormones, enzymes and even connective tissue. It helps store amino acids, helps in muscle movement, and is the vehicle to transport substances within the body. Adding protein is always beneficial to a substandard diet at any age.
                </p>
                <p>
                  Research has proved time and again that there is a very strong relationship between Health, Nutrition and Education and a lack in any one field affects the other two factors. In our country we have a number of organisations working among children and their focus exclusively is on Education or Health, with little or no attention being paid to the nutrition of the child.
                </p>
              </div>

              <p
                className="font-bold max-w-lg text-sm sm:text-base"
                style={{ color: "var(--link-blue)", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", lineHeight: 1.5 }}
              >
                <span onClick={()=>{navigate("/")}} className="hover:underline transition cursor-pointer ">Happy Bar Nutrition</span>{" "}
                <span style={{ color: "var(--text-purple)" }}>Inc. (est. 2016) is a US 501(c)(3) non-profit organisation</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}