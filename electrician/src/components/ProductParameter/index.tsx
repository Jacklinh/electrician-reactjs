import React from 'react'
import styles from './ProductParameter.module.css';
import { parameterList } from '../../data/parameterList';

type ParameterProp = {
    label: string,
    content: string
}
const SingleProductParameter = ({props}:{props: ParameterProp}) => {
    return (
        <li className={styles.pro}>
            <span>{props.label}:</span>
            <span>{props.content}</span>
        </li>
    )
}
const ProductParameter = () => { 
  return (
    <div id={styles.product_parameter}>
        <section className={styles.tableparameter} id={styles.tableparameter}>
            <h2 className={styles.section_subtitle}>Thông số sản phẩm</h2>
            <ul className={styles.parameter}>
                {
                    parameterList.map((item)=> <SingleProductParameter key={`SingleProductParameter_${item.id}`} props={item} />)
                }
            </ul>
            <div className={styles.viewparameterfull} id={styles.showall_parameter}>
                Xem chi tiết
            </div>
        </section>
    </div>
  )
}

export default ProductParameter