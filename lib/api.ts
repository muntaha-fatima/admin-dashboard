// import axios from "axios";

// const response = "https://coupon-app-backend.vercel.app/api/coupons";

// export async function fetchCoupons(params = {}) {
//   const response = await axios.get(API_BASE, { params });
//   return response.data.data; // coupons array
// }

// export async function createCoupon(data: {
//   offerDetails: string;
//   store: string;
//   code?: string;
//   active?: boolean;
//   isValid?: boolean;
//   featuredForHome?: boolean;
//   expirationDate?: string;
  
// }) {
//   const response = await axios.post(API_BASE, data, {
//     headers: {
//       Authorization: `Bearer YOUR_TOKEN_HERE`, // replace with actual token logic
//     },
//   });
//   return response.data;
// }

// export async function deleteCoupon(id: string) {
//   const response = await axios.delete(`${API_BASE}/${id}`, {
//     headers: {
//       Authorization: `Bearer YOUR_TOKEN_HERE`,
//     },
//   });
//   return response.data;
// }

// export async function trackCoupon(couponId: string) {
//   const response = await axios.post(`${API_BASE}/${couponId}/track`);
//   return response.data;
// }








// // lib/api/stores.ts

// // lib/api/stores.ts

// // lib/api.ts
// // lib/api.ts


// export const API_BASE = "https://coupon-app-backend.vercel.app/api/stores";

// export async function fetchStores() {
//   try {
//     const response = await axios.get(API_BASE);
//     return response.data.data; // because API response = { status, data, metadata }
//   } catch (error) {
//     console.error("Error fetching stores:", error);
//     throw error;
//   }
// }

// export async function deleteStore(id: string) {
//   try {
//     const response = await axios.delete(`${API_BASE}/${id}`, {
//       headers: {
//         Authorization: `Bearer YOUR_TOKEN_HERE`, // Replace with real token
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting store:", error);
//     throw error;
//   }
// }




/**
 * Fetch stores for dropdown
 * Note: This is a mock function as the API endpoint wasn't provided
 */
// export async function fetchStores() {
//   // In a real app, you would fetch from an actual endpoint
//   // This is a mock implementation
//   return [
//     { _id: "store1", name: "Amazon" },
//     { _id: "store2", name: "Walmart" },
//     { _id: "store3", name: "Target" },
//     { _id: "store4", name: "Best Buy" },
//     { _id: "store5", name: "Newegg" },
//     { _id: "store6", name: "eBay" },
//   ]
// }





// lib/api.ts

import axios from "axios";

const COUPONS_API = "https://coupon-app-backend.vercel.app/api/coupons";
const STORES_API = "https://coupon-app-backend.vercel.app/api/stores";

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


const API_URL = "https://coupon-app-backend.vercel.app/api/stores";

// lib/api.tsconst BASE_URL = "https://coupon-app-backend.vercel.app/api";

// lib/api.ts

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

export async function fetchCoupons(p0: { isValid: boolean; }) {
  let allCoupons: any[] = [];
  let currentPage = 1;
  let totalPages = 1;

  try {
    while (currentPage <= totalPages) {
      const response = await axios.get(API_BASE, {
        params: { page: currentPage },
      });

      const { data, metadata } = response.data;

      allCoupons.push(...data); // Add this page's coupons
      totalPages = metadata.totalPages; // Set total pages
      currentPage++; // Go to next page
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

