import report1 from "../../assets/report1.png";
import report2 from "../../assets/report2.png";
import report3 from "../../assets/report3.png";
import report4 from "../../assets/report4.png";
import report5 from "../../assets/report5.png";

// Import PDF files from assets folder
import pdf2023 from "../../assets/HBN-Annual-Report-2023.pdf";
import pdf2022 from "../../assets/HBN-Annual-Report-2022.pdf";
import pdf2021 from "../../assets/HBN-Annual-Report-2021.pdf";
import pdf2020 from "../../assets/HBN-Annual-Report-2020.pdf";
import pdf2019 from "../../assets/HBN-Annual-Report-2019.pdf";

const reports = [
  {
    year: "2023",
    title: "2023 Annual Report",
    image: report1,
    pdf: pdf2023,
  },
  {
    year: "2022",
    title: "2022 Annual Report",
    image: report2,
    pdf: pdf2022,
  },
  {
    year: "2021",
    title: "2021 Annual Report",
    image: report3,
    pdf: pdf2021,
  },
  {
    year: "2020",
    title: "2020 Annual Report",
    image: report4,
    pdf: pdf2020,
  },
  {
    year: "2019",
    title: "2019 Annual Report",
    image: report5,
    pdf: pdf2019,
  },
];

export default function AnnualReport() {
  const openPDF = (pdfFile: string) => {
    // For mobile devices, using window.open with _blank works better
    window.open(pdfFile, '_blank');
  };

  return (
    <section className="bg-[var(--dark-blue)] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8 lg:py-10">
      {/* Grid container with 1 column on mobile, 2 on sm, 3 on md, 4 on lg, 5 on xl */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-4 md:gap-5">
        {reports.map((r) => (
          <div
            key={r.year}
            onClick={() => openPDF(r.pdf)}
            className="flex flex-col cursor-pointer hover:-translate-y-1 transition-transform duration-200"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={r.image}
                alt={r.title}
                className="w-full aspect-[3/4] object-contain block"
              />
            </div>
            
            {/* Text always below image */}
            <p className="text-center text-white text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide hover:text-yellow-300 transition-colors mt-3">
              {r.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}