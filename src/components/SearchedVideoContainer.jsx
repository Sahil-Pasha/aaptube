import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Link, useSearchParams } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import { searchResults } from "../utils/searchSlice";
import Loader from "./Loader";

const SearchedVideoContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);
  const search = useSelector((state) => state.search);
  const { data } = search;
  // console.log("searchData is ", data);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  // console.log("searchParams", searchParams);
  // console.log("searchQuery", searchQuery);

  const dispatch = useDispatch();

  // Data fetching for infinite scroll
  const fetchVidoesOnScroll = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&type=video&key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      dispatch(
        searchResults({
          ["data"]: data.items,
        })
      );
    } catch (error) {
      console.error("Data is not available on Scroll");
    }

    setIndex((prevIndex) => prevIndex + 1);
    setIsLoading(false);
  }, [index, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchVidoesOnScroll();
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchVidoesOnScroll]);

  function formatDateString(isoString) {
    const date = new Date(isoString);

    const dateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedDate = date.toLocaleDateString("en-US", dateOptions);

    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedTime = `${hours}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;

    return `${formattedDate} ${formattedTime}`;
  }

  return (
    <div style={{ marginTop: "120px" }}>
      <>
        {" "}
        {data ? (
          <Grid container spacing={2}>
            {data &&
              data.length > 0 &&
              data.map((items) => (
                <Grid item md={4} key={items.id.videoId}>
                  <Link to={"/watch?v=" + items.id.videoId}>
                    <Card
                      sx={{
                        border: "1px solid green",
                        borderRadius: 4,
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="194"
                        image={items.snippet.thumbnails.medium.url}
                        alt="Youtube Card"
                      />
                    </Card>
                  </Link>
                  <div style={{ display: "flex" }}>
                    <img
                      style={{ paddingTop: "15px" }}
                      width={25}
                      height={25}
                      src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                      alt="Channel Name Icon"
                    />
                    <Typography
                      style={{
                        marginTop: "revert",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      {items.snippet.title}
                    </Typography>
                  </div>
                  <Typography
                    style={{
                      fontSize: "18px",
                      paddingLeft: "34px",
                    }}
                  >
                    {items.snippet.channelTitle}
                  </Typography>
                  <Typography style={{ paddingLeft: "34px" }}>
                    {formatDateString(items.snippet.publishedAt)}
                  </Typography>
                </Grid>
              ))}
          </Grid>
        ) : (
          <Grid>
            <div>
              <h1 style={{ paddingTop: "200px" }}>
                Data is not availlabe due to More requests in in one day
              </h1>
            </div>
          </Grid>
        )}
        <div> {isLoading && <Loader />}</div>
      </>
    </div>
  );
};

export default SearchedVideoContainer;
