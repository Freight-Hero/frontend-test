import { Load } from "@/types/load";

export interface LoadsContextProps {
  loads: Load[];
  isLoading: boolean;
  error: Error | null;
  deleteLoad: (id: number) => void;
}