import { Suspense } from "react";
import Client404 from "@/components/client404";

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading 404...</div>}>
      <Client404 />
    </Suspense>
  );
}
