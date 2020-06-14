import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { FiSmile } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { regUser } from "../services/dataServices";

const Signup = ({setUser}) => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    try{
    console.log(data)
    const res = await regUser(data) 
    if(res.status===200){
      console.log("registered successfully")
      const resData = await res.json()
      setUser(resData)
    }else{
      console.log(res.status,res)
    }}catch(e){
      console.log("signup page",e)
    }
  
  }

  return (
    <Container fluid>
      <Row>
        <Col md={6} className="p-0 col-img">
          <img src="signup.jpg" alt="signup" className="image"></img>
        </Col>
        <Col md={6} className="container-signup">
          <Container className="content">
            <div className="head">
              <h3 className="title">Sign-up</h3>
              <p>Already have account?Login</p>
              <Button style={{ backgroundColor: "rgb(12, 0, 124)" }} block>
                <FaFacebookSquare /> Join via facebook
              </Button>
            </div>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col>
                  <Form.Group controlId="formGroupFname">
                    <Form.Label>
                      <div className="label">
                        <div className="label-name">
                          {" "}
                          First Name{" "}
                          <span className="error-msg">
                            {errors?.firstname?.type ==='required' && "Enter First Name"}
                            {errors?.firstname?.type ==='maxLength' && "Firstname should be less than 20"}
                          </span>
                        </div>
                        <div className="error-msg">
                          <span>
                            <FiSmile
                              style={
                                errors.firstname
                                  ? { color: "red" }
                                  : { color: "green" }
                              }
                            />
                          </span>
                        </div>
                      </div>{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="firstname"
                      placeholder="Enter Firstname"
                      ref={register({ required: true, maxLength: 20 })}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGroupLname">
                    <Form.Label>
                      <div className="label">
                        <div className="label-name">
                          {" "}
                          Last Name{" "}
                          <span className="error-msg">
                            {errors?.lastname?.type ==='required' && "Enter Last Name"}
                            {errors?.lastname?.type ==='maxLength' && "Lastname should be less than 12"}
                          </span>
                        </div>
                        <div className="error-msg">
                          <span>
                            <FiSmile
                              style={
                                errors.lastname
                                  ? { color: "red" }
                                  : { color: "green" }
                              }
                            />
                          </span>
                        </div>
                      </div>{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="lastname"
                      placeholder="Enter Lastname"
                      ref={register({ required: true, maxLength: 12 })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>
                      <div className="label">
                        <div className="label-name">
                          {" "}
                          Email{" "}
                          <span className="error-msg">
                            {errors?.email?.type ==='required' && "Hey you forgot Email"}
                            {errors?.email?.type ==='pattern' && "Invalid Email id"}
                          </span>
                        </div>
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

                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Enter email"
                      ref={register({ required: true , pattern:/^(.+)@(.+)$/ })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>
                      <div className="label">
                        <div className="label-name">
                          {" "}
                          Password{" "}
                          <span className="error-msg">
                            {errors?.password?.type ==='required' && "(Hey you forgot to create password)"}
                            {errors?.password?.type ==='minLength' && "Password should be min 8"}
                          </span>
                        </div>
                        <div>
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
                  <Button
                    type="submit"
                    variant="success"
                    className="submit-button"
                    block
                  >
                    {" "}
                    Join our community
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-center mt-3">
                    By joining, you agree to the Terms and Privacy Policy.
                  </p>
                </Col>
              </Row>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
