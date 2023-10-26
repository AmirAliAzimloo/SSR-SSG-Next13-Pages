import React from "react";
import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";


function Services() {
  return (
    <>
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
          <ServiceItem
            title="Fastest Door Delivery"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img="/images/service-1.jpg"
            icon=""
          />
          <ServiceItem
            title="Fresh Coffee Beans"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img="/images/service-2.jpg"
            icon=""
          />
          <ServiceItem
            title="Online Table Booking"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img="/images/service-3.jpg"
            icon=""
          />
          <ServiceItem
            title="Best Quality Coffee"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img="/images/service-4.jpg"
            icon=""
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default Services;
