import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookNow from "../boo/BookNow";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link, NavLink } from 'react-router-dom';

export const Prodict_detail = () => {
  const [inforproduct, setInforproduct] = useState({});

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  let params = useParams();

  useEffect(() => {
    fetch(
      "https://633ae6bf471b8c395577ddb4.mockapi.io/api/v1/Destination/" +
        params.id
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setInforproduct(data);
      });
  }, []);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleLogin = () => {
    const user = localStorage.getItem(username);
    const data = JSON.parse(user);
    if (user == null) {
      alert("Tài khoản hoặc mặt khẩu không chính xác")

    }
    else if (username == data.username && password == data.password) {
      alert("Đăng nhập thành công")
      window.location.href = "/"
    }
    else {
      alert("Đăng nhập thật bại, mật khẩu không chính xác");
    }
  }
  return (
    <div>
      <section className="destination" id="destination">
        <div className="heading">
          <span>our destination</span>
          <h1>Product Details</h1>
        </div>
      </section>
      <div className="small-container single-product">
        <div className="row1">
          <div className="col-21">
            <img src={inforproduct.image} id="ProductImg" />
            <div className="small-img-row">
              <div className="small-img-col">
                <img
                  src={inforproduct.image}
                  width="190px"
                  className="samll-img"
                />
              </div>
              <div className="small-img-col">
                <img
                  src={inforproduct.image}
                  width="190px"
                  className="samll-img"
                />
              </div>
              <div className="small-img-col">
                <img
                  src={inforproduct.image}
                  width="190px"
                  className="samll-img"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <h1>{inforproduct.city}</h1>
            <p>
              <i className="fa-solid fa-location-dot" />
              {inforproduct.city}
            </p>
            <h4>${inforproduct.price}</h4>
            <div>
              <button className="btn1" onClick={toggle}>
                book Now
              </button>
              
            </div>
            <h3 style={{ fontSize: "30px", marginTop: "10px" }}>
              {inforproduct.city} City
            </h3>
            <br />
            <p style={{ fontSize: "15px" }}>
              Hà Nội là thủ đô, thành phố trực thuộc trung ương và là một đô thị
              loại đặc biệt của Việt Nam. Hà Nội nằm về phía tây bắc của trung
              tâm vùng đồng bằng châu thổ sông Hồng, với địa hình bao gồm vùng
              đồng bằng trung tâm và vùng đồi núi ở phía bắc và phía tây thành
              phố. Với diện tích 3.359,82 km²,[2] và dân số 8,33 triệu người,[4]
              Hà Nội là thành phố trực thuộc trung ương có diện tích lớn nhất
              Việt Nam, đồng thời cũng là thành phố đông dân thứ hai và có mật
              độ dân số cao thứ hai trong 63 đơn vị hành chính cấp tỉnh của Việt
              Nam, nhưng phân bố dân số không đồng đều. Hà Nội có 30 đơn vị hành
              chính cấp huyện, gồm 12 quận, 17 huyện và 1 thị xã.
            </p>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="login-container">
        {/* LoginStart  */}
        <div className="col-12 login-text"> Login</div>
        <div className="col-12 form-group login-input">
          <label>Tên Đại Diện </label>
          <div className="box" data-aos="fade-up" data-aos-delay={600}>
            <form action>
              <input
                type="text"
                placeholder="enter your username..."
                className="input"
                onChange={handleChangeUsername}
                value={username}
              />
            </form>
          </div>
        </div>
        <div className="col-12 form-group login-input">
          <label>Số Thành Viên </label>
          <div className="box" data-aos="fade-up" data-aos-delay={600}>
            <form action>
              <input
                type="number"
                placeholder="enter your password..."
                className="input"
                onChange={handleChangePassword}
                value={password}
              />
            </form>
          </div>
        </div>
        <div className="col-12 form-group login-input">
          <label> Số Điện thoại </label>
          <div className="box" data-aos="fade-up" data-aos-delay={600}>
            <form action>
              <input
                type="text"
                placeholder="enter your password..."
                className="input"
              />
            </form>
          </div>
        </div>
        <div className="btn-col-12">
          <div className="col-12">
            <a
              data-aos="zoom-in-left"
              data-aos-delay={1300}
              href="#book-form"
              className="btn"
              id="btn-login"
              onClick={handleLogin}
            >
             BookNow
            </a>
          </div>
        </div>


      </Modal>
    </div>
  );
};
export default Prodict_detail;
