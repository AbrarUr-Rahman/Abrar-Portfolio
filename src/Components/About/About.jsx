import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_image from "../../assets/about_profile.svg";
import profile_image from "../../assets/about_profile2.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-paragraph">
            <p>
              I am an experience software engineer working with various web
              development and dev-ops technologies for 2+ year, I ensure
              complete devotion and focus towards all my projects and clients
              that I work for and promise to deliver the best product for the
              clientele
            </p>
            <p>
              My passion for development comes from my interest for my job and
              for the desire to achieve the best result possible for my clients
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Moment.js</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Express</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>MONGODB</p>
              <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>40+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
