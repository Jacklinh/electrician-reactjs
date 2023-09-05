import React from 'react'
import styles from './ProductDetail.module.css';
import Numeral from 'react-numeral';
import { policyProduct } from '../../data/policyProduct';
import Button from '../Button';
import {FaShoppingCart} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";

const SingleProductName = ({name}:{name: string}) => {
    return (
        <h1 className={styles.product_name}>
            {name}
        </h1>
    )
}
const SingleProductPrice = ({price,promo_price=0}:{price:number,promo_price?:number}) => {
    return (
        <div className={styles.product_price}>
            {
                promo_price > 0 ? <><strong><Numeral value={promo_price} format={"0,0"} />đ</strong><del><Numeral value={price} format={"0,0"} />đ</del></> : <><strong><Numeral value={price} format={"0,0"} />đ</strong></>
            }
            
        </div>
    )
}
const SingleAttrColor = ({label,current=false}:{label: string, current?: boolean}) => {
    const currentClass = current ? `${styles.attr_name} ${styles.current}` : `${styles.attr_name}`;
    return (
        <span className={currentClass}>{label}</span>
    )
}
type SinglePolicyProps = {
    image: string,
    label: string,
    content: string
}
const SinglePolicy = ({policyProp}:{policyProp:SinglePolicyProps}) => {
    return (
        <li className='flex gap-4'>
            <img width="20" height="20" src={policyProp.image} alt="guarantee" />
            <strong>{policyProp.label}:</strong>
            {policyProp.content}
        </li>
    )
}
 
const ProductDetail = () => {
  return (
    <div id={styles.product_details}>
        <SingleProductName name='Samsung Galaxy S21 FE 5G (8GB/128GB)' />
        <SingleProductPrice price={16990000} promo_price={12490000} />
        <div className={styles.product_attrs}>
            <div className={`${styles.attr_block} flex`}>
                <SingleAttrColor label='Màu Sắc' /> 
                <SingleAttrColor label='Đen' current={true} />
                <SingleAttrColor label='Hồng' />
                <SingleAttrColor label='Xanh' />
            </div>
        </div>
        <ul className={styles.policy}>
            {
                policyProduct.map((item,index) => <SinglePolicy key={`policyProduct_${index}`} policyProp={item} />)
            }
        </ul>
        <div className={`${styles.product_actions} flex`}>
            <Button label='Thêm Giỏ Hàng' icon={<FaShoppingCart />} />
            <Button label='Yêu thích' icon={<FaHeart />} class_color='btn_dark'/>
        </div>
        <div className={styles.call_info}>
            Hoặc gọi ngay để đặt mua: 1900 1080 (8:00-20:00)
        </div>
    </div>
  )
}

export default ProductDetail