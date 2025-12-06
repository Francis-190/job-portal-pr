// "use client";

// import { useEffect, useState } from "react";
// import SubscriptionCard from "./components/SubscriptionCard";
// import Header from "./components/Header";

// interface Plan {
//   id: number;
//   name: string;
//   price: number;
//   features: string[];
// }

// export default function Home() {
//   const [plans, setPlans] = useState<Plan[]>([]);

//   useEffect(() => {
//     async function fetchPlans() {
//       const res = await fetch("http://localhost:5000/api/plans");
//       const data = await res.json();
//       setPlans(data);
//     }

//     fetchPlans();
//   }, []);

//   return (
//     <div>
//       {/* HEADER WITH LOGIN + REGISTER ICONS */}
//       <Header />

//       {/* MAIN CONTENT */}
//       <div style={{ padding: "40px 60px" }}>
//         <h1 style={{ fontSize: 28, marginBottom: 30 }}>
//           Job Portal – Subscription Plans
//         </h1>

//         <div
//           style={{
//             display: "flex",
//             gap: 30,
//             alignItems: "flex-start",
//             flexWrap: "wrap",
//           }}
//         >
//           {plans.map((plan) => (
//             <SubscriptionCard key={plan.id} plan={plan} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

