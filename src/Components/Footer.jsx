import "../StyleFiles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="main-info">
          <Link to={"/"} className="logo">
            <p>Fork</p>
            <img src={require("../Images/Logo.png")} alt="logoImg" />
            <p>knife</p>
          </Link>
          <div className="other">
            <p>
              Because Your Happiness Is Important To Us, You Have Fork & Knife
              Restaurant With The Most Delicious Food And Desserts From The
              Hands Of The Most Famous Chefs In The World.
            </p>
            <ul className="social">
              <li>
                <Link>
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="subscribe">
          <div className="head">
            <h4>subscribe</h4>
            <h5>and get 10% discount</h5>
          </div>
          <div className="inputs">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">SUBSCRIBE</button>
          </div>
        </div>
        <div className="quick-llinks">
          <div className="frist-ul">
            <h4>Quick Links</h4>
            <ul className="main">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"about"}>About</Link>
              </li>
              <li>
                <Link to={"contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="second-ul">
            <h4>Informations</h4>
            <ul className="info">
              <li>
                <Link>Terms & Conditions</Link>
              </li>
              <li>
                <Link>User's Guide</Link>
              </li>
              <li>
                <Link>Support Center</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-info">
        <p>
          &copy;<span>{currentYear}</span> FORK & KNIFE, All Rights Reserved
        </p>
        <span>Mohamed Hosseny</span>
      </div>
    </footer>
  );
}
