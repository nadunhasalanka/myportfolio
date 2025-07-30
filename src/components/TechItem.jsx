import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiJavascript, 
  SiPhp, 
  SiHtml5,
  SiDocker,
  SiAmazon,
  SiGithub,
  SiC,
  SiPython,
  SiKubernetes,
  SiJenkins,
  SiSpring
} from 'react-icons/si';
import { FaBrain, FaJava } from 'react-icons/fa';

const TechItem = ({ tech, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const getIconComponent = (techName) => {
    const iconProps = { size: 32 };
    
    switch (techName.toLowerCase()) {
      case 'react.js':
        return <SiReact {...iconProps} className="text-cyan-400" />;
      case 'javascript':
        return <SiJavascript {...iconProps} className="text-yellow-400" />;
      case 'php':
        return <SiPhp {...iconProps} className="text-indigo-400" />;
      case 'html':
        return <SiHtml5 {...iconProps} className="text-orange-500" />;
      case 'docker':
        return <SiDocker {...iconProps} className="text-blue-500" />;
      case 'aws':
        return <SiAmazon {...iconProps} className="text-orange-400" />;
      case 'github':
        return <SiGithub {...iconProps} className="text-white" />;
      case 'proficiency with ai':
        return <FaBrain {...iconProps} className="text-purple-400" />;
      case 'c':
        return <SiC {...iconProps} className="text-blue-600" />;
      case 'python':
        return <SiPython {...iconProps} className="text-yellow-300" />;
      case 'kubernetes':
        return <SiKubernetes {...iconProps} className="text-blue-400" />;
      case 'jenkins':
        return <SiJenkins {...iconProps} className="text-red-400" />;
      case 'java':
        return <FaJava {...iconProps} className="text-red-500" />;
      case 'java spring boot':
        return <SiSpring {...iconProps} className="text-green-500" />;
      case 'oop':
        return <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">OOP</div>;
      default:
        return <div className="w-8 h-8 bg-zinc-600 rounded-lg"></div>;
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      className="bg-zinc-900/80 rounded-lg p-4 transition-all duration-300 hover:bg-zinc-800/90 cursor-pointer group"
    >
      <div className="flex items-center gap-4 md:gap-4">
        <motion.div
          className="w-12 h-12 bg-zinc-800/60 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-zinc-700/80 mx-auto md:mx-0"
          whileHover={{ 
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.4 }
          }}
        >
          {getIconComponent(tech.name)}
        </motion.div>
        <h3 className="hidden md:block text-sm font-medium text-white group-hover:text-zinc-100 transition-colors duration-300">
          {tech.name}
        </h3>
      </div>
    </motion.div>
  );
};

export default TechItem;
