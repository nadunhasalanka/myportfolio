import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialLink = ({ platform, handle, url, icon }) => {
  const getIconComponent = (platformName) => {
    const iconSize = 20;
    
    switch (platformName.toLowerCase()) {
      case 'linkedin':
        return <FaLinkedin size={iconSize} className="text-blue-600" />;
      case 'github':
        return <FaGithub size={iconSize} className="text-gray-800" />;
      case 'twitter':
        return <FaXTwitter size={iconSize} className="text-black" />;
      default:
        return <span className="text-lg text-black">{icon}</span>;
    }
  };

  return (
    <a 
      href={url}
      className="flex items-center gap-3 p-3 bg-zinc-800/40 rounded-lg group no-underline transition-all duration-300 hover:bg-zinc-700/50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        {getIconComponent(platform)}
      </div>
      
      <div className="flex-1">
        <div className="text-zinc-400 text-xs mb-1">
          {platform}
        </div>
        <div className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">
          {handle}
        </div>
      </div>
    </a>
  );
};

export default SocialLink;
