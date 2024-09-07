import "./Footer.css";
// import footer_logo from "../../assets/footer_logo.svg";
// import user_icon from "../../assets/user_icon.svg";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={footer_logo} alt="" />
           */}
          <h1>Abrar</h1>
          <img src={theme_pattern} alt="" />
          <p>
            I'm Md.Abrar Ur Rahman, A frontend Engineer Based in Bangladesh I am
            a Front End Developer from Dhaka,Bangladesh with 2 years of
            experience working with front end Technology
          </p>
        </div>
        <div className="footer-top-right">
          {/* <div className="footer-email-input"> */}
          {/* <img src={user_icon} alt="" /> */}
          {/* <input type="email" placeholder="Enter your Email" /> */}
          {/* </div> */}
          {/* <div className="footer-subscribe">Subscribe</div> */}
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>ishmam000@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>01760253194</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Mirpur,Dhaka</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p> &copy; 2023.Md-Abrar-Ur-Rahman</p>
          <p>All</p>
          <p>Rights</p>
          <p>Reserved</p>
        </div>
        <div className="footer-bottom-right">
          <p>Term Of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
