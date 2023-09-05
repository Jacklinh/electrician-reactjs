
import styles from './Products.module.css';
import { productsList } from '../../data/productsList';
import Numeral from 'react-numeral';
import ReviewsForm from '../ReviewsForm';
import ProductGallery from '../ProductGallery';
import ProductDetail from '../ProductDetail';
import ProductParameter from '../ProductParameter';

const SingleSubTitle = ({title}:{title: string}) => {
    return (
        <h2 className={styles.section_subtitle}>{title}</h2>
    )
}
type SingleProductProps = {
    thubnail: string,
    title: string,
    price: number,
    promoPrice: number
}
const SingleProductItem = ({product}: {product: SingleProductProps}) => {
    const discount = product.promoPrice > 0 ? Math.round(100 - ((product.promoPrice*100)/product.price)) : 0;
    return (
        <> 
            <div className={styles.product_item}>
                {discount > 0 ? <span className={styles.discount}>-{discount}%</span> : null}
                <img src={product.thubnail} alt=""/>
                <h3>{product.title}</h3>
                <div className={styles.price}>
                    {product.promoPrice > 0 ? (<><strong><Numeral value={product.promoPrice} format={"0,0"} />đ</strong><del><Numeral value={product.price} format={"0,0"} />đ</del></>) : <strong><Numeral value={product.price} format={"0,0"} />đ</strong>}
                </div>
            </div>
        </>
    )
}
const SingleProductDetail = () => {
    return (
        <article className={styles.product_description}>
            <h3>
                Đón năm mới rộn ràng cùng với series Galaxy S21 đến từ
                Samsung. Phiên bản tiêu chuẩn cho series lần này là Samsung
                Galaxy S21 5G, nổi bật với thiết kế tràn viền, cụm camera ấn
                tượng cho đến hiệu năng mạnh mẽ hàng đầu.
            </h3>

            <h3>“Bộ cánh” mới nổi bật và sang trọng</h3>

            <p>
                Nổi bật với cụm camera sau được thiết kế đầy mới lạ, phần
                khuôn hình chữ nhật chứa bộ 3 camera ôm trọn cạnh trái của
                chiếc smartphone, viền khuôn cong uyển chuyển, hạn chế tối đa
                độ nhô ra so với mặt lưng, mang lại cái nhìn tổng thể hài hòa,
                độc đáo.
            </p>
        </article>
    )
}
const Products = () => {
  return (
    <>
        <div className={`${styles.product_info_wrapper} flex`}>
            <ProductGallery />
            <ProductDetail />
            <ProductParameter />
        </div>
        <section className={`${styles.main_wrapper} flex`}>
            <div className={styles.col_main}>
                <section>
                    <SingleSubTitle title='Phụ kiện tương thích' />
                    <div className={`${styles.product_wrapper} flex`}>
                        {
                            productsList.map((item)=><SingleProductItem key={`productsList_${item.id}`} product={item}/>)
                        }
                    </div>
                </section>
                <section>
                    <SingleSubTitle title='Bài viết đánh giá' />
                    <SingleProductDetail />
                </section>
                <section>
                    <SingleSubTitle title='Đánh giá Sản phẩm' />
                    <ReviewsForm />
                </section>
            </div>
            <div className={styles.col_sidebar}>

            </div>
        </section>
    </>
  )
}

export default Products