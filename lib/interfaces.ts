// API product    
  export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    warrantyInformation: string;
    shippingInformation: string;
    returnPolicy: string;
    images: string[];
    image: string;
    thumbnail: string;
    discountPercentage: number;
    rating: Rating;
    stock: number;
    tags: string[];
    brand: string;

}
export interface Rating {
    count: number;
    rate: number;
}
  export interface ProductResultList {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource[];
}
  
export interface NamedAPIResource {
    id: number;
    name: string;
    url: string;
}


 