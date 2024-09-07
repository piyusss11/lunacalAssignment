import { useEffect, useRef, useState } from "react";
import ImageSlider from "./ImageSlider";
import { cards } from "@/assets/imgData";

const SecondBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadedImg, setUploadedImg] = useState(cards);

  useEffect(() => {
    console.log("Updated uploadedImg: ", uploadedImg);
  }, [uploadedImg]);
  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (!files) return;
    const file = files[0];

    if (!file.type.startsWith("image/")) {
      alert("Select only images"); // checks if its an image if not then will get an alert
      return; 
    }

    // console.log(file.name);
    const newCard = {
      url: URL.createObjectURL(file),
      title: `Title ${uploadedImg.length + 1}`,
      id: uploadedImg.length + 1, // creating a card object to push into the array of images
    };
    console.log(newCard);

    setUploadedImg((prev) => [...prev, newCard]); // pushing the new card object into the array
    console.log(uploadedImg);
  }
  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!inputRef || !inputRef.current) return;
    inputRef.current.click();
  }
  return (
    <>
      <div className="w-[720px] h-[300px] bg-[#363C43] relative rounded-3xl">
        <div className="flex flex-col mx-14 h-full">
          <div className="flex justify-between items-center my-4">
            <button className="bg-[#171717] rounded-2xl px-8 py-4 font-poppins cursor-default">
              Gallery
            </button>
            <div>
              <div className="flex items-center gap-4 ">
                <button
                  onClick={handleButtonClick}
                  className="bg-[#565e678e] mr-32 rounded-full px-4 py-3 text-[12px] font-jakarta custom-shadow custom-blur"
                >
                  +&nbsp;&nbsp;&nbsp; ADD IMAGE
                </button>
                <input
                  onChange={handleFileUpload}
                  ref={inputRef}
                  className="hidden"
                  type="file"
                />
              </div>
            </div>
          </div>

          <ImageSlider images={uploadedImg} />
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
