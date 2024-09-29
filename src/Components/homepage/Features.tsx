import React from "react";

const Features = () => {
  const features = [
    { title: "Effortless API Generation", description: "Generate APIs with ease using our intuitive platform." },
    { title: "Granular API Key Control", description: "Create and manage API keys with fine-tuned permissions." },
    { title: "Unmatched Security", description: "Experience peace of mind with industry-leading security measures." },
    { title: "Intuitive Dashboard", description: "Effortlessly manage your APIs and keys with a user-friendly interface." },
    { title: "API Usage Insights", description: "Gain valuable insights into how your APIs are being utilized." },
  ];

  return (
    <section className="features-section bg-gray-800 text-white py-10 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="feature-card bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl mb-4 text-center">{feature.title}</h3>
            <p className="text-gray-300 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;