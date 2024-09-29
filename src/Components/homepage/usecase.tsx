import React from "react";

const UseCases = () => {
  const useCases = [
    { title: "Developers", description: "Effortlessly integrate APIs into your applications." },
    { title: "Businesses", description: "Elevate your services with custom-built APIs." },
    { title: "Educators", description: "Empower learning and projects with the power of APIs." },
  ];

  return (
    <section className="use-cases-section bg-gray-900 text-white py-10 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl text-center mb-8">Use Cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="use-case-card bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-xl mb-4 text-center">{useCase.title}</h3>
            <p className="text-gray-300 text-base">{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;