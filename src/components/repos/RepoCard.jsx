import React from 'react';
import { GoRepo, GoStar, GoRepoForked, GoTrash, GoCheck } from 'react-icons/go';

const RepoCard = ({ 
  repo, 
  handleDelete, 
  selectionMode, 
  isSelected, 
  toggleSelection 
}) => {
  const handleDeleteClick = () => {
    if (window.confirm(`Are you sure you want to delete "${repo.full_name}"?`)) {
      handleDelete(repo.full_name);
    }
  };

  const formattedDate = new Date(repo.created_at).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className={`bg-white shadow-sm rounded-lg p-5 hover:shadow-md transition-all duration-300 border ${
      isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-100'
    } relative`}>
      {/* Selection Checkbox (visible in selection mode) */}
      {selectionMode && (
        <div 
          onClick={toggleSelection}
          className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${
            isSelected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400'
          }`}
        >
          {isSelected && <GoCheck size={14} />}
        </div>
      )}

      {/* Header with Repo Name and Delete Button */}
      <div className="flex justify-between items-start mb-4">
        <div 
          className={`flex items-center max-w-[80%] ${selectionMode ? 'cursor-pointer' : ''}`}
          onClick={selectionMode ? toggleSelection : undefined}
          title={repo.full_name}
        >
          <GoRepo className="text-blue-600 mr-2 text-lg shrink-0" />
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {repo.name}
          </h3>
        </div>
        {!selectionMode && (
          <button
            onClick={handleDeleteClick}
            className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50"
            title="Delete repository"
          >
            <GoTrash size={18} />
          </button>
        )}
      </div>

      {/* Owner Info */}
      <div className="flex items-center mb-3">
        <img
          src={repo.owner?.avatar_url}
          alt={repo.owner?.login}
          className="w-8 h-8 rounded-full mr-2 border border-gray-200"
        />
        <span className="text-sm text-gray-600">{repo.owner?.login}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">
        {repo.description || 'No description provided.'}
      </p>

      {/* Repo Stats */}
      <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-4">
        <div className="flex items-center">
          <span className={`w-3 h-3 rounded-full mr-1 ${repo.language ? 'bg-blue-500' : 'bg-gray-300'}`}></span>
          <span>{repo.language || 'N/A'}</span>
        </div>
        <div className="flex items-center">
          <GoStar className="mr-1" />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center">
          <GoRepoForked className="mr-1" />
          <span>{repo.forks_count || 0}</span>
        </div>
        <div className="flex items-center">
          <span className={`px-1.5 py-0.5 rounded text-xs ${repo.private ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
            {repo.private ? 'Private' : 'Public'}
          </span>
        </div>
      </div>

      {/* Dates */}
      <div className="text-xs text-gray-400 mb-4">
        <div>Created on: {formattedDate}</div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium py-2 rounded text-center transition-colors"
        >
          View Repo
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-medium py-2 rounded text-center transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
