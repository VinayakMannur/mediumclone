"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './navlink.module.css'

const NavLink = ({ li }) => {
  const pathName = usePathname();
  return (
    <Link href={li.path} className={`${styles.container} ${pathName === li.path && styles.active}`}>
      {li.title}
    </Link>
  );
};

export default NavLink;
