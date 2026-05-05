interface Cause {
  id: number;
  title: string;
  description: string;
  amount: string;
  image: string;
}
const stripeLink188 = import.meta.env.VITE_STRIPE_USD_188_PER_YEAR;
const paypalLink188 = import.meta.env.VITE_PAYPAL_USD_188_PER_YEAR;
const stripeLink94 = import.meta.env.VITE_STRIPE_USD_94_PER_YEAR;
const paypalLink94 = import.meta.env.VITE_PAYPAL_USD_94_PER_YEAR;

const causes: Cause[] = [
  {
    id: 1,
    title: "THE CAUSE: KIDS WITH CANCER",
    description: "Help small children fight cancer for just",
    amount: "US$ 188 a year",
    image: "https://happybarnutrition.org/wp-content/uploads/2024/06/baby-joshua.webp",
  },
  {
    id: 2,
    title: "THE CAUSE: KIDS WITH LEPROSY",
    description: "Help children with leprosy for just",
    amount: "US$ 94 a year",
    image: "https://happybarnutrition.org/wp-content/uploads/2024/06/girl-with-leprosy-2-scaled.webp",
  },
  {
    id: 3,
    title: "THE CAUSE: KIDS WITH SCID",
    description: "Help small children fight cancer for just",
    amount: "US$ 188 a year",
    image: "https://happybarnutrition.org/wp-content/uploads/2024/06/baby-joshua-2-1.webp",
  },
  {
    id: 4,
    title: "THE CAUSE: KIDS IN SCHOOL",
    description: "Help needy kids in school for just",
    amount: "US$ 188 a year",
    image: "https://happybarnutrition.org/wp-content/uploads/2024/06/many-kids-in-classroom-480x360.webp",
  },
  {
    id: 5,
    title: "THE CAUSE: MALNOURISHED KIDS",
    description: "Help kids fight malnourishment for just",
    amount: "US$ 94 a year",
    image: "https://happybarnutrition.org/wp-content/uploads/2024/06/kid-with-tumbler-in-hand-and-happy-bar-e1715395669467-480x513.webp",
  },
  {
    id: 6,
    title: "THE CAUSE: KIDS IN POVERTY",
    description: "Help lift kids out of poverty for just",
    amount: "US$ 94 a year",
    image: "https://happybarnutrition.org/wp-content/uploads/2024/06/kids-in-slum-480x327.webp",
  },
];

// PayPal "P" icon lettermark
const PayPalIcon = () => (
  <svg width="18" height="22" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.5 5.5C21.8 7 22.2 9 21.8 11.5c-1 5.8-4.4 7.8-8.8 7.8H11l-1.5 9.5H5.3L9 2h7.5c2 0 3.4.5 4 1.5z"
      fill="#1a1a2e"
    />
    <path
      d="M9.5 16.5h2.5c3.2 0 5.8-1.3 6.6-5.2.6-2.8-.2-4.3-1.6-5.1C16.3 6 15 5.8 13.5 5.8H10L8 18h1.5z"
      fill="#1a1a2e"
      opacity="0.4"
    />
  </svg>
);

// Stripe "S" lettermark
const StripeIcon = () => (
  <svg width="16" height="22" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text
      x="0"
      y="20"
      fontFamily="Arial Black, sans-serif"
      fontWeight="900"
      fontSize="22"
      fill="white"
    >
      S
    </text>
  </svg>
);

// Proper PayPal P logo path
const PayPalP = () => (
  <svg width="20" height="24" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M43.5 11.5C46 14.5 46.8 18.5 45.8 23.5C43.2 37.5 34 40 24 40H19.5L16 58H6L14 4H29C36 4 41 6.5 43.5 11.5Z"
      fill="#1a1a2e"
    />
    <path
      d="M14 37H22C30 37 37 33.5 39 24.5C40.5 18.5 38.5 15 36 13C34 11.5 31 11 28 11H18L13 40L14 37Z"
      fill="#003087"
      opacity="0.35"
    />
  </svg>
);

