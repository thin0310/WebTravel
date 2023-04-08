import React from 'react'

export const ListGallery = (props) => {
  return (
    <div>
      <div className="box" data-aos="zoom-in-up" data-aos-delay={150}>
        <img src={props.image} alt="" />
        <span>{props.name}</span>
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}
export default ListGallery;