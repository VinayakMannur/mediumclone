import React, { useEffect, useState } from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

const CategoryList = () => {

  const [data, setData] = useState([])

  const getData = async () =>{
    const response = await axios.get('http://localhost:5000/categories')
    // console.log(response.data.categories);
    setData(response.data.categories)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item)=>{
          return <Link key={item._id} href={`/blog?cat=${item.slug}`} className={`${styles.category} ${styles[item.slug]}`}>
            {item.img && <Image src={item.img} className={styles.image} alt='' width={30} height={30}/>}
              {item.title}
            </Link>
        })}

          
      </div>
    </div>
  )
}

export default CategoryList