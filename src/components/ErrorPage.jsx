const ErrorPage = () => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="m-6 flex h-[30vh] w-[70vh] flex-col items-center justify-center rounded-2xl border-none bg-gray-100 p-4 shadow-lg transition duration-300 hover:cursor-pointer hover:shadow-md">
          <h1 className="text-4xl font-bold text-red-600">Opps!!!</h1>
          <h2 className="text-2xl font-semibold text-purple-700">
            Something went wrong
          </h2>
        </div>
      </div>
    </>
  );
};

export { ErrorPage };
