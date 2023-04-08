import React from 'react';

const Blogs = () => {
  return (
    <div>
    <section className="blogs" id="blogs">
    <div className="heading">
      <span>blogs &amp; posts</span>
      <h1>Experience in words</h1>
    </div>
    <div className="box-container">
      <div className="box" data-aos="fade-up" data-aos-delay={150}>
        <div className="image">
          <img src="images/blog-1.jpg" alt="" />
        </div>
        <div className="content">
          <a href="#" className="link">
            One Mile At A Time.
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur, natus!
          </p>
          <div className="icon">
            <a href="#">
              <i className="fas fa-clock" /> 21st may, 2021
            </a>
            <a href="#">
              <i className="fas fa-user" /> by admin
            </a>
          </div>
        </div>
      </div>
      <div className="box" data-aos="fade-up" data-aos-delay={300}>
        <div className="image">
          <img src="images/blog-2.jpg" alt="" />
        </div>
        <div className="content">
          <a href="#" className="link">
            Local Adventurer
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur, natus!
          </p>
          <div className="icon">
            <a href="#">
              <i className="fas fa-clock" /> 21st may, 2021
            </a>
            <a href="#">
              <i className="fas fa-user" /> by admin
            </a>
          </div>
        </div>
      </div>
      <div className="box" data-aos="fade-up" data-aos-delay={450}>
        <div className="image">
          <img src="images/blog-3.jpg" alt="" />
        </div>
        <div className="content">
          <a href="#" className="link">
            The Blonde Abroad
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur, natus!
          </p>
          <div className="icon">
            <a href="#">
              <i className="fas fa-clock" /> 21st may, 2021
            </a>
            <a href="#">
              <i className="fas fa-user" /> by admin
            </a>
          </div>
        </div>
      </div>
    </div>
   
  </section>
  <a
    data-aos="zoom-in-left"
    data-aos-delay={1300}
    href="#book-form"
    className="button-blogs"
  >
  Đăng Bài
  </a>
  </div>
  );
};

export default Blogs;
