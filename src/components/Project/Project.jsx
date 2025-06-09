import React from 'react'

function Project() {
  return (
    <div>
        <section id="projects" className="bg-light py-5">
    <div className="container">
      <h2 className="text-center default-4 mb-4 section-title">Projects</h2>
      <div className="row gx-4">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 col-xl-4">
          <div className=" shadow-sm rounded project-item" data-bs-toggle="modal" data-bs-target="#citaaraModal">
            <img src="src/assets/images/citaara-web-step.png" alt="Citaara - Web Application"
              className="card-img-top img-fluid h-100" />
            <div className="card-menu">
              <h5 className="card-title d-flex justify-content-center align-items-center w-100 h-100">Citaara</h5>
            </div>
          </div>
          {/* <!-- Citaara Modal --> */}
          <div className="modal fade" id="citaaraModal" tabIndex="-1" aria-labelledby="citaaraModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title" id="citaaraModalLabel">Citaara Project</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  <p>I designed the responsive UI for student dashboards showcasing their steps, stories, and progress
                    journey.</p>
                  <p>Built separate layouts for parent and child profiles with clear role-based views and intuitive
                    navigation.</p>
                  <p>Focused on a clean, mobile-friendly design using Tailwind CSS, ensuring accessibility across
                    devices.</p>
                  <p>Created components for progress bars, timelines, and story cards to enhance user engagement.</p>
                  <p>Worked closely with the team to maintain design consistency and user-friendly experiences
                    throughout the platform.</p>
                </div>
                <div className="modal-footer">
                  <a href="https://test.citaara.com/" target="_blank"
                    className="btn btn-outline-dark animate__animated animate__fadeInUp animate__delay-1s cursor-pointer">Visit
                    Website</a>

                </div>

              </div>
            </div>
          </div>


        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 col-xl-4">
          <div className=" shadow-sm rounded project-item" data-bs-toggle="modal" data-bs-target="#guideMyFolioModal">
            <img src="src/assets/images/guidemyfolio-web.png" alt="Guide My Folio - Web Application"
              className="card-img-top img-fluid h-100" />
            <div className="card-menu">
              <h5 className="card-title d-flex justify-content-center align-items-center w-100 h-100">Guide My Folio</h5>
            </div>
          </div>
          {/* <!-- Guide My Folio Modal --> */}
          <div className="modal fade" id="guideMyFolioModal" tabIndex="-1" aria-labelledby="guideMyFolioModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title" id="guideMyFolioModalLabel">Guide My Folio</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  <p>As a UI Developer, I design and implement responsive and user-friendly interfaces.</p>
                  <p>I ensure seamless integration of front-end technologies (HTML, CSS, JavaScript) with backend
                    systems.</p>
                  <p>I collaborate with designers to translate design concepts into clean, efficient code.</p>
                  <p>My focus is on optimizing performance, accessibility, and ensuring a smooth user experience across
                    all devices.</p>
                  <p>I continuously test and improve UI elements to maintain consistency and enhance usability.</p>
                </div>
                <div className="modal-footer">
                  <a href="https://guidemyfolio.com/" target="_blank"
                    className="btn btn-outline-dark animate__animated animate__fadeInUp animate__delay-1s cursor-pointer">Visit
                    Website</a>

                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 col-xl-4">
          <div className=" shadow-sm rounded project-item" data-bs-toggle="modal" data-bs-target="#meaningSphereModal">
            <img src="src/assets/images/meaningsphere-web.png" alt="Meaningsphere - Web Application"
              className="card-img-top img-fluid h-100" />
            <div className="card-menu">
              <h5 className="card-title d-flex justify-content-center align-items-center w-100 h-100">Meaningsphere</h5>
            </div>
          </div>
          {/* <!-- MeaningSphere Modal --> */}
          <div className="modal fade" id="meaningSphereModal" tabIndex="-1" aria-labelledby="meaningSphereModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title" id="meaningSphereModalLabel">MeaningSphere</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  <p>
                    As a UI Developer, my role involves designing and implementing intuitive, responsive user
                    interfaces.</p>
                  <p>
                    I collaborate with UX/UI designers to bring design concepts to life using HTML, CSS, JavaScript,
                    and frameworks like Angular and Bootstrap.
                  </p>
                  <p> I focus on creating accessible, user-friendly layouts that work seamlessly across different
                    devices and browsers.
                  </p>
                  <p>Additionally, I optimize performance, ensuring fast load times and smooth interactions.
                  </p>
                  <p> I also test and iterate on the UI to enhance usability and maintain a consistent design throughout
                    the application.
                  </p>
                </div>

                <div className="modal-footer">
                  <a href="https://www.meaningsphere.com/" target="_blank"
                    className="btn btn-outline-dark animate__animated animate__fadeInUp animate__delay-1s cursor-pointer">Visit
                    Website</a>

                </div>

              </div>
            </div>
          </div>

        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 col-xl-4">
          <div className=" shadow-sm rounded project-item" data-bs-toggle="modal" data-bs-target="#nuHospitalModal">
            <img src="src/assets/images/nuhospitals-web.png" alt="Nu Hospital - Web Application"
              className="card-img-top img-fluid h-100" />
            <div className="card-menu">
              <h5 className="card-title d-flex justify-content-center align-items-center w-100 h-100">NU Hospital</h5>
            </div>
          </div>
          {/* <!-- nuHospital Modal --> */}
          <div className="modal fade" id="nuHospitalModal" tabIndex="-1" aria-labelledby="nuHospitalModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title" id="nuHospitalModalLabel">NU Hospital</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  <p>
                    As a UI Developer for the NU Hospitals website, I designed and implemented responsive,
                    user-friendly interfaces using Bootstrap and PHP.</p>
                  <p>
                    I ensured a seamless user experience by focusing on clean, accessible layouts that adapt
                    to different screen sizes and devices.</p>
                  <p>
                    I collaborated with the design team to translate visual concepts into functional web
                    components and pages.</p>
                  <p>
                    My role included optimizing the frontend performance for faster load times and smooth
                    navigation.</p>
                  <p>
                    I also worked on maintaining consistent design elements across the website while
                    ensuring the platform was intuitive and easy to navigate for users seeking healthcare
                    services.</p>
                </div>

                <div className="modal-footer">
                  <a href="https://www.nuhospitals.com/" target="_blank"
                    className="btn btn-outline-dark animate__animated animate__fadeInUp animate__delay-1s cursor-pointer">Visit
                    Website</a>

                </div>

              </div>
            </div>
          </div>

        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 col-xl-4">
          <div className=" shadow-sm rounded project-item" data-bs-toggle="modal" data-bs-target="#beurerIndiaModal">
            <img src="src/assets/images/beurerindia-web.png" alt="Beurer India - Web Application"
              className="card-img-top img-fluid h-100" />
            <div className="card-menu">
              <h5 className="card-title d-flex justify-content-center align-items-center w-100 h-100">Beurer India</h5>
            </div>
          </div>
          {/* <!-- beurerIndia Modal --> */}
          <div className="modal fade" id="beurerIndiaModal" tabIndex="-1" aria-labelledby="beurerIndiaModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title" id="beurerIndiaModalLabel">Beurer India</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  <p>As a UI Developer for the Beurer India web application, I worked on the Magento-based platform,
                    focusing primarily on UI development and configuration.</p>

                  <p>I collaborated with the backend team to integrate dynamic content while ensuring a seamless user
                    experience across different devices.</p>

                  <p>My work involved designing responsive layouts, optimizing the frontend, and ensuring the site was
                    visually appealing and user-friendly.</p>

                  <p>I configured Magento settings to align with the brand's design standards and enhanced the shopping
                    experience.</p>

                  <p>I also worked on troubleshooting, ensuring the UI components functioned smoothly with the backend
                    integration.</p>
                </div>

                <div className="modal-footer">
                  <a href="https://www.beurerindia.com/" target="_blank"
                    className="btn btn-outline-dark animate__animated animate__fadeInUp animate__delay-1s cursor-pointer">Visit
                    Website</a>

                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 col-xl-4">
          <div className=" shadow-sm rounded project-item" data-bs-toggle="modal" data-bs-target="#ArabcalModal">
            <img src="src/assets/images/arabcal-web.png" alt="Arabcal - Web Application" className="card-img-top img-fluid h-100" />
            <div className="card-menu">
              <h5 className="card-title d-flex justify-content-center align-items-center w-100 h-100">Arabcal</h5>
            </div>
          </div>
          {/* <!-- Arabcal Modal --> */}
          <div className="modal fade" id="ArabcalModal" tabIndex="-1" aria-labelledby="ArabcalModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title" id="ArabcalModalLabel">Arabcal</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  <p>I successfully developed the Arabcal website using HTML5, CSS3, Bootstrap 3, Core PHP, JavaScript,
                    and MySQL.</p>

                  <p>My role involved creating responsive, user-friendly interfaces with clean, semantic code for a
                    smooth experience across devices.</p>

                  <p>I integrated Core PHP for backend logic and MySQL for efficient data management, ensuring the
                    platform's scalability.</p>

                  <p>I worked on the frontend using Bootstrap 3 for responsive design, ensuring seamless navigation and
                    accessibility.</p>

                  <p>My responsibilities also included optimizing the site for performance and troubleshooting any
                    issues related to functionality and user experience.</p>
                </div>
                <div className="modal-footer">
                  <a href="https://www.arabcal.com/" target="_blank"
                    className="btn btn-outline-dark animate__animated animate__fadeInUp animate__delay-1s cursor-pointer">Visit
                    Website</a>

                </div>


              </div>
            </div>
          </div>


        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 col-xl-4">
          <div className=" shadow-sm rounded project-item" data-bs-toggle="modal" data-bs-target="#greenvalleyCampusModal">
            <img src="src/assets/images/greenvalleycampus-web.png" alt="Green Valley Campus - Web Application"
              className="card-img-top img-fluid h-100" />
            <div className="card-menu">
              <h5 className="card-title d-flex justify-content-center align-items-center w-100 h-100">Green Valley Campus
              </h5>
            </div>
          </div>
          {/* <!-- greenvalleyCampus Modal --> */}
          <div className="modal fade" id="greenvalleyCampusModal" tabIndex="-1"
            aria-labelledby="greenvalleyCampusModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title" id="greenvalleyCampusModalLabel">Green Valley Campus</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  <p>I successfully developed the Green Valley Campus website using HTML5, CSS3, Bootstrap 3, Core PHP,
                    JavaScript, and MySQL.</p>

                  <p>I designed and implemented responsive, user-friendly interfaces, ensuring a seamless experience
                    across devices.</p>

                  <p>I utilized Core PHP for backend logic and MySQL for efficient data management, ensuring the
                    platform's scalability.</p>

                  <p>I integrated JavaScript for interactive elements, enhancing user engagement and overall site
                    performance.</p>

                  <p>I also focused on optimizing the site for performance and troubleshooting any issues related to
                    functionality and user experience.</p>
                </div>

                <div className="modal-footer">
                  <a href="https://www.greenvalleycampus.com/" target="_blank"
                    className="btn btn-outline-dark animate__animated animate__fadeInUp animate__delay-1s cursor-pointer">Visit
                    Website</a>

                </div>



              </div>
            </div>
          </div>


        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 col-xl-4">
          <div className=" shadow-sm rounded project-item" data-bs-toggle="modal" data-bs-target="#mediSouqModal">
            <img src="src/assets/images/medisouq-web.png" alt="Medisouq - Web Application"
              className="card-img-top img-fluid h-100" />
            <div className="card-menu">
              <h5 className="card-title d-flex justify-content-center align-items-center w-100 h-100">Medisouq</h5>
            </div>
          </div>
          {/* <!-- mediSouq Modal --> */}
          <div className="modal fade" id="mediSouqModal" tabIndex="-1" aria-labelledby="mediSouqModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title" id="mediSouqModalLabel">Medisouq</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <p>I worked on the Medisouq website, focusing on UI design, theme customization, and web design to
                    create a visually appealing and user-friendly platform.</p>

                  <p>I customized the Magento theme and performed admin configuration to ensure seamless backend
                    management.</p>

                  <p>My role also involved simple module creation using Core PHP (MVC), enhancing functionality within
                    the platform.</p>

                  <p>I utilized HTML5, CSS3, and Bootstrap to ensure the website was responsive and accessible across
                    devices.</p>

                  <p>Additionally, I worked on optimizing the site's performance and improving the overall user
                    experience.</p>
                </div>


                <div className="modal-footer">
                  <a href="https://www.medisouq.com/" target="_blank"
                    className="btn btn-outline-dark animate__animated animate__fadeInUp animate__delay-1s cursor-pointer">Visit
                    Website</a>

                </div>

              </div>
            </div>
          </div>


        </div>


      </div>
    </div>
  </section>
    </div>
  )
}

export default Project
 