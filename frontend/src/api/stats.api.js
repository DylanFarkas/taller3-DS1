import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000/api/v1/stats/",
})

export const getProductsByBrand = async () => {
    return await api.get("products-by-brand/");
}

export const getProductsByCategory = async () => {
    return await api.get("products-by-category/");
}

export const getProductsByPriceRange = async () => {
    return await api.get("products-by-price-range/");
}

export const getProductsByStockRange = async () => {
    return await api.get("products-by-stock-range/");
}