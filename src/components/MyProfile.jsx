import { Sidebar } from "./Sidebar";

const MyProfile = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-screen">
          <h1 className="mt-4 flex justify-center text-2xl underline decoration-lime-400 decoration-wavy">
            This is my profile page
          </h1>
        </div>
      </div>
    </>
  );
};

export { MyProfile };