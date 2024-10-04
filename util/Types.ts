
/* some types for https:://dummyjson.com/products 
 * not complete but ok for demonstration
 */


export type Product = {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
    tags: string[]
    sku: string
    reviews: Review[]
}

export type Review = {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

export type ProductsResponse = {
    products: Product[]
    total: number
    skip: number
    limit: number
}

