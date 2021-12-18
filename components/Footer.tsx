import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="flex justify-between font-bold text-sm">
      <div>
        <h3 className="text-brandpurple text-2xl">March</h3>
        <p className="mt-2">Connect. Grow.</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl">About</h3>
        <div className="flex flex-col gap-8 mt-2">
          <a>
            Vision & Mission <FiArrowUpRight className="inline" />
          </a>
          <a>
            Our partners
            <FiArrowUpRight className="inline" />
          </a>
          <a>
            Privacy Policy
            <FiArrowUpRight className="inline" />
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl">Company</h3>
        <div className="flex flex-col gap-8 mt-2">
          <a>
            Vision & Mission <FiArrowUpRight className="inline" />
          </a>
          <a>
            Our partners <FiArrowUpRight className="inline" />
          </a>
          <a>
            Privacy Policy <FiArrowUpRight className="inline" />
          </a>
        </div>
      </div>
      <div className="text-brandpurple flex text-2xl gap-4">
        <div className="w-[52px] h-12 bg-[#f6f6f7] flex items-center justify-center rounded-xl">
          <BsLinkedin />
        </div>
        <div className="w-[52px] h-12 bg-[#f6f6f7] flex items-center justify-center rounded-xl">
          <BsYoutube />
        </div>
        <div className="w-[52px] h-12 bg-[#f6f6f7] flex items-center justify-center rounded-xl">
          <BsTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
