import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
            <Image src='/style.png' className={styles.image} alt='' width={30} height={30}/>
            Style
          </Link>
          <Link href='/blog' className={`${styles.category} ${styles.fashion}`}>
            <Image src='/style.png' className={styles.image} alt='' width={30} height={30}/>
            Fashion
          </Link>
          <Link href='/blog' className={`${styles.category} ${styles.food}`}>
            <Image src='/style.png' className={styles.image} alt='' width={30} height={30}/>
            Food
          </Link>
          <Link href='/blog' className={`${styles.category} ${styles.travel}`}>
            <Image src='/style.png' className={styles.image} alt='' width={30} height={30}/>
            Travel
          </Link>
          <Link href='/blog' className={`${styles.category} ${styles.culture}`}>
            <Image src='/style.png' className={styles.image} alt='' width={30} height={30}/>
            Culture
          </Link>
          <Link href='/blog' className={`${styles.category} ${styles.coding}`}>
            <Image src='/style.png' className={styles.image} alt='' width={30} height={30}/>
            Coding
          </Link>
      </div>
    </div>
  )
}

export default CategoryList