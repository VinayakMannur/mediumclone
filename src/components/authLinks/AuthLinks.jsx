"use client";

import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = false;
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
          <span className={styles.linki}>logout</span>
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
                <span className={styles.link}>logout</span>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AuthLinks;
