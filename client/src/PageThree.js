import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function PageThree() {
    const profileData = useSelector(state => state.profileReducer);
    return <div className="container">
    <h1>Updated Profile</h1>
    <p style={{padding: "10px"}}><b>Name:</b> {profileData.data.name}</p>
    <p style={{padding: "10px"}}><b>Id:</b> {profileData.data.id}</p>
    <p style={{padding: "10px"}}><b>Login Id:</b> {profileData.data.login}</p>
    </div>
}

export default PageThree;