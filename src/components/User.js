import React, { useEffect, useState } from 'react'
import SkeletonProfile from '../skeletons/SkeletonProfile';

const User = () => {
  const [profile, setProfile] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    setProfilePic('https://picsum.photos/100')
    setTimeout( async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setProfile(data);
    }, 5000);
  })

  return (
    <div className="user">
      <h2>User Profile</h2>
      {profile && (
        <div className="profile">
          <div className="avatar">
            <img src={profilePic} alt="avatar" />
          </div>
          <div className="info">
            <h3>{profile.username}</h3>
            <p>{profile.email}</p>
            <a href={profile.website}>{profile.website}</a>
          </div>
        </div>
      )}

      {!profile && (
        <div> 
            <SkeletonProfile type="title" />
        </div>
      )}
    </div>

  )
}

export default User;
