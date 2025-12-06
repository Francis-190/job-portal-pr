"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentContent() {
  const params = useSearchParams();
  const planId = params.get("plan");

  const plans: any = {
    1: { name: "Basic", price: 0 },
    2: { name: "Pro", price: 9.99 },
    3: { name: "Premium", price: 19.99 },
  };

  const selectedPlan = plans[planId || 1];

  return (
    <div style={{ padding: 40 }}>
      <h1>Pay for {selectedPlan.name} Plan</h1>
      <h2>Amount: ${selectedPlan.price}</h2>

      <p style={{ marginTop: 20 }}>
        <b>UPI ID:</b> jobportal@upi
      </p>

      <p>Please scan the QR code:</p>

      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${selectedPlan.name}_jobportal@upi`}
        width={200}
        height={200}
        alt="QR Code"
      />

      <button
        style={{
          marginTop: 30,
          padding: "10px 20px",
          background: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        I have paid
      </button>
    </div>
  );
}
