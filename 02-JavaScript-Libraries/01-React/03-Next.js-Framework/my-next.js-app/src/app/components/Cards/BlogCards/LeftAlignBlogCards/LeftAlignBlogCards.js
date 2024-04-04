import "./LeftAlignBlogCards.css";

const LeftAlignBlogCards = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Related resources</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-body-btn">
                    <a href="#" className="btn btn-outline-primary">
                      JavaScript
                    </a>
                  </div>
                  <h4>Blog Post Header</h4>
                  <p>Blog post paragraph</p>
                </div>
                <div className="card-footer">
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-body-btn">
                    <a href="#" className="btn btn-outline-primary">
                      Blog Post Button
                    </a>
                  </div>
                  <h4>Blog Post Header</h4>
                  <p>Blog post paragraph</p>
                </div>
                <div className="card-footer">
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-body-btn">
                    <a href="#" className="btn btn-outline-primary">
                      Blog Post Button
                    </a>
                  </div>
                  <h4>Blog Post Header</h4>
                  <p>Blog post paragraph</p>
                </div>
                <div className="card-footer">
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeftAlignBlogCards;
