import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src='/p1.jpeg' alt='' width={40} height={40} className={styles.img}/>
          <h2>Medium</h2>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, cum.</p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>Coding</Link>
          <Link href='/'>Travel</Link>
          <Link href='/'>Food</Link>
          <Link href='/'>Style</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer