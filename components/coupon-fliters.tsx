"use client";

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Filter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { fetchStores } from "@/lib/api"

interface Store {
  _id: string
  name: string
}

export function CouponFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [stores, setStores] = useState<Store[]>([])
  const [storesLoading, setStoresLoading] = useState(true)

  // Get current filter values
  const currentStore = searchParams.get("store") || ""
  const isActive = searchParams.get("active") === "true"
  const isValid = searchParams.get("isValid") !== "false" // Default to true
  const isFeatured = searchParams.get("featuredForHome") === "true"

  // Fetch stores for the filter
  useEffect(() => {
    const getStores = async () => {
      try {
        const storeData = await fetchStores()
        setStores(storeData)
      } catch (error) {
        console.error("Failed to fetch stores:", error)
      } finally {
        setStoresLoading(false)
      }
    }

    getStores()
  }, [])

  // Create a new URLSearchParams instance and update the URL
  const createQueryString = (params: Record<string, string | null>) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())

    // Set page to 1 when filters change
    newSearchParams.set("page", "1")

    // Update or remove parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        newSearchParams.delete(key)
      } else {
        newSearchParams.set(key, value)
      }
    })

    return newSearchParams.toString()
  }

  const handleStoreChange = (storeId: string) => {
    const params = { store: storeId === "all" ? null : storeId }
    router.push(`${pathname}?${createQueryString(params)}`)
  }

  const handleCheckboxChange = (key: string, checked: boolean) => {
    // If unchecking "isValid", set it to false explicitly
    // For others, remove the parameter if unchecked
    const value = key === "isValid" ? (checked ? "true" : "false") : checked ? "true" : null

    router.push(`${pathname}?${createQueryString({ [key]: value })}`)
  }

  const clearFilters = () => {
    router.push(pathname)
  }

  // Check if any filters are applied
  const hasFilters = currentStore || isActive || !isValid || isFeatured

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </CardTitle>
          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-xs">
              <X className="mr-1 h-3 w-3" /> Clear
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Store</label>
          <Select value={currentStore || "all"} onValueChange={handleStoreChange} disabled={storesLoading}>
            <SelectTrigger>
              <SelectValue placeholder="All Stores" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stores</SelectItem>
              {stores.map((store) => (
                <SelectItem key={store._id} value={store._id}>
                  {store.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium">Status</label>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="active"
              checked={isActive}
              onCheckedChange={(checked) => handleCheckboxChange("active", checked as boolean)}
            />
            <label
              htmlFor="active"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Active coupons only
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="valid"
              checked={isValid}
              onCheckedChange={(checked) => handleCheckboxChange("isValid", checked as boolean)}
            />
            <label
              htmlFor="valid"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Valid coupons only
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="featured"
              checked={isFeatured}
              onCheckedChange={(checked) => handleCheckboxChange("featuredForHome", checked as boolean)}
            />
            <label
              htmlFor="featured"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Featured coupons only
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
