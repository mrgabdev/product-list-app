import { FoodCard } from '@/food/domain/FoodCard'
import styles from './page.module.scss'

const FOOD = {
  thumbnail: '/images/image-waffle-thumbnail.jpg',
  mobile: '/images/image-waffle-mobile.jpg',
  tablet: '/images/image-waffle-tablet.jpg',
  desktop: '/images/image-waffle-desktop.jpg'
}

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.products}>
        <section>
          <h2 className={styles['products__section-title']}>Desserts</h2>
          <div className={styles.products__list}>
            <FoodCard category='Waffle' image={FOOD} name='Waffles con fresa' price={6.99} />
            <FoodCard category='Waffle' image={FOOD} name='Waffles con fresa' price={6.99} />
            <FoodCard category='Waffle' image={FOOD} name='Waffles con fresa' price={6.99} />
          </div>
        </section>
      </section>
      <section className={styles.cart}>
        <h2>Your cart(0)</h2>
        <img src='/images/illustration-empty-cart.svg' alt='' />
      </section>
    </main>
  )
}
