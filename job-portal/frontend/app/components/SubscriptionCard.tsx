"use client";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

interface SubscriptionCardProps {
  plan: {
    id: number;
    name: string;
    price: number;
    features: string[];
  };
}

export default function SubscriptionCard({ plan }: SubscriptionCardProps) {
  const router = useRouter();
  const isPopular = plan.name === "Pro";

  return (
    <div
      style={{
        width: 280,
        padding: 25,
        borderRadius: 12,
        border: "1px solid #e0e0e0",
        backgroundColor: "#fff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        transition: "transform 0.2s",
        cursor: "pointer"
      }}
    >
      <h2>{plan.name}</h2>
      <h3>${plan.price}</h3>

      <div>
        {plan.features.map((feature, i) => (
          <p key={i}>
            <FaCheckCircle style={{ color: "green", marginRight: 8 }} />
            {feature}
          </p>
        ))}
      </div>

      <button
        style={{
          width: "100%",
          padding: "12px",
          marginTop: 15,
          backgroundColor: isPopular ? "#4CAF50" : "#1976D2",
          borderRadius: 8,
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => router.push(`/payment?plan=${plan.id}`)}
      >
        Choose Plan
      </button>
    </div>
  );
}
