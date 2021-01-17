import React from 'react'

const Card = ({user}) => {
    return (
        <>
            <p className='homepage__avatar'>{user.name.charAt(0)}</p>
            <p className='homepage__name'>{user.name}</p>
            <p className='homepage__username'>@{user.username}</p>
            <a href={user.website} className='homepage__website'>
                {user.website}
            </a>
        </>
    )
}

export default Card