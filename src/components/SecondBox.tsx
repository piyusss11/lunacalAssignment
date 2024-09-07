import React from "react";

const SecondBox = () => {
  return (
    <>
      <div className="w-[720px] h-[300px] bg-[#363C43] relative rounded-3xl">
        <div className="flex flex-col mx-14 h-full">
          <div className="flex justify-between items-center my-4">
            <button className="bg-[#171717] rounded-2xl px-8 py-4 font-poppins">
              Gallery
            </button>
            <div>
              <div className="flex items-center gap-4 ">
                <button className="bg-[#565e678e] mr-4 rounded-full px-4 py-3 text-[12px] font-jakarta custom-shadow custom-blur">
                  +&nbsp;&nbsp;&nbsp; ADD IMAGE
                </button>
                <button className="bg-[#171717] rounded-full px-3 py-2 text-white shadow-custom custom-arrow-shadow">
                  <i className="text-xl ri-arrow-left-line"></i>
                </button>
                <button className="bg-[#171717] rounded-full px-3 py-2 text-white shadow-custom custom-arrow-shadow">
                  <i className="text-xl ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap w-full scrollbar-thin overflow-y-hidden overflow-x-auto">
            <img src="./images/dummyImg.png" alt="" />
            <img src="./images/dummyImg.png" alt="" />
            <img src="./images/dummyImg.png" alt="" />
            <img src="./images/dummyImg.png" alt="" />
          </div>
        </div>

        <img
          className=" absolute top-4 left-4"
          src="./images/question.png"
          alt=""
        />
        <img
          className=" absolute top-1/2 left-4"
          src="./images/boxes.png"
          alt=""
        />
      </div>
    </>
  );
};

export default SecondBox;
