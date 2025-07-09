'use client'

import ProtectedRoute from '@/components/auth/ProtectedRoute'
import InteractiveMap from '@/components/map/InteractiveMap'

export default function MapPage() {
  return (
    <ProtectedRoute>
      <InteractiveMap />
    </ProtectedRoute>
  )
}
