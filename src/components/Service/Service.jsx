import React from 'react'

function Service() {
  return (
    <div>
       <section id="services" className="bg-white py-5">
    <div className="container">
      <h2 className="text-center default-4 mb-4 section-title">Services</h2>
      <div className="row align-items-center justify-content-center gap-4">
        <div className="col-10 col-sm-10 col-md-4 col-lg-3 py-3 bg-white shadow rounded-3 border-2 border-dark">
          <div className=" p-3 justify-content-start ">

            <h5 className="default-5 mb-3"><i className="fas fa-pencil-ruler"></i></h5>
            <h4 className="default-4 mb-3">Designer</h4>
            <p className="cursor-pointer" data-bs-toggle="modal" data-bs-target="#designer">View More <i
                className="fa-solid fa-arrow-right"></i></p>
          </div>


        </div>
        <div className="col-10 col-sm-10 col-md-4 col-lg-3 py-3 bg-white shadow rounded-3 border-2 border-dark">
          <div className=" p-3 justify-content-start ">

            <h5 className="default-5 mb-3"><i className="fas fa-laptop-code"></i></h5>
            <h4 className="default-4 mb-3">Developer</h4>
            <p className="cursor-pointer" data-bs-target="#developer" data-bs-toggle="modal">View More <i
                className="fa-solid fa-arrow-right"></i></p>
          </div>

        </div>



      </div>
      {/* <!--Modal Dialog Designer--> */}
      <div className="modal fade" id="designer" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header d-flex justify-content-between align-items-center">
              <h4 className="modal-title default-4 mb-0">Designer</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>


            <div className="modal-body">
              <p>
                With over 5 years of experience in crafting visually compelling and user-centric interfaces,
                I specialize in transforming concepts into clean, responsive, and engaging web designs.
                My work blends creativity with functionality, ensuring that every design not only looks great
                but also delivers a seamless user experience.
              </p>
              <p>
                I have designed for a wide range of domains, from e-commerce to educational platforms,
                using modern front-end technologies like <strong>HTML5, CSS3, Bootstrap, Tailwind CSS</strong>,
                and frameworks such as <strong>Angular</strong>. I’m passionate about minimal design, smooth
                interaction,
                and pixel-perfect layouts that reflect brand identity and user needs.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* <!--Modal Dialog Developer--> */}
      <div className="modal fade" id="developer" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header d-flex justify-content-between align-items-center">
              <h4 className="modal-title default-4 mb-0">Developer</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>


            <div className="modal-body">
              <p>
                As a Full-Stack Web Developer with 5+ years of hands-on experience, I specialize in building
                robust, scalable, and high-performing web applications. My development approach is clean,
                efficient, and focused on creating seamless digital experiences from front-end to back-end.
              </p>
              <p>
                I’ve contributed to the success of several projects across domains such as
                <strong>e-commerce</strong>, <strong>education</strong>, and <strong>enterprise solutions</strong>,
                using technologies like <strong>PHP, MySQL, JavaScript, Angular (13–17), HTML5, CSS3</strong>, and
                <strong>Magento</strong>. Whether it's developing custom modules, integrating APIs, or designing complex
                database schemas—I bring technical expertise and attention to detail in every line of code.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section> 
    </div>
  )
}

export default Service
