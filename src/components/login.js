import React, { useState } from 'react';
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { FiSmile } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { loginUser } from '../services/dataServices';
import { useHistory } from 'react-router-dom';


const Login = ({updateUser ,user}) => {
   const [isloginSucces, setLoginState] =useState(false)
   const [submit, setsubmit] = useState(false)
   const history = useHistory()
    const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
      try{
      console.log(data)
      
      const res = await loginUser(data.email.trim(),data.password.trim())
      setsubmit(true)
      if(res.status === 200){
        setLoginState(true)
          //success
          const resData = await res.json()
         localStorage.setItem("token",resData.token)
         localStorage.setItem("userData",resData.user)
          updateUser(resData.user)
          history.push("/")

      }else if(res.status ===401){
        setLoginState(false)
      }
    }catch(e){
      setsubmit(false)
      alert("network error")

    }}


    return (
        <Container fluid>
          <Row >
            <Col md={6} className="p-0 col-img">
              <img src="login.jpg"alt='login' className="image"></img>
            </Col>
            <Col md={6} className="container-signup" >
              <Container className="content">
                <div className="head">
                <h3 className="title">Login</h3>
                <p>Don't have account?Sign up</p>
                <Button style={{"backgroundColor":"rgb(12, 0, 124)"}} block>
                  <FaFacebookSquare /> Join via facebook
                </Button>
                </div>
    
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col>
                      <Form.Group controlId="formGroupEmail">
                        <Form.Label >
                          <div className="label">
                            <div className="label-name"> Email <span className="error-msg">
                            {errors?.email?.type ==='required' && "Hey you forgot Email"}
                            {errors?.email?.type ==='pattern' && "Invalid Email id"}
                          </span></div>
                            <div className="error-msg">
                              
                              <span>
                                <FiSmile
                                  style={
                                    errors.email
                                      ? { color: "red" }
                                      : { color: "green" }
                                  }
                                />
                              </span>
                            </div>
                          </div>{" "}
                        </Form.Label>
                        
                        <Form.Control type="email" name="email" placeholder="Enter email"  ref={register({ required: true })}/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="formGroupPassword">
                        <Form.Label >
                          <div className="label">
                            <div className="label-name"> Password <span className="error-msg">
                            {errors?.password?.type ==='required' && "(Hey you forgot to create password)"}
                            {errors?.password?.type ==='minLength' && "Password should be min 8"}
                          </span>
                              </div>
                            <div >
                              <span>
                                <FiSmile
                                  style={
                                    errors.password
                                      ? { color: "red" }
                                      : { color: "green" }
                                  }
                                />
                              </span>
                            </div>
                          </div>{" "}
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Enter Password"
                          ref={register({ required: true, minLength: 8 })}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    {!isloginSucces && (submit && <div className="alert alert-danger" role="alert"> Incorrect email or password</div>)}
                      <Button type="submit" variant="success" className="submit-button" block>
                        {" "}
                        Join our community
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <p className="text-center mt-3">By joining, you agree to the Terms and Privacy Policy.</p>
                    </Col>
                  </Row>
                </Form>
              </Container>
            </Col>
          </Row>
        </Container>
      );
}

export default Login;
