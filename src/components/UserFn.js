import React from "react";
import { useState, useEffect } from "react";

const UserFn = () => {
  const [userdata, setUserdata] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch("https://api.github.com/users/HEMA391");
    const json = await data.json();
    setUserdata(json);
  }

  return (
    <div>
      <h1>Name: {userdata.login}</h1>
      <h2>Git hub Id: {userdata.id}</h2>
      <img style={{ width: "150px" }} src={userdata.avatar_url} alt="" />
    </div>
  );
};

export default UserFn;
