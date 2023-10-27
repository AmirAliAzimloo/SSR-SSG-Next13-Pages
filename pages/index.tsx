import About from "@/components/templates/Index/About";
import Menu from "@/components/templates/Index/Menu";
import Offer from "@/components/templates/Index/Offer";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import { MenuTypes, ServicesTypes } from "@/types/serverTypes";
import React from "react";

interface IndexProps {
  data: {
    services: ServicesTypes[],
    menu: MenuTypes[],
  };
}


const Index: React.FC<IndexProps> = ({ data }) => {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services}/>
      <Offer/>
      <Menu  data={data.menu} />
    </>
  );
};
export async function getStaticProps(context:any){

  const res = await fetch("http://localhost:4000/services");
  const services:ServicesTypes[] = await res.json();

  const menuResponse = await fetch("http://localhost:4000/menu");
  const menuData: MenuTypes[] = await menuResponse.json();

  return {
    props:{
      data:{
        services,
        menu: menuData,
      }
    },
    revalidate: 60 * 60 * 12
    //12h for revalidate index page details
  }
}

export default Index;
