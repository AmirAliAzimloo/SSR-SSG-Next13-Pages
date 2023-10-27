import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import { ServicesTypes } from "@/types/serverTypes";
import React from "react";

interface ServicesDetailsProps{
  data:ServicesTypes[]
}

function ServicesDetails({ data }:ServicesDetailsProps) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh &amp; Organic Beans</h1>
        </div>
        <div className="row">
          {data.map((service) => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;
