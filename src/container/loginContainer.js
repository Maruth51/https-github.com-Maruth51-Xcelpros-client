import { connect } from "react-redux"
import Login from "../components/login"

const { setUser } = require("../redux/action")


const mapState =( state) =>{
    return {
        user: state
    }
}

const mapDispatch = dispatch =>{
    return {
        updateUser: (user)=>{
            dispatch(setUser(user))
        }
    }
}

export default connect(mapState,mapDispatch)(Login)