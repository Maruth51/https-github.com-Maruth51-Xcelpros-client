
//ACTION TYPES
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SET_USER = "SET_USER";


export const loginUser = () => {
    return {
      type: LOG_IN
    };
  };
  
  export const logoutUser  = () => {
    return {
      type: LOG_OUT
    };
  };
  
  export const setUser = (user) => {
    console.log("inside")
    return {
        type:SET_USER,
        user
    };
  };