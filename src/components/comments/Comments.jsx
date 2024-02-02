import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = true;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status ? (
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
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src='/p1.jpeg' width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>vinzz</span>
                    <span className={styles.date}>12.2.2322</span>
                </div>
            </div>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit debitis tenetur.</p>
        </div>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src='/p1.jpeg' width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>vinzz</span>
                    <span className={styles.date}>12.2.2322</span>
                </div>
            </div>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit debitis tenetur.</p>
        </div>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src='/p1.jpeg' width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>vinzz</span>
                    <span className={styles.date}>12.2.2322</span>
                </div>
            </div>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit debitis tenetur.</p>
        </div>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src='/p1.jpeg' width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>vinzz</span>
                    <span className={styles.date}>12.2.2322</span>
                </div>
            </div>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit debitis tenetur.</p>
        </div>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src='/p1.jpeg' width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>vinzz</span>
                    <span className={styles.date}>12.2.2322</span>
                </div>
            </div>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit debitis tenetur.</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
