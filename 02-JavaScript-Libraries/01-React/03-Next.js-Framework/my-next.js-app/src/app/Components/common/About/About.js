import "./About.css";
const About = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <h1>About Section</h1>
          </div>
          <div className="row border p-5"></div>
          <div className="row border p-2">
            <div className="col">
              <button className="btn btn-success btn-lg">Contact</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
