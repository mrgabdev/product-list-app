'use client'

import { FoodItem } from '../domain/ICartState'
import { useState } from 'react'
import { useCartStore } from '../domain/cartStore'
import { AddIcon, CartIcon, MinusIcon } from '../icons'
import styles from './AddToCart.module.scss'

export const AddToCart = (item: FoodItem) => {
  const [active, setActive] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(0)
  const { addItem, removeItem } = useCartStore()

  const handleActive = () => {
    if (!active) {
      setActive((prev) => !prev)
    }
  }

  const handleAddItems = (item: FoodItem) => {
    setCounter(counter + 1)
    addItem({ item, quantity: counter + 1 })
  }
  const handleRemoveItems = (item: FoodItem) => {
    if (counter <= 0) return
    const newCounter = counter - 1
    setCounter(newCounter)
    removeItem({ item, quantity: newCounter })
  }

  return (
    <button className={`${styles['add-button']} ${active && styles['add-button--active']}`} onClick={handleActive}>
      {!active ? (
        <>
          <CartIcon />
          <p className={styles['add-button__text']}>Add to Cart</p>
        </>
      ) : (
        <>
          <MinusIcon className={styles['add-button__icon']} onClick={() => handleRemoveItems(item)} />
          <p>{counter}</p>
          <AddIcon className={styles['add-button__icon']} onClick={() => handleAddItems(item)} />
        </>
      )}
    </button>
  )
}
