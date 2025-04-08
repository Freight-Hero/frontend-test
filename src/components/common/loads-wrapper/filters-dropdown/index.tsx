import { ListFilter, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"

// Helper function to get region label
const getRegionLabel = (value: string): string => {
  const labels: Record<string, string> = {
    west: "West Coast",
    east: "East Coast",
    midwest: "Midwest",
    south: "South",
    northeast: "Northeast",
    southwest: "Southwest"
  }
  return labels[value] || ""
}

// Helper function to get carrier type label
const getCarrierTypeLabel = (value: string): string => {
  const labels: Record<string, string> = {
    express: "Express Services",
    logistics: "Logistics Companies",
    transport: "Transport Services",
    haulers: "Haulers"
  }
  return labels[value] || ""
}

// Helper function to get route type label
const getRouteTypeLabel = (value: string): string => {
  const labels: Record<string, string> = {
    interstate: "Interstate",
    intrastate: "Same State",
    regional: "Regional",
    cross_country: "Cross Country"
  }
  return labels[value] || ""
}

export const FiltersDropdown = () => {
  const [statusFilter, setStatusFilter] = useState<string[]>([])
  const [regionFilter, setRegionFilter] = useState("")
  const [carrierTypeFilter, setCarrierTypeFilter] = useState("")
  const [routeTypeFilter, setRouteTypeFilter] = useState("")

  // Calculate total active filters
  const activeFiltersCount = 
    statusFilter.length + 
    (regionFilter ? 1 : 0) + 
    (carrierTypeFilter ? 1 : 0) + 
    (routeTypeFilter ? 1 : 0)

  // Reset all filters
  const resetFilters = () => {
    setStatusFilter([])
    setRegionFilter("")
    setCarrierTypeFilter("")
    setRouteTypeFilter("")
  }

  // Remove individual status filter
  const removeStatusFilter = (status: string) => {
    setStatusFilter(prev => prev.filter(s => s !== status))
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="relative">
              <ListFilter className="w-4 mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <div className="flex items-center justify-between px-2 py-1.5">
              <DropdownMenuLabel className="text-sm font-medium">Filters</DropdownMenuLabel>
              {activeFiltersCount > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={resetFilters}
                  className="h-8 px-2 text-sm text-slate-500 hover:text-slate-900"
                >
                  Reset all
                </Button>
              )}
            </div>
            <DropdownMenuSeparator />
            
            {/* Status Filters */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="relative">
                Load Status
                {statusFilter.length > 0 && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {statusFilter.length}
                  </span>
                )}
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuCheckboxItem
                  checked={statusFilter.includes("in route")}
                  onCheckedChange={(checked) =>
                    setStatusFilter(prev =>
                      checked 
                        ? [...prev, "in route"]
                        : prev.filter(status => status !== "in route")
                    )
                  }
                >
                  In Route
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={statusFilter.includes("pick up")}
                  onCheckedChange={(checked) =>
                    setStatusFilter(prev =>
                      checked
                        ? [...prev, "pick up"]
                        : prev.filter(status => status !== "pick up")
                    )
                  }
                >
                  Pick Up
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={statusFilter.includes("delivered")}
                  onCheckedChange={(checked) =>
                    setStatusFilter(prev =>
                      checked
                        ? [...prev, "delivered"]
                        : prev.filter(status => status !== "delivered")
                    )
                  }
                >
                  Delivered
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            {/* Region Filters */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="relative">
                Region
                {regionFilter && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-100 text-blue-900 rounded-full w-2 h-2" />
                )}
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup value={regionFilter} onValueChange={setRegionFilter}>
                  <DropdownMenuRadioItem value="west">West Coast</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="east">East Coast</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="midwest">Midwest</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="south">South</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="northeast">Northeast</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="southwest">Southwest</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            {/* Carrier Type Filters */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="relative">
                Carrier Type
                {carrierTypeFilter && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-100 text-blue-900 rounded-full w-2 h-2" />
                )}
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup value={carrierTypeFilter} onValueChange={setCarrierTypeFilter}>
                  <DropdownMenuRadioItem value="express">Express Services</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="logistics">Logistics Companies</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="transport">Transport Services</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="haulers">Haulers</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            {/* Route Type Filters */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="relative">
                Route Type
                {routeTypeFilter && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-100 text-blue-900 rounded-full w-2 h-2" />
                )}
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup value={routeTypeFilter} onValueChange={setRouteTypeFilter}>
                  <DropdownMenuRadioItem value="interstate">Interstate</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="intrastate">Same State</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="regional">Regional</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="cross_country">Cross Country</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {statusFilter.map(status => (
            <div
              key={status}
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
            >
              <span className="capitalize">{status}</span>
              <button
                onClick={() => removeStatusFilter(status)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
          {regionFilter && (
            <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <span>{getRegionLabel(regionFilter)}</span>
              <button
                onClick={() => setRegionFilter("")}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          {carrierTypeFilter && (
            <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <span>{getCarrierTypeLabel(carrierTypeFilter)}</span>
              <button
                onClick={() => setCarrierTypeFilter("")}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          {routeTypeFilter && (
            <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <span>{getRouteTypeLabel(routeTypeFilter)}</span>
              <button
                onClick={() => setRouteTypeFilter("")}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
