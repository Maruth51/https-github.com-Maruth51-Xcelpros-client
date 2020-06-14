const { initialState } = require("./initialState");
const { LOG_OUT, LOG_IN, SET_USER } = require("./action");

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOG_OUT:
      localStorage.removeItem("token")
      localStorage.removeItem("userData")
      return {isLoggedIn: false, user:{} };

    case LOG_IN:
      return { ...prevState, isLoggedIn: true };
    case SET_USER:
      console.log("inset user");
      return { isLoggedIn: true, user: action.user };
    default:
      console.log("default")
      return prevState;
  }
};

export default reducer;
