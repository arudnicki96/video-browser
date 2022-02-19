import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderedList = props.videos.map((video) => {
    return <VideoItem video={video} onSelectedVideo={props.onSelectedVideo} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default VideoList;
