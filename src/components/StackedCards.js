import React from 'react';
import ProfileCard from './ProfileCard';
import './StackedCards.css';

const StackedCards = () => {
    return (
        <div className="stacked-cards">
            
            <div className="stacked-card">
                <ProfileCard
                    image="/images/cover.jpg" 
                    profileImage="/images/s4.jpg" 
                    name="Member 1"
                />
            </div>
            
            <div className="stacked-card">
                <ProfileCard
                    image="" 
                    profileImage="" 
                    name="" 
                />
            </div>
           
            <div className="stacked-card">
                <ProfileCard
                    image="" 
                    profileImage="" 
                    name="" 
                />
            </div>
        </div>
    );
};

export default StackedCards;
