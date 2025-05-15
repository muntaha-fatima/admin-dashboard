// components/client404.tsx
'use client'

import { useSearchParams } from 'next/navigation'

export default function Client404() {
  const params = useSearchParams()
  const search = params.get('q')

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      {search && <p>You searched for: {search}</p>}
    </div>
  )
}
