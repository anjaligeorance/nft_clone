// Header.js
import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <span className="nft-bold">NFT's</span>
            </div>
            <nav className="header-center">
                <a href="#explore" className="nav-link">Explore</a>
                <a href="#activity" className="nav-link">Activity</a>
                <a href="#collection" className="nav-link">NFT's Collection</a>
                <a href="#how-it-works" className="nav-link">How It Works</a>
            </nav>
            <div className="header-right">
                <button className="icon-button"><i className="fas fa-search"></i></button>
                <button className="icon-button"><i className="fas fa-shopping-cart"></i></button>
                <button className="sign-in-button">Sign In</button>
                <button className="menu-button">Menu</button>
            </div>
            <hr className="divider" />
        </header>
    );
};

export default Header;
