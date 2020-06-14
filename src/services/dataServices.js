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
    const response = await fetch("https://xcelpros-server.herokuapp.com/login", config);
      return response
  } catch (e) {
      console.error(e)
  }
};

export const regUser = async (user)=>{
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
    const response = await fetch("https://xcelpros-server.herokuapp.com/signup", config);
      return response

  }catch(e){

    console.error(e)

  }

}

export const getUsers = async () => {
  try {
    const config = {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    };
    const response = await fetch("https://xcelpros-server.herokuapp.com/users", config);
      return await response.json()
  } catch (e) {
      console.error(e)
  }
};

export const putUser = async (user)=>{
  try{
    const data = {
      ...user
    };
    const config = {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(`https://xcelpros-server.herokuapp.com/user/${user.id}`, config);
    if (response.status===403){
      alert("Please Login to Delete")
    }
    return await response.json()


  }catch(e){
    console.log(e)

  }
}

export const deleteUser = async (userId)=>{
  try{
    const config = {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
        };
    const response = await fetch(`https://xcelpros-server.herokuapp.com/user/${userId}`, config);
    if (response.status===403){
      alert("Please Login to Delete")
    }
    return await response.json()


  }catch(e){
    console.log(e)

  }
}