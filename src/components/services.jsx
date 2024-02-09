import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <div style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",

          }}>
            <div style={{
            display: "flex",
            flexDirection:"row",
            justifyContent: "space-between",
            minWidth: "55%",
            maxWidth: "100%"
          }}>
            <h3>Residential</h3><h3>|</h3>
            <h3>Comercial</h3><h3>|</h3>
            <h3>Industrial</h3>
            </div>
            </div>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
