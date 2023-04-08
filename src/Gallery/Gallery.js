import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ListGallery from "./listGallery";

const Gallery = () => {

  const [modal, setModal] = useState(false);
  const [listGallery, setListGallery] = useState([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const toggle = () => setModal(!modal);


// useEffect API //
useEffect(() => {
  fetch("https://633ae6bf471b8c395577ddb4.mockapi.io/api/v1/dsad")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setListGallery(data);
    });
}, []); 





  const handleChangeName = (e) =>{
    setName(e.target.value);
  }
  const handleChangeTitle = (e) =>{
    setTitle(e.target.value);
  }
  const handleChangeImage = (e) =>{
    setImage(e.target.value);
  }
  const handleAddNewGallery = (e) =>{
    const NewGallery = {
      name: name,
      title: title,
      image: image,
    };
    fetch('https://633ae6bf471b8c395577ddb4.mockapi.io/api/v1/dsad', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(NewGallery),
    })
    .then(function (res) {
      return res.json();
    })
    .then(function (data){
      console.log(data);
    }
    );
  };   

  return (
    <div>
    <section className="gallery" id="gallery">
      <div className="heading">
        <span>our gallery</span>
        <h1>Memories last forever</h1>
      </div>
      <div className="box-container">
        {listGallery.map((list) => {
          return (
            <ListGallery
              title={list.title}
              name={list.name}
              image={list.image}
            />
          );
        })}
      </div>
      <a
        data-aos="zoom-in-left"
        data-aos-delay={1300}
        className="button-gallery"
        onClick={toggle}
        href="#"
      >
        Đăng Ảnh
      </a>
      </section>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Thêm Ảnh</ModalHeader>
        <div className="col-12 form-group gallery-input" id="input-gallery">
          <label>Name:</label>
          <div className="box" data-aos="fade-up" data-aos-delay={600}>
            <form action>
              <input
                type="text"
                placeholder="enter name ..."
                className="input"
                value={name}
                onChange={handleChangeName}
              />
            </form>
          </div>
        </div>
        <div className="col-12 form-group gallery-input" id="input-gallery">
          <label>Title:</label>
          <div className="box" data-aos="fade-up" data-aos-delay={600}>
            <form action>
              <input
                type="text"
                placeholder="enter title ..."
                className="input"
                value={title}
                onChange={handleChangeTitle}

              />
            </form>
          </div>
        </div>     
        <div className="col-12 form-group gallery-input" id="input-gallery-image">
        <label>Image:</label>
        <div className="box" data-aos="fade-up" data-aos-delay={600}>
            <form action>
              <input
                type="text"
                placeholder="enter image address..."
                className="input"
                value={image}
                onChange={handleChangeImage}

                />
           </form>
            </div>

            </div> 

        <NavLink
          data-aos="zoom-in-left"
          data-aos-delay={1300}
          className="btn"
          id="btn-gallery"
          onClick={handleAddNewGallery}
          to="/Gallery"
         

        >
          Đăng
        </NavLink>
      </Modal>
    
    
    </div>
  );
};

export default Gallery;