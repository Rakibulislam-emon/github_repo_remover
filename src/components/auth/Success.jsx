import axios from "axios";
import { useEffect, useState } from "react";
import { GoCheck, GoRepo } from "react-icons/go";

const Success = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("github_token", token);
      axios
        .get("https://api.github.com/user", {
          headers: {
            Authorization: `token ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Connecting to GitHub...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="p-8 text-center max-w-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Authentication Failed</h1>
          <p className="text-gray-600 mb-6">We couldn't connect to your GitHub account. Please try again.</p>
          <button
            onClick={() => window.location.href = "/"}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-4">
        <div className="flex flex-col items-center text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <GoCheck className="text-green-500 text-4xl" />
          </div>
          
          {/* User Info */}
          <div className="mb-8">
            <img 
              src={user.avatar_url} 
              alt={user.login}
              className="w-24 h-24 rounded-full border-4 border-white shadow-md mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Welcome, {user.name || user.login}!</h1>
            <p className="text-gray-500">@{user.login}</p>
            {user.bio && <p className="text-gray-600 mt-2 text-sm">{user.bio}</p>}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 w-full mb-8">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-gray-800">{user.public_repos}</div>
              <div className="text-xs text-gray-500">Repositories</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-gray-800">{user.followers}</div>
              <div className="text-xs text-gray-500">Followers</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-gray-800">{user.following}</div>
              <div className="text-xs text-gray-500">Following</div>
            </div>
          </div>
          
          {/* Action Button */}
          <button
            onClick={() => window.location.href = "/repos"}
            className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md flex items-center justify-center cursor-pointer"
          >
            <GoRepo className="mr-2" />
            View Your Repositories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;

