import React from "react";
import Card from "./Card";
import styles from "./layout.module.css";
import PopupAnimation from "./PopupAnimation";
import TypingAnimation from "./TypingAnimation";
const Contribute: React.FC = () => {
  const cards = [
    {
      image: "/plant_tree.png",
      title: "Create Your Own Green Haven: Plant a Tree",
      description:
        "Choose to plant a tree in your own backyard or contribute to a tree planting program in your community.",
      tags: ["planting", "backyard", "community"],
    },
    {
      image: "/donation.png",
      title: "Support Change with Your Donation Today",
      description:
        "Make a one-time or recurring donation to support tree planting initiatives and help reduce carbon emissions.",
      tags: ["donation", "support", "C reduction"],
    },
    {
      image: "/volunteer.png",
      title: "Join Forces: Volunteer to Plant more Trees",
      description:
        "Sign up to volunteer with local organizations dedicated to tree planting and other environmental initiatives.",
      tags: ["volunteer", "organizations", "nature"],
    },
  ];

  return (
    <div className="container mx-auto py-8">
      {/* <h1 className="text-5xl font-bold mb-10">Gallery</h1> */}
      <div className={`${styles["text-bodoni"]} my-4 px-4`}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
          <TypingAnimation speed={50} text="Join the Green Revolution Today" />
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center mt-4">
          <TypingAnimation
            speed={50}
            text="Choose Your Path to Make a Difference Today!"
          />
        </h1>
      </div>



      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <PopupAnimation key={index}>
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              tags={card.tags}
              text={"Contribute"}
            />
          </PopupAnimation>

        ))}
      </div>
    </div>
  );
};

export default Contribute;
