import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import ProjectMockup from './ProjectMockup';

const ProjectCard = ({ project, index, onHoverChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  // Mouse position tracking for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth magnetic movement
  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  // Transform mouse position to rotation values
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) * 0.3);
    mouseY.set((e.clientY - centerY) * 0.3);
  };

  const handleHoverStart = () => {
    setIsHovered(true);
    onHoverChange(project.id);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    onHoverChange(null);
    mouseX.set(0);
    mouseY.set(0);
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
      rotateX: 25,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.165, 0.84, 0.44, 1],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatingVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.5
      }
    }
  };

  const glowVariants = {
    hover: {
      boxShadow: [
        "0 0 20px rgba(16, 185, 129, 0.2)",
        "0 0 40px rgba(16, 185, 129, 0.4)",
        "0 0 20px rgba(16, 185, 129, 0.2)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const contentVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: [0.165, 0.84, 0.44, 1]
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: [0.165, 0.84, 0.44, 1]
      }
    }
  };

  const buttonContainerVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.165, 0.84, 0.44, 1],
        delay: 0.1
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      y: -3,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="flex flex-col h-full cursor-pointer"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        style={{
          x,
          y,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="bg-dark-card border border-dark-border rounded-xl overflow-hidden backdrop-blur-[10px] transition-all duration-500 hover:border-emerald-500/50 relative z-10 flex flex-col h-full"
      >
        <motion.div
          variants={glowVariants}
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
        />
        
        <motion.div variants={contentVariants}>
          <div className="relative h-75 bg-zinc-900 overflow-hidden flex-shrink-0 rounded-t-xl">
            <motion.div
              variants={imageVariants}
              className="w-full h-full"
            >
              {project.hasVideo ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  <ProjectMockup type={project.mockupType} />
                </video>
              ) : (
                <ProjectMockup type={project.mockupType} />
              )}
            </motion.div>
            
            {/* Static Status Badge - no animation on hover */}
            <div className="absolute top-4 right-4 bg-success-green text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg z-20">
              {project.status}
            </div>

            {/* Gradient overlay that appears on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
            />

            {/* Magnetic buttons */}
            <motion.div
              className="absolute bottom-6 left-6 right-6 flex gap-3"
              variants={buttonContainerVariants}
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
            >
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center gap-2 bg-white text-black px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer shadow-2xl backdrop-blur-sm border border-white/20"
              >
                <span>👁️</span>
                Live Demo
              </motion.a>
              
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center gap-2 bg-zinc-900/90 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 border border-zinc-700 cursor-pointer shadow-2xl backdrop-blur-sm"
              >
                <span>👁️</span>
                View Code
              </motion.a>
            </motion.div>
          </div>
          
          <div className="p-6 transition-all duration-300 flex-grow flex flex-col bg-gradient-to-b from-dark-card to-dark-card/90">
            <motion.div 
              className="text-emerald-400 text-sm font-semibold mb-2 uppercase tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              {project.category}
            </motion.div>
            
            <motion.h3 
              className="text-white text-2xl font-bold mb-3 hover:text-emerald-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              {project.title}
            </motion.h3>
            
            <motion.p 
              className="text-zinc-400 leading-relaxed mb-6 flex-grow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            >
              {project.description}
            </motion.p>
            
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <div className="text-zinc-500 text-sm font-semibold mb-3 uppercase tracking-wider">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex}
                    className="bg-zinc-800/80 border border-zinc-600/50 text-zinc-300 px-3 py-1 rounded-[10px] text-xs font-medium hover:border-emerald-500/50 hover:text-emerald-300 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.7 + index * 0.1 + techIndex * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
            >
              <div className="text-zinc-500 text-sm font-semibold mb-3 uppercase tracking-wider">
                Key Features
              </div>
              <ul className="list-none space-y-2">
                {project.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex}
                    className="text-zinc-400 text-sm relative pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.9 + index * 0.1 + featureIndex * 0.1,
                      duration: 0.4
                    }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="absolute left-0 text-emerald-400 text-lg leading-3">•</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
