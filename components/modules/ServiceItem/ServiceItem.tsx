import React from "react";

interface ServiceItemProps {
  title: string;
  desc: string;
  img: string;
  icon: string;
}

function ServiceItem({ title, desc, img, icon }: ServiceItemProps) {
  return (
    <>
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div className="col-sm-7">
          <h4>
            <i className="fa fa-truck service-icon"></i>
            {title}
          </h4>
          <p className="m-0">{desc}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default ServiceItem;


