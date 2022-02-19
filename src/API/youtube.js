import axios from "axios";

const KEY = "AIzaSyArtYBvYM1Hsk9aq3Ow5q1nK_uEBlxw_iA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
