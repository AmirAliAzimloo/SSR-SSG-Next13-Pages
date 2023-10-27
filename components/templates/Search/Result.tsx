import Card from "@/components/modules/Card/Card";
import { MenuTypes } from "@/types/serverTypes";
import React from "react";

interface ResultProps{
    searchResult:MenuTypes[]
}

function Result({ searchResult }:ResultProps) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>
            {/*  */}
            {searchResult
              .filter((item) => item.type === "hot")
              .slice(0, 3)
              .map((item) => (
                <Card {...item} key={item.id} />
              ))}
          </div>
          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>

            {searchResult
              .filter((item) => item.type === "cold")
              .slice(0, 3)
              .map((item) => (
                <Card {...item} key={item.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;