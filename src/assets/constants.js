import { FaCompass } from "react-icons/fa";
import { TiWaves } from "react-icons/ti";
import { BsBarChartFill } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";

export const genres = [
  { title: "Pop", value: "POP" },
  { title: "Hip-Hop", value: "HIP_HOP_RAP" },
  { title: "Dance", value: "DANCE" },
  { title: "Electronic", value: "ELECTRONIC" },
  { title: "Soul", value: "SOUL_RNB" },
  { title: "Alternative", value: "ALTERNATIVE" },
  { title: "Rock", value: "ROCK" },
  { title: "Latin", value: "LATIN" },
  { title: "Film", value: "FILM_TV" },
  { title: "Country", value: "COUNTRY" },
  { title: "Worldwide", value: "WORLDWIDE" },
  { title: "Reggae", value: "REGGAE_DANCE_HALL" },
  { title: "House", value: "HOUSE" },
  { title: "K-Pop", value: "K_POP" },
];

export const links = [
  { name: "Discover", to: "/musict", icon: FaCompass },
  { name: "Around You", to: "/musict/around-you", icon: TiWaves },
  { name: "Top Artists", to: "/musict/top-artists", icon: BsBarChartFill },
  { name: "Top Charts", to: "/musict/top-charts", icon: HiOutlineHashtag },
];
