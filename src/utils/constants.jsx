export const YOUTUBE_LOGO = "https://iili.io/dbiJLKX.png";

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

export const RELATED_VIDEOS = (channelId) => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=20&key=${GOOGLE_API_KEY}
`;
};

export const SEARCH_SUGGESTIONS =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// Dummy Comments Data
export const commentsData = [
  {
    id: "001",
    name: "Alexa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        id: "0012",
        name: "Alexa",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        id: "0013",
        name: "Alexa",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            id: "00134",
            name: "Alexa",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },
          {
            id: "00135",
            name: "Alexa",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },
        ],
      },
      {
        id: "0014",
        name: "Alexa",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    id: "002",
    name: "Alexa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    id: "003",
    name: "Alexa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        id: "00123",
        name: "Alexa",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        id: "00134",
        name: "Alexa",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            id: "001345",
            name: "Alexa",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                id: "0013456",
                name: "Jessica",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [
                  {
                    id: "0013567r",
                    name: "Dr. Ritt",
                    text: "Ok that is good one, I like it.",
                    replies: [],
                  },
                ],
              },
              {
                id: "0013567",
                name: "Alexa",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
            ],
          },
          {
            id: "001356",
            name: "Alexa",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },
        ],
      },
      {
        id: "00145",
        name: "Alexa",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    id: "004",
    name: "Alexa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        id: "004a",
        name: "Alexa",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
];
