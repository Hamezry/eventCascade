import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header className="w-full fixed z-10 bg-cascade_light_cream">
      <div className="wrapper flex items-center justify-between">
        <Link
          href="/"
          className="w-36">
          {/* <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          /> */}
          <h1 className=" text-[#624cf5] text-2xl font-bold">EventCascade</h1>
        </Link>

        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <MobileNav />

          <Button
            asChild
            className="rounded-full"
            size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
