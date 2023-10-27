import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Pricing from "@/components/templates/Menu/Pricing";
import { MenuTypes } from "@/types/serverTypes";
import React from "react";

interface MenuProps{
  menu:MenuTypes[]
}

function Menu({ menu }:MenuProps) {
  return (
    <>
      <PageHeader route="Menu" />
      <Pricing data={menu} />
    </>
  );
}

export async function getStaticProps(context:any) {
  const res = await fetch("http://localhost:4000/menu");
  const data:MenuTypes[] = await res.json();

  return {
    props: {
      menu: data,
    },
    revalidate: 60 * 60 * 12, // 43200 Second = 12h
  };
}

export default Menu;
