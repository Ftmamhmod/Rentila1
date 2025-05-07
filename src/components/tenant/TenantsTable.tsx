import { useState } from "react";
import type { PropertyType } from "../../types/types";
import { useNavigate } from "react-router-dom";

interface TenantsTableProps {
  properties: PropertyType[] | undefined;
}

export const TenantsTable = ({ properties }: TenantsTableProps) => {
  const Navigate = useNavigate();
  const allTenants = properties?.flatMap(
    (property) =>
      property.tenants?.map((tenant) => ({
        ...tenant,
        propertyName: property.name,
        rentAmount: tenant.rentAmount || 0,
      })) || []
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTenants = allTenants?.filter(
    (tenant) =>
      tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.propertyName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (filteredTenants?.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        There are no tenants available.
      </div>
    );
  }
  return (
    <div className="overflow-x-auto w-full">
      <input
        type="text"
        placeholder="Search for name or property....."
        className="mb-4 p-2 border rounded w-1/2"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="min-w-full bg-white border border-gray-200 rounded-lg divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className="text-gray-600 text-sm font-medium ">
            <th className="px-6 py-3 border-b">Name</th>
            <th className="px-6 py-3 border-b">Property</th>
            <th className="px-6 py-3 border-b">Lease Start</th>
            <th className="px-6 py-3 border-b">Lease End</th>
            <th className="px-6 py-3 border-b">Rent Amount</th>
            <th className="px-6 py-3 border-b">Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTenants?.map((tenant) => (
            <tr
              onClick={() =>
                Navigate(`/tenants/${tenant.id}`, { state: { tenant } })
              }
              key={tenant.id}
              className="hover:bg-gray-50 text-center cursor-pointer"
            >
              <td className="px-6 py-4 border-b">{tenant.name}</td>
              <td className="px-6 py-4 border-b">{tenant.propertyName}</td>
              <td className="px-6 py-4 border-b">{tenant.leaseStart}</td>
              <td className="px-6 py-4 border-b">{tenant.leaseEnd}</td>
              <td className="px-6 py-4 border-b">{tenant.rentAmount}</td>
              <td className="px-6 py-4 border-b">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    tenant.paymentStatus === "paid"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {tenant.paymentStatus === "paid" ? "paid" : " not paid"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-sm text-gray-500">
        Total of tenants: {filteredTenants?.length}
      </div>
    </div>
  );
};
