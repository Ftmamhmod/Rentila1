import { useLocation, useNavigate } from "react-router-dom";
import type { PropertyType } from "../../types/types";
const SinglePropertyPage = () => {
  const { state } = useLocation();
  const property: PropertyType = state?.property;
  const Navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="h-96 bg-gray-100 relative">
          <img
            src={`../.${property?.image}`}
            alt={property?.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white/80 px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-gray-800">
              ${property.rentDue}/month
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {property.name}
              </h1>
              <div className="flex items-center mt-2">
                <p className="ml-2 text-gray-600">{property.address}</p>
              </div>
            </div>
            <span className="bg-lime-100 text-lime-800 text-sm font-semibold px-3 py-1 rounded-full">
              Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Tenants:</h3>
              {property?.tenants?.length > 0 ? (
                <div className="mb-4">
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-50 rounded-lg">
                      <thead>
                        <tr className="text-xs text-gray-500 border-b">
                          <th className="px-3 py-2 text-left">Name</th>
                          <th className="px-3 py-2 text-left">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {property?.tenants.map((tenant) => (
                          <tr
                            key={tenant.id}
                            className="text-sm border-b last:border-b-0"
                          >
                            <td className="px-3 py-2">
                              <a
                                onClick={() =>
                                  Navigate(`/tenants/${tenant.id}`, {
                                    state: { tenant },
                                  })
                                }
                                className="cursor-pointer text-lime-600"
                              >
                                {tenant.name}
                              </a>
                            </td>
                            <td className="px-3 py-2">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${
                                  tenant.paymentStatus === "paid"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {tenant.paymentStatus === "paid"
                                  ? "Paid"
                                  : "Unpaid"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  There are no tenants yet.
                </p>
              )}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">
                Rent Information
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monthly Rent</span>
                  <span className="text-gray-900">${property.rentDue}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Lease Term</span>
                  <span className="text-gray-900">12 months</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyPage;
