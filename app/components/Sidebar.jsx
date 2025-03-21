"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { HamIcon, HammerIcon, PaperclipIcon, PlusIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="lg:hidden md:hidden visible">
          <HammerIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="fixed left-0 top-0 h-full w-full">
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex items-center justify-between">
              <h1>BLOGY</h1>
              <ModeToggle />
            </div>
          </DrawerTitle>
        </DrawerHeader>
        <div className="mx-auto w-full max-w-lg">
          <div className=" items-center justify-center gap-3 flex-col w-[95%] mx-auto">
            <SignedOut>
              <SignInButton>
                <Button className="w-full">Login</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="w-full">Regitser</Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center justify-center flex-col w-full gap-3 mt-4">
                <Link href={"/pages/Blogs"} className="w-full">
                  <Button className="cursor-pointer w-full">
                    <PaperclipIcon size={15} />
                    Blogs
                  </Button>
                </Link>
                <Link href={"/pages/Add-Blogs"} className="w-full">
                  <Button className="cursor-pointer w-full">
                    <PlusIcon size={15} />
                    Add a Blog
                  </Button>
                </Link>
              </div>
            </SignedIn>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
