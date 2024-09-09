import React from 'react'
import furniroLogo from "../assets/img/furniro-logo.png"

const Navbar = () => {
  return (
    <div className='container mx-auto m-5 p-6 flex justify-between border-2 border-red-400'>
      <div>
        <img src={furniroLogo} alt="furniro logo" />
      </div>
      <div>
        <ul  className='flex gap-14'>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <ul className='flex gap-5'>
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