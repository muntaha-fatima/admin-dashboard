

import axios from "axios";

const COUPONS_API = "https://coupon-app-backend.vercel.app/api/coupons";

// ---------------------
// STORES
// ---------------------

// 

// lib/api.ts
export type Store = {
  _id: string;
  name: string;
  trackingUrl: string;
  short_description: string;
  long_description?: string;
  image?: { url: string; alt: string };
  categories?: string[];
  seo?: {
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
  };
  language?: string;
  isTopStore?: boolean;
  isEditorsChoice?: boolean;
  heading?: string;
};



const BASE_URL = "https://coupon-app-backend.vercel.app/api";

export const fetchStores = async () => {
  const res = await fetch(`${BASE_URL}/stores`);
  const json = await res.json();
  return json.data; // because response is { status: "success", data: [...] }
};

export const createStore = async (storeData: any, token: string) => {
  const res = await fetch(`${BASE_URL}/stores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(storeData),
  });
  return res.json();

};


export const deleteStore = async (id: string, token: string) => {
  const res = await fetch(`${BASE_URL}/stores/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();

  
};


const API_BASE = "https://coupon-app-backend.vercel.app/api/coupons";

export async function fetchAllCouponsPaginated(p0: { isValid: boolean; }) {
  const allCoupons: any[] = [];
  let currentPage = 1;
  let totalPages = 1;

  try {
    while (currentPage <= totalPages) {
      const response = await axios.get("https://coupon-app-backend.vercel.app/api/coupons", {
        params: { page: currentPage },
      });

      const { data, metadata } = response.data;

      allCoupons.push(...data);
      totalPages = metadata.totalPages;
      currentPage++;
    }

    return allCoupons;
  } catch (error) {
    console.error("Error fetching all coupons:", error);
    throw error;
  }
}

// Create coupon
export async function createCoupon(data: {
  offerDetails: string;
  store: string;
  code?: string;
  active?: boolean;
  isValid?: boolean;
  featuredForHome?: boolean;
  expirationDate?: string;
}) {
  const res = await axios.post(COUPONS_API, data, {
    headers: {
      Authorization: `Bearer YOUR_TOKEN_HERE`, // replace with real token
    },
  });
  return res.data;
}

// Delete coupon

// lib/api.ts


const CATEGORIES_API = "https://coupon-app-backend.vercel.app/api/categories";

// ✅ Fetch categories with optional filters (pagination, active)
export async function fetchCategories(params: {

  page?: number;
  limit?: number;
  active?: boolean;
} = {}) {
  const res = await axios.get(CATEGORIES_API, { params });
  return res.data.data; // contains categories, totalCategories, etc.
}

// ✅ Fetch a single category by ID
export async function fetchCategoryById(id: string) {
  const res = await axios.get(`${CATEGORIES_API}/${id}`);
  return res.data.data;
}

// ✅ Create a new category (with Authorization)
export async function createCategory(
  data: {
    name: string;
    description?: string;
    icon?: string;
    active?: boolean;
    order?: number;
  },
  token: string
) {
  const res = await axios.post(CATEGORIES_API, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
}

export async function deleteCategory(id: string, token: string) {
  const res = await axios.delete(`${CATEGORIES_API}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}


// Track coupon (increment hits + update lastAccessed)
export async function trackCoupon(couponId: string) {
  const res = await axios.post(`${COUPONS_API}/${couponId}/track`);
  return res.data;
}
// lib/api.ts

export const deleteCoupon = async (id: string, token: string) => {
  try {
    const res = await fetch(`https://coupon-app-backend.vercel.app/api/coupons/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to delete coupon");
    }

    return await res.json();
  } catch (error) {
    console.error("Delete coupon error:", error);
    throw error;
  }
};

const AUTH_API = "https://coupon-app-backend.vercel.app/api/auth";

export async function login(email: string, password: string) {
  const res = await axios.post(`${AUTH_API}/login`, { email, password });
  // Login usage


  return res.data; // contains token and user info
}

export async function registerAdmin(data: {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}, token: string) {
  const res = await axios.post(`${AUTH_API}/register`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function getCurrentUser(token: string) {
  const res = await axios.get(`${AUTH_API}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function forgotPassword(email: string) {
  const res = await axios.post(`${AUTH_API}/forgot-password`, { email });
  return res.data;
}

export async function resetPassword(token: string, data: {
  password: string;
  passwordConfirm: string;
}) {
  const res = await axios.patch(`${AUTH_API}/reset-password/${token}`, data);
  return res.data;
}

export async function updatePassword(data: {
  currentPassword: string;
  newPassword: string;
  passwordConfirm: string;
}, token: string) {
  const res = await axios.patch(`${AUTH_API}/update-password`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

