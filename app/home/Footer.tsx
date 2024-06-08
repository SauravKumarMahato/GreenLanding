'use client'
import React, { useState } from "react";

interface Stat {
  value: string;
  description: string;
}
const Footer: React.FC = () => {
    const [stats] = useState<Stat[]>([
      {
        value: "977 million+",
        description: "Trees produced, planted, and protected",
      },
      { value: "280", description: "Project sites in 10 countries" },
      { value: "14,800+", description: "Projects Active" },
    ]);
  
    return (
      <div className="flex justify-center items-center text-white py-8">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center mx-8 text-center">
              <div className=" text-xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-sm mt-2">{stat.description}</div>
            </div>
            {index < stats.length - 1 && (
              <div className="w-2 bg-white h-12"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };
  
  export default Footer;
  