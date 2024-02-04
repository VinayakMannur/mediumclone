'use client'

import React from "react";
import styles from "./loginPage.module.css";
import Image from "next/image";

const LoginPage = () => {

  const loginUser = () =>{
    window.open('http://localhost:5000/auth/google/callback', "_self")
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <div className={styles.socialButton}>
          <Image src='/google.png' width={35} height={35} />
          Sign in with Google
          </div> */}
        <div className={styles.socialButton} onClick={loginUser}>
          <Image src="/google.png" width={35} height={35} />
          <span>Sign in with Google</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
