import React from 'react';

function Skill() {
  return (
    <div>
      <section id="skills" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center default-4 mb-4 section-title">My Skills</h2>
          <div className="row gap-y-4">

            {/* Frontend Skills */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-dark">
                <div className="card-header bg-dark text-white">
                  <i className="fas fa-code"></i> Frontend Development
                </div>
                <div className="card-body">
                  <div><i className="fab fa-html5 skill-icon"></i>HTML5</div>
                  <div className="progress my-2">
                    <div className="progress-bar bg-light-theme text-black" style={{ width: "95%" }}>95%</div>
                  </div>

                  <div><i className="fab fa-css3-alt skill-icon"></i>CSS3 / LESS</div>
                  <div className="progress my-2">
                    <div className="progress-bar bg-light-theme text-black" style={{ width: "90%" }}>90%</div>
                  </div>

                  <div><i className="fab fa-bootstrap skill-icon"></i>Bootstrap 3 / 4 / 5</div>
                  <div className="progress my-2">
                    <div className="progress-bar bg-light-theme text-black" style={{ width: "90%" }}>90%</div>
                  </div>

                  <div><i className="fas fa-fill-drip skill-icon"></i>Tailwind CSS</div>
                  <div className="progress my-2">
                    <div className="progress-bar bg-light-theme text-black" style={{ width: "85%" }}>85%</div>
                  </div>

                  <div><i className="fab fa-js skill-icon"></i>JavaScript</div>
                  <div className="progress my-2">
                    <div className="progress-bar bg-light-theme text-black" style={{ width: "50%" }}>50%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-dark">
                <div className="card-header bg-dark text-white">
                  <i className="fas fa-server"></i> Backend & Database
                </div>
                <div className="card-body">
                  <div><i className="fas fa-code skill-icon"></i>Core PHP</div>
                  <div className="progress my-2">
                    <div className="progress-bar bg-light-theme text-black" style={{ width: "80%" }}>80%</div>
                  </div>

                  <div><i className="fas fa-database skill-icon"></i>MySQL</div>
                  <div className="progress my-2">
                    <div className="progress-bar bg-light-theme text-black" style={{ width: "85%" }}>85%</div>
                  </div>

                  <div><i className="fas fa-shopping-cart skill-icon"></i>Magento 2.3.x</div>
                  <div className="progress">
                    <div className="progress-bar bg-light-theme text-black" style={{ width: "80%" }}>80%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Version Control */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-dark">
                <div className="card-header bg-dark text-white">
                  <i className="fas fa-tools"></i> Tools & Others
                </div>
                <div className="card-body">
                  <div><i className="fab fa-git-alt skill-icon"></i>Git & GitHub</div>
                  <div className="progress my-2">
                    <div className="progress-bar bg-light-theme text-black" style={{ width: "85%" }}>85%</div>
                  </div>

                  <div><i className="fas fa-desktop skill-icon"></i>Responsive Design</div>
                  <div className="progress my-2">
                    <div className="progress-bar bg-light-theme text-black" style={{ width: "90%" }}>90%</div>
                  </div>

                  <div><i className="fas fa-globe skill-icon"></i>Cross-Browser Compatibility</div>
                  <div className="progress my-2">
                    <div className="progress-bar bg-light-theme text-black" style={{ width: "85%" }}>85%</div>
                  </div>

                  <div><i className="fas fa-bug skill-icon"></i>Debugging & Testing</div>
                  <div className="progress">
                    <div className="progress-bar bg-light-theme text-black" style={{ width: "80%" }}>80%</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
