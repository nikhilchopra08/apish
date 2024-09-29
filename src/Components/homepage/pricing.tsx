import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      plan: "Free",
      price: "$0/month",
      features: ["Access to core APIs", "Limited requests/month", "Community support"],
    },
    {
      plan: "Pro",
      price: "$19/month",
      features: ["Full feature access", "Increased request limits", "Priority support"],
    },
    {
      plan: "Enterprise",
      price: "Contact Us",
      features: ["Customizable features", "Dedicated account manager", "Scalable solutions"],
    },
  ];

  return (
    <section className="pricing-section bg-gray-900 py-10 px-4 md:px-8 lg:px-16 text-white">
      <h2 className="text-4xl text-center mb-8 font-semibold">Pricing Plans</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300`}
          >
            <h3 className="text-3xl mb-4 text-center font-bold">{plan.plan}</h3>
            <p className="text-2xl mb-4 text-center">{plan.price}</p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
              {plan.plan === "Enterprise" ? "Contact Sales" : "Select Plan"}
            </button>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-gray-400 italic">
        Note: Future plans will be disabled for now. Stay tuned for updates!
      </p>
    </section>
  );
};

export default Pricing;
