import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

export const getProductsByBrand = async () => {
    return await api.get("/stats/products-by-brand/");
}

export const getProductsByCategory = async () => {
    return await api.get("/stats/products-by-category/");
}
    
export const getProductsByPriceRange = async () => {
    return await api.get("/stats/products-by-price-range/");
}

export const getProductsByStockRange = async () => {
    return await api.get("/stats/products-by-stock-range/");
}