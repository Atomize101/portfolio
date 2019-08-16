import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I have been playing with computers and software my entire life. I build them, take them apart, learn about what they can do. It is my passion. I have spent the last few years transitioning into the IT field. They say that learning is a treasure that will follow its owner everywhere. This describes me perfectly.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites and applications using JavaScript, React, HTML, CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                </span>
                <div className="desc">
                    <h3>Quality Assurance</h3>
                    <p>Executed various testing methods such as black box, functional, regression and user acceptance testing</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
