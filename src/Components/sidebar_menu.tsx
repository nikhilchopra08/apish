"use client";
import React, { useState } from "react";
// import { buttons, TailwindcssButtons } from "./buttons";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  // IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
// import Image from "next/image";
import { cn } from "@/lib/utils";
// import { link } from "fs";
// import { button } from "framer-motion/client";

export function SidebarMenu() {
  const links = [
    {
      label: "ChatBot",
      href: "/chat",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "API",
      href: "/generate-api-key",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        " flex items-center rounded-r-xl flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-full" 
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 ">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center space-x-8 overflow-y-auto overflow-x-hidden"> 
            <SidebarLink link={{
              label: "Login",
              href:'/auth',
              icon: ('')
            }}
            className="w-fit  px-4 rounded-xl p-3 bg-slate-700 text-white"
            />
            <SidebarLink link={{
              label: "Signup",
              href:'/auth',
              icon: ('')
            }}
            className="w-fit px-4 rounded-xl p-3 bg-slate-700 text-white"
            />
            
          </div>
        </SidebarBody>
      </Sidebar>
      
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium  text-black dark:text-white whitespace-pre"
      >
        APIsh
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
export const Dashboard = () => {
  return (
    <div className="flex flex-1 ">
      <div className="p-2 md:p-10  rounded-tl-2xl border border-neutral-200 dark:border-transparent bg-white dark:bg-neutral-900  flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {[...new Array(4)].map((i) => (
            <div
              key={"first-array" + i}
              className="h-20 w-full rounded-lg bg-gray-100 dark:bg-transparent animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((i) => (
            <div
              key={"second-array" + i}
              className="h-full w-full rounded-lg  bg-gray-100 dark:bg-transparent animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};