import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Comments from "@/components/templates/Testimonial/Comments";
import { CommentsTypes } from "@/types/serverTypes";
import React from "react";

interface TestimonialProps{
  comments:CommentsTypes[]
}

function Testimonial({ comments }:TestimonialProps) {
  return (
    <>
      <PageHeader route="Testimonial" />
      <Comments data={comments} />
    </>
  );
}

export async function getStaticProps(context:any) {
  const res = await fetch("http://localhost:4000/comments");
  const comments : CommentsTypes[] = await res.json();

  return {
    props: {
      comments,
    },
    revalidate: 60 * 60 * 12, // 12h
  };
}

export default Testimonial;
