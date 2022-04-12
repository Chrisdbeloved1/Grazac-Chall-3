import Footer from "../../components/UI/Footer/footer";
import classes from "./mainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <div className={classes.main_cont}>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
