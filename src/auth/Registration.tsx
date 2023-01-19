import React, { useState, useRef, useEffect } from "react";

import auth from "./Auth.module.css";
import axios from "./api/axios";

import { Icon } from "@iconify/react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{1,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisteredForm = ({ onChange }: any) => {
  const errRef = useRef<any>();
  const userRef = useRef<any>();

  const [user, setUser] = useState<string>("");
  const [validName, setValidName] = useState<boolean>(false);
  const [userFocus, setUserFocus] = useState<boolean>(false);

  const [pwd, setPwd] = useState<string>("");
  const [validPwd, setValidPwd] = useState<boolean>(false);
  const [pwdFocus, setPwdFocus] = useState<boolean>(false);

  const [matchPwd, setMatchPwd] = useState<string>("");
  const [validMatch, setValidMatch] = useState<boolean>(false);
  const [matchFocus, setMatchFocus] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    console.log(v1, v2);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(user, pwd);
    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <div>
          <h1>Success</h1>
          <button onClick={onChange}>sign in</button>
        </div>
      ) : (
        <div className={auth.main_form}>
          <h1>SIGN UP</h1>
          <p
            ref={errRef}
            className={errMsg ? auth.err_msg : auth.off_screen}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form
            className={auth.login_form}
            method="post"
            onSubmit={handleSubmit}
          >
            <label htmlFor="username">
              Username:
              <span className={validName ? auth.valid : auth.hide}>
                <Icon
                  icon="material-symbols:check-circle-outline-rounded"
                  color="green"
                />
              </span>
              <span className={validName || !user ? auth.hide : auth.invalid}>
                <Icon icon="charm:circle-cross" color="red" />
              </span>
            </label>
            <input
              className={auth.login_input}
              required
              id="username"
              type="text"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                user && !validName ? auth.instruction : auth.off_screen
              }
            >
              <Icon
                icon="material-symbols:info-outline-rounded"
                color="white"
              />{" "}
              2 to 24 characters.
              <br />
              Must begin with a letter
              <br />
              Letters , numbers , underscores , hyphens allowed.
            </p>

            <label htmlFor="pwd">
              Password:
              <span className={validPwd ? auth.valid : auth.hide}>
                <Icon
                  icon="material-symbols:check-circle-outline-rounded"
                  color="green"
                />
              </span>
              <span className={validPwd || !pwd ? auth.hide : auth.invalid}>
                <Icon icon="charm:circle-cross" color="red" />
              </span>
            </label>
            <input
              className={auth.pwd_input}
              id="pwd"
              type="password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                pwdFocus && !validPwd ? auth.instruction : auth.off_screen
              }
            >
              <Icon
                icon="material-symbols:info-outline-rounded"
                color="white"
              />
              <span className={auth.pwd_text}>
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters , a number , and a
                special character.
                <br />
                Allowed special characters:
                <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="paercent">%</span>
              </span>
            </p>
            <label htmlFor="confirm_pwd">
              Confirm password:
              <span className={validMatch && matchPwd ? auth.valid : auth.hide}>
                <Icon
                  icon="material-symbols:check-circle-outline-rounded"
                  color="green"
                />
              </span>
              <span
                className={validMatch || !matchPwd ? auth.hide : auth.invalid}
              >
                <Icon icon="charm:circle-cross" color="red" />
              </span>
            </label>
            <input
              className={auth.pwd_input}
              id="confirm_pwd"
              required
              type="password"
              onChange={(e) => setMatchPwd(e.target.value)}
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? auth.instruction : auth.off_screen
              }
            >
              <Icon
                icon="material-symbols:info-outline-rounded"
                color="white"
              />
              Must match he first password input field.
            </p>

            <button
              disabled={!validName || !validPwd || !validMatch ? true : false}
              type="submit"
            >
              Sign up
            </button>
            <button onClick={onChange}>Already have an account? sign in</button>
          </form>
        </div>
      )}
    </>
  );
};

export default RegisteredForm;
