"use client";

import { useEffect, useState } from "react";
import SubscriptionCard from "../components/SubscriptionCard";
import Navbar from "../components/Navbar";

interface Plan {
  id: number;
  name: string;
  price: number;
  features: string[];
}

export default function SubscriptionPage() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    async function fetchPlans() {
      const res = await fetch("http://localhost:5000/api/plans");
      const data = await res.json();
      setPlans(data);
    }
    fetchPlans();
  }, []);

  return (
    <div>
      <Navbar />

      <div style={{ padding: "40px 60px" }}>
        <h1 style={{ fontSize: 28, marginBottom: 30 }}>
          Choose Your Subscription Plan
        </h1>

        <div
          style={{
            display: "flex",
            gap: 30,
            flexWrap: "wrap",
          }}
        >
          {plans.map((plan) => (
            <SubscriptionCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
