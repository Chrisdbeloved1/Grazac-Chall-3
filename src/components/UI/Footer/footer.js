import classes from "./footer.module.css";
import Logo from "../../../assets/images/Footer/Logo.svg";
import Phone from "../../../assets/images/Footer/phone.svg";
import Mail from "../../../assets/images/Footer/mail.svg";
import Location from "../../../assets/images/Footer/location.svg";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer_container}>

          <div className={classes.left_sub_container}>

          <div className={classes.logo_container}>
            <img src={Logo} alt="logo" />
            </div>

          <div className={classes.left_sub_cont}>
            <h4 className={classes.footer_title}>About Us</h4>
            <p className={classes.footer_text}>
              The UniqueIQ is the first of its kind in Africa. An organisation
              that leverages best in class teachers.
            </p>
          </div>

          <div className={classes.left_sub_cont}>
            <h4 className={classes.footer_title}>Contact Us</h4>
            <li><img src={Phone} alt="" /><span>+2349080281275</span></li>
            <li><img src={Location} alt="" /><span>grazactech@gmail.com</span></li>
            <li><img src={Mail} alt="" /><span>2a Ibara housing estate kuto, Abeokuta Ogun state</span></li>
          </div>
        </div>

        <div className={classes.right_sub_container}>
        <div className={classes.right_sub_cont}>
            <h3>Information</h3>
            <li><a href="http://">Home</a></li>
            <li><a href="http://">Log in</a></li>
            <li><a href="http://">Register</a></li>
            <li><a href="http://">Our Story</a></li>
        </div>

        <div className={classes.right_sub_cont}>
        <h3>Learning</h3>
            <li><a href="http://">Courses</a></li>
            <li><a href="http://">Syallbus</a></li>
            <li><a href="http://">Pricing</a></li>
        </div>

        <div className={classes.right_sub_cont}>
        <h3>HelpfulLinks</h3>
            <li><a href="http://">Customer Support</a></li>
            <li><a href="http://">Log In</a></li>
            <li><a href="http://">Our Story</a></li>
        </div>
        <div className={classes.right_sub_cont}>
        <h3>HelpfulLinks</h3>
        <li><input type="text" placeholder="Enter your Email" /> </li>
        <img src={Mail} alt="" />
        <li><button>Subcribe</button> </li>
        </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
