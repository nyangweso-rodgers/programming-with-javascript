//ContactForm

const ContactForm = () => {
  return (
    <>
      <section className="text-area-section border border-danger">
        <div className="container"></div>
      </section>
      <main className={`container`}>
        <div className={`row`}>
          <div className={``}>
            <label className={`form-label`}>Your Message</label>
            <textarea
              className={`form-control`}
              placeholder="Write something"
              maxLength="150"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactForm;
