import classes from "./singleCoursePage.module.css";
import Header2 from "../../components/UI/Headers/Header2/header2";
import Video from "../../assets/images/Header2/video.png";
import Left from "../../assets/images/Header2/chart.png";
import List from "../../components/UI/Courselist/courseList";

const SingleCoursePage = () => {
  return (
    <div>
      <Header2 />
      <div className={classes.wrapper}>
        <div className={classes.main_cont}>
          <div className={classes.sub_big_cont}>
            <div className={classes.head_text_cont}>
              <h2>Branding : Introduction to Personal Branding</h2>
              <p>Ogungbemi Tobi</p>
            </div>
            <div className={classes.video_cont}>
              <img src={Video} alt="" />
            </div>
          </div>
          <div className={classes.sub_small_cont}>
            <div className={classes.metering_card_wrapper}>
              <span>
                <h4>Your Progress</h4>
              </span>
              <div className={classes.metering_card}>
                <div className={classes.metering_card_left}></div>
                <div className={classes.metering_card_right}>
                  <p>10%</p>
                </div>
              </div>
            </div>
            <div className={classes.course_title_cont}>
              <div className={classes.course_title_cont}>
                <h4>14 Lessons 2h 45m</h4>
              </div>
              <div className={classes.courselist_cont}>
                <List time="1:30" text="1. Introduction" />
                <List time="1:30" text="1. Introduction" />
                <List time="1:30" text="1. Introduction" />
                <List time="1:30" text="1. Introduction" />
                <List time="1:30" text="1. Introduction" />
                <List time="1:30" text="1. Introduction" />
                <List time="1:30" text="1. Introduction" />
                <List time="1:30" text="1. Introduction" />
                <List time="1:30" text="1. Introduction" />
                <List time="1:30" text="1. Introduction" />
                <List time="1:30" text="1. Introduction" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.nav_cont}>
        <nav>
          <li className={classes.after}>
            <a>OVERVIEW</a>
          </li>
          <li>
            <a>Q&A</a>
          </li>
          <li>
            <a>ANNOUNCEMENT</a>
          </li>
        </nav>
      </div>

      <div className={classes.sec_main_cont}>
        <div className={classes.sec_inner_cont}>
          <div className={classes.right_cont}>
            <div className={classes.header_cont}>
              <h4>ABOUT THIS COURSE</h4>
              <p className={classes.para}>
                Spark your skills in Branding! Go from a blank worksheet to
                pivot tables in 36 minutes. Great for interview prep
              </p>
            </div>
            <div className={classes.Numb_container}>
              <div className={classes.same_title_container}>
                <h5 className={classes.header5}>By the numbers</h5>
              </div>
              <div className={classes.same_title_container}>
                <p className={classes.para}>
                  Skill level: Beginner <br/>Level Students: 92873 <br/>Languages: English
                  <br/>Captions: Yes
                </p>
              </div>
              <div className={classes.same_title_container}>
                <p className={classes.para}>Lectures: 14 <br/>Video: 2h 45m total mins</p>
              </div>
            </div>

            <div className={classes.certif_cont}>
              <div className={classes.right_inner_cont}>
                <h5 className={classes.header5}>Certification</h5>
              </div>
              <div className={classes.left_inner_cont}>
                <p className={classes.para}>Get Uniqe IQ certificate by completing entire course</p>
                <button>Download Certifcate</button>
              </div>
            </div>
            <div className={classes.Descrip_cont}>
              <div className={classes.Descrip_right_cont}>
                <h5 className={classes.header5}>Description</h5>
              </div>
              <div className={classes.Descrip_left_cont}>
                <p className={classes.para}>
                  Augue volutpat in varius est rhoncus quis viverra amet ipsum.
                  Lectus sed nunc hendrerit ut. Purus urna, est tincidunt sit
                  pharetra volutpat. Donec amet, arcu dui sapien. Ac nam tortor
                  sed et lectus vel viverra ultrices.
                </p>

                <ul>
                  <h6>What You will learn</h6>
                  <li className={classes.list_items}>
                    Create a value proposition for a brand: How it can be
                    positioned and mapped.
                  </li>
                  <li className={classes.list_items}>Develop a complete creative pitch.</li>
                  <li className={classes.list_items}>
                    Examine Branding activities through the lens of Customer
                    Experience.
                  </li>
                  <li className={classes.list_items}>Learn how to produce meaningful and engaging content.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.left_cont}>
            <img src={Left} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoursePage;
