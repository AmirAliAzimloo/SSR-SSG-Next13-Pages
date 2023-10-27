import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Result from "@/components/templates/Search/Result";
import { MenuTypes } from "@/types/serverTypes";
import React from "react";

interface SearchProps{
  data:MenuTypes[]
}

function Search({ data }:SearchProps) {
  return (
    <>
      <PageHeader route="Search" />
      <Result searchResult={data} />
    </>
  );
}

export async function getServerSideProps(context:any) {
  const { query } = context;

  const res = await fetch("http://localhost:4000/menu");
  const data:MenuTypes[] = await res.json();

  const searchResult = data.filter(
    (item) =>
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase())
  );

  return {
    props: {
      data: searchResult,
    },
  };
}

export default Search;
