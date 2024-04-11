"use client";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              App Header
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapseContent"
              aria-controls="#navbarCollapseContent"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              id="navbarCollapseContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
