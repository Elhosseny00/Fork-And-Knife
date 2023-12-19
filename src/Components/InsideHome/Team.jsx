import { Link } from "react-router-dom";
import "../../StyleFiles/home.css";
export default function Team() {
  return (
    <div className="team">
      <div className="container">
        <div className="header">
          <h3>
            Meet Our <span>Team</span>
          </h3>
        </div>
        <div className="cards">
          <div className="card">
            <img src={require("../../Images/team-1.webp")} alt="img" />
            <li style={{ "--i": "0" }}>
              <Link>
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li style={{ "--i": "1" }}>
              <Link>
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li style={{ "--i": "2" }}>
              <Link>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li style={{ "--i": "3" }}>
              <Link>
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </li>
            <li style={{ "--i": "4" }}>
              <Link>
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </li>
            <li style={{ "--i": "5" }}>
              <Link>
                <i className="fa-brands fa-pinterest-p"></i>{" "}
              </Link>
            </li>
          </div>
          <div className="card">
            <img src={require("../../Images/team-2.webp")} alt="img" />
            <li style={{ "--i": "0" }}>
              <Link>
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li style={{ "--i": "1" }}>
              <Link>
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li style={{ "--i": "2" }}>
              <Link>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li style={{ "--i": "3" }}>
              <Link>
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </li>
            <li style={{ "--i": "4" }}>
              <Link>
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </li>
            <li style={{ "--i": "5" }}>
              <Link>
                <i className="fa-brands fa-pinterest-p"></i>{" "}
              </Link>
            </li>
          </div>
          <div className="card">
            <img src={require("../../Images/team-3.webp")} alt="img" />
            <li style={{ "--i": "0" }}>
              <Link>
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li style={{ "--i": "1" }}>
              <Link>
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li style={{ "--i": "2" }}>
              <Link>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li style={{ "--i": "3" }}>
              <Link>
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </li>
            <li style={{ "--i": "4" }}>
              <Link>
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </li>
            <li style={{ "--i": "5" }}>
              <Link>
                <i className="fa-brands fa-pinterest-p"></i>{" "}
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
