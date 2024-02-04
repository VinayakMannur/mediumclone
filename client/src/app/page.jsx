'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  const [userData, setUserData] = useState({})
  console.log(userData);
  const getUser = async() =>{
    try {
      const respose = await axios.get('http://localhost:5000/login/success',{withCredentials:true})
      setUserData(respose.data.user)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getUser()
  },[])

  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  );
}
