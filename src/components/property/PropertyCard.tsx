import { useNavigate } from "react-router-dom";
import type { PropertyType } from "../../types/types";

interface PropertyCardProps {
  property: PropertyType;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { id, name, address, rentDue, image } = property;
  const Navigate = useNavigate();
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="h-48  bg-gray-200 flex items-center justify-center">
        <span>
          <img className="h-48 w-72" src={image} alt="aparment" />
        </span>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 truncate">{name}</h3>
          <span className="bg-lime-100 text-lime-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            For Rent
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          <b>Address: </b> {address}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center">
            <span className="text-gray-700 text-sm">
              <b>Rent Due: $</b>
              {rentDue}
            </span>
          </div>

          <div className="flex items-center">
            <span className="text-gray-700 text-sm">
              Tenants:
              {Number(property.tenants.length) > 0 ? (
                property.tenants.length
              ) : (
                <p className="text-gray-500">There is no tenants </p>
              )}
            </span>
          </div>
        </div>

        <button
          onClick={() => Navigate(`/properties/${id}`, { state: { property } })}
          className="w-full bg-lime-600 hover:bg-lime-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
