export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://storage.bunnycdn.com/snapcast-app",
  CDN_URL: "https://snapcast-app.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-49b277e9-4d3.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: "1",
    title: "SnapChat Message",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2025-05-01"),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "2",
    title: "Product Demo Walkthrough",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-04-15"),
    userImg: "/assets/images/sarah.png",
    username: "Sarah",
    views: 245,
    visibility: "public",
    duration: 320,
  },
  {
    id: "3",
    title: "Coding Tutorial: React Hooks",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-04-10"),
    userImg: "/assets/images/michael.png",
    username: "Michael",
    views: 1250,
    visibility: "public",
    duration: 890,
  },
  {
    id: "4",
    title: "Weekly Team Update",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-03-28"),
    userImg: "/assets/images/emma.png",
    username: "Emma",
    views: 32,
    visibility: "private",
    duration: 420,
  },
  {
    id: "5",
    title: "Design System Overview",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-03-15"),
    userImg: "/assets/images/alex.png",
    username: "Alex",
    views: 178,
    visibility: "public",
    duration: 540,
  },
  {
    id: "6",
    title: "Quick Bug Fix Explanation",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-02-20"),
    userImg: "/assets/images/lisa.png",
    username: "Lisa",
    views: 56,
    visibility: "private",
    duration: 95,
  },
  {
    id: "7",
    title: "User Research Findings",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-02-05"),
    userImg: "/assets/images/david.png",
    username: "David",
    views: 320,
    visibility: "public",
    duration: 750,
  },
  {
    id: "8",
    title: "New Feature Announcement",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2025-01-25"),
    userImg: "/assets/images/olivia.png",
    username: "Olivia",
    views: 890,
    visibility: "public",
    duration: 280,
  },
];
