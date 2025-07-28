import { 
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiPhp, 
  SiHtml5 
} from 'react-icons/si';

const TechItem = ({ tech }) => {
  const getIconComponent = (logoStyle) => {
    const iconProps = { size: 24, className: "text-white" };
    
    switch (logoStyle) {
      case 'typescript-logo':
        return <SiTypescript {...iconProps} className="text-blue-400" />;
      case 'javascript-logo':
        return <SiJavascript {...iconProps} className="text-yellow-400" />;
      case 'react-logo':
        return <SiReact {...iconProps} className="text-cyan-400" />;
      case 'nextjs-logo':
        return <SiNextdotjs {...iconProps} className="text-white" />;
      case 'php-logo':
        return <SiPhp {...iconProps} className="text-indigo-400" />;
      case 'html-logo':
        return <SiHtml5 {...iconProps} className="text-orange-500" />;
      default:
        return <div className="w-6 h-6 bg-zinc-600 rounded"></div>;
    }
  };

  const getLogoStyles = (logoStyle) => {
    const baseClasses = "w-10 h-10 rounded-lg flex items-center justify-center";
    
    switch (logoStyle) {
      case 'typescript-logo':
        return `${baseClasses} bg-blue-600/20 border border-blue-600/30`;
      case 'javascript-logo':
        return `${baseClasses} bg-yellow-400/20 border border-yellow-400/30`;
      case 'react-logo':
        return `${baseClasses} bg-cyan-400/20 border border-cyan-400/30`;
      case 'nextjs-logo':
        return `${baseClasses} bg-white/10 border border-white/20`;
      case 'php-logo':
        return `${baseClasses} bg-indigo-600/20 border border-indigo-600/30`;
      case 'html-logo':
        return `${baseClasses} bg-orange-600/20 border border-orange-600/30`;
      default:
        return `${baseClasses} bg-zinc-600/20 border border-zinc-600/30`;
    }
  };

  return (
    <div className="bg-zinc-800/50 border border-zinc-600/30 rounded-lg p-6 transition-all duration-300 hover:bg-zinc-600/50 hover:border-zinc-600/60 hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-4">
        <div className={getLogoStyles(tech.logoStyle)}>
          {getIconComponent(tech.logoStyle)}
        </div>
        <h3 className="text-lg font-semibold text-white">
          {tech.name}
        </h3>
      </div>
      
      <p className="text-text-secondary text-sm leading-relaxed">
        {tech.description}
      </p>
    </div>
  );
};

export default TechItem;
