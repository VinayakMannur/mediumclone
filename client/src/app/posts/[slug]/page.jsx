'use client'

import React, { useEffect, useState } from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import axios from "axios";

const SinglePage = ({params}) => {

  const id = params.slug;
  const [data, setData] = useState([])

  const getData = async (id) =>{
    const response = await axios.get(`http://localhost:5000/posts/${id}`)
    setData(response.data.posts)
  }

  useEffect(()=>{
    getData(id)
  },[])


  return (
    <div className={styles.conatiner}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              {data.userId?.image && <Image src={data.userId?.image} alt="" fill className={styles.userImage} />}
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>{data.userId?.displayName}</span>
              <span className={styles.date}>12.2.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {data.img && <Image src={data.img} alt="" fill className={styles.image} />}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} dangerouslySetInnerHTML={{__html: data?.desc}}/>
          <div className={styles.comments}>
            <Comments params={params}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
