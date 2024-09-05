import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
    </div>
  );
};

export default Contact;
