'use client'
import { FoodCard } from '@/food/domain/FoodCard'
import styles from './page.module.scss'
import { useCartStore } from '@/cart/domain/cartStore'

const FOOD = [
  {
    image: {
      thumbnail: '/images/image-waffle-thumbnail.jpg',
      mobile: '/images/image-waffle-mobile.jpg',
      tablet: '/images/image-waffle-tablet.jpg',
      desktop: '/images/image-waffle-desktop.jpg'
    },
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.5
  },
  {
    image: {
      thumbnail: '/images/image-creme-brulee-thumbnail.jpg',
      mobile: '/images/image-creme-brulee-mobile.jpg',
      tablet: '/images/image-creme-brulee-tablet.jpg',
      desktop: '/images/image-creme-brulee-desktop.jpg'
    },
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.0
  },
  {
    image: {
      thumbnail: '/images/image-macaron-thumbnail.jpg',
      mobile: '/images/image-macaron-mobile.jpg',
      tablet: '/images/image-macaron-tablet.jpg',
      desktop: '/images/image-macaron-desktop.jpg'
    },
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.0
  },
  {
    image: {
      thumbnail: '/images/image-tiramisu-thumbnail.jpg',
      mobile: '/images/image-tiramisu-mobile.jpg',
      tablet: '/images/image-tiramisu-tablet.jpg',
      desktop: '/images/image-tiramisu-desktop.jpg'
    },
    name: 'Classic Tiramisu',
    category: 'Tiramisu',
    price: 5.5
  }
]
export default function Home() {
  const { items } = useCartStore()

  return (
    <main className={styles.wrapper}>
      <section className={styles.products}>
        <section>
          <h2 className={styles['products__section-title']}>Desserts</h2>
          <div className={styles.products__list}>
            {FOOD.map((food) => (
              <FoodCard
                category={food.category}
                image={food.image}
                name={food.name}
                price={food.price}
                key={food.name}
              />
            ))}
          </div>
        </section>
      </section>
      <section>{JSON.stringify(items, null, 2)}</section>
      <section className={styles.cart}>
        <h2>Your cart(0)</h2>
        <img src='/images/illustration-empty-cart.svg' alt='' />
      </section>
    </main>
  )
}
