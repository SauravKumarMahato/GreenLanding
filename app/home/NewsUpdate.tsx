import React from "react";
import Card from "./Card";
import styles from "./layout.module.css";
import Image from "next/image";

const NewsUpdate: React.FC = () => {
  const cards = [
    {
      image: "/plant_tree.png",
      title: "Introducing Our Newest Climate Neutral Certified Brands",
      description:
        "Choose to plant a tree in your own backyard or NewsUpdate to a tree planting program in your community.",
      tags: ["planting", "backyard", "community"],
    },
    {
      image: "/donation.png",
      title: "Introducing Our Newest Climate Neutral Certified Brands",
      description:
        "Make a one-time or recurring donation to support tree planting initiatives and help reduce carbon emissions.",
      tags: ["donation", "support", "C reduction"],
    },
  ];

  return (
    <div className="flex items-center">
      <div className="flex mx-auto py-8 text-center ">
        {/* <h1 className="text-5xl font-bold mb-10">Gallery</h1> */}
        <div className={`${styles["text-bodoni"]} mx-20 mt-8 `}>
          <h1 className={`${styles["text-bodoni"]} text-5xl text-center`}>
            Keep up <br /> with Latest News
          </h1>
          <Image
            src="/save_plant.png"
            alt="save plant image"
            className="my-10 ml-4 rounded-lg"
            width={400}
            height={600}
          />
        </div>

        <div className="grid grid-cols-2 justify-center">
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              tags={card.tags}
              text={"Learn More"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsUpdate;
