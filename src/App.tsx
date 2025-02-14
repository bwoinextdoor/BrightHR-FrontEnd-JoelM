import React from 'react';
import './App.css';
import FolderView from './components/FolderView';
import { FileProvider } from './contexts/FileContext';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const App = () => {
  const [showDocuments, setShowDocuments] = React.useState(false);
  return (
    <FileProvider>
      <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto md:min-w-xl lg:min-w-4xl text-center mt-28 text-white">
      <img src="/logo.svg" alt="Logo" className="mx-auto mb-20" style={{ width: '40%' }} />
      <button 
      onClick={() => setShowDocuments(!showDocuments)} 
      className="mb-4 px-5 py-3 bg-blue-500 text-black rounded text-sm !text-xxl font-bold"
      style={{ 
      fontFamily: 'Arial', 
      fontWeight: 'bold', 
      transform: 'scale(1.3)', 
      background: 'linear-gradient(45deg,rgb(60, 220, 226) 30%,rgb(255, 142, 83) 90%)',
      animation: 'gradient 3s ease infinite'
      }}
      >
      {showDocuments ? 'Hide Documents' : 'View Documents'}
      </button>
      {showDocuments && <FolderView />}
      </div>

        <footer className="footer mt-[-5rem]">
          <div className="footer-icons">
            <a href="https://www.linkedin.com/company/brighthr/?originalSubdomain=uk" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/BrightHRcom/?locale=en_GB" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/bright_hr/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com/BrightHR" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </footer>
      </div>
    </FileProvider>
  );
};

export default App;
