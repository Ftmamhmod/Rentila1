import axios from "axios";
import type { AxiosInstance } from "axios";
import type { PropertyType, TenantType } from "../types/types";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

export const PropertyService = {
  getAllProperties: async (): Promise<PropertyType[]> => {
    try {
      const response = await api.get("/properties");
      return response.data;
    } catch (error) {
      console.error("Error fetching properties:", error);
      throw error;
    }
  },

  getPropertyById: async (id: number): Promise<PropertyType> => {
    try {
      const response = await api.get(`/properties/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching property ${id}:`, error);
      throw error;
    }
  },
};

export const TenantService = {
  getAllTenants: async (): Promise<TenantType[]> => {
    try {
      const response = await api.get("/tenants");
      return response.data;
    } catch (error) {
      console.error("Error fetching tenants:", error);
      throw error;
    }
  },

  getTenantById: async (id: number): Promise<TenantType> => {
    try {
      const response = await api.get(`/tenants/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching tenant ${id}:`, error);
      throw error;
    }
  },
};
