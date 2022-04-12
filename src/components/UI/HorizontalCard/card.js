import classes from "./card.module.css";
import Picture from "../../../assets/images/Card/card-image.png";

const HorizontalCard = () => {
  return (
    <div className={classes.card_container}>
      <div className={classes.image_card}>
        <img src={Picture} alt="" />
      </div>

      <div className={classes.content_card}>
        <h3>Branding: The Creative Journey</h3>
        <div className={classes.metering_card}>
          <div className={classes.metering_card_left}></div>
          <div className={classes.metering_card_right}>
            <p>10%</p>
          </div>
        </div>
        <div className={classes.text_card}>
          <span>2h 38m</span>
          <span>Get started</span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
