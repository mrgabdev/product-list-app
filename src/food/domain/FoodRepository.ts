import { Food } from './IFood'

export interface FoodRepository {
  getAllFoods(): Promise<Food[]>
}
