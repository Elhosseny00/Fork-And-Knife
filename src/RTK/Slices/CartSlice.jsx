import { createSlice } from "@reduxjs/toolkit";

const getItemLocalStorage = () => {
  const getItems = localStorage.getItem("cart");
  return getItems ? JSON.parse(getItems) : [];
};

const setItemLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getItemLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const { id, selectSize, name, price, image, discount } = action.payload;
      const discountValue = 0.1;
      const discounted = discount ? price - price * discountValue : price;
      const findProduct = state.find(
        (product) => product.id === id && product.selectSize === selectSize
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.push({
          id,
          selectSize,
          image,
          name,
          originalPrice: price,
          price: discounted,
          discount,
          quantity: 1,
        });
      }
      setItemLocalStorage(state);
    },
    deleteFromCart: (state, action) => {
      const { id, selectSize } = action.payload;
      const updateCart = state.filter(
        (product) => !(product.id === id && product.selectSize === selectSize)
      );
      setItemLocalStorage([...updateCart]);
      return updateCart;
    },
    increaseQuantity: (state, action) => {
      const { id, selectSize } = action.payload;
      const increaseProduct = state.find(
        (product) => product.id === id && product.selectSize === selectSize
      );
      if (increaseProduct) {
        increaseProduct.quantity += 1;
      }
      setItemLocalStorage(state);
    },
    decreaseQuantity: (state, action) => {
      const { id, selectSize } = action.payload;
      const decreaseProduct = state.find(
        (product) => product.id === id && product.selectSize === selectSize
      );
      if (decreaseProduct && decreaseProduct.quantity > 1) {
        decreaseProduct.quantity -= 1;
      }
      setItemLocalStorage(state);
    },
    clearCart: () => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
