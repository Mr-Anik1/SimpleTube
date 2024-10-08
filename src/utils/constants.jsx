export const HAMBURGER_MENU =
  "https://e7.pngegg.com/pngimages/436/707/png-clipart-hamburger-button-computer-icons-menu-menu-food-text-thumbnail.png";

export const CROSS_HAMBURGER =
  "https://w7.pngwing.com/pngs/4/1018/png-transparent-computer-icons-share-icon-hamburger-button-crossed-logo-share-icon-symbol.png";

export const YOUTUBE_LOGO = "https://iili.io/dbiJLKX.png";

export const USER_ICON =
  "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

export const SEARCH_ICON = "https://www.svgrepo.com/show/7109/search.svg";

export const buttons = [
  { id: "001", name: "All" },
  { id: "002", name: "Songs" },
  { id: "003", name: "Movies" },
  { id: "004", name: "Cartoon" },
  { id: "005", name: "Casper" },
  { id: "006", name: "Programming" },
  { id: "007", name: "Web3" },
  { id: "008", name: "Computer" },
  { id: "009", name: "Rust" },
  { id: "010", name: "Masha" },
  { id: "011", name: "Linux" },
  { id: "012", name: "Tech" },
  { id: "013", name: "War" },
];

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const MOST_POPULAR_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${GOOGLE_API_KEY}`;

export const CHANNELS_API_URL = (channelId) => {
  return `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${GOOGLE_API_KEY}`;
};
