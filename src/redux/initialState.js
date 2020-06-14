const initialState = {
    isLoggedIn : localStorage.getItem("token") ? true : false,
    user: {}
  };
  export default initialState;
  