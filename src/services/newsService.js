import { toast } from "react-toastify";
import axiosInstance from "./axiosInterceptor";

export const getNewsCategory = async () => {
    try {
        const response = await axiosInstance.get(`/news/category`);
        return response;
    } catch (error) {
        toast.error(error?.message);
        console.error(error);
    }
}

export const getNewsOfUser = async ({ userId, page, pageSize}) => {
    try {
        const response = await axiosInstance.get(`/news/user/${userId}?page=${page}&pageSize=${pageSize}`);
        return response;
    } catch (error) {
        toast.error(error?.message);
        console.error(error);
    }
}

export const getNewsByCategory = async ({ category, page, pageSize}) => {
    try {
        const response = await axiosInstance.get(`/news?category=${category}&page=${page}&pageSize=${pageSize}`);
        return response;
    } catch (error) {
        toast.error(error?.message);
        console.error(error);
    }
}

export const getNewsDetail = async (newsId) => {
    try {
        const response = await axiosInstance.get(`/news/${newsId}`);
        return response;
    } catch (error) {
        toast.error(error?.message);
        console.error(error);
    }
}

export const createNews = async ({
    title,
    content,
    category,
    thumbnail
}) => {
    try {
        const response = await axiosInstance.post(`/news`, {
            title,
            content,
            category,
            thumbnail
        });
        return response;
    } catch (error) {
        toast.error(error?.message);
        console.error(error);
    }
}

export const editNews = async ({
    newsId,
    title,
    content,
    category,
    thumbnail
}) => {
    try {
        const response = await axiosInstance.put(`/news/${newsId}`, {
            title,
            content,
            category,
            thumbnail
        });
        return response;
    } catch (error) {
        toast.error(error?.message);
        console.error(error);
    }
}