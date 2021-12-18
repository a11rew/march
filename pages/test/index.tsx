import { NextPage } from "next";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";
import Banner from "./Banner";
import Badge from "../../assets/badge_available.png";
import Image from "next/image";

const Test: NextPage = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <div className="h-screen flex flex-col pt-40 gap-10">
        <Banner />
        <div>
          <button
            className="flex items-center gap-2"
            onClick={() => router.back()}
          >
            <IoIosArrowRoundBack className="text-2xl" />
            <span className="underline">Back</span>
          </button>
        </div>
        <div>
          <h1 className="font-medium text-5xl">Frontend Development</h1>
          <div className="mt-10">
            <div className="flex justify-between pr-2">
              <h2>Beginner / Level 1</h2>
              <span>30 minutes</span>
            </div>
            <hr className="my-4 mb-8" />
            <div>
              <h3 className="opacity-30">Topics</h3>
              <ol className="list-disc mt-3 space-y-2 text-lg list-inside pl-1">
                <li>Semantic HTML</li>
                <li>Accessibility</li>
                <li>Flexbox layout</li>
                <li>Grid layout</li>
                <li>The DOM</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="text-brandpurple flex gap-4">
          <div>
            <Image src={Badge} alt="Badge" />
          </div>
          <p>Score above 80% to earn a badge</p>
        </div>

        <div className="flex gap-4">
          <button className="py-2 px-14 border-2 border-[#47399D] text-[#47399D] rounded">
            Practice
          </button>
          <button className="py-4 w-full bg-[#47399D] text-white rounded max-w-[650px]">
            Start test
          </button>
        </div>
      </div>
    </>
  );
};

export default Test;
