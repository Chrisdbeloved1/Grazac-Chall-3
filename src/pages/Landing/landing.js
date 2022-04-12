import classes from "./landing.module.css";
import Header1 from "../../components/UI/Headers/Header1/header1";
import searchIcon from "../../assets/images/Landing/searchIcon.svg";
import headerImage from "../../assets/images/Landing/headerImage.png";
import Utilize from "../../components/UI/Utilize/utilize";
import CardNav from "../../components/UI/CardNav/cardnav"
import Button from "../../components/UI/Button/button"
import Test from "../../components/UI/Testimonial/testimony"
import Image1 from "../../assets/images/Landing/test1.png";
import Image2 from "../../assets/images/Landing/test2.png";
import Image3 from "../../assets/images/Landing/test3.png";
import Google from "../../assets/images/Landing/google.svg";
import Andela from "../../assets/images/Landing/andela.svg";
import Intelia from "../../assets/images/Landing/intelia.svg";
import Flutterwave from "../../assets/images/Landing/flutterwave.svg";
import Paystack from "../../assets/images/Landing/paystack.svg";




const Landing = () => {
  return (
    <section>
      <div className={classes.header_cont}>
        <Header1 />
        <div className={classes.hero_cont}>
          <div className={classes.right_cont}>
            <h1>
              <span>
                You Can Start <br /> Learning At Any Age!
              </span>
            </h1>
            <p className={classes.right_text}>
              Our courses are desgined to provide traning that’s as streamlined
              and to th the end point as possible
            </p>

            <div className={classes.input_cont}>
              <input
                className={classes.Search_input}
                type="text"
                name="course"
                placeholder="Search For Course"
              />
              <span className={classes.search}>
                <img src={searchIcon} alt="Search" />
              </span>
            </div>
          </div>

          <div className={classes.left_cont}>
            <img src={headerImage} alt="phone" />
          </div>
        </div>
      </div>
      <CardNav />
      <div className={classes.utilize_cont}>
        <Utilize/>
      </div>
       
      {/*build section */}

      <div className={classes.build_cont}>
      <div className={classes.build_wrap}>
      <div className="u-header">
            <h1 className="u-header-h1 heading">Build, Create, Innovate with our top notch courses online</h1>
            <p className="u-text-small para">Egestas eleifend risus dui tempor morbi maecenas scelerisque </p>
        </div>
        <div className={classes.button_cont}><Button text={"Explore Courses"} btnClass={"btn-gray"} href={"#"} /></div>
      </div>
      </div>

      {/* testimony section */}

      <div className={classes.test_cont}>
        <div className={classes.test_wrap}>
          <h2>What Our Students Have To Say</h2>
          <div className={classes.test_card}>
          <Test image={Image1} text={"Mary"}/>
          <Test image={Image2} text={"John"} />
          <Test image={Image3} text={"Kent"}/>
          </div>
        </div>
      </div>

      {/* tutor section */}
      <div className={classes.tutor_cont}>
      <div className={classes.tutor_wrap}>
          <h2>Our Tutors And Mentors Come From Leading Companies</h2>
      <div className={classes.logo_cont}>
        <span><img src={Google} alt="" /></span>
        <span><img src={Andela} alt="" /></span>
        <span><img src={Intelia} alt="" /></span>
        <span><img src={Flutterwave} alt="" /></span>
        <span><img src={Paystack} alt="" /></span>
      </div>
      </div>
      </div>

    </section>
  );
};

export default Landing;
