import {
  nowPlayingUri,
  popularUri,
  topRatedUri,
  upcomingUri,
} from "@/services/urls";

export const TOPICS = [
  {
    id: 1,
    name: "Now Playing",
    uri: nowPlayingUri,
  },
  {
    id: 2,
    name: "Popular",
    uri: popularUri,
  },
  {
    id: 3,
    name: "Top Rated",
    uri: topRatedUri,
  },
  {
    id: 4,
    name: "Upcoming",
    uri: upcomingUri,
  },
];

export const DEFAULT_PAGE = 1;
