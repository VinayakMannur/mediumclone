'use client'

import React, { useEffect, useState } from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import axios from "axios";


const CardList = ({page, cat}) => {

  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const [POST_PER_PAGE] = useState(3);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(false);

  const getData = async (page) =>{
    const response = await axios.get(`http://localhost:5000/posts?page=${page}&cat=${cat || ''}`)
    setData(response.data.posts)
    // console.log(response.data.posts);
    setCount(response.data.count)
    updatePaginationState(page);
  }

  const updatePaginationState = (page) => {
    setHasPrev(page > 1);
    setHasNext((page * POST_PER_PAGE) < count);
  };

  useEffect(()=>{
    getData(page)
  },[page, count])

  const handlePageChange = (page) => {
    getData(page);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data?.map((item)=>{
          return <Card item={item} key={item._id}/>
        })}
        
      </div>
      <Pagination handlePageChange={handlePageChange} page={parseInt(page)} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  );
};

export default CardList;
