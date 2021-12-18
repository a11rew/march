/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

const Connect: NextPage = () => {
  return (
    <div className="h-screen flex flex-col pt-40 gap-10">
      <div>
        <h1 className="font-medium text-5xl">Match</h1>
        <p className="w-[50%] mt-2">
          You are matched to leading professionals in your field of
          specialization to guide you in your career. You are matched based on
          your profile and your badges.
        </p>
      </div>
      <hr />
      <div>
        <div className="flex gap-4">
          <div>
            <img
              className="rounded-lg"
              src="https://i.pravatar.cc/48"
              alt="Mentor avatar"
            />
          </div>
          <div>
            <h1 className="font-bold">Jane Doe</h1>
            <p className="font-medium">Design Lead @ Acme Inc.</p>
          </div>
        </div>
        <div className="ml-16 mt-4">
          <button className="w-[306px] h-14 text-brandpurple border">
            Request match
          </button>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex gap-4">
          <div>
            <img
              className="rounded-lg"
              src="https://i.pravatar.cc/49"
              alt="Mentor avatar"
            />
          </div>
          <div>
            <h1 className="font-bold">John Doe</h1>
            <p className="font-medium">QA Lead @ Acme Inc.</p>
          </div>
        </div>
        <div className="ml-16 mt-4">
          <button className="w-[306px] h-14 text-brandpurple border">
            Request match
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
