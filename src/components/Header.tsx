import Link from "next/link";
import Container from "./Container";
import { LogOut, Settings, User } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import ThemeToggle from "./ThemeToggle";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <>
      <header className="py-5">
        <Container className="flex flex-wrap gap-5 items-center">
          {/* left */}
          {/* siebar trigger */}
          <SidebarTrigger />
          {/* right */}
          <div className="flex-1 flex flex-wrap justify-between items-center gap-5">
            {/* header-main-left */}
            {/* logo */}
            <div>
              <Link
                href={"/"}
                className="font-semibold tracking-tighter text-2xl"
              >
                AdminDash
              </Link>
            </div>
            {/* header-main-right */}
            <div className="flex flex-wrap gap-3">
              {/* theme toggle */}
              <ThemeToggle />
              {/* avatar */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size={'icon'}>
                    <Avatar className="flex flex-wrap justify-center items-center">
                      <AvatarFallback>BD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
