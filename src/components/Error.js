import React from "react";
import { useRouteError } from "react-router";
import Header from "./Header";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h1>Something went wrong!!!</h1>
      <h2>
        {err.status} {err.statusText}{" "}
      </h2>
      <h3>{err.data}</h3>
    </div>
  );
};

export default Error;
