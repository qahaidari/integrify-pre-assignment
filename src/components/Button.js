import React from 'react'

const Button = ({id}) => {
    return (
        <>
          <a href={`/user/${id}`}>
            <button className='homepage__button'>MORE DETAILS</button>
          </a>
        </>
    )
}

export default Button