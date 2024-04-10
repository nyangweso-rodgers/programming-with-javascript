import "./CenterAlignedCards.css";
import styles from "../../../../page.module.css";

const CenterAlignedCards = () => {
  return (
    <>
      <div className="border border-primary p-5">
        <div className="container border border-secondary p-4">
          <div className="row">
            <div>
              <h3>Related resources</h3>
            </div>
          </div>
          <div className="row border border-dark p-3">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-body-btn">
                    <a
                      href="#"
                      className={`btn btn-outline-primary ${styles.centeredBtn}`}
                    >
                      JavaScript
                    </a>
                  </div>
                  <h4>Blog Post Header</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-body-btn">
                    <a
                      href="#"
                      className={`btn btn-outline-primary ${styles.centeredBtn}`}
                    >
                      Blog Post
                    </a>
                  </div>
                  <h4>Blog Post Header</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-body-btn">
                    <a
                      href="#"
                      className={`btn btn-outline-primary ${styles.centeredBtn}`}
                    >
                      Blog Post
                    </a>
                  </div>
                  <h4>Blog Post Header</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-body-btn">
                    <a
                      href="#"
                      className={`btn btn-outline-primary ${styles.centeredBtn}`}
                    >
                      Blog Post
                    </a>
                  </div>
                  <h4>Blog Post Header</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <a href="#" className="btn btn-info">
                Explore the Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterAlignedCards;
