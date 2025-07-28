import { portfolioData } from '../data/portfolioData';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-[8px] border-b border-white/5 z-[1000] px-4 lg:px-6 py-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-white">
          NCODE<span className="animate-blink text-white">|</span>
        </div>
        
        <ul className="hidden md:flex gap-8 list-none">
          {portfolioData.navigation.map((item, index) => (
            <li key={index}>
              <a 
                href={item.label === 'About' ? '#profile' : item.href}
                className="text-zinc-400 hover:text-white font-medium text-base transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <a 
          href="#resume" 
          className="flex items-center gap-2 bg-transparent border border-zinc-700/50 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7,10 12,15 17,10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
