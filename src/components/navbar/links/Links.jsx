"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLinks/navLink";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const isAdmin = false;
  const session = true;

  return (
    <div>
      <div className={styles.links}>
        {links.map((li) => {
          return <NavLink li={li} key={li.path} />;
        })}
        {session ? (
          <>
            {isAdmin && <NavLink li={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink li={{ title: "Login", path: "/login" }} />
          </>
        )}
      </div>
      <button className={styles.menubutton} onClick={()=>setOpen(!open)}>Menu</button>
      {
        open && <div className={styles.mobileLinks}>
          {links.map((li) => {
            return <NavLink li={li} key={li.path} />;
          })}
        </div>
      }
    </div>
  );
};

export default Links;
