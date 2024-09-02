import React, { useEffect, useState } from "react";
import { withStyles } from "@mui/styles";
import { API_KEY } from "../utils/constants";
import history from "../utils/Assests/history.png";
import { useSelector, useDispatch } from "react-redux";
import { cacheResults } from "../utils/SuggestionsSlice";
import ButtonList from "./ButtonList";
import { useNavigate } from "react-router-dom";
import { searchResults } from "../utils/searchSlice";
import {
  mainDiv,
  searchInput,
  searchIcon,
  voiceIcon,
  suggestionsDiv,
  suggestionsRemoveButton,
  suggestionsItemsStyle,
  hoveredSuggestionsItemsStyle,
} from "../CssModule/searchInput";

function SearchInput(props) {
  const { classes } = props;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchVideos, setSearchVideos] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const searchCache = useSelector((store) => store.suggestions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    let url = `/complete/search?client=firefox&ds=yt&q=${searchQuery}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setSuggestions(json[1]);
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("There was a problem with the fetch suggestions:", error);
    }
  };

  const fetchVideosOnSearch = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&type=video&key=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSearchVideos(data.items);
      dispatch(
        searchResults({
          ["data"]: data.items,
        })
      );
    } catch (error) {
      console.error("There was a problem with the fetch search Videos:", error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchVideosOnSearch();
    setSearchQuery("");
    navigate(`/search?search=${searchQuery}`);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
  };

  const handleSearchSuggestions = (text) => {
    setSearchQuery(text);
    console.log("text is ", searchQuery);
    fetchVideosOnSearch();
    navigate(`/search?search=${text}`);
    setSearchQuery("");
  };

  return (
    <>
      <div style={mainDiv}>
        <form onSubmit={handleSearch}>
          <input
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={searchInput}
          />
        </form>
        <span>
          <button style={searchIcon} type="submit">
            <img
              width={20}
              height={20}
              src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/zoom-normal-regular-64.png"
              alt="Search Icon is Loading"
            />
          </button>
        </span>
        <span>
          <button style={voiceIcon}>
            <img
              width={25}
              height={25}
              src="https://cdn3.iconfinder.com/data/icons/mixed-5-3/24/254-64.png"
              alt="Voice Recorder Icon is loading"
            />
          </button>
        </span>
      </div>
      <ButtonList />
      {suggestions.length !== 0 ? (
        <div style={suggestionsDiv}>
          {suggestions.map((item, index) => (
            <ul key={item.toString()} style={{ listStyleType: "none" }}>
              <li
                style={
                  hoveredIndex === index
                    ? hoveredSuggestionsItemsStyle
                    : suggestionsItemsStyle
                }
                onClick={() => handleSearchSuggestions(item)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <img width={20} height={20} src={history} alt="image" />
                <div>
                  <p style={{ paddingRight: "200px" }}>{item}</p>
                </div>
                <button style={suggestionsRemoveButton}>Remove</button>
              </li>
            </ul>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default SearchInput;
