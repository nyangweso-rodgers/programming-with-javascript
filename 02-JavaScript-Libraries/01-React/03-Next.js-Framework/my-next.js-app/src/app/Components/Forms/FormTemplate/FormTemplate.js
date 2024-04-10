import "./FormTemplate.css";

const FormTemplate = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <form>
              <fieldset>
                <legend>Personal details</legend>
                <label for="firstname" spellCheck="true">
                  First name:
                </label>
                <input type="text" id="firstname" name="firstname" />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" />
                <label for="contact">Contact:</label>
                <input type="text" id="contact" name="contact" />
                <input type="button" value="Submit" />
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormTemplate;
