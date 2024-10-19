// Fetch Data
const fetchVideosAndChannels = async () => {
  try {
    // Fetch popular videos
    const videoResponse = await fetch(VIDEOS_API_URL);
    const videoData = await videoResponse.json();

    // Fetch channel icons for each video
    const channelIds = videoData.items.map((video) => video.snippet.channelId);
    const channelPromises = channelIds.map((id) => fetch(CHANNELS_API_URL(id)));
    const channelResponses = await Promise.all(channelPromises);
    const channelData = await Promise.all(
      channelResponses.map((res) => res.json()),
    );

    // Merge video and channel data
    const videosWithChannelIcons = videoData.items.map((video, index) => ({
      ...video,
      channelIcon:
        channelData[index].items[0]?.snippet?.thumbnails?.default?.url,
    }));

    return videosWithChannelIcons;
  } catch (error) {
    console.error("Error fetching videos or channels:", error);
  }
};

const obj = {
  kind: "youtube#searchResult",
  etag: "bxzDekX9fyRQVejoPkifUbsuWC4",
  id: {
    kind: "youtube#video",
    videoId: "4_N2gjqLgsA",
  },
  snippet: {
    publishedAt: "2024-10-12T00:50:00Z",
    channelId: "UCOmcA3f_RrH6b9NmcNa4tdg",
    title: "Hands On the World&#39;s First Trifolding Phone",
    description:
      "CNET Senior Editor Sareena Dayaram got her hands on the world's first trifold phone: Huawei's Mate XT Ultimate Design.",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/4_N2gjqLgsA/default.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/4_N2gjqLgsA/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/4_N2gjqLgsA/hqdefault.jpg",
        width: 480,
        height: 360,
      },
    },
    channelTitle: "CNET",
    liveBroadcastContent: "none",
    publishTime: "2024-10-12T00:50:00Z",
  },
};

{
  /* <img
                  className="h-5 w-5 fill-slate-300"
                  src={SEARCH_ICON}
                  alt="search-icon"
                /> */
}
