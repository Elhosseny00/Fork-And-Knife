import { Link } from "react-router-dom";
import "../StyleFiles/about.css";
import { useEffect, useState } from "react";
import ScrollBtn from '../Components/ScrollBtn'
export default function About() {
  const Counter = ({ targetnumber }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let intervalld;
      if (count < targetnumber) {
        intervalld = setInterval(() => {
          setCount((number) => Math.min(number + 1, targetnumber));
        }, 3000 / targetnumber);
      }
      return () => clearInterval(intervalld);
    }, [count, targetnumber]);
    return <span>{count}</span>;
  };

  return (
    <>
      <ScrollBtn />
      <div className="about">
        <div className="wrapper">
          <div className="text">
            <h2>
              Fork and Knife <br /> is the place you will <br />
              <span>never change</span>
            </h2>
            <p>
              Welcome to the world of food. We are the Fork and Knife
              Restaurant. Our rating is five stars. Experts in food since the
              year 2000. A culinary team of the most famous chefs in the world.
              Distinguished, they have nothing but love for the food that is
              only served to you. If you are hungry, visit us or ask for it to
              be delivered to you wherever you are.
            </p>
            <Link>See More</Link>
          </div>
          <div className="right-side">
            <div className="frist-img">
              <img src={require("../Images/about-1.webp")} alt="img" />
            </div>
            <div className="second-img">
              <img src={require("../Images/about-2.webp")} alt="img" />
            </div>
            <div className="third-img">
              <img src={require("../Images/gallery-1.webp")} alt="img" />
            </div>
            <div className="numbers">
              <div className="orders">
                <span>
                  <Counter targetnumber={2000} />
                </span>
                <p>orders</p>
              </div>
              <div className="hours">
                <span>
                  <Counter targetnumber={500} />
                </span>
                <p>Hours</p>
              </div>
              <div className="happy">
                <span>
                  <Counter targetnumber={2500} />
                </span>
                <p>happy clients</p>
              </div>
              <div className="subsc">
                <span>
                  <Counter targetnumber={5000} />
                </span>
                <p>subscribe</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ourservices">
          <div className="container">
            <div className="header">
              <h3>
                what we offer for <span>you</span>
              </h3>
            </div>
            <div className="cards">
              <div className="card">
                <div className="img-box">
                  <img src={require("../Images/order.webp")} alt="img" />
                </div>
                <div className="text">
                  <h4>easy to order</h4>
                  <p>you only need to a few steps in ordering food.</p>
                </div>
              </div>
              <div className="card">
                <div className="img-box">
                  <img src={require("../Images/delivery.webp")} alt="img" />
                </div>
                <div className="text">
                  <h4>fastest delivery</h4>
                  <p>delivery that is always ontime even faster.</p>
                </div>
              </div>
              <div className="card">
                <div className="img-box">
                  <img src={require("../Images/qality.webp")} alt="img" />
                </div>
                <div className="text">
                  <h4>best quality</h4>
                  <p>not only fast for us quality is also number one.</p>
                </div>
              </div>
            </div>
            <div className="collage">
              <div id="item-0"></div>
              <div id="item-1"></div>
              <div id="item-2"></div>
              <div id="item-3"></div>
              <div id="item-4"></div>
              <div id="item-5"></div>
              <div id="item-6"></div>
              <div id="item-7"></div>
              <div id="item-8"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
