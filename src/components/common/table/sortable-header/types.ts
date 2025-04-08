import { SortConfig } from "@/types/sorting"

export interface SortableHeaderProps<T> {
  label: string
  sortKey: keyof T
  sortConfig: SortConfig<T>
  onSort: (key: keyof T) => void
  className?: string
}