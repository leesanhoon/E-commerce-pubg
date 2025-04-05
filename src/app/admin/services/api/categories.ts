import axios from 'axios';

const API_URL = 'http://localhost:3000/api/categories';

export interface Category {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

interface ErrorResponse {
  message: string;
}

const handleError = (error: any): never => {
  const message = (error.response?.data as ErrorResponse)?.message || 
    'Có lỗi xảy ra, vui lòng thử lại sau';
  throw new Error(message);
};

export const categoryApi = {
  getAll: async (): Promise<Category[]> => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  getById: async (id: string): Promise<Category> => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  create: async (data: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>): Promise<Category> => {
    try {
      const response = await axios.post(API_URL, data);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  update: async (id: string, data: Partial<Category>): Promise<Category> => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  delete: async (id: string): Promise<void> => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      throw handleError(error);
    }
  },
};