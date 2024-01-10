import React from 'react'
import "./index.scss"

const Navbar = () => {
    return (
        <nav id='nav'>

            <div className='logo'>
                <img src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp" alt="logo" />
            </div>

            <div className='list'>
                <ul className='main-list'>
                    <li className='home'><a href="">Home</a></li>
                    <li className='shop'><a href="">Shop</a>

                        <ul className='shop-list'>
                            <li><a href="">Shop Category</a></li>
                            <li><a href="">Product Details</a></li>
                            <li><a href="">Product Checkout</a></li>
                            <li><a href="">Confirmation</a></li>
                            <li><a href="">Shopping Cart</a></li>
                        </ul>

                    </li>
                    
                    <li className='blog'><a href="">Blog</a>
                        <ul className='blog-list'>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Blog Details</a></li>
                        </ul>
                    </li>
                    <li className='pages'><a href="">Pages</a>
                        <ul className='pages-list'>
                            <li><a href="">Login</a></li>
                        <li><a href="">Register</a></li>
                        <li><a href="">Tracking</a></li>
                        </ul>
                    </li>
                    <li className='contact'><a href="">Contact</a></li>
                </ul>
            </div>

            <div className='buttons'>
                <div className='icons'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div className='trade-button'>
                    <button>Buy Now</button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar