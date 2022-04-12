import classes from "../VerticalCard/vercard.module.css"
import Vercardprog from "../../../assets/images/Card/vercardprogress.svg";
import { Link } from "react-router-dom";

const Vercard = ({text, image}) => {
  return (
    <Link to="/single-course-page" className={classes.get}>
    <div className={classes.main_card_cont}>
     <div className={classes.card_image}>
         <img src={image} alt="" />
     </div>
     
     <div className={classes.card_text}>
         <h2>{text}</h2>
         <p>Ogungbemi Tobi</p>
         <img src={Vercardprog} alt="" />
     </div>
    
    <div className={classes.pricce}>
        <span className={classes.small}>100</span> <span className={classes.big}>$30</span>
    </div>
    </div> </Link>
  )
}

export default Vercard