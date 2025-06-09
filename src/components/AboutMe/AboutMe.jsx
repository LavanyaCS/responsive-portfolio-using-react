import React from 'react'

function AboutMe() {
  return (
    <div>
        <section className="bg-light py-5" id="about">
    <div className="container">
      <h2 className="text-center default-4 mb-4 section-title">About Me</h2>
      <div className="row align-items-center">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
          <h2>Lavanya</h2>
          <h2>Chandran</h2>
          <h3>UI Developer</h3>
          <p className="home-description">As a passionate UI Developer with 5+ years of experience in front-end and
            full-stack open-source technologies, I aim to craft visually appealing and responsive web
            experiences. I specialize in Angular, Tailwind CSS, HTML5, CSS3, and JavaScript, bringing
            user-centered design to life with clean, efficient code. My goal is to continuously evolve as a
            developer, contribute to meaningful projects, and deliver exceptional digital solutions.</p>
          <div className="social-links">
            <ul className="d-flex gap-4 list-unstyled">
              <li><a className="info-item text-decoration-none" href="https://www.linkedin.com/in/lavanya-cs/"
                  target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
              <li><a className="info-item text-decoration-none" href="https://github.com/LavanyaCS" target="_blank"><i
                    className="fa-brands fa-github"></i></a></li>
              <li><a className="info-item text-decoration-none" href="mailto:lavanyachandranece@gmail.com"
                  target="_blank"><i className="fa-regular fa-envelope"></i></a></li>
            </ul>
          </div>
          <div className="text-white bg-dark-theme w-fit p-3 rounded-2">
            <a className="text-white text-decoration-none" href="src/assets/pdf/Lavanya_CS.pdf" target="_blank">Download Resume <i
                className="mx-2 fa-solid fa-file"></i></a>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
          <div className="about-img">
            {/* <!--backgroud images goes here--> */}
          </div>
        </div>


      </div>
    </div>
  </section>
    </div>
  )
}

export default AboutMe
