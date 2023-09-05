import React from 'react'
import styles from './ProductParameter.module.css';
const ProductParameter = () => {
  return (
    <div id={styles.product_parameter}>
        <section className={styles.tableparameter} id={styles.tableparameter}>
            <h2 className={styles.section_subtitle}>Thông số sản phẩm</h2>
            <ul className={styles.parameter}>
                <li className={styles.pro}>
                    <span>Hệ điều hành:</span>
                    <span> Android 11 </span>
                </li>
            </ul>
            <div className={styles.viewparameterfull} id={styles.showall_parameter}>
                Xem chi tiết
            </div>
        </section>
    </div>
  )
}

export default ProductParameter