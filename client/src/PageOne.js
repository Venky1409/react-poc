import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PageOne() {
  const [data, setData] = useState({ user: {} });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.github.com/users/Venky1409',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h3>User Details</h3>
      <div className="row">
        <div className="col-6"><img src={data.avatar_url}></img></div>
        <div className="col-6">
          <p style={{padding: "10px"}}><b>Name:</b> {data.name}</p>
          <p style={{padding: "10px"}}><b>Username:</b> {data.login}</p>
          <p style={{padding: "10px"}}><b>Git Id:</b> {data.id}</p>
          <p style={{padding: "10px"}}><b>Public Repos:</b> {data.public_repos}</p>
          <p style={{padding: "10px"}}><b>Created at:</b> {data.created_at}</p>
        </div>
      </div>
    </div>
  )
}

export default PageOne;
