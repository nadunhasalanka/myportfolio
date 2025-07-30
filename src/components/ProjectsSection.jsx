import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const filteredProjects = activeFilter === 'All' 
    ? portfolioData.projects.items 
    : portfolioData.projects.items.filter(project => project.category === activeFilter);

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

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const handleCardHover = (cardId) => {
    setHoveredCardId(cardId);
  };

  return (
    <motion.section 
      id="projects" 
      // className="py-20 px-8 max-w-6xl mx-auto relative"
      className="py-20 px-8 max-w-5xl mx-auto relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background blur overlay */}
      <AnimatePresence>
        {hoveredCardId && (
          <motion.div
            className="fixed inset-0 bg-black/15 backdrop-blur-[1px] z-[5] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        )}
      </AnimatePresence>

      <div className="mb-12 relative z-10">
        {/* Title Section */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white relative mb-6"
          variants={titleVariants}
        >
          {/* <span className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 w-3 h-1 bg-white"></span> */}
          <span className="block sm:inline">{"</ Featured"}</span>
          <span className="block sm:inline"><span className="ml-40 sm:ml-1">{" Projects >"}</span></span>
        </motion.h2>

        {/* Filter Buttons Row */}
        <motion.div 
          className="flex gap-2 flex-wrap justify-end"
          variants={filterVariants}
        >
          {portfolioData.projects.filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-zinc-800 text-zinc-300 hover:text-emerald-400 hover:bg-zinc-700'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>
      </div>
              

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        variants={containerVariants}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`transition-all duration-500 ease-out ${
              hoveredCardId && hoveredCardId !== project.id 
                ? 'opacity-60 scale-[0.98] blur-[0.5px]' 
                : 'opacity-100 scale-100 blur-0'
            }`}
            style={{ 
              filter: hoveredCardId && hoveredCardId !== project.id 
                ? 'brightness(0.7) saturate(0.8)' 
                : 'brightness(1) saturate(1)'
            }}
          >
            <ProjectCard 
              project={project} 
              index={index} 
              onHoverChange={handleCardHover}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
