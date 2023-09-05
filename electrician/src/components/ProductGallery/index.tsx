import React from 'react'
import styles from './ProductGallery.module.css';
const ProductGallery = () => {
  return (
    <div id={styles.gallery}>
        <p><img src="./images/readme.jpg" width={400} height={400} alt="" /></p>
    </div>
  )
}

export default ProductGallery