import { useEffect, useState } from "react";
import { GoSortAsc, GoSortDesc, GoTrash, GoCheck } from "react-icons/go";
import instance from "../../api/axiosInstance";
import Header from "../layout/Header";
import RepoCard from "./RepoCard";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc"); // Default: newest first
  const [selectedRepos, setSelectedRepos] = useState([]);
  const [selectionMode, setSelectionMode] = useState(false);

  useEffect(() => {
    instance
      .get("/repos")
      .then((res) => {
        setRepos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const handleDelete = (repoName) => {
    instance
      .delete("/delete-repo", {
        data: { fullRepoName: repoName },
      })
      .then(() => { 
        setRepos((prev) => prev.filter((r) => r.full_name !== repoName));
      })
      .catch((err) => console.error("Delete error:", err));
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const toggleSelectionMode = () => {
    setSelectionMode(!selectionMode);
    setSelectedRepos([]);
  };

  const toggleRepoSelection = (repoName) => {
    setSelectedRepos((prev) => 
      prev.includes(repoName)
        ? prev.filter(name => name !== repoName)
        : [...prev, repoName]
    );
  };

  const handleBatchDelete = () => {
    if (selectedRepos.length === 0) return;
    
    if (window.confirm(`Are you sure you want to delete ${selectedRepos.length} repositories?`)) {
      // Show loading state
      setLoading(true);
      
      // Use the batch delete endpoint
      instance
        .delete("/batch-delete-repos", {
          data: { repoNames: selectedRepos },
        })
        .then((response) => {
          // Update UI based on successful deletions
          const successfullyDeleted = response.data.results.successful;
          setRepos((prev) => 
            prev.filter((repo) => !successfullyDeleted.includes(repo.full_name))
          );
          
          // Show results to user if there were any failures
          if (response.data.results.failed.length > 0) {
            const failedNames = response.data.results.failed.map(f => f.repoName).join(", ");
            alert(`Some repositories could not be deleted: ${failedNames}`);
          }
          
          // Exit selection mode
          setSelectionMode(false);
          setSelectedRepos([]);
        })
        .catch((err) => {
          console.error("Batch delete error:", err);
          alert("An error occurred during batch deletion. Please try again.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const sortedRepos = [...repos].sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return sortOrder === "asc"
      ? dateA - dateB // Oldest first
      : dateB - dateA; // Newest first
  });

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Your GitHub Repositories 
          </h2>

          <div className="flex space-x-3">
            {selectionMode ? (
              <>
                <button
                  onClick={handleBatchDelete}
                  disabled={selectedRepos.length === 0}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm transition-colors ${
                    selectedRepos.length > 0
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <GoTrash />
                  <span>Delete Selected ({selectedRepos.length})</span>
                </button>
                <button
                  onClick={toggleSelectionMode}
                  className="flex items-center space-x-1 bg-gray-200 px-3 py-2 rounded-md text-sm hover:bg-gray-300 transition-colors"
                >
                  <span>Cancel</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={toggleSelectionMode}
                  className="flex items-center space-x-1 bg-white border border-gray-200 px-3 py-2 rounded-md text-sm hover:bg-gray-50 transition-colors"
                >
                  <GoCheck className="text-gray-600" />
                  <span>Select Multiple</span>
                </button>
                <button
                  onClick={toggleSortOrder}
                  className="flex items-center space-x-1 bg-white border border-gray-200 px-3 py-2 rounded-md text-sm hover:bg-gray-50 transition-colors"
                >
                  {sortOrder === "asc" ? (
                    <>
                      <GoSortAsc className="text-gray-600" />
                      <span>Oldest first</span>
                    </>
                  ) : (
                    <>
                      <GoSortDesc className="text-gray-600" />
                      <span>Newest first</span>
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <p className="text-gray-500">Loading repositories...</p>
          </div>
        ) : sortedRepos.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <p className="text-gray-600">No repositories found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedRepos.map((repo) => (
              <RepoCard
                key={repo.id}
                repo={repo}
                handleDelete={handleDelete}
                selectionMode={selectionMode}
                isSelected={selectedRepos.includes(repo.full_name)}
                toggleSelection={() => toggleRepoSelection(repo.full_name)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Repos;
