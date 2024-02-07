'use client'

import React, { useEffect, useState } from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import axios from "axios";


const CardList = ({page}) => {

  const [data, setData] = useState([])

  const getData = async () =>{
    const response = await axios.get(`http://localhost:5000/posts?page=${page}`)
    setData(response.data.posts)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data?.map((item)=>{
          return <Card item={item} key={item._id}/>
        })}
        
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
