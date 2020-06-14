const initialState = {
    isLoggedIn : localStorage.getItem("token") ? true : false,
    user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {}
  };
  
  export default initialState;
  