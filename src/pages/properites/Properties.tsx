import PropertyCard from "../../components/property/PropertyCard";
import { useGetProperties } from "../../hooks/use-get-properites";
import Loading from "../../components/Loading";

const Properties = () => {
  const { data, isPending } = useGetProperties();

  if (isPending) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat py-8">
      <div className="container mx-auto px-15 p-15">
        <div className="grid w-full md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-4 pb-4">
          {data?.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
