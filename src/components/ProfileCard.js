import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ image, profileImage, name }) => {
    return (
        <div className="profile-card">
            {image && <img src={image} alt="Cover" className="cover-image" />}
            <div className="card-footer">
                {profileImage && <img src={profileImage} alt="User" className="profile-image" />}
                <div className="user-info">
                    {name && <p className="user-name">{name}</p>}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
