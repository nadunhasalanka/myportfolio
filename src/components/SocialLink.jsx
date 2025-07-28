const SocialLink = ({ platform, handle, url, icon }) => {
  return (
    <a 
      href={url}
      className="flex items-center gap-4 p-3 bg-zinc-800/50 border border-zinc-600/30 rounded-lg no-underline transition-all duration-300 hover:bg-zinc-600/50 hover:border-zinc-600/60"
    >
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl text-black">
        {icon}
      </div>
      
      <div className="flex-1">
        <div className="text-text-secondary text-sm mb-1">
          {platform}
        </div>
        <div className="text-white font-medium">
          {handle}
        </div>
      </div>
    </a>
  );
};

export default SocialLink;
