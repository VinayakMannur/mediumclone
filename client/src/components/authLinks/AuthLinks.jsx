"use client";

import React, { useEffect, useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const AuthLinks = () => {

  const [userData, setUserData] = useState({})
  const [status, setStatus] = useState(false)
  const [open, setOpen] = useState(false);

  const getUser = async() =>{
    try {
      const respose = await axios.get('http://localhost:5000/login/success',{withCredentials:true})
      setStatus(true)
      setUserData(respose.data.user)

    } catch (error) {
      console.log(error);
    }
  }

  const logoutUser = () =>{
    window.open('http://localhost:5000/logout', "_self")
    setUserData({})
    setStatus(false)
  }

  useEffect(()=>{
      getUser();
  },[])

  const src = `${userData.image}`

  return (
    <>
      {!status ? (
        <Link href="/login" className={styles.linki}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.linki}>
            Write
          </Link>
          <span className={styles.linki} onClick={logoutUser}>Logout</span>
          {userData.image && ( // Conditionally render Image component when image is available
            <Image
              src={userData.image}
              alt="profile"
              width={40}
              height={40}
              className={styles.profilePhoto}
            />
          )}
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <>
          <div className={styles.responsiveMenu}>
            <Link href="/">Homepage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>
            {!status ? (
              <Link href="/login">Login</Link>
            ) : (
              <>
                <Link href="/write">Write</Link>
                <div className={styles.link} onClick={logoutUser}>Logout</div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AuthLinks;
