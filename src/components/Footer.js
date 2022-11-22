import React from "react";
import { FaInstagram, FaSkype, FaTelegram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div name="footer" className="w-full h-screen full bg-white text-pink-900">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-pink-900">
        <div>
          <p className="text-4xl font-bold p-2 inline">SocialLinks</p>
          <p className="py">Get connected with me on social networks</p>
        </div>
        <div className="bg-white-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
          <div className="p-5 ">
            <ul>
              <div className="flex gap-6 pb-5">
                <FaInstagram className="text-2xl " />
                <FaTwitter className="text-2xl " />
                <FaLinkedin className="text-2xl " />
                <FaGithub className="text-2xl " />
                <FaYoutube className="text-2xl " />
                <FaTelegram className="text-2xl " />
                <FaSkype className="text-2xl " />
              </div>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center  p-5 bg-white-50">
          <h1 className=" text-pink-900 font-semibold">
            © 2021-2022 All rights reserved | Build by {"Soumya Dubey"}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
