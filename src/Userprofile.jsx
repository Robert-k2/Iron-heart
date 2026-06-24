import {useState} from 'react';
import avatar from './avatar.jpg';

const Userprofile = () => {

    const name = " Robert Kawara";
    const nickname = " Light weight";
    const age = " 25"; 
       const status = true;

     return(
        <div className = "card">
        <p className="card-tiltle">Athlete Profile</p>
        <div className="profile-card">
        <img src={avatar} className="profile-avatar" alt="profile" />
        <div className="profile-info">
        <p className="profile-name">{name}</p>
        <div className="profile-meta">    
         {/* <span>{nickname}</span>*/}
         <span> Age : {age} </span>
           <span className="status-badge active">Active</span>

          
           </div>
           </div>
           </div>
           </div>
        
     );
    };


export default Userprofile; 
