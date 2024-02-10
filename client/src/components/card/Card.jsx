import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = ({item}) => {
  return (
    <div className={styles.container} key={item._id}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={item.img}
          alt=""
          width={400}
          height={380}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>12.2.2023 - </span>
          <span className={styles.category}>{item.category}</span>
        </div>
        <Link href={`/posts/${item._id}`} className={styles.button}>
          <h1 className={styles.postTitle}>
            {item.title}
          </h1>
        </Link>
        <p className={styles.postDesc}>
          {item.desc.substring(0,60)}
        </p>
        <Link href={`/posts/${item._id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
