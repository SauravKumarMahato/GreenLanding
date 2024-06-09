import Image from "next/image";
import React from "react";
import styles from "./layout.module.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  text: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  tags,
  text

}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-green-50">
      <div className="w-full  h-48 relative">
        <Image
          className="object-cover"
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-6 py-4">
        <div
          className={`${styles["text-bodoni"]} font-bold text-xl mb-2 text-center`}
        >
          {title}
        </div>
        <p className="text-gray-700 text-base text-center">{description}</p>
      </div>
      <div className="rounded-md border-solid bg-green-400 mx-4 md:mx-36 lg:mx-28 px-2 py-2 text-center">{text}</div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block rounded-md border-solid bg-gray-300 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
