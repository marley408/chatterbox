import React, { Component } from "react";
import "../SignIn.css";
import $ from "jquery";
import "jquery-validation"

export default class SignInCard extends Component {

  componentDidMount() {
    $("#signup").click(function() {
      $("#first").fadeOut("fast", function() {
      $("#second").fadeIn("fast");
      });
      });
      
      $("#signin").click(function() {
      $("#second").fadeOut("fast", function() {
      $("#first").fadeIn("fast");
      });
      });
      
      
        
               $(function() {
                 $("form[name='login']").validate({
                   rules: {
                     
                     email: {
                       required: true,
                       email: true
                     },
                     password: {
                       required: true,
                       
                     }
                   },
                    messages: {
                     email: "Please enter a valid email address",
                    
                     password: {
                       required: "Please enter password",
                      
                     }
                     
                   },
                   submitHandler: function(form) {
                     form.submit();
                   }
                 });
               });
               
      
      
      $(function() {
        
        $("form[name='registration']").validate({
          rules: {
            firstname: "required",
            lastname: "required",
            email: {
              required: true,
              email: true
            },
            password: {
              required: true,
              minlength: 5
            }
          },
          
          messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
              required: "Please provide a password",
              minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
          },
        
          submitHandler: function(form) {
            form.submit();
          }
        });
      });
  }

  


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div id="first">
              <div className="myform form ">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h1>Chatter Box</h1>
                    <h3>Log In</h3>
                  </div>
                </div>
                <form action="" method="post" name="login">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter Password"
                    />
                  </div>
                  {/* <div className="form-group">
                    <p className="text-center">
                      By signing up you accept our <a href="#">Terms Of Use</a>
                    </p>
                  </div> */}
                  <div className="col-md-12 text-center ">
                    <button
                      type="submit"
                      className=" btn btn-block mybtn btn-danger tx-tfm"
                    >
                      Login
                    </button>
                  </div>
                  <div className="col-md-12 ">
                    <div className="login-or">
                      <hr className="hr-or" />
                      <span className="span-or">or</span>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <p className="text-center">
                      <a href="javascript:void();" className="google btn mybtn">
                        <i className="fa fa-google-plus" /> Signup using Google
                      </a>
                    </p>
                  </div>
                  <div className="form-group">
                    <p className="text-center">
                      Don't have account?{" "}
                      <a href="#" id="signup">
                        Sign up here
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div id="second">
              <div className="myform form ">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h1>Chatter Box</h1>
                    <h3>Sign Up</h3>
                  </div>
                </div>
                <form action="#" name="registration">
                  <div className="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      id="firstname"
                      aria-describedby="emailHelp"
                      placeholder="Enter Firstname"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      id="lastname"
                      aria-describedby="emailHelp"
                      placeholder="Enter Lastname"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="col-md-12 text-center mb-3">
                    <button
                      type="submit"
                      className=" btn btn-block mybtn btn-danger tx-tfm"
                    >
                      Sign Up!
                    </button>
                  </div>
                  <div className="col-md-12 ">
                    <div className="form-group">
                      <p className="text-center">
                        <a href="#" id="signin">
                          Already have an account?
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
