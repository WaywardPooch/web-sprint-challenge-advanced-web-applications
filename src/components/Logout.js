// Libraries
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// Utilities
import axiosWithAuth from "./../utils/axiosWithAuth";

const Logout = () => {
  // Destructuring
  const { push } = useHistory();

  // Side Effects (Send logout request on mount)
  useEffect(() => {
    axiosWithAuth()
      .post("http://localhost:5000/api/logout")
      .then(() => {
        localStorage.removeItem("token");
        push("/login");
      })
      .catch((error) => {
        console.error("FAILED TO LOGOUT!", error);
      });
  }, []);

  return <div></div>;
};

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.
