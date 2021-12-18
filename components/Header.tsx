import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";

const Header = (): JSX.Element => {
  return (
    <header className="border-b fixed top-0 w-full bg-white z-50">
      <div className="max-w-[1336px] p-11 m-auto flex justify-between">
        <Link passHref href="/">
          <Image src={Logo} alt="March logo" className="cursor-pointer" />
        </Link>
        <nav>
          <button>Log in to March</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
