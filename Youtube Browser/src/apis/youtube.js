import axios from "axios";

const KEY = "AIzaSyBR6TGNS6EGtQhlrs5mSyigU5iQXBnicSg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
