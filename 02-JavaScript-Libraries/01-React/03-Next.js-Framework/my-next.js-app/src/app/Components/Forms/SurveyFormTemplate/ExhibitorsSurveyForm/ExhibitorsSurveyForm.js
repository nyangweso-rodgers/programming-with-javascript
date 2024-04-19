//
const ExhibitorsSurveyForm = () => {
  return (
    <>
      <main>
        <div className={`container`}>
          <div className={`row border border-dark`}>
            <div className={`col-sm-6`}>
              <label className={`form-label`}>First Name</label>
              <input
                className={`form-control`}
                type="text"
                placeholder="First Name"
              ></input>
            </div>
            <div className={`col-sm-6`}>
              <label className={`form-label`}>Last Name</label>
              <input
                className={`form-control`}
                type="text"
                placeholder="Last Name"
              ></input>
            </div>
          </div>
          <div className={`row border border-dark`}>
            <div className={`col-sm-6`}>
              <label className={`form-label`}>Email</label>
              <input
                className={`form-control`}
                type="email"
                placeholder="Email"
              ></input>
            </div>
            <div className={`col-sm-6`}>
              <label className={`form-label`}>Phone Number</label>
              <input
                className={`form-control`}
                type="text"
                placeholder="Phone Number"
              ></input>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ExhibitorsSurveyForm;
