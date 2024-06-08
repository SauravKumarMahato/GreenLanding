import React from "react";
import styles from "./layout.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <p
        className={`${styles["text-bodoni"]} text-8xl mx-28 mt-20 text-center`}
      >
        <div className="grid gap-10">
          <div className="flex">
            <div className="mr-[40vh] ml-[20vh]">Planting</div>
            <div>trees</div>
          </div>
          <div className="flex">
            <div className="mr-[58vh] ml-[2vh]">for better </div>
            <div>future</div>
          </div>
        </div>
      </p>
      <div className="ml-[22vh] mr-[130vh] mt-6">
        Did you know that the deforestation contribute over 15% of global green house gases emissions? Join us in our mission to create a healther planet for all.
      </div>

      <div className="rounded-md border-solid bg-green-400 ml-[22vh] mr-[155vh] px-4 py-2 mt-2 ">Contribute</div>
    </div>
  );
};

export default page;
