'use client'

import { AddIcon, CartIcon, MinusIcon } from '../icons'
import styles from './AddToCart.module.scss'
import { useState } from 'react'

export const AddToCart = () => {
  const [active, setActive] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(0)

  const handleActive = () => {
    if (!active) {
      setActive((prev) => !prev)
    }
  }

  const addItem = () => setCounter(counter + 1)

  const removeItem = () => setCounter(counter - 1)

  return (
    <button className={`${styles['add-button']} ${active && styles['add-button--active']}`} onClick={handleActive}>
      {!active ? (
        <>
          <CartIcon />
          <p className={styles['add-button__text']}>Add to Cart</p>
        </>
      ) : (
        <>
          <MinusIcon className={styles['add-button__icon']} onClick={removeItem} />
          <p>{counter}</p>
          <AddIcon className={styles['add-button__icon']} onClick={addItem} />
        </>
      )}
    </button>
  )
}
