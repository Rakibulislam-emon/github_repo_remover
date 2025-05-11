import { FaGithub, FaCode, FaTrash, FaShieldAlt } from "react-icons/fa";
import Header from "../layout/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            About GitHub Repo Remover
          </h1>
          
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">My Mission</h2>
            <p className="text-gray-300 mb-6">
              I created GitHub Repo Remover to help developers efficiently manage their GitHub repositories. 
              As developers, we often create numerous repositories for testing, learning, or temporary projects 
              that eventually clutter our GitHub accounts. This tool makes it easy to clean up your GitHub 
              profile by providing a simple, intuitive interface to manage and delete unwanted repositories.
            </p>
            
            <div className="border-t border-gray-700 my-6"></div>
            
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-gray-700 p-3 rounded-lg mr-4">
                  <FaGithub className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white">Secure Authentication</h3>
                  <p className="text-gray-400">OAuth 2.0 integration with GitHub for secure access</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-700 p-3 rounded-lg mr-4">
                  <FaCode className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white">Modern Tech Stack</h3>
                  <p className="text-gray-400">Built with React 19, Vite, and Node.js</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-700 p-3 rounded-lg mr-4">
                  <FaTrash className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white">Batch Operations</h3>
                  <p className="text-gray-400">Delete multiple repositories at once</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-700 p-3 rounded-lg mr-4">
                  <FaShieldAlt className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white">Data Privacy</h3>
                  <p className="text-gray-400">I never store your GitHub data</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">About the Developer</h2>
            <p className="text-gray-300 mb-6">
              GitHub Repo Remover is a personal project developed by Rakibul Islam Emon. As a developer, 
              I understand the importance of maintaining a clean and organized GitHub profile. 
              I created this tool to make developers' lives easier, including my own.
            </p>
            
            <div className="mt-8 text-center">
              <a 
                href="https://github.com/Rakibulislam-emon/github_repo_remover" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}