import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularProduct } from "../../RTK/Slices/ProductSlice";
import "../../StyleFiles/home.css";
import { addToCart } from "../../RTK/Slices/CartSlice";

export default function PopularProducts() {
  const [selecteProduct, setSelectProduct] = useState({});
  const [selectSize, setSelectSize] = useState({});
  const [category, setCategory] = useState("burger");
  const [activeCategory, setActiveCategory] = useState("burger");
  const dispatche = useDispatch();
  const products = useSelector((state) => state.products.homeProduct);
  const status = useSelector((state) => state.products.homeStatus);
  const error = useSelector((state) => state.products.error);

  const handleSizeSelection = (productId, size) => {
    setSelectProduct({
      id: productId,
      name: size.name,
      image: size.image,
      price: size.price,
      selectSize: size.size,
    });
    setSelectSize({
      ...selectSize,
      [productId]: size.size,
    });
  };

  useEffect(() => {
    if (status === "idle") {
      dispatche(fetchPopularProduct());
    }
  }, [status, dispatche]);
  if (status === "loading") {
    return <p style={{ color: "#010101" }}>...loading Products Please wait</p>;
  }
  if (status === "failed") {
    return <p style={{ color: "#f44144" }}>{error}</p>;
  }

  const handleSelectedCategory = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  const filterProducts =
    category === "burger"
      ? products.filter((product) => product.category === "burger")
      : products.filter((product) => product.category === category);

  return (
    <div className="popualr">
      <div className="container">
        <div className="header">
          <h3>best <span>seller</span></h3>
        </div>
        <div className="pop-wrapper">
          <ul className="btns">
            <li
              className={activeCategory === "burger" ? "active" : ""}
              onClick={() => handleSelectedCategory("burger")}
            >
              Burger
            </li>
            <li
              className={activeCategory === "pizza" ? "active" : ""}
              onClick={() => handleSelectedCategory("pizza")}
            >
              Pizza
            </li>
            <li
              className={activeCategory === "ice-cream" ? "active" : ""}
              onClick={() => handleSelectedCategory("ice-cream")}
            >
              Ice Cream
            </li>
          </ul>
          <div className="cards">
            {filterProducts.map((product) => (
              <div className="card" key={product.id}>
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
                          selectSize[product.id] === size.size ? "selected" : ""
                        }`}
                        onClick={() => handleSizeSelection(product.id, size)}
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
  );
}
