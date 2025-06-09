import React from 'react'

function Qualification() {
  return (
    <div>
      
  <section id="qualifications" className="bg-white py-5">
    <div className="container">
      <h2 className="text-center default-4 mb-4 section-title">Qualifications</h2>
      {/* <!-- Nav Tabs --> */}
      <ul className="nav nav-pills justify-content-center mb-4" id="qualificationTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active fw-medium fs-6 fs-lg-5 text-black" id="experience-tab" data-bs-toggle="pill"
            data-bs-target="#experience" type="button" role="tab"><i
              className="fa-solid fa-briefcase me-2"></i>Experience</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link text-black fw-medium fs-6 fs-md-5" id="education-tab" data-bs-toggle="pill"
            data-bs-target="#education" type="button" role="tab"><i className="fa-solid fa-chalkboard me-2"></i>
            Education</button>
        </li>
      </ul>
      {/* <!-- Tab Content --> */}
      <div className="tab-content d-flex justify-content-center align-items-center flex-column"
        id="qualificationTabsContent">
        {/* <!-- Experience Tab --> */}
        <div className="tab-pane w-100 fade show active" id="experience" role="tabpanel">
          <div className="timeline ">

            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-title">Front-end Developer</div>
                <div className="timeline-subtitle">Wegren Technologies</div>
                <div className="timeline-date"><i className="fas fa-calendar"></i> Mar 2022 – Dec 2024</div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="timeline-title">Web Developer</div>
                <div className="timeline-subtitle">Webeaz Technologies</div>
                <div className="timeline-date"><i className="fas fa-calendar"></i> Oct 2018 – Nov 2019</div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-title">Software Developer</div>
                <div className="timeline-subtitle">Praistma Technologies</div>
                <div className="timeline-date"><i className="fas fa-calendar"></i> Mar 2017 – Oct 2018</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <!-- Education Tab --> */}
      <div className="tab-pane fade w-full" id="education" role="tabpanel">
        <div className="timeline">
          <div className="timeline-item right">
            <div className="timeline-content">
              <div className="timeline-title">B.E - Electronics and Communication Engineering</div>
              <div className="timeline-subtitle">Anna University</div>
              <div className="timeline-date"><i className="fas fa-calendar"></i> 2012 – 2016</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
    </div>
  )
}

export default Qualification
