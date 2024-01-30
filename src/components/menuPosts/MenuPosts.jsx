import Link from "next/link";
import React from "react";
import styles from './menuPosts.module.css'
import Image from "next/image";

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href='/' className={styles.item}>
          {withImage && <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.img}/>
          </div>}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <p className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, rem.</p>
            <div className={styles.details}>
              <span className={styles.username}>Vinzz</span>
              <span className={styles.date}> - 12.2.2023</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          {withImage && <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.img}/>
          </div>}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <p className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, rem.</p>
            <div className={styles.details}>
              <span className={styles.username}>Vinzz</span>
              <span className={styles.date}> - 12.2.2023</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          {withImage && <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.img}/>
          </div>}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <p className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, rem.</p>
            <div className={styles.details}>
              <span className={styles.username}>Vinzz</span>
              <span className={styles.date}> - 12.2.2023</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          {withImage && <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.img}/>
          </div>}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <p className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, rem.</p>
            <div className={styles.details}>
              <span className={styles.username}>Vinzz</span>
              <span className={styles.date}> - 12.2.2023</span>
            </div>
          </div>
        </Link>
      </div>
  );
};

export default MenuPosts;
