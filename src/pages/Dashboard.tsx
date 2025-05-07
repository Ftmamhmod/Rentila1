const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen  bg-[url('/public/rental-property-dashboard.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-white p-6 rounded-4xl shadow-md max-w-2xl mx-auto text-center">
          <h3 className="mt-2 md:text-5xl text-3xl font-bold text-gray-80 md:p-2">
            <b>
              Welcome to <h1 className="text-lime-600">Rentila!</h1>
            </b>
          </h3>
          <p className="mt-2 md:text-3xl text-2xl text-gray-600 p-5">
            Your dashboard is ready for you.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
