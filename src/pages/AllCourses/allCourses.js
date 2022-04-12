import Header3 from "../../components/UI/Headers/Header3/header3";
import HorizontalCard from "../../components/UI/HorizontalCard/card";
import classes from "./allCourses.module.css";

const AllCourses = () => {
  return (
    <div>
      <Header3 />
      <div className={classes.hero}>
        <div className={classes.text_container}>
          <h2>
            You Can Start <br />
            Learning At Any Age!
          </h2>
          <p>
            Egestas eleifend risus dui tempor morbi maecenas scelerisque eu.{" "}
            <br />
            Eget ultrices cursus at vel.
          </p>
        </div>
      </div>
      <div className={classes.card_cont}>
        <h2>Ongoing Courses</h2>
        <div className={classes.card_arrange}>
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </div>
        <br />
        <h2>Completed Courses</h2>
        <div className={classes.card_arrange}>
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default AllCourses;
