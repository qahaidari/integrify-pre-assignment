import React, { useState, useEffect } from 'react'
import '../styles/Userpage.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Userpage = () => {
    const { id } = useParams()
    const userId = Number(id)

    // Initialize the state
    const [userData, setUserData] = useState(null)
    
    // Fires once the component loads
    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => setUserData(res.data))
        .catch(err => console.log(err))        
    }, [userId])


    //console.log(userData)

    return (
        <div className='user'>
            <div className="user_card">
                {userData && (
                    <ul className='outerList'>
                        <li><span>name:</span> {userData.name}</li>
                        <li><span>username:</span> {userData.username}</li>
                        <li><span>email:</span> {userData.email}</li>
                        <li><span>phone:</span> {userData.phone}</li>
                        <li><span>company:</span> {userData.company.name}</li>
                        <li><span>website:</span> {userData.website}</li>
                        <li><span>address:</span> 
                            <ul className='innerList'>
                                <li><span>street:</span> {userData.address.street}</li>
                                <li><span>suite:</span> {userData.address.suite}</li>
                                <li><span>city:</span> {userData.address.city}</li>
                                <li><span>zipcode:</span> {userData.address.zipcode}</li>
                            </ul>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Userpage