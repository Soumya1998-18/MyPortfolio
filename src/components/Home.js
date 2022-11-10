import React from "react";
import Myimage from "../assets/myimage.jpg";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-white  ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Developer.
          </h2>
          <p className="py-4 max-w-md text-pink-900">
            I have of experience building and desgining software. Currently, I
            love to work on web application using technologies like React,
            Tailwind,Material UI and Firebase.
          </p>

          {/* <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-pink-900 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div> */}
        </div>

        <div>
          <img
            src={Myimage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
