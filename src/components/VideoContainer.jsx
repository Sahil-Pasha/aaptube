import React, { useEffect, useState, useCallback } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import Loader from "./Loader";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.log("Error is ", error);
    }
    setIsLoading(false);
  };

  //Data fetching for Infinite Scroll
  const fetchVideos = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const data = await response.json();
      setVideos((prevVideos) => [...prevVideos, ...data.items]);
      // setVideos(data);
    } catch (error) {
      console.log(error);
    }
    setIndex((prevIndex) => prevIndex + 1);
    setIsLoading(false);
  }, [index, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchVideos();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchVideos]);

  return (
    <>
      <div>
        <VideoCard info={videos} />
      </div>
      <div> {isLoading && <Loader />}</div>
    </>
  );
};

export default VideoContainer;
