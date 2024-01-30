import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        lorem asdjhhjagd ajsjbdjhsabhd sajdbhsahdbsa
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src='/p1.jpeg' alt='' width={400} height={450}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perferendis? Quidem eum hic dolor iste.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured