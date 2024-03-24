import { scroll_Data } from "../components/MobileScroll";

export type ScrollData = (typeof scroll_Data)[number];

export type Data = {
  heading: string;
  description: string;
  detail_img: string;
};
