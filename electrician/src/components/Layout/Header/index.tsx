import React from 'react'
import styles from './Header.module.css';
import { navList } from '../../../data/navList';
import {FaShoppingCart} from "react-icons/fa";
type SingleHeaderProps = {
    title: string,
    link: string,
}
const SingleHeader = ({title,link = ''}: SingleHeaderProps) => {
    return (
        <>
            <li><a className={styles.nav_link} href={link}>{title}</a></li>
        </>
    )
}

const SingleLogo = ({link = '', title}: {link?: string, title: string}) => {
    return (
        <>
            <div className="justify-start ">
                <a href={link} className={styles.logo}>{title}</a>
            </div>
        </>
    )
}

const ShoppingCart = () => {
    return (
        <div className={styles.header_cart}>
            <i><FaShoppingCart /></i>
            <span>0</span>
        </div>
    )
}
const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container mx-auto px-4">
                <div className="justify-between flex">
                    <SingleLogo title="Electrician" />
                    <nav className="items-center inline-flex">
                        <ul className="flex items-center">
                           {
                                navList.map((item) => (
                                    <SingleHeader key={`Header_${item.id}`} title ={item.title} link ={item.link} />
                                ))
                           }
                        </ul>
                        <ShoppingCart />
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header