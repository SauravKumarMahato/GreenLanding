import React from "react";
import styles from './layout.module.css'

const AboutPage: React.FC = () => {
  const objectives = [
    {
      title: "Raise Awareness",
      description: "Educate visitors about the importance of planting trees for a sustainable future.",
    },
    {
      title: "Combat Deforestation",
      description: "Highlight the detrimental effects of deforestation, particularly its contribution to greenhouse gas emissions, and advocate for tree planting as a solution.",
    },
    {
      title: "Inspire Action",
      description: "Motivate visitors to join the mission of planting trees and contribute to creating a healthier planet for current and future generations.",
    },
    {
      title: "Community Engagement",
      description: "Encourage visitors to actively participate in tree planting initiatives and become part of a community dedicated to environmental conservation.",
    },
    {
      title: "Promote Sustainability",
      description: "Emphasize the role of tree planting in promoting biodiversity, mitigating climate change, and preserving natural resources.",
    },
    {
      title: "Provide Resources",
      description: "Offer information, resources, and tools for individuals and organizations interested in initiating tree planting projects or supporting existing ones.",
    },
    {
      title: "Foster Collaboration",
      description: "Facilitate partnerships and collaborations with environmental organizations, governments, businesses, and communities to scale up tree planting efforts globally.",
    },
    {
      title: "Measure Impact",
      description: "Establish metrics to track the impact of tree planting activities, such as the number of trees planted, carbon sequestration, and ecosystem restoration.",
    }
  ];

  return (
    <div className="container px-3 mx-auto py-8">
      <h1 className={`${styles["text-bodoni"]} text-5xl font-bold mb-10`}>About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map over the list and create HTML elements for each objective */}
        {objectives.map((objective, index) => (
          <div key={index} className="border-b-2 border-gray-200 pb-4">
            <h2 className={`${styles["text-bodoni"]} text-2xl font-bold mb-2`}>{objective.title}</h2>
            <p className="text-lg">{objective.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
