import { Food } from './IFood'
import styles from './FoodCard.module.scss'
import { AddToCart } from '@/cart/components/AddToCart'

export const FoodCard = ({ category, image, name, price }: Food) => {
  return (
    <div className={styles.products__item}>
      <h3 className={styles.item__title}>{name}</h3>
      <div className={styles.item__image}>
        <picture>
          <source srcSet={image.desktop} media='(min-width: 1024px)' />
          <source srcSet={image.tablet} media='(min-width: 768px)' />
          <source srcSet={image.mobile} media='(max-width: 767px)' />
          <img src={image.desktop} alt='Waffle image' />
        </picture>
        <div className={styles.image__button}>
          <AddToCart />
        </div>
      </div>
      <p className={styles.item__type}>{category}</p>
      <p className={styles.item__price}>${price}</p>
    </div>
  )
}
