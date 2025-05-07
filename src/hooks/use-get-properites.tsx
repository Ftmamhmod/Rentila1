import { useQuery } from "@tanstack/react-query";
import { PropertyService } from "../services/api";
import type { PropertyType } from "../types/types";

export const useGetProperties = () => {
  return useQuery<PropertyType[], Error>({
    queryKey: ["properties"],
    queryFn: PropertyService.getAllProperties,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};

export const useGetSingleProperty = (id: number) => {
  return useQuery<PropertyType, Error>({
    queryKey: ["property", id],
    queryFn: () => PropertyService.getPropertyById(id),
    enabled: !!id,
  });
};
