import { Link } from "react-router-dom";
import "../StyleFiles/nav.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Nav() {
  const cart = useSelector((state) => state.cart);

  const Links = [
    { linkname: "Home", to: "/" },
    { linkname: "Menu", to: "menu" },
    { linkname: "Shop", to: "shop" },
    { linkname: "About", to: "about" },
    { linkname: "Contact", to: "contact" },
  ];

  const [activeLink, setActiveLink] = useState("Home");
  const hundleClickActiveLink = (link) => {
    setActiveLink(link);
    setNavOpen(false);
  };
  const [navOpen, setNavOpen] = useState(false);
  const burgerIcon = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const clickOutSide = (e) => {
      if (navOpen) {
        if (!e.target.closest(".navLinks") && !e.target.closest(".btn")) {
          setNavOpen(false);
        }
      }
    };
    window.addEventListener("click", clickOutSide);
    return () => {
      window.removeEventListener("click", clickOutSide);
    };
  }, [navOpen]);

  return (
    <header>
      <Link to={"/"} className="logo">
        <p>Fork</p>
        <img src={require("../Images/Logo.png")} alt="logoImg" />
        <p>knife</p>
      </Link>
      <nav>
        <div className={`navLinks ${navOpen ? "showme" : ""}`}>
          <ul className="mainlinks">
            {Links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className={activeLink === link.linkname ? "activeLink" : ""}
                  onClick={() => hundleClickActiveLink(link.linkname)}
                >
                  {link.linkname}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="other">
        <div className={`btn ${navOpen ? "burger" : ""}`} onClick={burgerIcon}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <Link to={"cart"} className="cart">
          <i className="fa-solid fa-bag-shopping"></i>
          <span className="qyantity">{cart.length}</span>
        </Link>
      </div>
    </header>
  );
}
