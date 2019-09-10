import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						{/* <a href="blog.html" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>*/}
						<div className="desc">
							<span><small>August 25, 2019 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
	<h3>{/*<a href="blog.html">React</a>*/}React</h3>
							<p>I built this site to learn how to create a one page React Application. The biggest challeges were seperating the UI into components that made sense. </p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						{/*<a href="blog.html" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>*/}
						<div className="desc">
							<span><small>September 10, 2019</small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
	<h3>{/*<a href="blog.html">React Router</a>*/}React Router</h3>
							<p>I will be adding React Router to this application. This is done by installing the npm package, and then setting up various components to be wrapped by BrowserRouter.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						{/*<a href="blog.html" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>*/}
						<div className="desc">
							<span><small>September 10, 2019 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3>{/*<a href="blog.html">NodeJs</a>*/}NodeJs</h3>
							<p>I am currently working on an application that will allow a user to keep track of house hold items before moving to a new home or apartment. This will have a Node/Express back end to keep track of the items. </p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}