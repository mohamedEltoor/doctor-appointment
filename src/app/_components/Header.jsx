"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const Menue = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact us",
    },
  ];

  return (
    <div className="flex items-center justify-between p-3 shadow-sm">
      <div className="flex items-center gap-10">
        <Image
          src="/assets/imag/logo.png"
          width={100}
          height={100}
          alt="logo"
          priority
        />
        <ul className="md:flex gap-8 hidden">
          {Menue.map((item, index) => (
            <Link href={item.path} key={index}>
              <li className="hover:text-lime-600 cursor-pointer hover:scale-105 transition-all">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {user ? (
        <Popover>
          <PopoverTrigger>
            {" "}
            <Image
              src={user.picture}
              width={50}
              height={50}
              alt={user.family_name}
              className="rounded-full"
            />
          </PopoverTrigger>
          <PopoverContent className="w-45 flex flex-col ">
            <ul>
              <li className='mt-2 cursor-pointer hover:bg-lime-300 p-2'>My Profile</li>
            <Link href="my-booking"><li className='mt-2 cursor-pointer hover:bg-lime-300 p-2'>My Booking</li></Link>
              <li className='mt-2 cursor-pointer hover:bg-lime-300 p-2'>
                <LogoutLink>Log out</LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <LoginLink postLoginRedirectURL="/">
          <Button>Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
}

export default Header;
