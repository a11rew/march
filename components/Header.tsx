import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../assets/logo.png";
import { useAuth } from "../context/auth";

const Header = (): JSX.Element => {
  const { loggedIn, setLoggedIn } = useAuth();
  const { pathname } = useRouter();

  return (
    <header className="border-b fixed top-0 w-full bg-white z-50">
      <div className="max-w-[1336px] p-11 m-auto flex justify-between">
        <Link passHref href="/">
          <Image src={Logo} alt="March logo" className="cursor-pointer" />
        </Link>
        {loggedIn ? (
          <nav className="flex gap-[72px]">
            <NavLink pathname={pathname} href="/">
              Home
            </NavLink>
            <NavLink pathname={pathname} href="/badges">
              Badges
            </NavLink>
            <NavLink pathname={pathname} href="/jobs">
              Jobs
            </NavLink>
            <NavLink pathname={pathname} href="/profile">
              My Profile
            </NavLink>
          </nav>
        ) : (
          <button onClick={() => setLoggedIn(true)}>Log in to March</button>
        )}
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string; pathname: string }> = ({
  href,
  children,
  pathname,
}): JSX.Element => {
  return (
    <Link href={href}>
      <a className={`${pathname === href && "text-[#47399D]"}`}>{children}</a>
    </Link>
  );
};

export default Header;
