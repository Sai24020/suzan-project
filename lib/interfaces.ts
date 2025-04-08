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
    thumbnail: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;

}

export interface Products {
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

export interface Categories {
    slug: string;
    name: string;
    url: string;
}

export interface MappedCategories {
Technology: string[];
Clothing: string[];
Home: string[];
Beauty: string[];
Accessories: string[];
Vehicles: string[];
}