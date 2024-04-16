import Link from "next/link";
import styles from "../../../../page.module.css";

const FooterTemplate = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className={`row`}>
            <div className="col">
              <hr />
            </div>
          </div>
          <div className="row">
            <div className={`col-sm-3 ${styles.flexRow}`}>
              <div>
                <a
                  className={`fa-brands fa-linkedin`}
                  target="_blank"
                  href="https://www.linkedin.com/in/rodgers-nyangweso-305919b4/"
                ></a>
              </div>
              <div>
                <a
                  className={`fa-brands fa-github`}
                  target="_blank"
                  href="https://github.com/nyangweso-rodgers/"
                ></a>
              </div>
              <div>
                <a
                  className={`fa-brands fa-hashnode`}
                  target="_blank"
                  href="https://nyangweso-rodgers.hashnode.dev/"
                ></a>
              </div>
              <div>
                <a
                  className={`fa-brands fa-x-twitter`}
                  target="_blank"
                  href="https://twitter.com/R_Nyangweso"
                ></a>
              </div>
            </div>
            <div className="col-sm-2 border border-secondary"></div>
            <div className={`col-sm-7 ${styles.flexRow}`}>
              <div>
                <span>Terms Of Use</span>
              </div>
              <div>
                <span>Privacy Policy</span>
              </div>
              <div>
                <span>&copy;</span> <span>{new Date().getFullYear()}</span>{" "}
                <span>Rodgers Nyangweso</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTemplate;
