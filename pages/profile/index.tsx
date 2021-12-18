import { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <div className="h-screen flex items-center w-full">
      <div className="w-full">
        <h1 className="font-medium text-5xl mb-2">
          Let&apos;s get to know you
        </h1>
        <p>
          Complete your profile with{" "}
          <span className="text-brandpurple">March</span>
        </p>
        <div className="flex mt-[60px] gap-10 justify-between w-full max-w-[1046px]">
          <form className="flex flex-col gap-6">
            <div className="flex gap-4">
              <label>
                First name
                <input className="block border-2 w-[274px] h-14 px-2 mt-2" />
              </label>
              <label>
                Last name
                <input className="block border-2 w-[274px] h-14 px-2 mt-2" />
              </label>
            </div>
            <label>
              Email address
              <input className="block border-2 w-full max-w-[564px] h-14 px-2 mt-2" />
            </label>
            <label>
              Phone number
              <input className="block border-2 w-full max-w-[564px] h-14 px-2 mt-2" />
            </label>
          </form>

          <div>
            <p>Or connect with</p>
            <div className="flex flex-col gap-4 mt-2">
              <button className="w-[274px] rounded text-white h-14 bg-[#171515]">
                Continue with Github
              </button>
              <button className="w-[274px] rounded text-white h-14 bg-[#0077B5]">
                Continue with LinkedIn
              </button>
              <button className="w-[274px] rounded text-white h-14 bg-[#DE5246]">
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
