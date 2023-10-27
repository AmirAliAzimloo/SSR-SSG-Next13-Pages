import About from "@/components/templates/Index/About";
import Offer from "@/components/templates/Index/Offer";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import { ServicesTypes } from "@/types/serverTypes";
import React from "react";

interface IndexProps {
  data: {
    services: ServicesTypes[];
  };
}


const Index: React.FC<IndexProps> = ({ data }) => {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services}/>
      <Offer/>
    </>
  );
};
export async function getStaticProps(context:any){

  const res = await fetch("http://localhost:4000/services");
  const services:ServicesTypes[] = await res.json();

  return {
    props:{
      data:{
        services
      }
    },
    revalidate: 60 * 60 * 12
    //12h for revalidate index page details
  }
}

export default Index;
