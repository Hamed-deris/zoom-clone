"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "../../constants";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px] ">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={24}
            height={24}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <SheetTitle>
            <SheetClose asChild>
              <Link href={"/"} className="flex items-center gap-2 mb-6">
                <Image
                  src="/icons/logo.svg"
                  width={24}
                  height={24}
                  alt={"Hoom logo"}
                  className="max-sm:size-10"
                />
                <span className="text-2xl">Hoom</span>
              </Link>
            </SheetClose>
          </SheetTitle>
          <SheetDescription>
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.route;
              return (
                <SheetClose asChild key={link.route}>
                  <Link
                    href={link.route}
                    className={cn(
                      "flex gap-4 items-center p-4 rounded-lg justify-start",
                      {
                        "bg-blue-1": isActive,
                      }
                    )}
                  >
                    <Image
                      src={link.imgUrl}
                      alt={link.label}
                      width={24}
                      height={24}
                    />
                    <span className="font-semibold">{link.label}</span>
                  </Link>
                </SheetClose>
              );
            })}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </section>
  );
}
