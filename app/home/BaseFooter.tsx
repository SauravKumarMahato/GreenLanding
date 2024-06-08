import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const BaseFooter = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4 px-4 flex flex-wrap justify-between">
        <div className="mx-20 grid grid-cols-4 gap-52 my-10">
          <div className="">
            <div className="mb-4 text-3xl font-bold ">Connect on Social </div>
            <div className="flex gap-4">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="grid gap-16">
            <a href="#" className="inline-block text-white font-bold relative">
              About Us
              <div
                className="absolute bottom-0 left-0 w-full h-1 bg-green-600"
                style={{ marginBottom: "-15px" }}
              ></div>
            </a>

            <a href="#" className="inline-block text-white font-bold relative">
              Contribution
              <div
                className="absolute bottom-0 left-0 w-full h-1 bg-green-600"
                style={{ marginBottom: "-15px" }}
              ></div>
            </a>

            <a href="#" className="inline-block text-white font-bold relative">
              FAQ
              <div
                className="absolute bottom-0 left-0 w-full h-1 bg-green-600"
                style={{ marginBottom: "-15px" }}
              ></div>
            </a>

            <a href="#" className="inline-block text-white font-bold relative">
              Contact
              <div
                className="absolute bottom-0 left-0 w-full h-1 bg-green-600"
                style={{ marginBottom: "-15px" }}
              ></div>
            </a>
          </div>

          <div className="grid ">
            <div>
              <a
                href="#"
                className="inline-block text-white font-bold relative"
              >
                Privacy Policy
                <div
                  className="absolute bottom-0 left-0 w-full h-1 bg-green-600"
                  style={{ marginBottom: "-15px" }}
                ></div>
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-white font-bold relative"
              >
                Terms & Conditions
                <div
                  className="absolute bottom-0 left-0 w-full h-1 bg-green-600"
                  style={{ marginBottom: "-15px" }}
                ></div>
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-white font-bold relative"
              >
                Cookie Policy
                <div
                  className="absolute bottom-0 left-0 w-full h-1 bg-green-600"
                  style={{ marginBottom: "-15px" }}
                ></div>
              </a>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-sm border-gray-200 py-2 px-4">
              English
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center border-t-2 border-white mx-20 mb-4">
          <div className="mx-20 my-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/tree.png"
                width={36}
                height={100}
                className="h-8"
                alt="Logo"
              />
              <div className="self-center text-xl font-semibold whitespace-nowrap">
                GreenEco
              </div>
            </a>
          </div>
          <div className="text-xl pr-20 ml-60">
            All rights reserved to GreenEco
          </div>
        </div>
      </footer>
    </div>
  );
};
export default BaseFooter;
