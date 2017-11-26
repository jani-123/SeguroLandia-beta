import createStore from "redux-zero";

const initialState = {
  successLogin: false,
  selectIdBoard: 0,
  user: {
    id: null,
    name:null,
    email: null
  },
  insures: [],
  active: false
};

const store = createStore(initialState);
export default store;