import { useState } from "react";
import { NextPage } from "next";
import Dropdown from "./Dropdown";
import BadgesDisplay from "./BadgesDisplay";

const Badges: NextPage = (): JSX.Element => {
  const [selected, setSelected] = useState<{ name: string }>();

  return (
    <div className="h-screen flex flex-col pt-40">
      <div>
        <h1 className="font-medium text-5xl">Roadmap</h1>
        <p className="font-medium mt-2 mb-10">
          Get industry recognized badges in your field after passing
          <br /> milestones in our standardized tests.{" "}
          <a className="text-[#47399d]">Read more about Badges</a>
        </p>
        <Dropdown selected={selected} setSelected={setSelected} />

        {selected && <BadgesDisplay />}
      </div>
    </div>
  );
};

export default Badges;
