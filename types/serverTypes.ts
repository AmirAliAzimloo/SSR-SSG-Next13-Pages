import * as Icons from "@fortawesome/free-solid-svg-icons";

export interface ServicesTypes {
  id: number;
  title: string;
  img: string;
  desc: string;
  icon: keyof typeof Icons;
}

export interface MenuTypes {
  id: number;
  title: string;
  price: number;
  desc: string;
  score: number;
  off: number;
  type: string;
  img: string;
}
