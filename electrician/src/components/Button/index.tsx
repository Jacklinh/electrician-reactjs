import React from 'react'
import styles from './Button.module.css';

const Button = ({icon,label='Default',class_color}: {icon?: React.ReactNode, label: string, class_color?: string}) => {
    const myClass = class_color !== '' ? `${styles.btn} ${styles.class_color}` : `${styles.btn}`;
    return (
        <button className={myClass} type="button">{icon} {label} </button>
    )
}

export default Button