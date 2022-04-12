import classes from "./header2.module.css";
import Profile from "../../../../assets/images/Header2/profile.svg";
import Share from "../../../../assets/images/Header2/forward.svg";
import Dot from "../../../../assets/images/Header2/threedot.svg";
import Logo from "../../../../assets/images/Footer/Logo.svg";

const Header2 = () => {
    return ( 
    <header>
        <div className={classes.header_container}>
            <div className={classes.logo_container}>
            <img src={Logo} alt="logo" />
            </div>
            <div className={classes.head_right_cont}>
                <div className={classes.name_cont}>
                    <img src={Profile} alt="" />
                    <p>Kolawole Oluwatobi</p>
                </div>
                <div className={classes.sub_cont}>
                    <div className={classes.share_contain}>
                       <img src={Share} alt="" /> 
                       <p>Share</p>
                    </div>
                    <div className={classes.dot_cont}>
                        <img src={Dot} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </header>
         );
}
 
export default Header2;