function DonateButtons({ causeId }: { causeId: number }) {
  // Determine which payment links to use based on the cause's amount
  const isAmount188 = causes.find(c => c.id === causeId)?.amount.includes("188");
  const stripeUrl = isAmount188 ? stripeLink188 : stripeLink94;
  const paypalUrl = isAmount188 ? paypalLink188 : paypalLink94;

  const handlePaypalDonate = () => {
    if (paypalUrl) {
      window.open(paypalUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.error('PayPal donation URL not configured for this amount');
      alert('PayPal donation link is not configured. Please contact the administrator.');
    }
  };

  const handleStripeDonate = () => {
    if (stripeUrl) {
      window.open(stripeUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.error('Stripe donation URL not configured for this amount');
      alert('Stripe donation link is not configured. Please contact the administrator.');
    }
  };

  return (
    <div className="flex gap-3 mt-5 justify-center flex-wrap">
      {/* PayPal donate button */}
      <button
        onClick={handlePaypalDonate}
        className="flex items-center gap-2 rounded-2xl cursor-pointer hover:opacity-90 transition-opacity bg-[var(--button-yellow)] hover:bg-[var(--dark-p2)]"
        style={{
          //backgroundColor: "#f5a623",
          padding: "12px 24px",
          border: "none",
        }}
      >
        <span
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "16px",
            fontWeight: "700",
            color: "#1a1a2e",
            letterSpacing: "0.02em",
          }}
        >
          Donate
        </span>
        {/* PayPal P icon SVG */}
        <svg width="22" height="26" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M38 6H16C14 6 12.5 7.2 12.2 9.2L6 46.8C5.8 48.2 6.8 49.5 8.2 49.5H16.5C17 49.5 17.4 49.1 17.5 48.6L19.2 38H26C34.5 38 40.5 34 42.5 26C43.5 22 43 18.5 41 16C39.2 13.7 36.2 12 32 12"
            fill="#1a1f71"
          />
          <path
            d="M44 16C46 18.5 46.5 22 45.5 26.5C43.5 35 37 38.5 28 38.5H22L20 50H28.5L30 43H35C42 43 47 39.5 48.8 32.5C49.8 28.5 49 25 47 22.5"
            fill="#009cde"
            opacity="0.9"
          />
        </svg>
      </button>

      {/* Stripe donate button */}
      <button
        onClick={handleStripeDonate}
        className="flex items-center gap-2 rounded-2xl cursor-pointer hover:opacity-90 transition-opacity bg-[var(--button-blue)] hover:bg-[var(--dark-p2)]"
        style={{
          //backgroundColor: "#6772e5",
          padding: "12px 24px",
          border: "none",
        }}
      >
        <span
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "16px",
            fontWeight: "700",
            color: "#ffffff",
            letterSpacing: "0.02em",
          }}
        >
          Donate
        </span>
        {/* Stripe S icon */}
        <svg width="18" height="26" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text
            x="0"
            y="32"
            fontFamily="'Arial Black', 'Helvetica Neue', sans-serif"
            fontWeight="900"
            fontSize="34"
            fill="white"
          >
            S
          </text>
        </svg>
      </button>
    </div>
  );
}

function CauseCard({ cause }: { cause: Cause }) {
  return (
    <div className="flex flex-col">
      <div className="rounded-xl overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
        <img
          src={cause.image}
          alt={cause.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="pt-4 pb-1 px-1">
        <h3
          className="font-bold text-xl mb-2 leading-snug"
          style={{
            color: "#3d0a35",
            fontFamily: "Oswald, sans-serif",
            letterSpacing: "0.03em",
          }}
        >
          {cause.title}
        </h3>
        <p className="text-lg text-gray-600">
          {cause.description}{" "}
          <span className="font-bold" style={{ color: "#e08c00" }}>
            {cause.amount}
          </span>
        </p>
      </div>

      <DonateButtons causeId={cause.id} />
    </div>
  );
}

export default function OurCause() {
  return (
    <div className="w-full bg-white">
    

      {/* Causes grid */}
      <div className="max-w-9xl mx-auto px-4 sm:px-18 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18">
          {causes.map((cause) => (
            <CauseCard key={cause.id} cause={cause} />
          ))}
        </div>
      </div>
    </div>
  );
}