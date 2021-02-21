// import React, {useState, useEffect, useNavigateTo, useCallback, Fragment} from 'react';
// import {useSelector, useDispatch, useStore } from 'react-redux';
// import { ToastProvider, useToasts } from 'react-toast-notifications';
// import axios from 'axios';
// import { Redirect } from 'react-router';
// import { useHistory } from "react-router-dom";
// import types from './store/types';
// import { fetchData } from "./store/profile.action";

// function PageTwo() {
//     const [profile, setProfile] = useState({data: {"name": '', "id": '', "login": '', "public_repos": ''}, error: null});
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const profileStore = useSelector(state => state.profileReducer);
//     const { addToast, removeToast, toastStack } = useToasts();
//     const URL = 'https://api.github.com/users/Venky1409';

//     async function fetchData() {
//           await axios.get(URL)
//           .then(res => {
//               dispatch({type: types.FETCH_PROFILE_SUCCESS, payload: res.data});
//             });
//     }

//     useEffect(() => {
//         fetchData();
//         dispatch({type: types.FETCH_PROFILE});
//     }, [dispatch]);

//     useEffect(() => {
//         setProfile(profileStore)
//     }, [profileStore]);

//     function updateHandle() {
//         dispatch({type: types.UPDATE_PROFILE, payload: profile});
//         addToast('Updated Successfully', { appearance: 'success' });
//         history.push("/page3");
//     }

//     function changeHandle(e) {
//         const val = e.target.value;
//         const type = e.target.name;
//         var someProperty = {...profile};
//         someProperty.data[type] = val;
//         setProfile(someProperty);
//         setProfile(prevState => {
//             console.log("prevState", prevState);
//             return { ...prevState, [type] : val }
//         });
//     }

//     return <div className="container">
//                 <h1>Edit Profile</h1>
//                 {(profile.data) ? (
//                     <Fragment>
//                         <div className="form-group" style={{width: "40%"}}>
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" className="form-control" id="name" name="name" value={profile.data.name} onChange={changeHandle}/>
//                         </div>
//                         <div className="form-group" style={{width: "40%"}}>
//                             <label htmlFor="id">Id:</label>
//                             <input type="number" className="form-control" id="id" name="id" value={profile.data.id} onChange={changeHandle}/>
//                         </div>
//                         <div className="form-group" style={{width: "40%"}}>
//                             <label htmlFor="login">Login Id:</label>
//                             <input type="text" className="form-control" id="login" name="login" value={profile.data.login} onChange={changeHandle}/>
//                         </div>
//                         <div className="form-group" style={{width: "40%"}}>
//                             <label htmlFor="public_repos">Public Repos:</label>
//                             <input type="number" className="form-control" id="public_repos" name="public_repos" value={profile.data.public_repos} onChange={changeHandle}/>
//                         </div>
//                         <button type="submit" className="btn btn-secondary" onClick={updateHandle}>Update</button>
//                     </Fragment>
//                     ): (
//                         <h2>No Data found</h2>
//                 )}   
//             </div>
// }

// export default PageTwo;




import React, { Component } from 'react';
import PageTwoEdit from './PageTwoEdit';

export default class PageTwo extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
    }
 }
 
 render() {
 return (
    <PageTwoEdit></PageTwoEdit>
 );
 }
}