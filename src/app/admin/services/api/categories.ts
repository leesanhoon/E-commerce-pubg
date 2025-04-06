import axios from 'axios';
import { API_BASE_URL, ENDPOINTS } from '@/app/config/api';

const API_URL = `${API_BASE_URL}${ENDPOINTS.CATEGORIES}`;

export interface Category {
  id: number;
  name: string;
  description?: string;
}

interface ApiResponse<T> {
  message: string;
  data: T;
}

interface ErrorResponse {
  message: string;
}

const handleError = (error: any): never => {
  const message = (error.response?.data as ErrorResponse)?.message || 
    'Có lỗi xảy ra, vui lòng thử lại sau';
  throw new Error(message);
};

export const getCategories = async () => {
  const response = await axios.get<ApiResponse<Category[]>>(API_URL);
  return response.data.data;
};

export const searchCategories = async (name: string) => {
  const response = await axios.get<ApiResponse<Category[]>>(`${API_URL}?name=${name}`);
  return response.data.data;
};

export const getCategory = async (id: number) => {
  const response = await axios.get<ApiResponse<Category>>(`${API_URL}/${id}`);
  return response.data.data;
};

export const createCategory = async (data: Omit<Category, 'id'>) => {
  const response = await axios.post<ApiResponse<Category>>(API_URL, data);
  return response.data.data;
};

export const updateCategory = async (id: number, data: Omit<Category, 'id'>) => {
  await axios.put<ApiResponse<void>>(`${API_URL}/${id}`, data);
};

export const deleteCategory = async (id: number) => {
  await axios.delete<ApiResponse<void>>(`${API_URL}/${id}`);
};

// SWR Keys
export const CATEGORY_KEYS = {
  all: '/Categories',
  search: (name: string) => `/Categories?name=${name}`,
  detail: (id: number) => `/Categories/${id}`
} as const;