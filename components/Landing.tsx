import Image from "next/image";
import Landing1 from "../assets/landing1.png";
import Landing2 from "../assets/landing2.png";
import Landing3 from "../assets/landing3.png";
import Footer from "./Footer";

const Landing: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-24 mt-40">
      <div>
        <h1 className="font-medium text-5xl">
          Get entry-level roles
          <br />
          in tech with zero work
          <br />
          experience
        </h1>
        <div className="flex items-center gap-8 mt-9">
          <button className="bg-[#47399D] py-3 px-10 text-white">Signup</button>
          <a href="#" className="text-[#47399D] underline hover:no-underline">
            Read how we&apos;re doing it
          </a>
        </div>
      </div>
      <div className="flex gap-24 items-center">
        <div className="flex-shrink-0">
          <Image src={Landing1} alt="Promo image showing badges" />
        </div>
        <div>
          <h3 className="font-medium text-5xl">
            Earn <span className="opacity-30">industry recognized badges</span>{" "}
            and show your skills
          </h3>
          <button className="bg-[#47399D] py-3 px-10 text-white mt-10">
            Signup to earn badges
          </button>
        </div>
      </div>
      <div className="flex gap-24 items-center">
        <div>
          <h3 className="font-medium text-5xl">
            Get <span className="opacity-30">matched</span> with mentoring
            professionals in your tech field
          </h3>
          <button className="bg-[#47399D] py-3 px-10 text-white mt-10">
            Login to see Roadmaps
          </button>
        </div>
        <div className="flex-shrink-0">
          <Image src={Landing2} alt="Promo image showing badges" />
        </div>
      </div>
      <div className="flex gap-24 items-center">
        <div className="flex-shrink-0">
          <Image src={Landing1} alt="Promo image showing badges" />
        </div>
        <div>
          <h3 className="font-medium text-5xl">
            Get entry-level jobs actually requiring{" "}
            <span className="opacity-30">zero work experience</span>
          </h3>
          <button className="bg-[#47399D] py-3 px-10 text-white mt-10">
            Go to job board
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
