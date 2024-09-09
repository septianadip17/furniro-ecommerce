import React from 'react'

const Navbar = () => {
  return (
    <div className='flex'>
      <div>
        logo
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><img src="" alt="account" /></li>
          <li><img src="" alt="search" /></li>
          <li><img src="" alt="heart" /></li>
          <li><img src="" alt="cart" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar