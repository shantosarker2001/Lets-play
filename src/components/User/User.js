import React from 'react';
import pic from '../../my.jpg'
import './User.css'
const User = () => {
    return (
        <div className='user'>
            <img src={pic} ></img>
            <div className='userinfo'>
                <h4 style={{ margin: "5px 0px" }}>Shanto Sarker</h4>
                <p style={{ margin: "5px 0px" }}>Student of Programming-Hero</p>
            </div>
        </div >

    );
};

export default User;