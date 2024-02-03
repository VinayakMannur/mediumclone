import React from 'react'
import styles from './menu.module.css'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.subtitle}>Whats Hot</h4>
      <h2 className={styles.title}>Most Popular</h2>
      <MenuPosts/>


      <h4 className={styles.subtitle}>Choosen by Editor</h4>
      <h2 className={styles.title}>Editors Pick</h2>
      <MenuCategories/>



      <h4 className={styles.subtitle}>Choosen by Editor</h4>
      <h2 className={styles.title}>Editors Pick</h2>
      <MenuPosts withImage={true}/>
    </div>
  )
}

export default Menu