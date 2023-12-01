import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      productId: "P001",
      productName: "Pizza",
      image: "images/pizza.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 12,
      quantity: 10,
    },
    {
      productId: "P002",
      productName: "Hamburger",
      image: "images/Hamburger.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 16,
      quantity: 2,
    },
    {
      productId: "P003",
      productName: "Bread",
      image: "/images/bread.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 13,
      quantity: 8,
    },
    {
      productId: "P004",
      productName: "Cake",
      image: "images/Cake.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 14,
      quantity: 6,
    },
  ],
  total: 0
};

export const cartTotal = createSlice({
  name: "counter",
  initialState,
  reducers: {
    minus: (state, action) => {
      if (state.value[action.payload].quantity <= 1) {
        return;
      }
      let newState = state.value.map((item, index) => {
        if (index === action.payload) {
          item.quantity--;
        }
        return item;
      });
      state.value = newState;
      //   let b = newState.reduce((acc, item) => {
      //     return item.price * item.quantity;
      //   }, 0);
    },
    add: (state, action) => {
      state.value[action.payload].quantity++;
    },
    remove: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { minus, add, remove } = cartTotal.actions;

export default cartTotal.reducer;
