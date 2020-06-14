import React, { useState, Fragment ,useEffect} from 'react'
import { Card, Container } from 'react-bootstrap';
import {FiMail , FiPhone} from "react-icons/fi"
import { getUsers } from '../services/dataServices';

const UserList =()=>{
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(res =>{
            setUsers(res.users)
            console.log(users)
        }).catch(err=>{
            alert("network error")
        })        
    },[]);
    const updateUser =(newUser)=>{
        console.log(newUser)
        setUsers(users.map((user,index)=>{
            if (user.id === newUser.id){
                return newUser
            }
            else{
                return user
            }

        }))
    }
    return(

        <Fragment>
            <Container className="user-container" fluid>
             {users.map((user,index)=>{

                return (<User key ={user.id} user={user} onSave={updateUser}/>)
             })}
             </Container>
        </Fragment>

    )
}


const User = ({user ,onSave}) => {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(user.firstName)
    const [desig, setDesig] = useState(user.designation)
    const [phone, setPhone] = useState(user.phone)
    const [email, setEmail] = useState(user.email)
    const handleSave =()=>{
        onSave({...user,firstName:name,designation:desig,phone:phone})
        setEdit(false)
    }
    return (
        <div className="user-card">
         <div className="card-head">{edit ?    <Fragment><span onClick={handleSave}>Save</span><span onClick={()=>{setEdit(false)}}>Cancel</span></Fragment>:<Fragment><span><span onClick={()=>{setEdit(!edit)}}>Edit</span><span>delete</span></span></Fragment>}</div>
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
