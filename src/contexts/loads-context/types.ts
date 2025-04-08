import { Load } from "@/types/load";

export interface LoadsContextProps {
  loads: Load[];
  isLoading: boolean;
  error: Error | null;
  deleteLoad: (id: number) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  paginatedLoads: Load[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
} 