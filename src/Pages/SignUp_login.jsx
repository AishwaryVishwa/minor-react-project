import React from 'react'
import "../components/Styling/signupstyle.css"
function SignUp_login() {
  return (
    <>
    <div className="body">

    
       <div className="wrapper">
      <div className="title-text">
        <div className="title login">Login</div>
        <div className="title signup">Signup</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked/>
          <input type="radio" name="slide" id="signup"/>
          <label for="login" className="slide login">Login</label>
          <label for="signup" className="slide signup">Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form action="#" className="login">
            <div className="field">
              <input type="text" placeholder="Email Address" required/>
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required/>
            </div>
            <div className="pass-link"><a href="#">Forgot password?</a></div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login"/>
            </div>
            <div className="signup-link">Not a member? <a href="">Signup now</a></div>
          </form>
          <form action="#" className="signup">
            <div className="field">
              <input type="text" placeholder="Email Address" required/>
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required/>
            </div>
            <div className="field">
              <input type="password" placeholder="Confirm password" required/>
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup"/>
            </div>
          </form>
        </div>
      </div>
    </div>

    </div>
    </>
  )
}

export default SignUp_login