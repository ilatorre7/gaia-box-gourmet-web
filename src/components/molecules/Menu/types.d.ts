export interface MenuItem {
  name: string,
  image: string,
  ingredients: string,
  options?: string[],
  prices: string[],
  vegetarian?: boolean,
}