import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt={"Hoom logo"}
          className="max-sm:size-10"
        />
        <span className="text-2xl font-bold ">Hoom</span>
      </Link>
      <div className="flex gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
}
