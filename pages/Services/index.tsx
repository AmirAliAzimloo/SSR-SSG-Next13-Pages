import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ServicesDetails from "@/components/templates/Services/ServicesDetails";
import { ServicesTypes } from "@/types/serverTypes";
import React from "react";

interface ServicesProps{
  services:ServicesTypes[]
}

function Services({ services }:ServicesProps) {
  return (
    <>
      <PageHeader route="Services" />
      <ServicesDetails data={services} />
    </>
  );
}

export async function getStaticProps(context:any) {
  const res = await fetch("http://localhost:4000/services");
  const data:ServicesTypes[] = await res.json();

  return {
    props: {
      services: data,
    },
  };
}

export default Services;
