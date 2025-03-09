import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext) // Access setUser from context

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({username}) // Update user globally
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl font-bold text-center mb-4">Login</h2>
        
        <form  onSubmit={handleLogin} className="space-y-4">
          {/* Username */}
          <div>
            <label className="text-white block mb-1">Username</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-white block mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button 
           
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
