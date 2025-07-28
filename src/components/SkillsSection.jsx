import { portfolioData } from '../data/portfolioData';
import TechItem from './TechItem';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

const SkillsSection = () => {
  return (
    
    // <section id="skills" className="py-20 px-8 max-w-6xl mx-auto">
    <section id="skills" className="py-20 px-8 max-w-5xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white relative mb-8">
          {/* <span className="hidden lg:block absolute -left-4 top-1/2 transform -translate-y-1/2 w-3 h-1 bg-white"></span> */}
            <span className="">{"</ "}</span>
            {portfolioData.skills.title}
            <span className="">{" >"}</span>
        </h2>
      </div>

      <div className="bg-dark-card border border-dark-border rounded-xl p-8 backdrop-blur-[10px]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-white"></div>
          <h3 className="text-2xl font-bold text-white">
            {portfolioData.skills.toolsTitle}
          </h3>
        </div>
        
        <p className="text-text-secondary leading-relaxed mb-8">
          {portfolioData.skills.toolsDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.technologies.map((tech, index) => (
            <TechItem key={index} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
