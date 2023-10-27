import * as Icons from "@fortawesome/free-solid-svg-icons";

export interface ServicesTypes {
  id: number;
  title: string;
  img: string;
  desc: string;
  icon: keyof typeof Icons;
}
