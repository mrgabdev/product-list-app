import { create } from 'zustand'
import { CartState } from './ICartState'

export const useCartStore = create<CartState>()((set) => ({
  items: [],
  addItem: (item) => {
    set((state) => {
      const itemList = state.items

      const itemIndex = itemList.findIndex((oldItem) => oldItem.item.name === item.item.name)

      if (itemIndex !== -1) {
        const updatedItems = [...itemList]
        updatedItems[itemIndex].quantity = item.quantity

        return {
          items: updatedItems
        }
      }

      return {
        items: [...itemList, item]
      }
    })
  },
  removeItem: (item) => {
    set((state) => {
      const itemList = state.items

      const itemIndex = itemList.findIndex((oldItem) => oldItem.item.name === item.item.name)

      if (itemIndex === -1) {
        return state
      }

      const updatedList = [...itemList]

      if (item.quantity === 0) {
        updatedList.splice(itemIndex, 1)

        return {
          items: updatedList
        }
      }

      updatedList[itemIndex].quantity = item.quantity

      return {
        items: updatedList
      }
    })
  }
}))
