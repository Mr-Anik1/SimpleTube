import { useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { CommentsContainer } from "./CommentsContainer";
import { RelatedVideos } from "./RelatedVideos";

const WatchVideo = () => {
  const [fullDescription, setFullDescription] = useState(false);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const watchVideoInfo = useSelector(
    (store) => store?.videoInfo?.watchVideoInfo,
  );

  if (!videoId || !watchVideoInfo) return null;

  const { id, snippet, statistics, channelIcon } = watchVideoInfo;
  const { channelTitle, channelId, description, title, publishedAt } = snippet;

  // How long ago was the video published?
  const getTimeDifference = (dateString) => {
    const givenDate = new Date(dateString);
    const now = new Date();
    const diffInMilliseconds = now - givenDate; // Get the difference in milliseconds
    const diffInHours = Math.round(diffInMilliseconds / (1000 * 60 * 60)); // Convert milliseconds to hours

    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else if (diffInHours < 24 * 30) {
      // Roughly 30 days in a month
      return `${Math.round(diffInHours / 24)} days ago`;
    } else if (diffInHours < 24 * 365) {
      // Roughly 365 days in a year
      return `${Math.round(diffInHours / (24 * 30))} months ago`;
    } else {
      return `${Math.round(diffInHours / (24 * 365))} years ago`;
    }
  };

  // Convert like count to a more readable format
  const formatLikes = (likes) => {
    if (likes >= 1000000) {
      return (likes / 1000000).toFixed(1) + "M";
    } else if (likes >= 1000) {
      return (likes / 1000).toFixed(1) + "K";
    }
    return likes;
  };

  const handleDescriptionClick = () => {
    setFullDescription(true);
  };

  // When watch page will load, menu will be closed.
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    videoId && (
      <>
        <div className="flex px-6 py-3">
          {/* Left Side: Video Section, Video Details, Comments */}
          <div className="w-[70%]">
            {/* Video Section */}
            <div className="w-full overflow-hidden rounded-xl">
              <iframe
                className="h-[25rem] w-full rounded-xl border-0"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Details & Comments Section */}
            <div className="mt-4 space-y-4">
              {/* Video Title */}
              <h1 className="text-2xl font-semibold">{title}</h1>

              {/* Channel Info, Subscribe, and Like */}
              <div className="flex items-center gap-3">
                {/* Channel icon */}
                <div className="h-12 w-12">
                  <img
                    src={channelIcon}
                    alt={channelTitle}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold">{channelTitle}</h3>

                <button className="ml-6 rounded-full bg-gradient-to-r from-red-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-transform duration-300 hover:scale-105">
                  Subscribe
                </button>

                {/* Like Button */}
                <div className="ml-6 flex cursor-pointer items-center gap-1 rounded-full bg-amber-50 px-3 py-2 text-sm font-medium shadow-md">
                  <BiSolidLike className="h-5 w-5" />
                  <p>{formatLikes(statistics?.likeCount)}</p>
                </div>
              </div>

              {/* Description */}
              <div className="rounded-xl bg-gray-300 p-3">
                <p className="text-sm font-semibold">
                  {(+statistics?.viewCount).toLocaleString()} views
                  <span className="pl-8">{getTimeDifference(publishedAt)}</span>
                  <span
                    onClick={handleDescriptionClick}
                    className="cursor-pointer pl-8 text-blue-800 hover:text-purple-700 hover:underline hover:underline-offset-2"
                  >
                    See Full Description
                  </span>
                </p>

                {/* Toggle Full Description */}
                <p className="mt-2 text-sm">
                  {fullDescription ? (
                    description
                  ) : (
                    <p className="line-clamp-6">{description}</p>
                  )}
                </p>
              </div>

              {/* Comments Section */}
              <div>
                <CommentsContainer />
              </div>
            </div>
          </div>

          {/* Right Side: Related Videos */}
          <div className="w-[30%] pl-6">
            <div className="max-h-[calc(150vh-3rem)] overflow-auto rounded-lg">
              <RelatedVideos channelId={channelId} />
            </div>
          </div>
        </div>
      </>
    )
  );
};

export { WatchVideo };
