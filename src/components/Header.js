import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

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
                <div className="icons">
                    <a href="https://example.com/user1" target="_blank" rel="noopener noreferrer">
                        <img src="/images/image1.png" alt="User 1" className="ico" />
                    </a>
                    <a href="https://example.com/user2" target="_blank" rel="noopener noreferrer">
                        <img src="/images/image2.jpg" alt="User 2" className="ico" />
                    </a>
                </div>

                <button className="menu-button" onClick={toggleDropdown}>
                    Menu
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <a href="#option1" className="dropdown-item">Option 1</a>
                        <a href="#option2" className="dropdown-item">Option 2</a>
                        <a href="#option3" className="dropdown-item">Option 3</a>
                    </div>
                )}
                <button className="sign-in-button">Sign In</button>
            </div>
            <hr className="divider" />
        </header>
    );
};

export default Header;
