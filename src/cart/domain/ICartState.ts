export interface CartState {
  items: ItemCart[]
  addItem: (item: ItemCart) => void
  removeItem: (item: ItemCart) => void
}

export interface ItemCart {
  item: FoodItem
  quantity: number
}

export interface FoodItem {
  name: string
  price: number
  thumbnail: string
}
