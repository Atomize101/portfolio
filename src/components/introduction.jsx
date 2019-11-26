import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/stock01.jpeg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hello! <br /></h1>
                          <p>My Objective: To work with an innovative company that can help drive my passion to become a software developer.</p>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1Uoum7U6f7u297vsXwnTVwg2k1WF5A7x3JsH2y4hwK7U/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Design and Development</h1>
                          <h2>This site was created with React!</h2>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/Atomize101" target="_blank" rel="noopener noreferrer">View Projects</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
