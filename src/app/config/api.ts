export const API_BASE_URL = 'http://localhost:5000/api';

export const ENDPOINTS = {
  CATEGORIES: '/Categories'
};

export const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error('Có lỗi xảy ra khi tải dữ liệu') as Error & { status?: number };
    error.status = res.status;
    throw error;
  }
  const json = await res.json();
  return json.data;
};