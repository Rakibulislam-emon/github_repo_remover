import axios from "axios";
import { useEffect, useState } from "react";

const Success = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("github_token", token); // optional
      axios
        .get("https://api.github.com/user", {
          headers: {
            Authorization: `token ${token}`,
          },
        })
        .then((res) => setUser(res.data))
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, []);

  if (!user) return <p>Loading user info...</p>;

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-green-600">Login Successful ✅</h1>
      <p className="mt-4 text-xl">Welcome, {user.name || user.login}!</p>
    </div>
  );
};

export default Success;
