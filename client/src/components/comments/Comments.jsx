'use client'

import React, { useEffect, useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from 'swr'
import axios from "axios";

const fetcher = async(url)=>{
  const res = await fetch(url)
  // console.log(res.data.comments);
  const data = await res.json()

  if(!res.ok){
    throw new error('Something went wrong')
  }

  return data
}

const Comments = ({params}) => {

  const id = params.slug
  const [user, setUser] = useState(null);
  
  const {data, isLoading} = useSWR(`http://localhost:5000/comments/${id}`, fetcher)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {user !== null ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.send}>Send</button>
        </div>
      ) : (
        <div>
          <Link href="/login">Login to write a comment</Link>
        </div>
      )}

      <div className={styles.comments}>
        {isLoading?"Loading": data?.comments.map((item)=>{
          return <div className={styles.comment}>
              <div className={styles.user}>
                  {item.userId.image && <Image src={item?.userId?.image} alt="" width={50} height={50} className={styles.image}/>}
                  <div className={styles.userInfo}>
                      <span className={styles.userName}>{item.userId.displayName}</span>
                      <span className={styles.date}>{item.userId.createdAt.substring(0,10)}</span>
                  </div>
              </div>
              <p className={styles.desc}>{item.desc}</p>
          </div>
        })}
        
      </div>
    </div>
  );
};

export default Comments;
