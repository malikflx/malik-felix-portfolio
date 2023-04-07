import React from "react";
import "../../App.css";

export const LandingPage = () => {
  return (
    <header
      id="fh5co-header"
      className="fh5co-cover js-fullheight"
      role="banner"
    >
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t js-fullheight">
              <div
                className="display-tc animate-box"
                data-animate-effect="fadeIn"
              >
                <h1>Hi There! I'm Malik.</h1>
                <h2 className="tagline">
                  Looking to create something extraordinary? As a skilled
                  full-stack software engineer in the Chicago Metro area, I'm
                  excited to explore what we can create together. Let's
                  collaborate and bring your ideas to life!
                </h2>
                <p>
                  <a
                    className="btn btn-primary btn-lg btn-demo"
                    href="./contact.html"
                  >
                    Get a website
                  </a>{" "}
                  <a
                    className="btn btn-primary btn-lg btn-learn"
                    href="#fh5co-wireframe"
                  >
                    Who's Malik?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
