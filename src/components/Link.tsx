import Image from "next/image";
import linkImg from "@/assets/link.svg";
export default function () {
  return (
    <div className="flex flex-col justify-between bg-[#FAFAFA] px-[20px] py-[20px] gap-[8px]">
      <div>
        <p>=Link#1</p>
        <p>Remove</p>
        <div>
          <p className="text-sm">Platform</p>
          <div className="bg-[#FFFFFF] items-center justify-center rounded-lg w-[688px] h-[48px]">
            <details className="dropdown">
              <summary className="btn bg-[#FFFFFF] border-0 focus:border-0 hover:border-0 focus:ring-0 focus:outline-none">
                Github
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-[688px] p-2 shadow">
                <li>
                  <a>Linkedin</a>
                </li>
                <li>
                  <a>Youtube</a>
                </li>
              </ul>
            </details>
            <p className="text-sm">Link</p>
            <div className="flex bg-white border border-gray-300  ">
              <Image src={linkImg} alt="an icon linked" />
              <input
                type="url"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                className=" text-gray-900 border-0 focus:border-0 hover:border-0 focus:ring-0 focus:outline-none text-sm rounded-lg block w-full p-2.5"
                placeholder="e.g. https://www.github.com/johnappleseed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
