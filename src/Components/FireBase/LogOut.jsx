import { logout } from "./Auth";

const LogoutButton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 hover:scale-105 transition-all duration-300 ease-in-out"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
