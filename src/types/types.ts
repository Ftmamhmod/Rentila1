export interface PropertyType {
  id: number;
  name: string;
  address: string;
  tenants: TenantType[];
  rentDue: number;
  image?: string;
}

export interface TenantType {
  id: number;
  name: string;
  leaseStart: string;
  leaseEnd: string;
  rentAmount: number;
  paymentStatus: string;
}
export interface UserType {
  email: string;
  password: string;
}
export interface AuthContextType {
  token: string | null;
  login: (user: UserType) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}
