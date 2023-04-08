import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Destination = () => {
  const [listDestination, setlistDestination] = useState([]);
  useEffect(() => {
    fetch(
      "https://633ae6bf471b8c395577ddb4.mockapi.io/api/v1/Destination" 
        
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setlistDestination(data);
      });
  }, []);
  return (
    <section className="destination" id="destination">
      <div className="heading">
        <span>our destination</span>
        <h1>Keep looking up</h1>
      </div>
        <div className="box-container">
      {listDestination.map((product,index) => {
        return (
        <NavLink to={`/Product-detail/${product.id}`}>
          <div className="box" data-aos="fade-up" data-aos-delay={150}>
            <div className="image">
              <img src={product.image} alt="" />
            </div>
            <div className="content">
              <p>{product.title}</p>
              <NavLink to={`/Product-detail/${product.id}`}>
                {product.city} <i className="fas fa-angle-right" />
              </NavLink>
            </div>
          </div>
        </NavLink>
        )
      })}
      </div>
    </section>
  );
};

export default Destination;
