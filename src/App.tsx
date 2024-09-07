
import FirstBox from "./components/FirstBox";
import SecondBox from "./components/SecondBox";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-[#282d31] to-[#191B1F] flex">
        <div className="w-1/2"></div>
        <div className="w-1/2 text-white flex flex-col mt-24 mr-[86px] gap-5">
        <FirstBox/>
        <hr className="w-[80%] mx-auto rounded-full border-2 border-[#f8f8f82b]" />
        <SecondBox/>
        <hr className="w-[80%] mx-auto mb-20 rounded-full border-2 border-[#f8f8f82b]" />
        </div>
      </div>
    </>
  );
}

export default App;
