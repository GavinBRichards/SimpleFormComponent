import React from "react";
import "./sidebar.scss";
import { Spring } from 'react-spring/renderprops'

export default class Form extends React.Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, x: -1000 }}
        to={{ opacity: 1, x: 0 }}
      >
        {props => (
          <form
          style={props}
            action="https://formspree.io/gavinbrich@gmail.com"
            method="POST"
            target="_blank"
          >
            <label>
              Name:
              <input
                className="name-field"
                placeholder="Name:"
                type="text"
                autoComplete="on"
                label="name"
                name="name"
              />
            </label>

            <label>
              Email:
              <input
                className="email-field"
                placeholder="Email:"
                type="email"
                autoComplete="on"
                label="Email:"
                name="email"
                required
              />
            </label>

            <label>
              Phone Number:
              <input
                className="phone-field"
                placeholder="+1-801-000-0000"
                type="tel"
                autoComplete="on"
                label="phone"
                name="phone"
              />
            </label>

            <label>
              Questions or comments:
              <textarea
                className="comment-field"
                placeholder="Your questions or comments"
                type="text"
                label="Questions and Comments:"
                name="question"
                required
              />
            </label>

            <label>
              Submit
              <input type="submit" value="Send" />
            </label>
          </form>
        )}
      </Spring>
    );
  }
}
