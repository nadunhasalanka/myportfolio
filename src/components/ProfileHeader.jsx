import { portfolioData } from '../data/portfolioData';
import TypewriterAnimation from './TypewriterAnimation';

const ProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
      <div className="w-30 h-30 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-600 flex items-center justify-center text-5xl font-bold text-text-secondary flex-shrink-0 border border-zinc-600 self-center md:self-start" style={{width: '120px', height: '120px'}}>
        {portfolioData.personal.initials}
      </div>
      
      <div className="flex-1 text-center md:text-left">
        <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
          <div className="relative">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <span className="text-red-400 text-sm font-semibold uppercase tracking-wider animate-pulse">
            {portfolioData.personal.status}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 relative">
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
