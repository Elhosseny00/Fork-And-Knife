import ScrollBtn from "./ScrollBtn";
import "../StyleFiles/contact.css";
import { Link } from "react-router-dom";
export default function Contact() {
  const validate = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <ScrollBtn />
      <div className="contact">
        <div className="wrapper">
          <div className="text">
            <h2>Contact</h2>
            <h5>let's talk about your next order</h5>
          </div>
        </div>
        <div className="container">
          <div className="form-container">
            <div className="text-side">
              <h3>
                keep in <br /> touch
              </h3>
              <p>
                Contact us. We are happy to wait for your request, prepare it as
                soon as possible, and receive your messages. If you encounter
                any problem, we are on time.
              </p>
            </div>
            <form action="" onSubmit={validate}>
              <input type="text" placeholder="Name" />
              <input type="tel" placeholder="Phone" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="info">
            <div className="address">
              <h3>Address</h3>
              <p>14 ST, Cairo EGY</p>
            </div>
            <div className="email">
              <h3>Email</h3>
              <p>forkandKnife000@gmail.com</p>
            </div>
            <div className="phone">
              <h3>Phone</h3>
              <p>(00)1458676595</p>
              <p>(00)1458676595</p>
            </div>
          </div>
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
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-brands fa-google"></i>
            </Link>
          </li>
        </ul>
        </div>

      </div>
    </>
  );
}
