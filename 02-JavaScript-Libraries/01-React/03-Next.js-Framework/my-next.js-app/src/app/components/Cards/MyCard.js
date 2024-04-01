import "./MyCard.css";

const MyCard = () => {
  return (
    <>
      <main className="border border-dark">
        <div className="container card-container border border-danger">
          <div className="row card-row">
            <div className="col-sm-3 card-row-col border border-primary">
              <a>
                <h2>
                  Docs <span>-&gt;</span>
                </h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>
            </div>
            <div className="col-sm-3 card-row-col border border-secondary">
              <a>
                <h2>
                  Learn <span>-&gt;</span>
                </h2>
                <p>
                  Learn about Next.js in an interactive course
                  with&nbsp;quizzes!
                </p>
              </a>
            </div>
            <div className="col-sm-3 card-row-col border border-info">
              <a>
                <h2>
                  Templates <span>-&gt;</span>
                </h2>
                <p>Explore the Next.js 13 playground.</p>
              </a>
            </div>
            <div className="col-sm-3 card-row-col border border-warning">
              <a>
                <h2>
                  Deploy <span>-&gt;</span>
                </h2>
                <p>
                  Instantly deploy your Next.js site to a shareable URL with
                  Vercel.
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyCard;
