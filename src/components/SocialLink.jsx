const SocialLink = ({ platform, handle, url, icon }) => {
  return (
    <a 
      href={url}
      className="flex items-center gap-3 p-3 bg-zinc-800/40 rounded-lg group no-underline transition-all duration-300 hover:bg-zinc-700/50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg text-black transition-transform duration-300 group-hover:scale-105">
        {icon}
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
