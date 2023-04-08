import React from 'react'
import { useEffect, useState } from "react";
import { Alert } from 'reactstrap';


const Register = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
 
  const handleChangeUsername = (e) =>{
    setUsername(e.target.value);
  }
  const handleChangePassword = (e) =>{
    setPassword(e.target.value);
  }
  const handleRegister = () =>{
    const user = {
      username: username,
      password: password,
    }
 const json = JSON.stringify(user)
 localStorage.setItem(username,json);
 alert("Đăng ký thành công")
}




  return (
    <div>
     
   
         <div className="Register-container">
              <div className="login-content row" >
                <div className="col-12 Regis-text"> Register</div>
                
                <div className='inputRegister-container'>
                <div className="col-12 form-group login-input">
                  <label>Username:</label>
                  <div className="box" data-aos="fade-up" data-aos-delay={600}>
                    <form action>
                      <input
                        type="text"
                        name
                        placeholder="enter your username..."
                        className="input-Register"
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
                        name
                        placeholder="enter your password..."
                        className="input-Register"
                        onChange={handleChangePassword}
                        value={password}
                      />
                    </form>
                  </div>
                </div>
                <div className="col-12 form-group login-input">
                  <div className="box" data-aos="fade-up" data-aos-delay={600}>
                    <label>Re-enter your password:</label>
                    <form action>
                      <input
                        type="password"
                        name
                        placeholder="Re-enter the password..."
                        className="input-Register"
                        id
                      />
                    </form>
                  </div>
                </div>
                </div>
                <div className="btn-col-12">
                  <div className="col-12">
                    <a
                      data-aos="zoom-in-left"
                      data-aos-delay={1300}
                      href="#book-form"
                      className="btn"
                      id="btn-Register"
                      onClick={handleRegister}
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div> 
   
        
    </div>
  )
}

export default Register