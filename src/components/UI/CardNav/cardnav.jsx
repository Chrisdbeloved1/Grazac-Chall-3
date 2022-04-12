import classes from "../CardNav/cardnav.module.css"
import Varcard from "../../../components/UI/VerticalCard/vercard"
import verInner from "../../../assets/images/Card/verInner.png"
import verInner2 from "../../../assets/images/Card/verInner2.png"
import verInner3 from "../../../assets/images/Card/verInner3.png"


const cardnav = () => {
  return (
       <div className={classes.card_sect}>
        <div className={classes.nav_links}>
        <li>Artificial Intelligence</li>
        <li>Agile & HR Development</li>
        <li>Branding & Designs</li>
        <li>Business</li>
        <li>Data & Analytics</li>
        <li>Programming</li>
        <li>More</li>
    </div>

    <div className={classes.card_cont}>
        <Varcard  image={verInner}  text={"Introduction to Personal Branding"}/>
        <Varcard  image={verInner2} text={"Introduction to Personal Branding"}/>
        <Varcard  image={verInner3} text={"Introduction to Personal Branding"} />
        <Varcard  image={verInner3} text={"Introduction to Personal Branding"} />

    </div>
    </div>
  )
}

export default cardnav