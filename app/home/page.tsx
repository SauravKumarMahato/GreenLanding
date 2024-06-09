import React from "react";
import styles from "./layout.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-28 xl:px-40" id="home">
      <div className={`${styles["text-bodoni"]} text-center mt-10 sm:mt-14 md:mt-18 lg:mt-20`}>
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-auto">
          <div className="grid gap-5 sm:gap-7 md:gap-10">
            <div className="flex flex-col sm:flex-row justify-center">
              <div className="mr-0 sm:mr-8 lg:mr-[50vh]">Planting</div>
              <div>trees</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center">
              <div className="mr-0 sm:mr-12 lg:mr-[60vh]">for better </div>
              <div>future</div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:justify-start lg:mt-20 lg:space-y-0 lg:space-x-4 lg:flex-col">
        <div className="text-center lg:text-left mt-12 sm:mt-14 md:mt-16 lg:mt-0 mx-auto lg:mx-0 max-w-3xl font-bold lg:max-w-md lg:ml-4 lg:pr-4 lg:pb-4">
          Did you know that deforestation contributes over 15% of global greenhouse gas emissions? Join us in our mission to create a healthier planet for all.
        </div>

        <div className="rounded-md border-solid bg-green-400 px-4 py-2 mt-8 lg:mt-4 text-center mx-auto lg:ml-0 lg:mx-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm lg:px-0 ">
          Contribute
        </div>
      </div>
    </div>
  );
};

export default page;
