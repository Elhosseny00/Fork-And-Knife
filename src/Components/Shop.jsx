import { Link } from "react-router-dom";
import "../StyleFiles/shop.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopProduct } from "../RTK/Slices/ProductSlice";
import { addToCart } from "../RTK/Slices/CartSlice";
import ScrollBtn from "./ScrollBtn";

export default function Shop() {
  const [selecteProduct, setSelectProduct] = useState({});
  const [selectSize, setSelectSize] = useState({});
  const [category, setCategory] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const dispatche = useDispatch();
  const shopProducts = useSelector((state) => state.products.shopProduct);
  const status = useSelector((state) => state.products.shopStatus);
  const error = useSelector((state) => state.products.error);

  const handleSizeSelection = (productId, size) => {
    setSelectProduct({
      id: productId,
      name: size.name,
      price: size.price,
      image: size.image,
      selectSize: size.size,
    });
    setSelectSize({
      ...selectSize,
      [productId]: size.size,
    });
  };

  useEffect(() => {
    if (status === "idle") {
      dispatche(fetchShopProduct());
    }
  }, [dispatche, status]);
  if (status === "loading") {
    return <p style={{ color: "#010101" }}>...loading Products Please wait</p>;
  }
  if (status === "failed") {
    return <p style={{ color: "#f44144" }}>{error}</p>;
  }
  const handleCategory = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };
  const filterCategory =
    category === "all"
      ? shopProducts
      : shopProducts.filter((product) => product.category === category);

  return (
    <>
      <ScrollBtn />
      <div className="shop">
        <div className="wrapper">
          <div className="text">
            <h5>Welcome to our shop</h5>
            <h2>
              we are the best quality <br /> and taste <br />
              <span>restaurant</span>
            </h2>
            <Link>See More</Link>
          </div>
          <div className="img-box"></div>
        </div>
        <div className="shop-container">
          <div className="container">
            <div className="header">
              <h3>
                the food has a different taste <span>here</span>
              </h3>
            </div>
            <div className="shop-section">
              <ul className="btns">
                <li
                  className={activeCategory === "all" ? "active" : ""}
                  onClick={() => handleCategory("all")}
                >
                  All
                </li>
                <li
                  className={activeCategory === "burger" ? "active" : ""}
                  onClick={() => handleCategory("burger")}
                >
                  Burger
                </li>
                <li
                  className={activeCategory === "pizza" ? "active" : ""}
                  onClick={() => handleCategory("pizza")}
                >
                  Pizza
                </li>
                <li
                  className={activeCategory === "ice-cream" ? "active" : ""}
                  onClick={() => handleCategory("ice-cream")}
                >
                  Ice Cream
                </li>
              </ul>
              <div className="cards">
                {filterCategory.map((product) => (
                  <div className="card" key={product.id}>
                    {product.discount && (
                      <span className="discount">10% off</span>
                    )}
                    <i className="heart fa-regular fa-heart "></i>
                    <div className="img-box">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="info">
                      <h4>{product.name}</h4>
                      <ul className="sizes-price">
                        {product.sizes.map((size, index) => (
                          <li
                            key={index}
                            className={`sizes ${
                              selectSize[product.id] === size.size
                                ? "selected"
                                : ""
                            }`}
                            onClick={() =>
                              handleSizeSelection(product.id, size)
                            }
                          >
                            <div className="size">{size.size}</div>
                            <div className="price">${size.price}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={`cart-icon ${
                        selectSize[product.id] ? "hide" : ""
                      }`}
                    >
                      <i
                        className="fa-solid fa-plus"
                        onClick={() =>
                          dispatche(
                            addToCart({
                              ...product,
                              selectSize: selectSize[product.id],
                              price: selecteProduct.price,
                            })
                          )
                        }
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="offers">
          <div className="container">
            <div className="about-food">
              <div className="img-box">
                <img src={require("../Images/offer.webp")} alt="img" />
              </div>
              <div className="text">
                <h3>100% natural fresh ingredients</h3>
                <p>
                  Because your health is important to us, all the ingredients in
                  our food are natural, fresh, and comply with health and
                  safety standards.
                </p>
                <ul className="some-info">
                  <li>
                    <p>
                      The meat used is halal from natural farms under
                      our supervision.
                    </p>
                  </li>
                  <li>
                    <p>
                      The cheese is imported from Holland and the vegetables are
                      from natural farms.
                    </p>
                  </li>
                  <li>
                    <p>
                      The bread used is baked in our ovens according to an
                      unparalleled secret recipe.
                    </p>
                  </li>
                </ul>
                <Link>See More</Link>
              </div>
            </div>
            <div className="offers-cards">
              <div className="card">
                <h4>
                  this friday <br /> 20% off
                </h4>
              </div>
              <div className="card">
                <h4>
                  this friday <br /> 20% off
                </h4>
              </div>
              <div className="card">
                <h4>
                  this friday <br /> 20% off
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
