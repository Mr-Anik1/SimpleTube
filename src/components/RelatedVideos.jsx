import { useEffect, useState } from "react";
import { RELATED_VIDEOS } from "../utils/constants";

const RelatedVideos = ({ channelId }) => {
  const [videos, setVideos] = useState(null);

  const getRelatedVideos = async () => {
    const relatedVideUrl = RELATED_VIDEOS(channelId);
    const videoResponse = await fetch(relatedVideUrl);
    const videoData = await videoResponse.json();

    setVideos(videoData?.items);
  };

  useEffect(() => {
    getRelatedVideos();
  }, []);

  return (
    videos && (
      <>
        <div className="grid grid-cols-1 gap-4 bg-slate-200 p-3">
          {videos.map((video) => (
            <div
              key={video?.id?.videoId}
              className="flex cursor-pointer gap-2 overflow-hidden rounded-lg bg-white shadow-sm duration-300 hover:shadow-md hover:shadow-sky-300"
            >
              <img
                className="w-3/5 flex-1"
                src={video?.snippet?.thumbnails?.default?.url}
                alt="gg"
              />

              <div className="w-2/5 py-2 pl-0 pr-2">
                <h3 className="line-clamp-2 text-base">
                  {video?.snippet?.title}
                </h3>
                <h3 className="line-clamp-1 text-base font-semibold">
                  {video?.snippet?.channelTitle}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  );
};

export { RelatedVideos };
