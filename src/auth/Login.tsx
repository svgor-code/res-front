import React, { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";

import auth from "./Auth.module.css";

import axios from "./api/axios";
const LOGIN_URL = "/auth";

const LoginForm = ({ onChange }: any) => {
  const { setAuth } = useContext<any>(AuthContext);

  const userRef = useRef<any>();
  const errRef = useRef<any>();

  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(user, pwd);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        },
      );
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));

      const accessToken = response?.data?.accessToken;
      setAuth({ user, pwd, accessToken });

      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.response?.stats === 401) {
        setErrMsg("unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <p>you are successfully logged in!</p>
      ) : (
        <div className={auth.main_form}>
          <h1>SIGN IN</h1>
          <p
            ref={errRef}
            className={errMsg ? auth.err_msg : auth.off_screen}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form className={auth.login_form} onSubmit={handleSubmit}>
            <label htmlFor="username">username:</label>
            <input
              className={auth.login_input}
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">password:</label>
            <input
              className={auth.pwd_input}
              type="password"
              id="password"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button disabled={!user || !pwd ? true : false} type="submit">
              Sign in
            </button>
            <button onClick={onChange}>Dont have an account? sign up</button>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginForm;
