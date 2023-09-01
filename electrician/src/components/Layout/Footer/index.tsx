
import styles from './Footer.module.css';
import { tagCoud } from '../../../data/tagCloud';
import { footerLinks } from '../../../data/footerLinks';

const TagCloud = ({link,value}:{link: string, value: string}) => {
    return (
        <li><a href={link}>{value}</a></li>
    )
}
const WidgetTitle = ({title}:{title: string}) => {
    return (
        <h4 className={styles.widget_title}>{title}</h4>
    )
}
const FooterLinks = ({href,value}:{href: string, value: string}) => {
    return (
        <li><a href={href}>{value}</a></li>
    )
}
const SingleInfo = ({label,value,href,isLink=false}:{label: string, value: string, href?: string, isLink?: boolean}) => {
    return (
        <li>
            {isLink ? <><span className={styles.contact_info_label}>{label}</span><a href={href}>{value}</a></> : <><span className={styles.contact_info_label}>{label}</span>{value}</>}
        </li>
    )
}
const WidgetAbout = ({content,href,value,isLink=false}:{content: string, href?: string, value?: string, isLink?: boolean}) => {
    return (
        <>
           {isLink ? <><a href={href}><span>{value}</span></a><p>{content}</p></> : <p>{content}</p>} 
        </>
    )
}
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={`${styles.footer_row} flex`}>
                    <div className={styles.footer_col}>
                        <WidgetTitle title='About Us' />
                        <WidgetAbout content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et dapibus lacus.' href='#' value='Electrician' isLink />
                    </div>
                    <div className={styles.footer_col}>
                        <WidgetTitle title='Contact Info' />
                        <ul className={styles.contact_info}>
                            <SingleInfo label='Address:' value='123 Street Name,
                            City, England' />
                            <SingleInfo label='Phone:' value='(123) 456-7890' href='tel:(123) 456-7890' isLink />
                            <SingleInfo label='Email:' value='mail@example.com' href='mailto:mail@example.com' isLink />
                            <SingleInfo label='Working Days/Hours:' value='Mon- Sun / 9:00 AM - 8:00 PM' />
                        </ul>
                    </div>
                    <div className={styles.footer_col}>
                        <WidgetTitle title='Customer Service' />
                        <ul className={styles.links}>
                            {
                            footerLinks.map((item,index) => (
                                <FooterLinks key={`footerLinks_${index}`} href={item.href} value={item.value} />
                            ))
                            }
                        </ul>
                    </div>
                    <div className={styles.footer_col}>
                        <WidgetTitle title='Poppular Tags' />
                        <ul className={`${styles.tagcloud} flex gap-4 flex-wrap`}>
                            {
                                tagCoud.map((item,index)=>(
                                    <TagCloud key={`tagCoud_${index}`} link={item.link} value={item.value} />
                                ))
                            }
                        </ul>
                    </div>
                 </div>
            </div>
        </footer>
    )
}

export default Footer