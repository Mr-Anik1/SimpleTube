import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CHANNELS_API_URL, MOST_POPULAR_VIDEOS_URL } from "../utils/constants";
import { addMostPopularVideos } from "../utils/videoListSlice";

const useMostPopularVideos = () => {
  const dispatch = useDispatch();
  const mostPopularVideos = useSelector(
    (store) => store?.videoList?.mostPopularVideos,
  );
  const navigate = useNavigate();

  /**
   * @Channel_Data
   * Fetch Individual channel data using channel Id
   */
  const getChannelData = async (id) => {
    const apiUrl = CHANNELS_API_URL(id);

    // Fetch Data
    const response = await fetch(apiUrl);
    const json = await response.json();

    return json;
  };

  /**
   * @VideosAndChannel_Icon
   * This function fetch videos data and channels icon url
   */
  const fetchMostPopularVideosAndChannels = async () => {
    try {
      // Fetch popular videos
      const videoResponse = await fetch(MOST_POPULAR_VIDEOS_URL);
      const videoData = await videoResponse.json();

      // Fetch channel icons for each video
      const channelIds = videoData.items.map(
        (video) => video.snippet.channelId,
      );
      // It will returns array of promises
      const channelPromises = channelIds.map((id) => getChannelData(id));
      const channelData = await Promise.all(channelPromises);

      // Merge video and channel data
      const videosWithChannelIcons = videoData.items.map((video, index) => ({
        ...video,
        channelIcon:
          channelData[index]?.items[0]?.snippet?.thumbnails?.default?.url,
      }));

      dispatch(addMostPopularVideos(videosWithChannelIcons));
    } catch (error) {
      // If any error happens
      // navigate("/error");
    }
  };

  useEffect(() => {
    !mostPopularVideos && fetchMostPopularVideosAndChannels();
  }, []);
};

export { useMostPopularVideos };
