import React from "react";
import MusicApp from "../assets/project/MusicApp.png";
import Registration from "../assets/project/Registration.png";
import Todo from "../assets/project/Todo.png";
import Moviedirectory from "../assets/project/Moviedirectory.jpg";
import Responsive from "../assets/project/Responsive.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Registration,
    },
    {
      id: 2,
      src: Todo,
    },
    {
      id: 3,
      src: Moviedirectory,
    },
    {
      id: 4,
      src: MusicApp,
    },
    {
      id: 5,
      src: Responsive,
    },
  ];

  return (
    <div
      name="project"
      className="w-full h-screen bg-gradient-to-b from-slate-50 to-purple-50 text-pink-900"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold">Project</p>
          <p className="py-6">Check out some of my work.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-pink-800 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              {/* <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
