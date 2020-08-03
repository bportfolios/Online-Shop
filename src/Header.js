import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const login = () => {
        if(user)
        {auth.signOut();}
    };
    const [{basket,user}]=useStateValue();
    console.log(basket)
    return (
        <nav className="header">
            {/* logo on the left */}
            <Link to="/ ">
                <img className="header__logo" src="http://pngimg.com/uploads/ganesha/ganesha_PNG2.png" alt="" />
            </Link>
            {/* search box  */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* 3 links  */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to= {!user &&  "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                {/* 2nd  link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Orders</span>
                        <span className="header__optionLineTwo">& Returns</span>
                    </div>
                </Link>
                {/* 3rd link  basket*/}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* shopping basket icon */}
                        <ShoppingBasketIcon/>
                        {/* number of items in the basket */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            {/* basket number */}
        </nav>
    )
}

export default Header
