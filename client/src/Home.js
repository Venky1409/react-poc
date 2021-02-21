import React, { useState, Component, ReactDOM } from 'react';
import axios from 'axios';
import { ToastProvider, useToasts } from 'react-toast-notifications';

function Home() {
  const [username, setUsername] = useState('');
  const [name, setname] = useState('');
  const [data, setData] = useState({});
  const { addToast, removeToast, toastStack } = useToasts();

  function changeHandle(e) {
    setUsername(e.target.value);
  }

  function fetchData() {
    axios.get('https://api.github.com/users/' +username)
    .then(function (response) {
      setname(response.data.name);
      setData(response.data);
      addToast('Fetch Data Successfully', { appearance: 'success' });
    })
    .catch(function (error) {
      addToast('No Data found', { appearance: 'error' });
    });
  }

    return <div className="container">
      <h1>Hello User {name}</h1>
      <br></br>
      <div className="form-group" style={{textAlign: "center"}}>
        <label htmlFor="username"><strong>Enter your Git UserName</strong></label>
        <input type="text" className="form-control" id="username" value={username} onChange={changeHandle} style={{width: "40%", position: "relative", left: "30%", textAlign: "center"}}/>
      </div>
      <center><button type="submit" className="btn btn-secondary" onClick={fetchData}>Submit</button></center>
      {name ? (
        <div className="row" style={{padding: "40px", textAlign: "center"}}>
        <div className="col-6"><img src={data.avatar_url} style={{borderRadius: "50%", width: "50%"}}></img></div>
        <div className="col-6">
          <p style={{padding: "10px"}}><b>Name:</b> {data.name}</p>
          <p style={{padding: "10px"}}><b>Id:</b> {data.id}</p>
          <p style={{padding: "10px"}}><b>Login Id:</b> {data.login}</p>
          <p style={{padding: "10px"}}><b>Public Repos:</b> {data.public_repos}</p>
        </div>
      </div>
      ): null}
    </div>
}

export default Home;
