import Loading from "../../components/Loading";
import { TenantsTable } from "../../components/tenant/TenantsTable";
import { useGetProperties } from "../../hooks/use-get-properites";

const Tenants = () => {
  const { data, isPending } = useGetProperties();
  if (isPending) {
    return <Loading />;
  }

  return (
    <div className=" min-h-screen bg-cover bg-center bg-no-repeat py-8 ">
      <div className="container mx-auto px-15 p-15">
        <TenantsTable properties={data} />
      </div>
    </div>
  );
};

export default Tenants;
