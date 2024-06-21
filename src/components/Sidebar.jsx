import React, { useReducer } from "react";
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";
import { ImProfile } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaFireAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { TfiVideoClapper } from "react-icons/tfi";
import { TbLivePhoto } from "react-icons/tb";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";
import { LuLightbulb } from "react-icons/lu";
import { GiClothesline } from "react-icons/gi";
import { PiApplePodcastsLogoFill } from "react-icons/pi";
const SidebarItems = [
  {
    icon: <IoHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <ImProfile size={"24px"} />,
    title: "Your Channel",
  },
  {
    icon: <FaHistory size={"24px"} />,
    title: "History",
  },
  {
    icon: <MdOutlinePlaylistPlay size={"24px"} />,
    title: "PlayList",
  },
  {
    icon: <GoVideo size={"24px"} />,
    title: "Your Videos",
  },
  {
    icon: <MdOutlineWatchLater size={"24px"} />,
    title: "Watch Later",
  },
  {
    icon: <AiFillLike size={"24px"} />,
    title: "Liked",
  },
  {
    icon: <FaFireAlt size={"24px"} />,
    title: "Trending",
  },
  {
    icon: <FaShoppingBag size={"24px"} />,
    title: "Shopping",
  },
  {
    icon: <IoMdMusicalNote size={"24px"} />,
    title: "Music",
  },
  {
    icon: <TfiVideoClapper size={"24px"} />,
    title: "Flim",
  },
  {
    icon: <TbLivePhoto size={"24px"} />,
    title: "Live",
  },
  {
    icon: <SiYoutubegaming size={"24px"} />,
    title: "Gaming",
  },
  {
    icon: <IoNewspaperSharp size={"24px"} />,
    title: "News",
  },
  {
    icon: <FaTrophy size={"24px"} />,
    title: "Trophy",
  },
  {
    icon: <LuLightbulb size={"24px"} />,
    title: "Courses",
  },
  {
    icon: <GiClothesline size={"24px"} />,
    title: "Fashion",
  },
  {
    icon: <PiApplePodcastsLogoFill size={"24px"} />,
    title: "Podcasts",
  },
  {
    icon: <MdSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <IoHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <IoHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <IoHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <IoHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <IoHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <IoHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={"24px"} />,
    title: "Subscription",
  },
];

const Sidebar = () => {
  const open = useSelector((store) => store.app.open);

  return (
    <div
      className={`ml-3 relative left-0 ${
        open ? "w-[20%]" : "w-[6%]"
      } p-5 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden`}
    >
      {SidebarItems.map((item, index) => {
        return (
          <div key={index} className="flex my-3 ">
            {item.icon}
            <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
