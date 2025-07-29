import { portfolioData } from '../data/portfolioData';
import TypewriterAnimation from './TypewriterAnimation';

const ProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
      {/* Profile Image */}
      <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-600/50 flex-shrink-0 shadow-lg">
        <img 
          src="/api/placeholder/112/112" 
          alt="Profile" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-3xl font-bold text-zinc-300" style={{display: 'none'}}>
          {portfolioData.personal.initials}
        </div>
      </div>
      
      <div className="flex-1 text-center md:text-left">
        {/* Status */}
        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-400 text-xs font-medium uppercase tracking-wider">
            {portfolioData.personal.status}
          </span>
        </div>
        
        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
          <TypewriterAnimation 
            text={portfolioData.personal.name}
            speed={120}
            deleteSpeed={60}
            pauseTime={3000}
          />
        </h1>
      </div>
    </div>
  );
};

export default ProfileHeader;
