import "./TextArea.css";

const TextAreaComponent = () => {
  return (
    <>
      <section className="text-area-section border border-danger">
        <div className="container">
          <div className="row">
            <h1>Text Area Component</h1>
            <p>Text area component with limit indicator</p>
          </div>
          <div className="row text-area-row">
            <label>Type something</label>
            <textarea
              name="type-something"
              id=""
              maxLength="150"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextAreaComponent;
