import { Load } from "@/types/load";
import { SortConfig } from "@/types/sorting";

export interface LoadsContextProps {
  loads: Load[];
  isLoading: boolean;
  error: Error | null;
  deleteLoad: (id: number) => void;
  updateLoad: (id: number, load: Load) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  paginatedLoads: Load[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  sortConfig: SortConfig<Load>;
  handleSort: (key: keyof Load) => void;
  setLoads: (loads: Load[] | ((prevLoads: Load[]) => Load[])) => void;
} 