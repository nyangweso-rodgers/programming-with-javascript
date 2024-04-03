import "./ConferenceSpeakersCards.css";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <Image
      src="/images/nyangweso-rodgers.jpg"
      width={400}
      height={200}
      alt="Rodgers Nyangweso"
    />
  );
};

const ConferenceSpeakersCards = () => {
  return (
    <section className="border border-primary">
      <div className="container border">
        <div className="row border border-dark">
          <div className="col-sm-4">
            <div className="card">
              <ProfileImage />
              <div className="card-body">
                <a href="#" className="btn btn-outline-primary">
                  Rodgers Nyangweso
                </a>
                <p>CEO & Co-Founder, Test Tech Inc.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <ProfileImage />
              <div className="card-body">
                <a href="#" className="btn btn-outline-primary">
                  Rodgers Nyangweso
                </a>
                <p>CEO & Co-Founder, Test Tech Inc.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <ProfileImage />
              <div className="card-body">
                <a href="#" className="btn btn-outline-primary">
                  Rodgers Nyangweso
                </a>
                <p>CEO & Co-Founder, Test Tech Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSpeakersCards;
