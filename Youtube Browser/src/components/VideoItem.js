import "./VideoItem.css";
import React from "react";
import VideoList from "./VideoList";

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img className="ui image" src={video.snippet.thumpnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
