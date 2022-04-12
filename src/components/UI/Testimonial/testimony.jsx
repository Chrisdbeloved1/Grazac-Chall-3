import classes from "../Testimonial/testimony.module.css";


const testimony = ({image, text}) => {
  return (
    <div className={classes.test_body}>
      <div className={classes.test_name}>
        <img src={image} alt="" /> <h3>{text}</h3>
      </div>
      <div>
        <p>
          TheUniqueIQ is a life saver. I don't have the time or money for a
          college education. My goal is to become a freelance web developer, and
          thanks to TheUniqueIQ, I'm really close.F
        </p>
      </div>
    </div>
  );
};

export default testimony;
