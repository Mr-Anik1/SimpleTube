import { useSelector } from "react-redux";
import { useMostPopularVideos } from "../hooks/useMostPopularVideos";
import { VideoCard } from "./VideoCard";

const VideoContainer = () => {
  const mostPopularVideos = useSelector(
    (store) => store?.videoList?.mostPopularVideos,
  );

  // This hook fetch videos data from the Youtube API and update the store
  useMostPopularVideos();

  return (
    mostPopularVideos && (
      <>
        <div className="m-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mostPopularVideos.map((video) => (
            <VideoCard key={video.id} videoInfo={video} />
          ))}
        </div>
      </>
    )
  );
};

export { VideoContainer };
