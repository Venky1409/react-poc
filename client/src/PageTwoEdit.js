import React, {useState, useEffect, useNavigateTo, useCallback, Fragment} from 'react';
import {useSelector, useDispatch, useStore } from 'react-redux';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { useHistory } from "react-router-dom";
import {fetchProfileData, fetchData, RandomAction} from './store/profile.action';
import types from './store/types';

function PageTwoEdit() {
    const [profile, setProfile] = useState({data: {"name": '', "id": '', "login": '', "public_repos": ''}, error: null});
    const profileStore = useSelector(state => state.profileReducer);
    const dispatch = useDispatch();     
    const history = useHistory();
    const { addToast, removeToast, toastStack } = useToasts();

    useEffect(() => {
        dispatch(RandomAction());
    }, []);

    useEffect(() => {
        setProfile(profileStore);
    }, [profileStore]);

    function changeHandle(e) {
        const val = e.target.value;
        const type = e.target.name;
        var someProperty = {...profile};
        someProperty.data[type] = val;
        setProfile(someProperty);
    }

    function updateHandle() {
        dispatch({type: types.UPDATE_PROFILE, payload: profile});
        addToast('Updated Successfully', { appearance: 'success' });
        history.push("/page3");
    }

    return <div className="container">
    <h1 style={{marginBottom: "30px"}}>Edit Profile</h1>
    {(profile.data) ? (
        <Fragment>
            <div className="form-group justify-content-center" style={{width: "40%", marginLeft: "320px"}}>
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" name="name" value={profile.data.name} onChange={changeHandle} style={{textAlign: "center"}}/>
            </div>
            <div className="form-group justify-content-center" style={{width: "40%", marginLeft: "320px"}}>
                <label htmlFor="id">Id:</label>
                <input type="number" className="form-control" id="id" name="id" value={profile.data.id} onChange={changeHandle} style={{textAlign: "center"}}/>
            </div>
            <div className="form-group justify-content-center" style={{width: "40%", marginLeft: "320px"}}>
                <label htmlFor="login">Login Id:</label>
                <input type="text" className="form-control" id="login" name="login" value={profile.data.login} onChange={changeHandle} style={{textAlign: "center"}}/>
            </div>
            <div className="form-group justify-content-center" style={{width: "40%", marginLeft: "320px"}}>
                <label htmlFor="public_repos">Public Repos:</label>
                <input type="number" className="form-control" id="public_repos" name="public_repos" value={profile.data.public_repos} onChange={changeHandle} style={{textAlign: "center"}}/>
            </div>
            <button type="submit" className="btn btn-secondary" onClick={updateHandle}>Update</button>
        </Fragment>
        ): (
            <h2>No Data found</h2>
    )}   
</div>
}

export default PageTwoEdit;