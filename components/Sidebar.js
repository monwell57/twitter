import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UsersIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/*Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        ></Image>
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 lx:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon} />
        <SidebarMenuItem text="List" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      {/* Button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
      {/* Mini-Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img src="profile_pic.png" alt="user image" className="h-10 w-10 rounded-full xl:mr-2" />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold"> Greg Peters</h4>
          <p className="text-gray-500">@monwell571</p>
        </div>
        <DotsCircleHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}
