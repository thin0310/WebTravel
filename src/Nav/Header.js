import React from "react";
import { json, Link, NavLink } from "react-router-dom";
import Register from "../Register/Register";
import { useState } from "react";
import {
  Modal,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

export const Header = () => {
  const LogOut = () => {
    window.location.href = "/";
  };
  const auth = localStorage.getItem("user");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    const user = localStorage.getItem(username);
    const data = JSON.parse(user);
    if (user == null) {
      alert("Tài khoản hoặc mặt khẩu không chính xác");
    } else if (username == data.username && password == data.password) {
      alert("Đăng nhập thành công");
      window.location.href = "/";
    } else {
      alert("Đăng nhập thật bại, mật khẩu không chính xác");
    }
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      {/* header section starts  */}

      <header className="header" id="top">
        <div id="menu-btn" className="fas fa-bars" />
        <NavLink
          data-aos="zoom-in-left"
          data-aos-delay={150}
          to="/"
          className="logo"
        >
          <span>T</span>ravel <span>W</span>arrior
        </NavLink>

        <nav className="navbar">
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={300}
            to="/"
            className="title"
          >
            home
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to="/Destination"
            className="title"
          >
            destination
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to="/Gallery"
            className="title"
          >
            gallery
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to="/Blogs"
            className="title"
          >
            blogs
          </NavLink>
        </nav>

        {auth ? (
          <div>
            <UncontrolledDropdown>
              <DropdownToggle caret color="dark">
                Hi,
              </DropdownToggle>
              <DropdownMenu white>
                <DropdownItem>Tài khoản</DropdownItem>
                <DropdownItem onClick={LogOut}>Đăng Xuất</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        ) : (
          <a
            data-aos="zoom-in-left"
            data-aos-delay={1300}
            className="btn"
            onClick={toggle}
          >
            Đăng Nhập
          </a>
        )}
      </header>

      {/* header section ends */}

      <Modal isOpen={modal} toggle={toggle} className="login-container">
        {/* LoginStart  */}
        <div className="col-12 login-text"> Login</div>
        <div className="col-12 form-group login-input">
          <label>Username:</label>
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
          <label>Password:</label>
          <div className="box" data-aos="fade-up" data-aos-delay={600}>
            <form action>
              <input
                type="password"
                placeholder="enter your password..."
                className="input"
                onChange={handleChangePassword}
                value={password}
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
              Login
            </a>
          </div>
        </div>

        <p className="register-text">
          Bạn chưa có tài khoản? Đăng ký{" "}
          <Link className="register-text" to="/Register">
            Tại đây
          </Link>
        </p>
      </Modal>
      {/* LoginEnd */}
    </div>
  );
};

export default Header;
