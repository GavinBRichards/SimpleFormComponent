import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TimelineLite, CSSPlugin } from "gsap/all";
// import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import styled from "styled-components";

const OpenBtn = styled.button`
  display: inline-block;
  padding: 0.75rem 1rem;
  margin-top: 1.618rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  vertical-align: middle;
  white-space: nowrap;
  background-color: #ffab00;
  border: 1px solid transparent;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  position: fixed;
  top: 1rem;
  right: 1rem;

  &:focus,
  :hover {
    background-color: #ffcc54;
    box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1),
      0 8px 15px rgba(0, 0, 0, 0.07);
    outline: 0;
  }
`;

const CloseBtn = styled.button`
  display: inline-block;
  padding: 0.75rem 1rem;
  margin-top: 1.618rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  vertical-align: middle;
  white-space: nowrap;
  background-color: #ffab00;
  border: 1px solid transparent;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  position: fixed;
  top: 5rem;
  right: 1rem;
  &:focus,
  :hover {
    background-color: #ffcc54;
    box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1),
      0 8px 15px rgba(0, 0, 0, 0.07);
    outline: 0;
  }
`;

const FormBg = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  opacity: 0;
  visibility: hidden;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

const Form = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: auto;
  width: 33vw;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.5);
  z-index: 101;

  @media only screen and (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 90vh;
    width: 100vw;
    background-color: #fff;
    z-index: 101;
  }
`;

const Svg = styled.svg`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    position: absolute;
    top: 1rem;
    right: 3rem;
    cursor: pointer;
  }
`;

const H1 = styled.h1`
  margin-top: 0;
  padding-top: 2rem;
  margin-bottom: 3.236rem;
  text-align: center;
  font-size: 1.618rem;

  @media only screen and (max-width: 767px) {
    margin-top: 0;
    padding-top: 4rem;
    margin-bottom: 3.236rem;
    text-align: center;
    font-size: 1.618rem;
  }
`;

const Fieldset = styled.fieldset`
  padding: 0;
  border: 0;
  margin-top: 1rem;
`;

const TextArea = styled.textarea`
  display: block;
  padding: 0.5rem 0.5rem;
  width: 100%;
  font-size: 1rem;
  line-height: 1.25;
  color: #55595c;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #eee;
  border-left: 0;
  border-radius: 3px;
  -webkit-transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  resize: vertical;

  &:focus {
    outline: 0;
    border-bottom-color: #ffab00;
  }
`;

const SubmitInput = styled.input`
  width: 100%;
  font-size: 1rem;
  line-height: 1.25;
  background-clip: padding-box;
  display: inline-block;
  padding: 0.75rem 1rem;
  margin-top: 1.618rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  vertical-align: middle;
  white-space: nowrap;
  background-color: #ffab00;
  border: 1px solid transparent;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);

  &:focus {
    outline: 0;
    background-color: #ffcc54;
    box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1),
      0 8px 15px rgba(0, 0, 0, 0.07);
  }

  @media only screen and (max-width: 767px) {
    padding: 1.5rem 0rem;
    width: 90%;
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  -ms-touch-action: manipulation;
  touch-action: manipulation;

  @media only screen and (max-width: 767px) {
    margin-bottom: 0.25rem;
  }
`;

const Input = styled.input`
  display: block;
  padding: 0.5rem 0.5rem;
  width: 100%;
  font-size: 1rem;
  line-height: 1.25;
  color: #55595c;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #eee;
  border-left: 0;
  border-radius: 3px;
  -webkit-transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  &:focus {
    outline: 0;
    border-bottom-color: #ffab00;
  }

  @media only screen and (max-width: 767px) {
    padding: 1.5rem 0rem;
    width: 90%;
  }
`;

class ReactFormLabel extends Component {
  render() {
    return <Label htmlFor={this.props.htmlFor}>{this.props.title}</Label>;
  }
}
class ReactForm extends Component {
  constructor(props) {
    super(props);
    this.formTl = new TimelineLite({ paused: true });
    this.formWrapper = null;
    this.formBg = null;
    this.formContainer = null;
    this.form = null;
    this.viewport = window.innerWidth >= 767 ? true : false;
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    };
  }

  handleChange = e => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  componentDidMount() {
    if (!this.viewport) {
      this.formTl
        .to(this.formBg, 1, { autoAlpha: 1 })
        .from(
          this.formContainer,
          0.5,
          { transform: "translate3d(0,-100vh,0)", autoAlpha: 0 },
          "-=0.25"
        );
    } else {
      this.formTl
        .to(this.formBg, 1, { autoAlpha: 1 })
        .from(
          this.formContainer,
          0.5,
          { transform: "translate3d(-60vw,0,0)", autoAlpha: 0 },
          "-=0.25"
        );
    }
  }

  render() {
    return (
      <div className="form-wrapper">
        <div
          class="fb-page"
          data-href="https://www.facebook.com/facebook"
          data-width="380"
          data-hide-cover="false"
          data-show-facepile="false"
        />

        <OpenBtn onClick={() => this.formTl.play()}>FormBGOpen</OpenBtn>
        <CloseBtn onClick={() => this.formTl.reverse()}>FormBGClose</CloseBtn>

        <FormBg
          ref={div => (this.formBg = div)}
          onClick={() => this.formTl.reverse()}
        />

        <Form
          action="https:formspree.io/gavinbrich@gmail.com"
          method="POST"
          target="_blank"
          ref={form => (this.formContainer = form)}
        >
          <Svg
            width="2rem"
            height="2rem"
            viewBox="0 0 357 357"
            onClick={() => this.formTl.reverse()}
          >
            <polygon
              fill="#ffab00"
              points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
			214.2,178.5 		"
            />
          </Svg>

          <H1>Have Questions?</H1>

          <Fieldset>
            <ReactFormLabel htmlFor="formName" title="Full Name:" />

            <Input
              id="formName"
              className="form-input"
              name="name"
              type="text"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </Fieldset>

          <Fieldset>
            <ReactFormLabel htmlFor="formEmail" title="Email:" />

            <Input
              id="formEmail"
              className="form-input"
              name="email"
              type="email"
              required
              onChange={this.handleChange}
              value={this.state.email}
            />
          </Fieldset>

          <Fieldset>
            <ReactFormLabel htmlFor="formPhone" title="Phone:" />

            <Input
              id="formPhone"
              className="form-input"
              name="phone"
              type="tel"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </Fieldset>

          <Fieldset>
            <ReactFormLabel htmlFor="formMessage" title="Message:" />

            <TextArea
              id="formMessage"
              className="form-textarea"
              name="message"
              required
              onChange={this.handleChange}
            />
          </Fieldset>

          <div>
            <SubmitInput
              id="formButton"
              className="btn"
              type="submit"
              placeholder="Send message"
              value="Submit"
            />
          </div>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<ReactForm />, document.getElementById("root"));
serviceWorker.unregister();
