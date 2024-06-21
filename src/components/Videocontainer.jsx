import React, { useEffect, useState } from "react";
import API_KEY, { YOUTUBE_VIDEO_API } from "../Constant/youtube";
import axios from "axios";
import VideoCard from "./videocard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../Store/appSlice";

const Videocontainer = () => {
  const { video, category } = useSelector((store) => store.app);
  console.log(category);
  const dispatch = useDispatch();
  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);

      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchVideoByCategory = async (category) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`
      );

      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (category === "All") {
      fetchingYoutubeVideo();
    } else {
      fetchVideoByCategory(category);
    }
  }, [category]);

  return (
    <div className="grid grid-cols-3 gap-3">
      {video.map((item) => {
        return (
          <Link
            to={`/watch?v=${
              typeof item.id === "object" ? item.id.videoId : item.id
            }`}
            key={typeof item.id === "object" ? item.id.videoId : item.id}
          >
            <VideoCard item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default Videocontainer;
