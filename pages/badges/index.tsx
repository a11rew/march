import { useState } from "react";
import { NextPage } from "next";
import Dropdown from "./Dropdown";
import BadgesDisplay from "./BadgesDisplay";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";

const Badges: NextPage = (): JSX.Element => {
  const [selected, setSelected] = useState<{ name: string }>();
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col pt-40 gap-10">
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
        <h1 className="font-medium text-5xl">Roadmap</h1>

        {selected ? (
          <div className="flex mt-6 mb-10 gap-4">
            <div className="flex gap-4">
              <div className="bg-[#C4C4C4] rounded-lg w-6 h-6 text-center shrink-0">
                1
              </div>
              <p>
                Get industry recognized badges in your field of specilisation.
                Complete tests to earn
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#C4C4C4] rounded-lg w-6 h-6 text-center shrink-0">
                2
              </div>
              <p>
                Your badge is displayed on your profile, visible to potential
                employers and your peers!
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#C4C4C4] rounded-lg w-6 h-6 text-center shrink-0">
                3
              </div>
              <p>
                Collect badges from tests, build your collection and rank higher
                in our leaderboards to get placed in roles.
              </p>
            </div>
          </div>
        ) : (
          <p className="font-medium mt-2 mb-10">
            Get industry recognized badges in your field after passing
            <br /> milestones in our standardized tests.{" "}
            <a className="text-[#47399d]">Read more about Badges</a>
          </p>
        )}
        <Dropdown selected={selected} setSelected={setSelected} />

        {selected && <BadgesDisplay selected={selected.name} />}
      </div>
    </div>
  );
};

export default Badges;
