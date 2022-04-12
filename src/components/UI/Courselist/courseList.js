import classes from "./courseList.module.css";
import Lock from "../../../assets/images/Header2/lock.svg";
import Drop from "../../../assets/images/Header2/drop.svg";

const courseList = ({text, time}) => {
  return (
    <>
    <div className={classes.video_title_list}>
      <div className={classes.video_title}>
        <div>
          <img src={Lock} alt="" />
        </div>

        <div className={classes.option}>
          <span>
            <p>{text}</p>
          </span>
          <span>
            <img src={Drop} alt="" />
          </span>
        </div>
        <div className={classes.text_co}><p>{time}</p></div>
      </div>
    </div>
    </>
  );
};

export default courseList;
