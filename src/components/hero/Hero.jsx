export default function Hero() {
  const handleLogin = () => {
    // Direct browser redirect instead of Axios request
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/github`;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              GitHub Repo Remover
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              The easiest way to clean up your GitHub account. Find and remove
              unwanted repositories in seconds.
            </p>

            <button
              onClick={handleLogin}
              className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              Connect with GitHub
            </button>
          </div>

          {/* Feature highlights */}
          <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700 transform transition-transform hover:-translate-y-2">
              <div className="text-green-400 text-2xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Quick Search
              </h3>
              <p className="text-gray-400">
                Find repositories by name, date, or size
              </p>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700 transform transition-transform hover:-translate-y-2">
              <div className="text-green-400 text-2xl mb-4">🗑️</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Batch Delete
              </h3>
              <p className="text-gray-400">
                Remove multiple repositories at once
              </p>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700 transform transition-transform hover:-translate-y-2">
              <div className="text-green-400 text-2xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Secure Access
              </h3>
              <p className="text-gray-400">OAuth authentication with GitHub</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
