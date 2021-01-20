import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div class="About">
        <div class="header">
          <h1>About Us</h1>
          <span class="line"></span>
        </div>
        <div class="container">
          <h2>
            <span>Who We Are</span>
          </h2>
          <p>
            We are a dynamic growing company with a lot of experience in our
            field. Every organization has its unique challenges and goals. Our
            goal isn't only to build you a website, our goal is to build your
            business and make it grow.
            <span>
              Our team is made up of prefessional developers with a lot of
              experience in developing professional web applications and
              creating fully responsive websites. All our developers are highly
              skilled and passionate that can get your business up and running
              in no time.
            </span>
          </p>
          <h2>
            <span>What Can We Do</span>
          </h2>
          <p>
            Design and build your own high-quality website. Whether you’re
            promoting your business, showcasing your work, opening your store or
            starting a blog, we can make your own website exactly the way you
            want.
            <span>
              Creating complete websites. Front end, back end and everything in
              between. Will set up your website, create the appropriate
              databases. Find the right CMS, plugins or extensions, code in
              anything else needed and modify everything as desired. A full
              service option for creating, updating or repairing websites.
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
