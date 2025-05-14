// app/404.tsx

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically load the Client Component
const Client404 = dynamic(() => import('@/components/client404'), {
  ssr: false,
})

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Client404 />
    </Suspense>
  )
}
