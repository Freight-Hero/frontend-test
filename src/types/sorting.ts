export type SortDirection = 'asc' | 'desc'

export type SortConfig<T> = {
  key: keyof T
  direction: SortDirection
}

export type SortableColumn<T> = {
  key: keyof T
  label: string
} 