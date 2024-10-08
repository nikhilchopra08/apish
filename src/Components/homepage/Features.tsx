import React from "react";
import Image from "next/image"; 

const Features = () => {
  const features = [
    {
      title: "Effortless API Generation",
      description: "Generate APIs with ease using our intuitive platform.",
      imgSrc: "https://unsplash.com/photos/XJXWbfSo2f0/download?force=true&w=640",
    },
    {
      title: "Granular API Key Control",
      description: "Create and manage API keys with fine-tuned permissions.",
      imgSrc: "https://unsplash.com/photos/8pb7Hq539Zw/download?force=true&w=640",
    },
    {
      title: "Unmatched Security",
      description: "Experience peace of mind with industry-leading security measures.",
      imgSrc: "https://unsplash.com/photos/uj3hvdfQujI/download?force=true&w=640",
    },
    {
      title: "Intuitive Dashboard",
      description: "Effortlessly manage your APIs and keys with a user-friendly interface.",
      imgSrc: "https://unsplash.com/photos/JKUTrJ4vK00/download?force=true&w=640",
    },
    {
      title: "API Usage Insights",
      description: "Gain valuable insights into how your APIs are being utilized.",
      imgSrc: "https://unsplash.com/photos/5QgIuuBxKwM/download?force=true&w=640",
    },
    {
      title: "Fast Integration",
      description: "Seamlessly integrate your APIs with existing services.",
      imgSrc: "https://unsplash.com/photos/m_HRfLhgABo/download?force=true&w=640",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-900 py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 p-6"
          >
            <div className="w-full h-48 relative mb-6">
              <Image
                src={feature.imgSrc}
                alt={feature.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
