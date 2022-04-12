import classes from "./header1.module.css";
import Logo from "../../../../assets/images/Footer/Logo.svg"
import Button from "../../Button/button";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";



const header1 = () => {
    

    return (
        <div className={classes.header_cont}>
            <nav className={classes.navbar}>
                <div className={classes.logo}>
                    <img src={Logo} alt="logo" />
                </div>

                <menu className={classes.menu_links}>
                    <ul className={classes.nav_links}>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Course Categories</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Log In</a>
                        </li>

                        <li className={classes.nav_btn}>
                            <Button text={"Sign up"} btnClass={"btn-white"} href={"#"} />
                        </li>
                    </ul>
                </menu>
            </nav>

            <div>
                {/* <menu className={classes.menu_links2}>
                    <ul className={classes.nav_links2}>
                        <li>
                            <a href="#">Sign Up</a>
                        </li>
                        <li className={classes.line}>
                            <a href="#">Log In</a>
                        </li>
                        <li className={classes.course}>
                            <a href=" ">Course</a>
                        </li>
                        <li>
                            <a href="#">Artificial Intelligence</a>
                        </li>
                        <li>
                            <a href="#">Business</a>
                        </li>
                        <li>
                            <a href="#">Design</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                        <li>
                            <a href="#">Log out</a>
                        </li>
                    </ul>
                    <div className={classes.bar}>
                       
                    </div>
                </menu> */}

            </div>
        </div>
    )
}

export default header1