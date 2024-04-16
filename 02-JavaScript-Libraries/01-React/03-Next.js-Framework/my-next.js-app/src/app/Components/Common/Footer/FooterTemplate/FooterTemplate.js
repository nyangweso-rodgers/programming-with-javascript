import Link from "next/link";

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
            <div className="col-sm-4 border border-primary">
              <div>
                <Link
                  className={``}
                  href="https://www.linkedin.com/in/rodgers-nyangweso-305919b4/"
                >
                  LinkedIn
                </Link>
              </div>
              <div>
                <Link
                  className={``}
                  href="https://github.com/nyangweso-rodgers/"
                >
                  LinkedIn
                </Link>
              </div>
              <div>
                <Link
                  className={``}
                  href="https://nyangweso-rodgers.hashnode.dev/"
                >
                  LinkedIn
                </Link>
              </div>
              <div>
                <Link className={``} href="https://twitter.com/R_Nyangweso">
                  LinkedIn
                </Link>
              </div>
            </div>
            <div className="col-sm-4 border border-secondary"></div>
            <div className="col-sm-4 border border-danger"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTemplate;
