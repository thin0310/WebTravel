import React from "react";

export const Home = () => {
  return (
    <div>
      {/* home section starts  */}
      <section className="home" id="home">
        <div className="content">
          <span data-aos="fade-up" data-aos-delay={150}>
            Let's Start
          </span>
          <h3 data-aos="fade-up" data-aos-delay={300}>
            World Tour With Us
          </h3>
          <p data-aos="fade-up" data-aos-delay={450}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quia illum quod perspiciatis harum
          </p>
          <a data-aos="fade-up" data-aos-delay={600} href="#" className="btn">
            book now
          </a>
        </div>
      </section>
      {/* home section ends */}
      {/* booking form section starts  */}
      <section className="book-form" id="book-form">
        <form action>
          <div data-aos="zoom-in" data-aos-delay={150} className="inputBox">
            <span>you are planning?</span>
            <input type="text" placeholder="place name" defaultValue />
          </div>
          <div data-aos="zoom-in" data-aos-delay={300} className="inputBox">
            <span>When looking for ?</span>
            <input type="date" defaultValue />
          </div>
          <div data-aos="zoom-in" data-aos-delay={450} className="inputBox">
            <span>Total members?</span>
            <input
              type="number"
              placeholder="number of travelers"
              defaultValue
            />
          </div>
          <input
            data-aos="zoom-in"
            data-aos-delay={600}
            type="submit"
            defaultValue="find now"
            className="btn"
          />
        </form>
      </section>
      {/* booking form section ends */}
      {/* about section starts  */}
      <section className="about" id="about">
        <div
          className="video-container"
          data-aos="fade-right"
          data-aos-delay={300}
        >
          <video src="images/about.mp4" muted autoPlay loop className="video" />
        </div>
        <div className="content" data-aos="fade-left" data-aos-delay={600}>
          <span>Who we are ?</span>
          <h3>A smiling agent for you</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugit
            repellat error deserunt nam aperiam odit libero quos provident.
            Nostrum?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </section>
      {/* services section start */}
      <section className="services" id="services">
        <div className="heading">
          <span>our services</span>
          <h1>Cost Effective</h1>
        </div>
        <div className="box-container">
          <div className="box" data-aos="zoom-in-up" data-aos-delay={150}>
            <i className="fas fa-globe" />
            <h3>worldwide</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={300}>
            <i className="fas fa-hiking" />
            <h3>adventures</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={450}>
            <i className="fas fa-utensils" />
            <h3>food &amp; drinks</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={600}>
            <i className="fas fa-hotel" />
            <h3>affordable hotels</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={750}>
            <i className="fas fa-wallet" />
            <h3>affordable price</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={900}>
            <i className="fas fa-headset" />
            <h3>24/7 support</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
