'use client'

import { Suspense } from "react"
import Client404 from "../../components/client404"

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Client404 />
    </Suspense>
  )
}
