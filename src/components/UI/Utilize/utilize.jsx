import "./utilize.css";
import Util1 from "../../../assets/images/Landing/util-1.svg";
import Util2 from "../../../assets/images/Landing/util-2.svg";
import Util3 from "../../../assets/images/Landing/util-3.svg";

const Utilize = () => {
  return (
    <section className="utilize-container">
        <div className="util-inner-container">
        <div className="u-header">
            <h1 className="u-header-h1 heading">Utilizing your time and resources for creativity</h1>
            <p className="u-text-small para">Egestas eleifend risus dui tempor morbi maecenas scelerisque </p>
        </div>

      <div className="util-wrap">
        <div className="util-card">
          <img src={Util1} alt="util" />
          <h3>Learn From Your Comfort Zone’s</h3>
          <p className="u-text-card">
            Egestas eleifend risus dui tempor morbi maecenas scelerisque eu.
            Eget ultrices cursus at vel.
          </p>
        </div>

        <div className="util-card">
          <img src={Util2} alt="util" />
          <h3 className="u-h3">All Courses Simplified as Much As Possible</h3>
          <p className="u-text-card">
            Egestas eleifend risus dui tempor morbi maecenas scelerisque eu.
            Eget ultrices cursus at vel.
          </p>
        </div>

        <div className="util-card">
          <img src={Util3} alt="util" />
          <h3>Learn From Your Comfort Zone’s</h3>
          <p className="u-text-card">
            Egestas eleifend risus dui tempor morbi maecenas scelerisque eu.
            Eget ultrices cursus at vel.
          </p>
        </div>

        <div className="util-card">
          <img src={Util1} alt="util" />
          <h3>All Courses Simplified as Much As Possible</h3>
          <p className="u-text-card">
            Egestas eleifend risus dui tempor morbi maecenas scelerisque eu.
            Eget ultrices cursus at vel.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Utilize;
