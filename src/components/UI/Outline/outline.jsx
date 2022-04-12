import classes from "../Outline/outline.module.css";
import Plus from "../../../assets/images/Preview/plus.svg"

const Outline = () => {
  return (
    <div>
      <div className={classes.Outline_cont}>
          
          
          <div className={classes.Outline_inner}>
        <span>
          <img className={classes.out_text} src={Plus} alt="" />
        </span>
        <span className={classes.out_text}>Introduction & Class #1: Launching a New Company</span>
        <span className={classes.out_text}>11 lectures</span>
        <span className={classes.out_text3}>01:03:52</span>
        </div>

      </div>
    </div>
  );
};

export default Outline;
