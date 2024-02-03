import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/p1.jpeg"
          alt=""
          width={400}
          height={380}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>12.2.2023 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/" className={styles.button}>
          <h1 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h1>
        </Link>
        <p className={styles.postDesc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          perferendis? Quidem eum hic dolor iste.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
