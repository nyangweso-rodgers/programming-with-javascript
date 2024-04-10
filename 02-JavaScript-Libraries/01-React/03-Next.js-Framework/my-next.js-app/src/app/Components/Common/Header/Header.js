import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="border border-danger p-5">
        <nav className="navbar navbar-expand-sm fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              Rodgers Nyangweso
            </a>
            <button
              className="navbar-toggler"
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
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Code Snippets
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
