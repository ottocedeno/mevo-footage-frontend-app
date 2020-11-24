import React from "react";
import { youtubeVideoCode } from "../utilities/youtubeParser";

const VideoCard = ({ videoData }) => {
  return (
    <div className="text-mevo-blue mb-10">
      <div className=" relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className=" absolute top-0 left-0 w-full h-full border-none"
          src={`https://www.youtube.com/embed/${youtubeVideoCode(
            videoData.youtube_url
          )}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="px-4 mt-2">
        <h2 className="font-bold text-lg">{videoData.title}</h2>
        <p className="mt-1">{videoData.description}</p>
        <p className="uppercase text-xs text-mevo-dark-grey font-bold mt-1">
          shot on {videoData.camera.model} - {videoData.category.name}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
