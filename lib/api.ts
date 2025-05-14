import axios from "axios";

const COUPONS_API = "https://coupon-app-backend.vercel.app/api/coupons";
const BASE_URL = "https://coupon-app-backend.vercel.app/api";
const CATEGORIES_API = `${BASE_URL}/categories`;
const AUTH_API = `${BASE_URL}/auth`;

// ---------------------
// TYPES
// ---------------------

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

export type Coupon = {
  _id: string;
  offerDetails: string;
  store: string;
  code?: string;
  active?: boolean;
  isValid?: boolean;
  featuredForHome?: boolean;
  expirationDate?: string;
  hits: number;
  lastAccessed: string;
};

export type Category = {
  name: string;
  description?: string;
  icon?: string;
  active?: boolean;
  order?: number;
};

// ---------------------
// STORES
// ---------------------

export const fetchStores = async () => {
  const res = await fetch(`${BASE_URL}/stores`);
  const json = await res.json();
  return json.data;
};

export const createStore = async (storeData: Partial<Store>, token: string) => {
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

// ---------------------
// COUPONS
// ---------------------

type Coupons = {
  _id: string;
  offerDetails: string;
  code?: string;
  active: boolean;
  isValid: boolean;
  featuredForHome: boolean;
  hits: number;
  lastAccessed: string;
  expirationDate?: string;
  store?: {
    name: string;
    trackingUrl: string;
    image?: {
      url: string;
      alt: string;
    };
  };
};



export async function fetchAllCouponsPaginated() {
  const allCoupons: Coupon[] = [];
  let currentPage = 1;
  let totalPages = 1;

  try {
    while (currentPage <= totalPages) {
      const response = await axios.get(COUPONS_API, {
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

export async function createCoupon(data: Coupon, token: string) {
  const res = await axios.post(COUPONS_API, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export const deleteCoupon = async (id: string, token: string) => {
  const res = await fetch(`${COUPONS_API}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to delete coupon");
  return res.json();
};

export async function trackCoupon(couponId: string) {
  const res = await axios.post(`${COUPONS_API}/${couponId}/track`);
  return res.data;
}

// ---------------------
// CATEGORIES
// ---------------------

export async function fetchCategories(params: {
  page?: number;
  limit?: number;
  active?: boolean;
} = {}) {
  const res = await axios.get(CATEGORIES_API, { params });
  return res.data.data;
}

export async function fetchCategoryById(id: string) {
  const res = await axios.get(`${CATEGORIES_API}/${id}`);
  return res.data.data;
}

export async function createCategory(data: Category, token: string) {
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

// ---------------------
// AUTH
// ---------------------

export async function login(email: string, password: string) {
  const res = await axios.post(`${AUTH_API}/login`, { email, password });
  return res.data;
}

export async function registerAdmin(
  data: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  },
  token: string
) {
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

export async function resetPassword(
  token: string,
  data: {
    password: string;
    passwordConfirm: string;
  }
) {
  const res = await axios.patch(`${AUTH_API}/reset-password/${token}`, data);
  return res.data;
}

export async function updatePassword(
  data: {
    currentPassword: string;
    newPassword: string;
    passwordConfirm: string;
  },
  token: string
) {
  const res = await axios.patch(`${AUTH_API}/update-password`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}
