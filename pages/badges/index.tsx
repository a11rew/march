import { NextPage } from "next";
import Dropdown from "./Dropdown";

const Badges: NextPage = (): JSX.Element => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div>
        <h1 className="font-medium text-5xl">Badges</h1>
        <p className="font-medium mt-2 mb-10">
          Get industry recognized badges in your field after passing
          <br /> milestones in our standardized tests.{" "}
          <a className="text-[#47399d]">Read more about Badges</a>
        </p>
        <Dropdown />
      </div>
    </div>
  );
};

export default Badges;
