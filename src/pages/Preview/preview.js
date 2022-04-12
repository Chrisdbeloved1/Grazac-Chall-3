import classes from "../Preview/preview.module.css";
import Header1 from "../../components/UI/Headers/Header1/header1";
import CoursePre from "../../assets/images/Preview/coursepre.png";
import Star from "../../assets/images/Preview/star.svg";
import Imag from "../../assets/images/Preview/imag.png";
import Bullet from "../../assets/images/Preview/check.svg";
import Circle from "../../assets/images/Preview/circlebullet.svg";
import Progress from "../../assets/images/Preview/progress.svg";
import Forty from "../../assets/images/Preview/forty.svg";
import Button from "../../components/UI/Button/button";

import Outline from "../../components/UI/Outline/outline";

const Preview = () => {
  return (
    <div>
      <div className={classes.preview_hero}>
        <Header1 />

        <div className={classes.sect_hero}>
          <div className={classes.sec_right_cont}>
            <div className={classes.heade_text}>
              <h2>Branding : Introduction to Personal Branding</h2>
              <p>
                Begin your Career as a Branding Specialist. Master branding
                strategies, branded content generation, image creation and
                customer experience
              </p>
              <div className={classes.star_share}>
                <img src={Star} alt="" />
              </div>
              <div className={classes.imag}>
                <img src={Imag} alt="" />
              </div>
              <div className={classes.price}>
                <span className={classes.price_big_text}>$50</span>{" "}
                <span className={classes.price_small_text}>100</span>
              </div>
              <div className={classes.btn_cont}>
                <Button text={"Buy now"} btnClass={"btn-grey"} href={"#"} />
                <Button text={"Add to cart"} btnClass={"btn-dark"} href={"#"} />
              </div>
              <div className={classes.paragraph}>
                <p>3,000 student enrolled</p>
              </div>
            </div>
          </div>
          <div className={classes.sec_left_cont}>
            <img src={CoursePre} alt="" />
          </div>
        </div>
      </div>

      <section className={classes.section_main_cont}>
        <div className={classes.sect_top_cont}>
          <div className={classes.inner_right_cont}>
            <h3>WHAT YOU WILL LEARN</h3>

            <div className={classes.bull_cont}>
              <span className={classes.bullet}>
                <img src={Bullet} alt="" />
              </span>
              <span className={classes.text}>
                Create a value proposition for a brand: How it can be positioned
                and mapped.
              </span>
            </div>

            <div className={classes.bull_cont}>
              <span className={classes.bullet}>
                <img src={Bullet} alt="" />
              </span>
              <span className={classes.text}>
                Develop a complete creative pitch.
              </span>
            </div>

            <div className={classes.bull_cont}>
              <span className={classes.bullet}>
                <img src={Bullet} alt="" />
              </span>
              <span className={classes.text}>
                Examine Branding activities through the lens of Customer
                Experience.
              </span>
            </div>

            <div className={classes.bull_cont}>
              <span className={classes.bullet}>
                <img src={Bullet} alt="" />
              </span>
              <span className={classes.text}>
                Learn how to produce meaningful and engaging content.
              </span>
            </div>
          </div>
          <div className={classes.inner_left_cont}>
            <div className={classes.bull_cont}>
              <span className={classes.bullet}>
                <img src={Circle} alt="" />
              </span>
              <span className={classes.text}>
                Create a value proposition for a brand: How it can be positioned
                and mapped.
              </span>
            </div>

            <div className={classes.bull_cont}>
              <span className={classes.bullet}>
                <img src={Circle} alt="" />
              </span>
              <span className={classes.text}>
                Develop a complete creative pitch.
              </span>
            </div>

            <div className={classes.bull_cont}>
              <span className={classes.bullet}>
                <img src={Circle} alt="" />
              </span>
              <span className={classes.text}>
                Examine Branding activities through the lens of Customer
                Experience.
              </span>
            </div>

            <div className={classes.bull_cont}>
              <span className={classes.bullet}>
                <img src={Circle} alt="" />
              </span>
              <span className={classes.text}>
                Learn how to produce meaningful and engaging content.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.section2_main_cont}>
        <div className={classes.sect2_inner_cont}>
          <div className={classes.sect2_top}>
            <h2 className={classes.header_2}> REQIUREMENT</h2>
            <li>Nothing but motivate yourself</li>
            <li>Good internet connection</li>
          </div>
          <div className={classes.sect2_top}>
            <h2 className={classes.header_2}>DESCRIPTION</h2>
            <p>
              This Specialization aims to make branding concepts accessible to
              every learner and to teach them to analyze and apply all the
              relevant concepts, using the broad and diverse toolkit of
              branding. It provides you with the necessary tools so that you are
              able to understand the brand behavior, understand the language of
              a brand and learn about the rational and emotional elements behind
              brands. It also attempts to make you understand the language of
              images. The amount of audiovisual content we receive today makes
              it hard for brands to break through that noise. It ends up
              teaching how to understand branding efforts in the context of
              customer experience.
            </p>
          </div>
        </div>
      </section>

      <section className={classes.sect3_cont}>
      <div className={classes.sect3_inner}>
      <h2 className={classes.header_2}>COURSE OUTLINE</h2>
          <Outline />
          <Outline />
          <Outline />
          <Outline />
          <Outline />
          <Outline />
          
        </div>
      </section>

      <section className={classes.feedback}>
        <div className={classes.feed_inner}>
        <div className={classes.feed_top}>
            <img src={Forty} alt="" />
        </div>
        <div className={classes.feed_bottom}>
            <img src={Progress} alt="" />
        </div>
        </div>

      </section>
    </div>
  );
};

export default Preview;
