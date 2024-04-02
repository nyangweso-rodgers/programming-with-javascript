import "./BlogCard.css";

const BlogCard = () => {
  return (
    <>
      <div className="border border-primary p-5">
        <div className="container border border-secondary p-4">
          <div className="row border border-dark p-3">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-body-btn">
                    <a href="#" className="btn btn-outline-primary">
                      Blog Post Button
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
                    <a href="#" className="btn btn-outline-primary">
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
                    <a href="#" className="btn btn-outline-primary">
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
                    <a href="#" className="btn btn-outline-primary">
                      Blog Post
                    </a>
                  </div>
                  <h4>Blog Post Header</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
