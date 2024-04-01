import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <hr className="hr" />
          </div>
          <div className="row">
            <div className="col-sm-9 copyright-col">
              <div className="">
                &copy; 2023 Rodgers Nyangweso. All Rights Reserved.
              </div>
              <div className="">
                <a className="text-decoration-none" href="#">
                  Privacy Policy
                </a>
              </div>
              <div className="">
                <a className="text-decoration-none" href="#">
                  Terms of Use
                </a>
              </div>
            </div>
            <div className="col-sm-3 social-media-col">
              <div className="">
                <a
                  className="bi bi-linkedin"
                  target="_blank"
                  href="https://www.linkedin.com/in/rodgers-nyangweso-305919b4/"
                ></a>
              </div>
              <div className="">
                <a
                  className="bi bi-github"
                  target="_blank"
                  href="https://github.com/nyangweso-rodgers"
                ></a>
              </div>
              <div className="">
                <a
                  className="bi bi-twitter-x"
                  target="_blank"
                  href="https://twitter.com/R_Nyangweso"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
