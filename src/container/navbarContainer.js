import { connect } from "react-redux"
import NavbarTop from "../components/navbar"
const { logoutUser } = require("../redux/action")


const mapState =(state) =>{
    return {
        ...state
    }
}

const mapDispatch = dispatch =>{
    return {
        logout: ()=>{
            dispatch(logoutUser())
        }
    }
}

export default connect(mapState,mapDispatch)(NavbarTop)