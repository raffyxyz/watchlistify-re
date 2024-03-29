import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "../use-toast";
import { UserRound, Library, Settings, LogOut, Mail } from "lucide-react";

interface UserMenuLabelProps {
  label: string | null | undefined;
  icon: React.ReactNode;
}

const UserMenuLabel: React.FC<UserMenuLabelProps> = ({ label, icon }) => {
  return (
    <div className="flex justify-between content-center w-full">
      <h1>{label}</h1>
      {icon}
    </div>
  );
};

interface UserMenuProps {
  avatar?: string | null;
  name?: string | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ avatar, name }) => {
  const { toast } = useToast();
  return (
    <Menubar className="border-0 rounded-none">
      <MenubarMenu>
        <MenubarTrigger className="px-0 py-0">
          <Avatar className="h-7 w-7 md:h-10 md:w-10">
            {avatar ? (
              <AvatarImage src={avatar} alt={name ? name : undefined} />
            ) : (
              <AvatarImage src="images/avatar.jpg" alt="Avatar user" />
            )}
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent className="min-w-[8rem]" align="end">
          <MenubarItem
            onClick={() =>
              toast({
                description: "In development.",
                variant: "orange",
              })
            }
          >
            <UserMenuLabel label="Profile" icon={<UserRound size={17} />} />
          </MenubarItem>
          <MenubarSeparator />
          <Link href="/watchlist">
            <MenubarItem>
              <UserMenuLabel label="WatchList" icon={<Library size={17} />} />
            </MenubarItem>
          </Link>
          {/* <MenubarSeparator /> */}
          {/* <MenubarItem>
            <UserMenuLabel label="Settings" icon={<Settings size={17} />} />
          </MenubarItem> */}
          <MenubarSeparator />
          {!!avatar ? (
            <MenubarItem onClick={() => signOut()}>
              <UserMenuLabel label="Logout" icon={<LogOut size={17} />} />
            </MenubarItem>
          ) : null}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default UserMenu;
