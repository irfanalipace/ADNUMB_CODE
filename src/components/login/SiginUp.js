import React from 'react'

const SiginUp = () => {
    return (
        <div className="Auth-form-container container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h4 className="Auth-form-title">Hi, Welcome to OTO!</h4>
              
              <div className="form-group mt-3 text-left">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1 fileds-size"
                  placeholder="Enter email"
                  value={email}
                  
                />
              </div>
              <div className="form-group mt-3 text-left">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1 fileds-size"
                  placeholder="Enter password"
                />
              
              </div>
              <div className="text-center">
              <Link href="#" className="link-primary" onClick={changeAuthMode}>Forgot Your Password?</Link>
              </div>
              <div className="checkbox">
              <input type="checkbox"/>
              <span className="rem">Rember Password</span>
              </div>
              <div className="d-grid gap-2 mt-3 text-left">
                <button type="submit" className="btn btn-primary submit_login">
                  Login
                </button>
              </div>
              <div className="text-center">
              Didn’t have an account?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
            </div>
          </form>
        </div>
      )
    }

export default SiginUp