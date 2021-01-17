import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Homepage.css'
import Button from './Button'
import Card from './Card'

const Homepage = () => {
    // Initialize the state
    const [data, setData] = useState([])
    
    // Fires once the component loads
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))        
    }, [])

    return ( 
    <>
        <div className='homepage'>
           {data.map(user => (
               <div className="homepage__card" key={user.id}>
                   <Card user={user} />
                   <Button id={user.id}/>
                </div>
           ))}
        </div>
    </>   
    )
}

export default Homepage
