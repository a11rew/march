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
        <p className="font-medium mt-2 mb-10">
          Get industry recognized badges in your field after passing
          <br /> milestones in our standardized tests.{" "}
          <a className="text-[#47399d]">Read more about Badges</a>
        </p>
        <Dropdown selected={selected} setSelected={setSelected} />

        {selected && <BadgesDisplay selected={selected.name} />}
      </div>
    </div>
  );
};

export default Badges;
