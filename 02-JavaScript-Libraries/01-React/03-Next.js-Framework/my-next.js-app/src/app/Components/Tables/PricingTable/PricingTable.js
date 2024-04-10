import "./PricingTable.css";

import "./PricingTable.css";

const PricingTable = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <span className="navbar-brand">Pricing Table</span>
          </div>
        </nav>
      </header>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <h2>regular</h2>
                <div className="price">
                  {" "}
                  $100
                  <span>Per Month</span>
                </div>
                <ul>
                  <li>Data Analytics</li>
                  <li>Dashboards</li>
                  <li>Web Design</li>
                  <li>Optimization</li>
                </ul>
                <a className="btn" href="#/">
                  BUY NOW
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <h2>pro pack</h2>
                <div className="pop">popular</div>
                <div className="price">
                  {" "}
                  $200
                  <span>Per Month</span>
                </div>
                <ul>
                  <li>Data Analytics</li>
                  <li>Dashboards</li>
                  <li>Backend Integrations</li>
                  <li>Another Item</li>
                </ul>
                <a className="btn" href="#/">
                  BUY NOW
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <h2>premium</h2>
                <div className="price">
                  {" "}
                  $300
                  <span>Per Month</span>
                </div>
                <ul>
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                  <li>Service 4</li>
                </ul>
                <a className="btn" href="#/">
                  BUY NOW
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <h2>ultimate</h2>
                <div className="price">
                  {" "}
                  $400
                  <span>Per Month</span>
                </div>
                <ul>
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                  <li>Service 4</li>
                </ul>
                <a className="btn" href="#/">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingTable;