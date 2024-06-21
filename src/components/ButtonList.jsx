import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../Store/appSlice";
const buttonList = [
  "All",
  "JavaScipt",
  "Java",
  "Live",
  "Music",
  "Song",
  "Vlog",
  "Trending",
  "Programming",
  "Codding",
  "COmedy",
  "Education",
  "Technology",
  "Cricket",
  "Comedy",
  "Thriller",
  "New to you",
  "Netlify",
  "learning",
  "python",
];

const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  };
  console.log(active);
  return (
    <div className="flex w-full py-2 overflow-x-scroll my-1 no-scrollbar">
      {buttonList.map((buttonName, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => {
                videoByTag(buttonName);
              }}
              className={`${
                active === buttonName
                  ? "bg-slate-900 text-white"
                  : "bg-gray-300"
              } w-fit font-medium mx-1 cursor-pointer px-3 py-2 rounded-lg`}
            >
              <span className="whitespace-nowrap">{buttonName}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
