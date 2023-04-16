import { URL } from '../utils/firebase-config';

export const fetchPicks = async () => {
   const res = await fetch(`${URL}/store.json`)
   if (!res.ok) throw new Error('Failed to fetch picks!')

   const data = await res.json();
   return data;
}
export const fetchCategories = async () => {
   const res = await fetch(`https://dummyjson.com/products/categories/`)
   if (!res.ok) throw new Error('Failed to fetch categories!')

   const data = await res.json();
   return data;
}
export const fetchCategory = async (category) => {
   const res = await fetch(`https://dummyjson.com/products/category/${category}`)
   if (!res.ok) throw new Error('Failed to fetch category!')

   const data = await res.json();
   return data;
}
export const fetchProduct = async (productId) => {
   const res = await fetch(`https://dummyjson.com/products/${productId}`)
   if (!res.ok) throw new Error('Failed to fetch product!')

   const data = await res.json();
   return data;
}
