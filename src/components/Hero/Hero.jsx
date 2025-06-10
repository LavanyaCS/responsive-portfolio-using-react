import React from 'react'

function Hero() {
  return (
     <div>
       <section id="hero">
    <div id="portfolioCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">

     
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#portfolioCarousel" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#portfolioCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#portfolioCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* <!-- Carousel Slides --> */}
      <div className="carousel-inner">

        {/* <!-- Slide 1 --> */}
        <div className="carousel-item active position-relative">

          <div className="container-fluid">
            <div className="row w-100 align-items-center text-center text-md-start">
              <div className="col-12 col-md-6 p-5">
                <h1 className="display-4 fw-bold animate__animated animate__fadeInUp">Hi, I'm Lavanya Chandran</h1>
                <p className="lead animate__animated animate__fadeInUp animate__delay-1s">UI Developer | Angular | Tailwind
                  CSS</p>
                <p className="animate__animated animate__fadeInUp animate__delay-2s">
                  Crafting elegant, user-friendly web apps with 5+ years of professional experience.
                </p>
                <a href="src/assets/pdf/Lavanya_CS.pdf" target="_blank"
                  className="btn btn-outline-light btn-lg mt-3 animate__animated animate__fadeInUp animate__delay-3s cursor-pointer">Download
                  Resume</a>
              </div>
              <div className="col-12 col-md-6 text-center p-5 d-none d-md-flex justify-content-center align-items-center">
                <img src="src/assets/images/aboutme.jpg" className="img-fluid animate__animated animate__zoomIn"
                  alt="Lavanya Chandran" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Slide 2 --> */}
        <div className="carousel-item position-relative">

          <div className="container-fluid">
            <div className="row w-100 align-items-center text-center text-md-start">
              <div className="col-12 col-md-6 p-5">
                <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">Seamless User Experiences</h1>
                <p className="lead animate__animated animate__fadeInDown animate__delay-1s">UX/UI Designer | Web Performance
                  Expert</p>
                <p className="animate__animated animate__fadeInDown animate__delay-2s">
                  I create intuitive interfaces that are fast, accessible, and responsive across devices.
                </p>
                <a href="#projects"
                  className="btn btn-outline-light btn-lg mt-3  animate__animated animate__fadeInUp animate__delay-3s cursor-pointer">View
                  My Work</a>
              </div>
              <div className="col-12 col-md-6 text-center p-5 d-none d-md-flex justify-content-center align-items-center">
                <img src="src/assets/images/aboutme.jpg" className="img-fluid animate__animated animate__zoomIn" alt="Lavanya Chandran"/>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Slide 3 --> */}
        <div className="carousel-item position-relative">

          <div className="container-fluid">
            <div className="row w-100 align-items-center text-center text-md-start">
              <div className="col-12 col-md-6 p-5">
                <h1 className="display-4 fw-bold animate__animated animate__fadeInLeft">Let's Build Together</h1>
                <p className="lead animate__animated animate__fadeInLeft animate__delay-1s">Open for Freelance Projects</p>
                <p className="animate__animated animate__fadeInLeft animate__delay-2s">
                  I'm available for freelance collaborations and innovative web design projects.
                </p>
                <a href="#contact"
                  className="btn btn-outline-light btn-lg mt-3 animate__animated animate__fadeInLeft animate__delay-3s cursor-pointer">Hire
                  Me</a>
              </div>
              <div className="col-12 col-md-6 text-center p-5 d-none d-md-flex justify-content-center align-items-center">
                <img src="src/assets/images/aboutme.jpg" className="img-fluid animate__animated animate__zoomIn"
                  alt="Lavanya Chandran"/>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* <!-- No Prev/Next buttons here --> */}

    </div>
  </section>
    </div>
  )
}

export default Hero
