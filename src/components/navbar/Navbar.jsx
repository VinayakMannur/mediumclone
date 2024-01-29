import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        logo
      </div>
      <div className={styles.mainHeading}>Medium</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href='/' className={styles.link}>Homepage</Link>
        <Link href='/' className={styles.link}>Contact</Link>
        <Link href='/' className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
