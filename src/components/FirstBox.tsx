import { useState } from "react";

const FirstBox = () => {
  const [about, setAbout] = useState(true);
  const [experience, setExperience] = useState(false);
  const [recommended, setRecommended] = useState(false);

  const handleAbout = () => {
    setAbout(true);
    setExperience(false);
    setRecommended(false);
  };
  const handleExperience = () => {
    setAbout(false);
    setExperience(true);
    setRecommended(false);
  };
  const handleRecommended = () => {
    setAbout(false);
    setExperience(false);
    setRecommended(true);
  };

  return (
    <>
      <div className="w-[720px] h-[300px] bg-[#363C43] rounded-3xl relative ">
        <div className="flex flex-col text-[#A3ADB2] mx-14 h-full">
          <div className=" my-4 bg-[#171717] w-[614px] h-14 rounded-2xl flex justify-between items-center font-poppins ">
            <button
              onClick={handleAbout}
              className={
                about
                  ? "rounded-xl ml-2 px-10 py-2 bg-gradient-to-r from-[#2727287a] to-[#96bee72d] text-white shadow-[0_25px_60px_-10px_rgba(0,0,0,1)]"
                  : "rounded-xl ml-2 px-10 py-2 text-[#A3ADB2]"
              }
            >
              About Me
            </button>
            <button
              onClick={handleExperience}
              className={
                experience
                  ? "rounded-xl ml-2 px-10 py-2 bg-gradient-to-r from-[#2727287a] to-[#96bee72d] text-white shadow-[0_25px_60px_-10px_rgba(0,0,0,1)]"
                  : "rounded-xl ml-2 px-10 py-2 text-[#A3ADB2]"
              }
            >
              Experience
            </button>
            <button
              onClick={handleRecommended}
              className={
                recommended
                  ? "rounded-xl mr-2 ml-2 px-10 py-2 bg-gradient-to-r from-[#2727287a] to-[#96bee72d] text-white shadow-[0_25px_60px_-10px_rgba(0,0,0,1)]"
                  : "rounded-xl mr-2 ml-2 px-10 py-2 text-[#A3ADB2]"
              }
            >
              Recommended
            </button>
          </div>
          <div className="h-[168px] overflow-y-auto scrollbar-thin font-jakarta">
            {about && (
              <p>
                My name is Piyush Chauhan, and I am excited to express my
                interest in the Frontend Developer position.
                <br />
                <br />
                With a strong command of React and a deep passion for crafting
                seamless user experiences, I am confident in my ability to
                contribute effectively to your team. In my previous projects, I
                have consistently demonstrated the ability to transform design
                concepts into efficient, maintainable code. For instance, I
                developed a Swiggy-like food ordering app utilizing React,
                Tailwind CSS, and Redux Toolkit, where I integrated features
                such as dark mode and real-time updates. My experience also
                extends to building dynamic, API-driven interfaces, as showcased
                by my work on a YouTube clone and a Netflix-like movie
                application.
                <br />
                <br />
                My Github - https://github.com/piyusss11
              </p>
            )}
            {experience && (
              <p>
                During my time as a Web Developer at Open Sense Labs, Delhi
                (December 2023 - June 2024), I developed and maintained
                user-friendly websites and web applications for diverse clients.
                I collaborated with designers to craft intuitive and visually
                appealing user interfaces, ensuring a seamless user experience.
                My work involved implementing responsive design techniques to
                optimize performance across devices, from mobile to desktop,
                while integrating third-party services and APIs to enhance
                functionality and deliver dynamic, interactive solutions.
              </p>
            )}
            {recommended && (
              <p>
                I've been highly recommended by some of the biggest names in
                tech. Google said, "We're still trying to figure out how he
                debugs faster than our search algorithm!" Microsoft chimed in
                with, "His code is so clean, it might just replace Windows
                updates!"and even the elusive Wakanda Tech Solutions (they’re a
                tough crowd to impress). Though they haven't officially called
                me yet, I’m pretty sure they’re just busy drafting the offer
                letters.
                Just Kidding
              </p>
            )}
          </div>
        </div>
        <img
          className="absolute top-4 left-4"
          src="./images/question.png"
          alt=""
        />
        <img
          className="absolute top-1/2 left-4"
          src="./images/boxes.png"
          alt=""
        />
      </div>
    </>
  );
};

export default FirstBox;
