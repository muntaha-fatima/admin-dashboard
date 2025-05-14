// ✅ app/404.tsx
import dynamic from 'next/dynamic'

const Client404 = dynamic(() => import('@/components/client404'), {
  ssr: false,
})

export default function NotFoundPage() {
  return <Client404 />
}
