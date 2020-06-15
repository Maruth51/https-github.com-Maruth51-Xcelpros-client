import React, { useState, Fragment ,useEffect} from 'react'
import {  Container, Spinner } from 'react-bootstrap';
import {FiMail , FiPhone} from "react-icons/fi"
import { getUsers, putUser, deleteUser } from '../services/dataServices';

const spinner =<div className='spinner'><Spinner animation="border" role="status" varient="primary">
    <span className="sr-only">Loading...</span>
  </Spinner></div>

const UserList =()=>{
    const [users, setUsers] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        getUsers().then(res =>{
            setUsers(res.users)
            setisLoading(false)
        }).catch(err=>{
            alert("network error")
        })        
    },[]);
    const updateUser =(newUser)=>{
        console.log(newUser)
        putUser(newUser).then(data=>{
            console.log("update success")
            setUsers(users.map((user,index)=>{
                if (user.id === newUser.id){
                    return newUser
                }
                else{
                    return user
                }
    
            }))
        }).catch(err=>{
            alert("Network error. Update unsuccessfull")
        })
    }
    const removeUser =(userId)=>{
        deleteUser(userId).then(data=>{
            setUsers( users.filter((user,index)=>{
                if(userId===user.id){
                    return false
                }else{
                    return true
                }
            })) 

        }).catch(e=>{
            alert("Delete Unsuccessfull.")
        })
        
    }
    return(
        

        <Fragment>
            {isLoading ? spinner :
            <Container className="user-container" fluid>
             {users.map((user,index)=>{

                return (<User key ={user.id} user={user} onSave={updateUser} onDelete={removeUser}/>)
             })}
             </Container> }
        </Fragment>

    )
}


const User = ({user ,onSave ,onDelete}) => {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(user.firstName)
    const [desig, setDesig] = useState(user.designation)
    const [phone, setPhone] = useState(user.phone)
    const [email ,setEmail] = useState(user.email)
    const handleSave =()=>{
        onSave({...user,firstName:name,designation:desig,phone:phone})
        setEdit(false)
    }
    const handleDelete =()=>[
        onDelete(user.id)
    ]
    return (
        <div className="user-card">
         <div className="card-head">{edit ?    <Fragment><span className="btn btn-sm" onClick={handleSave}>Save</span><span className="btn btn-sm" onClick={()=>{setEdit(false)}}>Cancel</span></Fragment>:<Fragment><span><span className="btn btn-sm" onClick={()=>{setEdit(!edit)}}>Edit</span><span onClick={handleDelete} className="btn btn-sm">Delete</span></span></Fragment>}</div>
         <div className="card-img">
             <img className="avatar" alt="userimage" src={user.avatar}></img>
         </div>
    {edit ? <div><input className="input-sm in-name"  type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input></div> : <p className="user-name">{user.firstName}</p>}
    {edit ? <div><input className="input-sm in-name"  type="text" value={desig} onChange={(e)=>{setDesig(e.target.value)}}></input></div> : <p className='user-desig'>{desig}</p>}
    <div className="user-email"><span><FiMail/></span><span>{email}</span></div>
    <div className="user-phone"><span><FiPhone/></span>{edit ? <input className="input-sm in-name"  type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}}></input>: <span>{phone}</span>}</div>

      </div>
    )
}

export default UserList;
