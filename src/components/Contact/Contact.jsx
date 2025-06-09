import React from 'react'

function Contact() {
  return (
    <div>
       <section id="contact" className="bg-white py-5 contact">
    <div className="container">
      <h2 className="text-center default-4 mb-4 section-title">Contact</h2>
      <div className="container my-5">
        <div className="container aos-init aos-animate" data-aos="fade" data-aos-delay="100">

          <div className="row gy-4">

            <div className="col-lg-4">
              <div className="info-item d-flex animate__animated animate__fadeInUp">
                <i className="fa-solid fa-location-dot flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Salem, Tamilnadu</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div className="info-item d-flex animate__animated animate__fadeInUp animate__delay-1s">
                <i className="fa-solid fa-phone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p><a href="tel:09952770089">+91 9952770089</a></p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div className="info-item d-flex animate__animated animate__fadeInUp animate__delay-2s">
                <i className="fa fa-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p><a href="mailto:lavanyachandranece@gmail.com" target="_blank">lavanyachandranece@gmail.com</a></p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div className="info-item d-flex animate__animated animate__fadeInUp animate__delay-3s">
                <i className="fa-brands fa-linkedin flex-shrink-0"></i>
                <div>
                  <h3>LinkedIn</h3>
                  <p><a href="https://www.linkedin.com/in/lavanya-cs/" target="_blank">Lavanya C S</a></p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}
            </div>


            <div className="col-lg-8">

              <form action="" className="contact-form">
                <div className="row gy-4">
                  <div className="col-md-6 animate__animated animate__fadeInUp">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
                  </div>

                  <div className="col-md-6 animate__animated animate__fadeInUp animate__delay-1s">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
                  </div>
                  <div className="col-md-12 animate__animated animate__fadeInUp animate__delay-1s">
                    <input type="tel" className="form-control" name="tel" placeholder="Your Phone" required=""/>
                  </div>

                  <div className="col-md-12 animate__animated animate__fadeInUp animate__delay-2s">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
                  </div>

                  <div className="col-md-12 animate__animated animate__fadeInUp animate__delay-3s">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                  </div>

                  <div className="col-md-12 text-center animate__animated animate__fadeInUp animate__delay-4s">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>


            </div>
            {/* <!-- End Contact Form --> */}

          </div>

        </div>

      </div>

    </div>
  </section>
    </div>
  )
}

export default Contact
