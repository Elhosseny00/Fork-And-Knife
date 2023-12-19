import { Link } from "react-router-dom";
import "../StyleFiles/menu.css";
import menu from "../../src/menu.json";
import ScrollBtn from '../Components/ScrollBtn'
export default function Menu() {
  const burgerArrayPartOne = menu[0].burger.slice(0, 4);
  const burgerArrayPartTwo = menu[0].burger.slice(4, 8);
  const pizzaArrayPartOne = menu[0].pizza.slice(0, 4);
  const pizzaArrayPartTwo = menu[0].pizza.slice(4, 8);
  const iceCreamArrayPartOne = menu[0].iceCream.slice(0, 4);
  const iceCreamArrayPartTwo = menu[0].iceCream.slice(4, 8);

  return (
    <>
      <ScrollBtn/>
      <div className="menu">
        <div className="wrapper">
          <div className="text">
            <h2>
              Fork And Knife <br /> food has a<br />
              <span>different taste</span>
            </h2>
            <div className="info">
              <Link to={"/shop"}>Order Now</Link>
              <div className="vid">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
          </div>
          <div className="img-side">
            <div className="imgbox"></div>
            <div className="imgbox"></div>
          </div>
        </div>
        <div className="menu-container">
          <div className="container">
            <div className="burger-section">
              <div className="header">
                <h3>
                  our delicious <span>burger</span>
                </h3>
              </div>
              <div className="burger-wrapper">
                <ul>
                  {burgerArrayPartOne.map((burger) => (
                    <li key={burger.id}>
                      <h4>{burger.name}</h4>
                      <span> ${burger.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="img-box">
                  <img
                    src={require("../Images/burger-section.webp")}
                    alt="img"
                  />
                </div>
                <ul>
                  {burgerArrayPartTwo.map((burger) => (
                    <li key={burger.id}>
                      <h4>{burger.name}</h4>
                      <span>${burger.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pizza-section">
              <div className="header">
                <h3>
                  our delicious <span>pizza</span>
                </h3>
              </div>
              <div className="pizza-wrapper">
                <ul>
                  {pizzaArrayPartOne.map((burger) => (
                    <li key={burger.id}>
                      <h4>{burger.name}</h4>
                      <span> ${burger.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="img-box">
                  <img
                    src={require("../Images/pizza-section.webp")}
                    alt="img"
                  />
                </div>
                <ul>
                  {pizzaArrayPartTwo.map((burger) => (
                    <li key={burger.id}>
                      <h4>{burger.name}</h4>
                      <span>${burger.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="ice-section">
              <div className="header">
                <h3>
                  our delicious <span>ice cream</span>
                </h3>
              </div>
              <div className="ice-wrapper">
                <ul>
                  {iceCreamArrayPartOne.map((burger) => (
                    <li key={burger.id}>
                      <h4>{burger.name}</h4>
                      <span> ${burger.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="img-box">
                  <img
                    src={require("../Images/ice-cream-section.webp")}
                    alt="img"
                  />
                </div>
                <ul>
                  {iceCreamArrayPartTwo.map((burger) => (
                    <li key={burger.id}>
                      <h4>{burger.name}</h4>
                      <span>${burger.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
