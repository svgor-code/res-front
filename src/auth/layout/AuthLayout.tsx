import React, { useState } from "react";
import auth from "src/auth/Auth.module.css";
import Login from "../Login";
import Registration from "../Registration";

const AuthLayout = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  return (
    <>
      {!isRegistered ? (
        <div className={auth.main_content}>
          <Login onChange={() => setIsRegistered(true)} />
        </div>
      ) : (
        <div className={auth.main_content}>
          <Registration onChange={() => setIsRegistered(false)} />
        </div>
      )}
    </>
  );
};

export default AuthLayout;
