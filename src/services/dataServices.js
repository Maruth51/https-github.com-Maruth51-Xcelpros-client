export const loginUser = async (email, pwd) => {
  try {
    const data = {
      email,
      password:pwd,
    };
    const config = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch("http://127.0.0.1:5000/login", config);
      return response
  } catch (e) {
      console.error(e)
  }
};

export const regUser =async (user)=>{
  try{
    const data = {
      ...user
    };
    const config = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch("http://127.0.0.1:5000/signin", config);
      return response

  }catch(e){

    console.error(e)

  }

}
