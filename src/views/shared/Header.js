import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          First React App
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/" id="home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about" id="about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact" id="contact">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/services" id="services">
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// make public to the rest of the app
export default Header;
