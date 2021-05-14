import React from "react";
import VideoList from "./VideoList";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumpnails.medium.url} />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
