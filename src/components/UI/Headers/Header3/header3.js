import classes from "./header3.module.css";
import Logo from "../../../../assets/images/Footer/Logo.svg";
import Cart from "../../../../assets/images/AllCourses/cart.svg";
import Search from "../../../../assets/images/AllCourses/search.svg";
import Dropdown from "../../../../assets/images/AllCourses/dropdown.svg";
import Bell from "../../../../assets/images/AllCourses/bell.svg";


const Header3 = () => {
    return ( 
    <header>
    <div className={classes.header_container}>
        
            <div className={classes.logo_container}>
                <img src={Logo} alt="logo" />
            </div>

            <div className={classes.head_right_cont}>
            <div className={classes.search_container}>
                <input type="text" placeholder="Search For Course"/> 
                <span><img src={Search} alt="search" /></span>
            </div>

            <div className={classes.other_nav_items}>
                <div className={classes.course}>
                    <h6>My courses</h6>
                    <img src={Dropdown} alt="dropdown" />
                </div>
                <div><img src={Cart} alt="cart"/></div>
                <div><img src={Bell} alt="bell" /></div>
                <d className={classes.avatar}><p>K</p></d>
            </div>
            </div>
       
    </div>
    </header>
         );
}
 
export default Header3;