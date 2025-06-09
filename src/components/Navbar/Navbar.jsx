import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark-theme fixed-top py-3">
      <div className="container">
        <a className="navbar-brand" href="#hero" target="_blank" rel="noopener noreferrer">
          Lavanya C S
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
          aria-controls="navbar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav ms-auto text-white fw-medium fs-6">
            <li className="nav-item">
              <a href="#hero" className="nav-link text-white">
                <i className="fa-solid fa-house me-1"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link text-white">
                <i className="fa-solid fa-address-card me-1"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link text-white">
                <i className="fa-solid fa-building me-1"></i> Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link text-white">
                <i className="fa-solid fa-diagram-project me-1"></i> Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link text-white">
                <i className="fa-solid fa-list-check me-1"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link text-white">
                <i className="fa-solid fa-address-book me-1"></i> Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="src/assets/pdf/Lavanya_CS.pdf" className="nav-link text-white" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-file me-1"></i> Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
