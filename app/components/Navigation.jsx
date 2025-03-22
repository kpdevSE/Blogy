import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";
import { Paperclip, PlusIcon } from "lucide-react";
import Link from "next/link";
import { DrawerDemo } from "./Sidebar";
import AddABlog from "./AddaBlog";

export default function NavigationBar() {
  return (
    <div className="flex items-center justify-between h-[60px] fixed top-0 w-[100%] border border-b-2 p-8">
      <Link href={"/"}>
        <h1 className="font-bold text-4xl">BLOGY</h1>
      </Link>
      <div className=" items-center justify-center gap-3 hidden lg:flex md:flex">
        <ModeToggle />
        <SignedOut>
          <SignInButton>
            <Button>Login</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Regitser</Button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <Link href={"/pages/Blogs"}>
            <Button className="cursor-pointer">
              <Paperclip />
              Blogs
            </Button>
          </Link>

          <UserButton />
        </SignedIn>
      </div>
      <div className="lg:hidden md:hidden flex gap-2">
        <DrawerDemo />
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
