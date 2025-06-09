import React from 'react'

function Footer() {
  return (
    <div>
      
  <footer className="bg-dark-theme text-white py-4">
    <div className="container">
      <div className="row justify-content-start text-start">
        {/* <!-- Navigation Links --> */}
        <div className="col-md-4">
          <h5>Navigation</h5>
          <ul className="list-unstyled gap-4">
            <li className="py-1"><a href="#hero" className="text-white text-decoration-none">Home</a></li>
            <li className="py-1"><a href="#about" className="text-white text-decoration-none">About</a></li>
            <li className="py-1"><a href="#projects" className="text-white text-decoration-none">Portfolio</a></li>
            <li className="py-1"><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
          </ul>
        </div>

        {/* <!-- Social Icons --> */}
        <div className="col-md-4 mb-3">
          <h5>Follow Me</h5>
          <a href="https://www.linkedin.com/in/lavanya-cs/" target="_blank" className="text-white me-3 fs-4"><i
              className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/LavanyaCS" target="_blank" className="text-white me-3 fs-4"><i
              className="fa-brands fa-github"></i></a>
          <a href="mailto:lavanyachandranece@gmail.com" className="text-white me-3 fs-4"><i className="fas fa-envelope"></i></a>
        </div>

        {/* <!-- Copyright --> */}
        <div className="col-md-4 mb-3">
          <h5>&copy; 2025 Lavanya Chandran</h5>
          <p className="mb-0">All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
