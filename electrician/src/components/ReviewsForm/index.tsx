import React from 'react'
import {FaStar} from "react-icons/fa";
import styles from "./ReviewsForm.module.css";
import { commentList } from '../../data/commentList';
import Button from '../Button';

const SingleReviewComment = ({order=1,percent=0,quantity=0}:{order?: number, percent:number, quantity:number}) => {
    return (
        <div className={styles.r}>
            <span className={styles.t}>{order}<i><FaStar /></i></span>
            <div className={styles.bgb}>
                <div className={styles.bgb_in} style={{width: `${percent}%`}}></div>
            </div>
            <span className={styles.c}><strong>{quantity}</strong> đánh giá</span>
        </div>
    )
}
type SingleComment = {
    iconUser: string,
    name: string,
    content: string,
    time: string
}
const SingleComment = ({comment}:{comment: SingleComment}) => {
    return (
        <>
            <li>
                <span className={styles.iconcom_user}>{comment.iconUser}</span>
                <span className={styles.name}>{comment.name}</span>
                <div className={styles.talk}>
                    <p className={styles.text}>{comment.content}</p>
                    <div className={styles.cmextra}>
                        <span className={styles.btnreply}>Trả lời</span><span className={styles.time}>{comment.time}</span>
                    </div>
                </div>
            </li>
        </>
    )
}
const ReviewsForm = () => {
  return (
    <div className={styles.reviews_form}>
        <div className={styles.comment_box}>
            <div className={`${styles.crt} overflow-hidden`}>
                <div className={styles.lcrt}>
                    <b>4/5</b><i><FaStar /></i>
                    <p className={styles.rank_text}>6 đánh giá</p>
                </div>
                <div className={styles.rcrt}>
                    <SingleReviewComment order={1} percent={0} quantity={0}  />
                    <SingleReviewComment order={2} percent={0} quantity={0}  />
                    <SingleReviewComment order={3} percent={20} quantity={1}  />
                    <SingleReviewComment order={4} percent={20} quantity={1}  />
                    <SingleReviewComment order={5} percent={60} quantity={4}  />
                </div>
                <div className={styles.bcrt}>
                    <Button label='Gửi đánh giá của bạn' />
                </div>
            </div>
            <div className='clear-both'></div>
            <form action="" name="reviews_form">
                <p>Mời bạn chọn đánh giá <span className="inline-flex"><i><FaStar /></i><i><FaStar /></i><i><FaStar /></i><i><FaStar /></i><i><FaStar /></i></span></p>
                <textarea required placeholder="Nội dung tiếng việt có dấu" name="content" id="content" cols={30} rows={5} ></textarea>
                <div className={`flex ${styles.inline_controls}`}>
                    <input type="text" placeholder="Tên (bắt buộc)" required name="username" />
                    <input type="text" placeholder="Email (bắt buộc)" required name="email" />
                    <input type="text" placeholder="Số ĐT (Tùy chọn)" required name="mobile" />
                    <Button label='Đánh giá' />
                </div>
            </form>
            <ul className={`${styles.comment_list} clear-both`}>
                {
                    commentList.map((item)=> (<SingleComment key={`SingleComment_${item.id}`} comment={item} />))
                }
                
            </ul>
        </div>
    </div>
  )
}

export default ReviewsForm