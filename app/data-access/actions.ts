'use server';

import { Product } from "@/lib/interfaces";
import { API_ENDPOINT } from "@/app/data-access/endpoints";


// Fetch a single product by its id
export const fetchProduct = async (id: number): Promise<Product> => {
    const res = await fetch(`${API_ENDPOINT}/${id}`);
  //TODO:
    if (!res.ok) {
        // throw new Error("Failed to fetch products");
        throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);
    }
    const product: Product = await res.json();
    return product; 
};

// Fetch all products by its limit
export async function fetchProducts(page = 1, limit = 24) {
    const skip = (page - 1) * limit; // Beräkna hur många produkter att hoppa över
  
    const res = await fetch(`${API_ENDPOINT}?limit=${limit}&skip=${skip}`);
    //TODO:
    if (!res.ok) {
      throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);
    }
  
    const data = await res.json();
  
    return {
      products: data.products, // Lista över produkter
      total: data.total,       // Totalt antal produkter (för paginering)
    };
  }

// Fetch products by category
export const fetchCategories = async () => {
      const res = await fetch(`${API_ENDPOINT}/categories`);
    //TODO: check if data is ok
    //await delay(5000); // Wait for 5 seconds;
      if (!res.ok) {
            throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);
      }
      const data = await res.json();
      return data;
};

// Fetch from API
export const fetchFromAPI = async <T>(endpoint: string) => {
    const res = await fetch(endpoint, {
      headers: {
        "User-Agent": "TestNextjsApp/1.0",
        Accept: "application/",
      },
    });
  
    if (!res.ok) {
      return {
        message:
          "There was an error fetching data from the API, please try again later",
      };
    }
    const data: T = await res.json();
    return data;
  };


