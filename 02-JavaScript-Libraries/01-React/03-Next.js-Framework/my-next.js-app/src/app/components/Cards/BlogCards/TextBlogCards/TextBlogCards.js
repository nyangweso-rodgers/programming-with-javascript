import "./TextBlogCards.css";
import Link from "next/link";

const TextBlogCards = () => {
  return (
    <>
      <section className="border ">
        <div className="container border">
          <div className="row p-4">
            <h3>Related resources</h3>
          </div>
          <div className="row p-5 border">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <Link
                    href="https://www.linkedin.com/feed/"
                    className="btn btn-light"
                  >
                    JavaScript
                  </Link>
                  <h5 className="card-title">Blog Title goes here</h5>
                  <p className="card-text">Blog paragraph goes here</p>
                  <h6>Read more</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <Link
                    href="https://www.linkedin.com/feed/"
                    className="btn btn-light"
                  >
                    JavaScript
                  </Link>
                  <h5 className="card-title">Blog Title goes here</h5>
                  <p className="card-text">Blog paragraph goes here</p>
                  <h6>Read more</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <Link
                    href="https://www.linkedin.com/feed/"
                    className="btn btn-light"
                  >
                    JavaScript
                  </Link>
                  <h5 className="card-title">Blog Title goes here</h5>
                  <p className="card-text">Blog paragraph goes here</p>
                  <h6>Read more</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                className="btn btn-primary"
                onClick={() => alert("Test Message")}
              >
                Test Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextBlogCards;
