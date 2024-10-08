const VideoCard = ({ videoInfo }) => {
  // Early return
  if (!videoInfo) return null;

  const { snippet, statistics, channelIcon } = videoInfo;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  // Convert view count to a more readable format
  const formatViews = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    }
    return views;
  };

  return (
    <div className="h-full cursor-pointer overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:shadow-lg hover:shadow-sky-200">
      {/* Thumbnail */}
      <img
        src={thumbnails?.medium?.url}
        alt={title}
        className="h-44 w-full rounded-xl object-cover"
      />

      {/* Video details */}
      <div className="flex items-start py-3">
        <div className="h-10 w-10 flex-shrink-0">
          {/* Channel icon */}
          <img
            src={channelIcon}
            alt={channelTitle}
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <div className="flex-1 px-3">
          <h3 className="text-md line-clamp-2 font-semibold text-gray-800">
            {title}
          </h3>
          <p className="text-sm text-gray-700">{channelTitle}</p>
          <div className="text-sm text-gray-500">
            {formatViews(statistics?.viewCount)} views •{" "}
            {new Date(publishedAt).toDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
