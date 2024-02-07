'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import { useEffect, useState } from "react";


export default function Home({searchParams}) {

  const page = parseInt(searchParams) || 1;

  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu/>
      </div>
    </div>
  );
}
