import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLoadsContext } from "@/contexts/loads-context"

export const FiltersDropdown = () => {
  const { statusFilter, setStatusFilter } = useLoadsContext()

  const handleFilterChange = (value: string) => {
    setStatusFilter(value)
  }

  const resetFilter = () => {
    setStatusFilter("")
  }

  return (
    <div className="flex items-center gap-2">
      <Select value={statusFilter} onValueChange={handleFilterChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue className="text-sm" placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="in route">In Route</SelectItem>
          <SelectItem value="pick up">Pick Up</SelectItem>
          <SelectItem value="delivered">Delivered</SelectItem>
        </SelectContent>
      </Select>
      {statusFilter && (
        <Button
          variant="ghost"
          size="sm"
          onClick={resetFilter}
          className="h-8 px-2 text-sm text-slate-500 hover:text-slate-900"
        >
          Reset
        </Button>
      )}
    </div>
  )
}
