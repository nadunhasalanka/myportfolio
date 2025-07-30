import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import TechItem from './TechItem';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      id="skills" 
      className="py-20 px-8 max-w-5xl mx-auto"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white relative mb-8"
          variants={titleVariants}
        >
          <span className="">{"</ "}</span>
          {portfolioData.skills.title}
          <span className="">{" >"}</span>
        </motion.h2>
      </div>

      <motion.div 
        className="bg-zinc-800/30 border border-zinc-700/30 rounded-xl p-8 backdrop-blur-sm"
        variants={sectionVariants}
      >
        <motion.div 
          className="flex items-center gap-3 mb-6"
          variants={titleVariants}
        >
          <div className="w-1 h-6 bg-white"></div>
          <h3 className="text-lg font-semibold text-white">
            {portfolioData.skills.toolsTitle}
          </h3>
        </motion.div>
        
        <motion.p 
          className="text-zinc-300 text-sm leading-relaxed mb-8"
          variants={titleVariants}
        >
          {portfolioData.skills.toolsDescription}
        </motion.p>

        <motion.div 
          className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
        >
          {portfolioData.skills.technologies.map((tech, index) => (
            <TechItem key={index} tech={tech} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
