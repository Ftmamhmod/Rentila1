import { useLocation } from "react-router-dom";
import type { TenantType } from "../../types/types";

const TenantsDetils = () => {
  const { state } = useLocation();
  const tenant: TenantType = state?.tenant;
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gray-50 px-8 py-6 border-b">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Tenant Details</h1>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                tenant?.paymentStatus === "paid"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {tenant?.paymentStatus === "paid" ? "Paid" : "Not Paid"}
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Tenant Name</p>
                <p className="font-medium">{tenant?.name || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Lease Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Lease Period</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Start Date</span>
                    <span className="text-gray-900">
                      {tenant?.leaseStart || "N/A"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">End Date</span>
                    <span className="text-gray-900">
                      {tenant?.leaseEnd || "N/A"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="text-gray-900">12 months</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">
                  Financial Information
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Rent Amount</span>
                    <span className="text-gray-900">
                      ${tenant?.rentAmount || "0"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Payment Status</span>
                    <span
                      className={`font-medium ${
                        tenant?.paymentStatus === "paid"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {tenant?.paymentStatus === "paid" ? "Paid" : "Not Paid"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Information (optional) */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Additional Information
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">
                No additional information available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantsDetils;
