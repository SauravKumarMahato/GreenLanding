import React from "react";
import styles from "./layout.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-28 xl:px-40">
      <p
        className={`${styles["text-bodoni"]} text-5xl sm:text-6xl md:text-7xl lg:text-8xl mx-0 sm:mx-10 md:mx-20 lg:mx-28 mt-10 sm:mt-14 md:mt-18 lg:mt-20 text-center`}
      >
        <div className="grid gap-5 sm:gap-7 md:gap-10">
          <div className="flex flex-col sm:flex-row md:flex-row">
            <div className="mr-0 sm:mr-[20vh] md:mr-[0] lg:mr-[40vh] ml-0 sm:ml-[10vh] md:ml-[0] lg:ml-[8vw]">
              Plant
            </div>
            <div className="md:ml-2">trees</div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row">
            <div className="mr-0 ml-0 sm:mr-[30vw] sm:ml-[1vw] md:mr-[0] md:ml-[0] lg:mr-[20vw] ">
              for better
            </div>
            <div className="md:ml-2 lg:mr-2">Future</div>
          </div>
        </div>
      </p>
      <div className="ml-0 sm:ml-[10vw] md:ml-[15vw] lg:ml-[2vw] mr-0 sm:mr-[30vw] md:mr-[30vw] lg:mr-[54vw] mt-12 sm:mt-14 md:mt-6">
        Did you know that deforestation contributes over 15% of global
        greenhouse gas emissions? Join us in our mission to create a healthier
        planet for all.
      </div>

      <div className="rounded-md border-solid bg-green-400 ml-0 sm:ml-[10vw] md:ml-[15vw] lg:ml-[2vw] mr-0 sm:mr-[60vw] md:mr-[50vw] lg:mr-[64vw] px-4 py-2 mt-8 text-center">
        Contribute
      </div>
    </div>
  );
};

export default page;
