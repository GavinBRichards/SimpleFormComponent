import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TimelineLite, CSSPlugin } from "gsap/all";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

class ReactFormLabel extends Component {
  render() {
    return <label htmlFor={this.props.htmlFor}>{this.props.title}</label>;
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
      <div className="App">
        <button className="btn open-btn" onClick={() => this.formTl.play()}>
          FormBGOpen
        </button>
        <button className="btn close-btn" onClick={() => this.formTl.reverse()}>
          FormBGClose
        </button>

        <div
          className="form-bg"
          ref={div => (this.formBg = div)}
          onClick={() => this.formTl.reverse()}
        />

        <form
          className="form"
          action="https:formspree.io/gavinbrich@gmail.com"
          method="POST"
          target="_blank"
          ref={form => (this.formContainer = form)}
        >
          <svg
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
          </svg>

          <h1>Have Questions?</h1>

          <fieldset className="form-group">
            <ReactFormLabel htmlFor="formName" title="Full Name:" />

            <input
              id="formName"
              className="form-input"
              name="name"
              type="text"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </fieldset>

          <fieldset className="form-group">
            <ReactFormLabel htmlFor="formEmail" title="Email:" />

            <input
              id="formEmail"
              className="form-input"
              name="email"
              type="email"
              required
              onChange={this.handleChange}
              value={this.state.email}
            />
          </fieldset>

          <fieldset className="form-group">
            <ReactFormLabel htmlFor="formPhone" title="Phone:" />

            <input
              id="formPhone"
              className="form-input"
              name="phone"
              type="tel"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </fieldset>

          <fieldset className="form-group">
            <ReactFormLabel htmlFor="formMessage" title="Message:" />

            <textarea
              id="formMessage"
              className="form-textarea"
              name="message"
              required
              onChange={this.handleChange}
            />
          </fieldset>

          <div className="form-group">
            <input
              id="formButton"
              className="btn"
              type="submit"
              placeholder="Send message"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<ReactForm />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
