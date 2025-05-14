//  "use client";

// import { useEffect, useState } from "react";
// import { fetchStores } from "@/lib/api";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// type Store = {
//   _id: string;
//   name: string;
//   trackingUrl: string;
//   short_description?: string;
//   long_description?: string;
//   image?: {
//     url: string;
//     alt?: string;
//   };
//   coupons?: {
//     _id: string;
//     offerDetails: string;
//     code: string;
//     active: boolean;
//     isValid: boolean;
//     featuredForHome: boolean;
//     hits: number;
//     lastAccessed: string | null;
//   }[];
// };

// export default function StoreList() {
//   const [stores, setStores] = useState<Store[]>([]);
//   const [loading, setLoading] = useState(false);

//   const loadStores = async () => {
//     setLoading(true);
//     try {
//       const data = await fetchStores();
//       console.log("Fetched stores:", data); // Debug
//       setStores(data);
//     } catch (err) {
//       console.error("Failed to load stores", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadStores();
//   }, []);

//   return (
//     <div className="space-y-4">
//       <h2 className="text-2xl font-bold">Stores</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : stores.length === 0 ? (
//         <p>No stores found.</p>
//       ) : (
//         stores.map((store) => (
          
//           <Card key={store._id} className="p-4 space-y-3">
//             <div className="flex items-start gap-4">
//               {store.image?.url && (
//                 <img
//                   src={store.image.url}
//                   alt={store.image.alt || store.name}
//                   className="w-16 h-16 object-contain rounded"
//                 />
//               )}
//               <div className="space-y-1">
//                 <div className="text-lg font-semibold">{store.name}</div>
//                 <p className="text-sm text-muted-foreground">{store.short_description}</p>
//                 {store.long_description && (
//                   <p className="text-xs text-gray-500">{store.long_description}</p>
//                 )}
//                 <a
//                   href={store.trackingUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-xs text-blue-600 underline"
//                 >
//                   Visit Store
//                 </a>
//                 {store.coupons && store.coupons.length > 0 && (
//                   <ul className="text-xs mt-2 space-y-1">
//                     {store.coupons.map((coupon) => (
//                       <li key={coupon._id}>🔖 {coupon.offerDetails}</li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           </Card>
//         ))
//       )}
//     </div>
//   );
// }




// 


"use client";

import { useEffect, useState } from "react";
import { fetchStores, deleteStore } from "@/lib/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Store = {
  _id: string;
  name: string;
  short_description: string;
  long_description?: string;
  trackingUrl: string;
  image?: { url: string; alt: string };
  categories?: string[];
  language?: string;
  isTopStore?: boolean;
  isEditorsChoice?: boolean;
  heading?: string;
};

export default function StoreList() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(false);

  const loadStores = async () => {
    setLoading(true);
    try {
      const data = await fetchStores();
      setStores(data);
    } catch (err) {
      console.error("Failed to load stores", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStores();
  }, []);

  // StoreList.tsx (ya jahan bhi button hai)

const handleDelete = async (id: string) => {
  const token = localStorage.getItem("token");

if (!token) return;

// use token in API call:

  try {
    await deleteStore(id, token);
    await fetchStores(); // stores reload karo
  } catch (error) {
    console.error("Error deleting store:", error);
  }
};


  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Stores</h2>
      {loading ? (
        <p>Loading...</p>
      ) : stores.length === 0 ? (
        <p>No stores found.</p>
      ) : (
        stores.map((store) => (
          <Card key={store._id} className="p-4 flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                {store.image?.url && (
                  <Image
                    src={store.image.url}
                    alt={store.image.alt || store.name}
                    className="w-12 h-12 object-contain rounded"
                  />
                )}
                <div>
                  <div className="font-semibold">{store.name}</div>
                  <p className="text-sm text-muted-foreground">{store.short_description}</p>
                </div>
              </div>

              {store.long_description && (
                <p className="text-sm text-gray-600">{store.long_description}</p>
              )}

              <div className="text-xs text-gray-500">
                {store.categories?.join(", ")} | {store.language} | {store.heading}
              </div>
            </div>
<Button variant="destructive" onClick={() => handleDelete(store._id)}>
  Delete
</Button>

          </Card>
        ))
      )}
    </div>
  );
}
