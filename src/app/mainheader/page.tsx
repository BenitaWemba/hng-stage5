import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import linkImg from "@/assets/link.svg";
import profileImg from "@/assets/profile.svg";
import HeroSection from "../section/herosection";

export default function MainHeader() {
  return (
    <>
      <div className="flex items-center py-[24px] gap-[8px]">
        <div className="flex  items-center bg-[#FFFFFF] w-[1392px] h-[78px] rounded-lg px-[16px] py-[16px]  ">
          <div className="flex w-[1352px] h-[46px] ">
            <Image
              className="w-[146px] h-[32px] "
              src={logoImg}
              alt="devlinks logo"
            />
            <div className="w-[325px] h-[46px] gap-[16px] ">
              <div className="w-[122px] h-[46px] rounded px-[11px] py-[27px] gap-[8px]">
                <Image
                  className="w-[20px] h-[20px]"
                  src={linkImg}
                  alt="link icon"
                />
                <p className="w-[40px] h-[24px] ">Links</p>
              </div>
              <div className="w-[187px] h-[46px] rounded px-[11px] py-[27px] gap-[8px] ">
                <Image
                  className="w-[20px] h[20px]"
                  src={profileImg}
                  alt="profile icon"
                />
                <p className="w-[105px] h-[24px]">Profile Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroSection />
    </>
  );
}
