"use client";

import { useEffect, useState } from "react";
import { fetchAllCouponsPaginated, deleteCoupon,Coupon } from "@/lib/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

export default function CouponList() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);

  const loadCoupons = async () => {
  try {
    const data = await fetchAllCouponsPaginated(); // ✅ correct
    setCoupons(data);
  } catch (err) {
    console.error("Failed to load coupons", err);
  }
};


  const handleDelete = async (couponId: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found");
        return;
      }

      await deleteCoupon(couponId, token);
      console.log("Coupon deleted successfully");
      // Refresh list
      loadCoupons();
    } catch (error) {
      console.error("Failed to delete coupon:", error);
    }
  };

  useEffect(() => {
    loadCoupons();
  }, []);

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">Coupon List</h2>
      {coupons.map((coupon) => (
        <Card
          key={coupon._id}
          className="p-4 flex justify-between items-center"
        >
          <div>
            <div className="font-medium text-lg">{coupon.offerDetails}</div>
            {coupon.code && <div className="text-sm">Code: {coupon.code}</div>}
            {coupon.store && (
              <div className="text-sm text-muted-foreground">
                Store: {coupon.store}
              </div>
            )}
            <div className="text-xs text-gray-500">
              Hits: {coupon.hits} | Last Accessed:{" "}
              {new Date(coupon.lastAccessed).toLocaleDateString()}
            </div>
          </div>
          <Button onClick={() => handleDelete(coupon._id)}>Delete</Button>
        </Card>
      ))}
    </div>
  );
}
