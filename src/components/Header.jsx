import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-[8px] border-b border-white/5 z-[1000] px-4 lg:px-6 py-4"
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-bold text-white"
        >
          NCODE<span className="animate-blink text-white">|</span>
        </motion.div>
        
        <motion.ul 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:flex gap-8 list-none"
        >
          {portfolioData.navigation.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <a 
                href={item.label === 'About' ? '#profile' : item.href}
                className="text-zinc-400 hover:text-white font-medium text-sm transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.a 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#resume" 
          className="flex items-center gap-2 bg-transparent border border-zinc-700/50 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer"
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            whileHover={{ y: 2 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7,10 12,15 17,10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </motion.svg>
          Resume
        </motion.a>
      </nav>
    </motion.header>
  );
};

export default Header;
