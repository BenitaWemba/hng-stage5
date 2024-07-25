import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import passwordImg from "@/assets/password.svg";
import emailImg from "@/assets/email.svg";
import { signup } from "../signin/actions";

export default function CreateAccount() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Image
        className="w-[182.5px] h-[40px] justify-center "
        src={logoImg}
        alt="devlinks logo"
      />
      <div className="bg-[#FFFFFF] w-[476px] h-[618px] rounded-xl gap-[40px]">
        <p className="w-[396px] h-[48px] text-gray-900 text-3xl leading-10 ">
          Create account
        </p>
        <p className="w-[396px] h-[24px] leading-4 text-base text-gray-400">
          Let’s get you started sharing your links!
        </p>
        <div className="w-[(396px] h-[282px] gap-[24px] ">
          <form>
            <div className=" w-[396px] h-[70px] gap-[4px] mb-6">
              <label
                htmlFor="input-group-1"
                className=" mb-2 w-[396px] h-[18px] rounded-lg text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="absolute flex items-center  bg-white border-gray-200">
                <Image src={emailImg} alt="an envelope icon for email" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-none rounded-e-lg bg-white focus:border-gray-300 focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="e.g. alex@email.com"
                  required
                />
              </div>
            </div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password{" "}
            </label>
            <div className="flex w-[396px] px-[12px] py-[16px]  items-center bg-white text-sm">
              <Image src={passwordImg} alt="an icon for password" />
              <input
                type="password"
                id="password"
                name="password"
                className="rounded-none rounded-e-lg bg-white focus:border-gray-300 focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="At least 8 characters"
                required
              />
            </div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <div className="flex w-[396px] px-[12px] py-[16px] items-center bg-white text-sm">
              <Image src={passwordImg} alt="an icon for password" />
              <input
                type="password"
                id="confirm_password"
                name="password"
                className="rounded-none rounded-e-lg bg-white focus:border-gray-300 focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="At least 8 characters"
                required
              />
            </div>
            <div>
              <p className="text-gray-400 text-base leading-4">
                Password must contain at least 8 characters
              </p>
            </div>
            <div>
              <button
                formAction={signup}
                className="items-center flex w-[396px] h-[46px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-24 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
