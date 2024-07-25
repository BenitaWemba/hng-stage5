import Image from "next/image";
import phoneImg from "@/assets/phoneanime.svg";
import bganimeImg from "@/assets/bganime.svg";
import AddNewLink from "@/components/Link";

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-[1440px] h-[858px] px-[24px] py-[24px] gap-[24px] ">
        <div className="flex items-center  w-[560px] h-[834px] gap-[8px] px-[24px] py-[24px] bg-[#FFFFFF]">
          <Image
            className="w-[307px] h-[631px]"
            src={phoneImg}
            alt="a phone anime"
          />
        </div>
        <div className="flex flex-col items-center w-[808px] h-[834px] bg-[#FFFFFF]">
          <div className="w-[728px] h-[80px] gap-[8px]">
            <p className="w-[728px] h-[48px] gap-[8px]  ">
              Customize your links
            </p>
            <p className="w-[728px] h-[24px]">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <div className="flex w-[728px] h-[46px] px-[27px] py-[11px] border-purple-400 rounded">
            <p className="items-center text-purple-700 h-[24px]">
              + Add new link
            </p>
          </div>
          <div className="w-[728px] h-[469px] py-[20px] rounded-lg gap-[12px]">
            {/* <Image src={bganimeImg} alt="background with text" /> */}
            <AddNewLink />
          </div>
          <div className="flex flex-col justify-items-start  w-[808px] h-[95px] ">
            <button className="w-[91px] h-[46px] gap-[8px] rounded-lg px-[27px] py-[11px]">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
