import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            ex?
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.userImage} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>Vinzzz</span>
              <span className={styles.date}>12.2.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam reiciendis earum incidunt totam, laudantium repudiandae
              quod esse sint eos est!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam reiciendis earum incidunt totam, laudantium repudiandae
              quod esse sint eos est!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam reiciendis earum incidunt totam, laudantium repudiandae
              quod esse sint eos est!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam reiciendis earum incidunt totam, laudantium repudiandae
              quod esse sint eos est!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam reiciendis earum incidunt totam, laudantium repudiandae
              quod esse sint eos est!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam reiciendis earum incidunt totam, laudantium repudiandae
              quod esse sint eos est!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam reiciendis earum incidunt totam, laudantium repudiandae
              quod esse sint eos est!
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
