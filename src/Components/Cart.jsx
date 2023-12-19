import "../StyleFiles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../RTK/Slices/CartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.originalPrice * product.quantity,
      0
    );
  };

  const totalDiscount = () => {
    return cart.reduce(
      (discountTotalValue, product) =>
        discountTotalValue +
        (product.discount
          ? (product.originalPrice - product.price) * product.quantity
          : 0),
      0
    );
  };
  return cart.length === 0 ? (
    <div className="cart">
      <div className="container">
        <div className="header">
          <h3>
            your cart is <span>empty</span>
          </h3>
        </div>
      </div>
    </div>
  ) : (
    <div className="cart">
      <div className="container">
        <div className="header">
          <h3>
            Your order is <span>here</span>
          </h3>
        </div>
        <button className="clear" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
        <div className="cart-wrapper">
          <div className="cards">
            {cart.map((product, index) => (
              <div className="card" key={index}>
                {product.discount && <span className="discount">10% off</span>}
                <span
                  className="delete"
                  onClick={() =>
                    dispatch(
                      deleteFromCart({
                        id: product.id,
                        selectSize: product.selectSize,
                      })
                    )
                  }
                >
                  X
                </span>
                <div className="img-box">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="info">
                  <h3>{product.name}</h3>
                  <div className="size">{product.selectSize}</div>
                  <div className="price">$ {product.originalPrice}</div>
                </div>
                <div className="btns">
                  <button
                    onClick={() =>
                      dispatch(
                        decreaseQuantity({
                          id: product.id,
                          selectSize: product.selectSize,
                        })
                      )
                    }
                  >
                    -
                  </button>
                  <span className="quantity">{product.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        increaseQuantity({
                          id: product.id,
                          selectSize: product.selectSize,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="order">
            <div className="content">
              <div className="head">order summary</div>
              <div className="info">
                <ul>
                  <li>
                    <p>shipping</p>
                    <span>Free</span>
                  </li>
                  <li>
                    <p>total price</p>
                    <span>${totalPrice()}</span>
                  </li>
                  <li>
                    <p>Discount</p>
                    <span>${totalDiscount().toFixed(1)}</span>
                  </li>
                  <li>
                    <p>Total</p>
                    <span>${(totalPrice() - totalDiscount()).toFixed(1)}</span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="check">Check</button>
          </div>
        </div>
      </div>
    </div>
  );
}
