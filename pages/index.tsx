import Footer from "@/components/modules/Footer/Footer";
import About from "@/components/templates/Index/About";
import Menu from "@/components/templates/Index/Menu";
import Offer from "@/components/templates/Index/Offer";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import Testimonials from "@/components/templates/Index/Testimonial";
import Reservation from "@/components/templates/Index/reservation";
import { CommentsTypes, MenuTypes, ServicesTypes } from "@/types/serverTypes";
import React from "react";

interface IndexProps {
  data: {
    services: ServicesTypes[],
    menu: MenuTypes[],
    comments: CommentsTypes[]
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
      <Reservation />
      <Testimonials data={data.comments} />
      <Footer />
    </>
  );
};
export async function getStaticProps(context:any){

  const res = await fetch("http://localhost:4000/services");
  const services:ServicesTypes[] = await res.json();

  const menuResponse = await fetch("http://localhost:4000/menu");
  const menuData: MenuTypes[] = await menuResponse.json();

  const commentsResponse = await fetch("http://localhost:4000/comments");
  const commentsData:CommentsTypes[] = await commentsResponse.json();

  return {
    props:{
      data:{
        services,
        menu: menuData,
        comments: commentsData,
      }
    },
    revalidate: 60 * 60 * 12
    //12h for revalidate index page details
  }
}

export default Index;
