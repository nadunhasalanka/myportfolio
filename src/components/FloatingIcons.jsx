import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  SiDocker, 
  SiReact, 
  SiAmazonwebservices,
  SiSpring,
  SiKubernetes,
  SiMongodb,
  SiPostgresql
} from 'react-icons/si';
import { FaCloud, FaJava } from 'react-icons/fa';

// Custom Java SVG Icon
const JavaIcon = ({ size = 48, color = '#ED8B00' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218" fill={color}/>
    <path d="M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82" fill={color}/>
    <path d="M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118" fill={color}/>
    <path d="M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627" fill={color}/>
  </svg>
);

// Custom Node.js SVG Icon
const NodeIcon = ({ size = 48, color = '#68A063' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2zm0 1.33c.1 0 .2.03.28.08l7.44 4.3c.16.09.28.26.28.44v8.58c0 .18-.12.35-.28.44l-7.44 4.3c-.17.1-.39.1-.56 0l-7.44-4.3c-.16-.09-.28-.26-.28-.44V7.71c0-.18.12-.35.28-.44l7.44-4.3c.08-.05.18-.08.28-.08z"/>
  </svg>
);

// Custom Python SVG Icon
const PythonIcon = ({ size = 48, color = '#3776AB' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" fill={color}/>
  </svg>
);

const FloatingIcons = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const icons = [
    { 
      Icon: SiDocker, 
      color: '#2496ED',
      size: 40,
      id: 'docker'
    },
    { 
      Icon: SiReact, 
      color: '#61DAFB',
      size: 42,
      id: 'react'
    },
    { 
      Icon: SiAmazonwebservices, 
      color: '#FF9900',
      size: 44,
      id: 'aws'
    },
    { 
      Icon: FaCloud, 
      color: '#4285F4',
      size: 38,
      id: 'cloud'
    },
    { 
      Icon: JavaIcon, 
      color: '#ED8B00',
      size: 40,
      id: 'java'
    },
    { 
      Icon: SiSpring, 
      color: '#6DB33F',
      size: 38,
      id: 'spring'
    }
  ];

  const generateRandomPath = (index) => {
    const xRange = dimensions.width;
    const yRange = dimensions.height;
    
    return {
      x: [
        Math.random() * xRange,
        Math.random() * xRange,
        Math.random() * xRange,
        Math.random() * xRange
      ],
      y: [
        Math.random() * yRange,
        Math.random() * yRange,
        Math.random() * yRange,
        Math.random() * yRange
      ],
      rotate: [0, 90, 180, 360],
      scale: [0.8, 1.2, 0.9, 1.0],
      opacity: [0.1, 0.4, 0.2, 0.3]
    };
  };

  // Only show on large desktop screens for best performance
  if (dimensions.width < 1280) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((iconData, index) => {
        const { Icon, color, size, id } = iconData;
        const animation = generateRandomPath(index);
        
        return (
          <motion.div
            key={id}
            className="absolute"
            initial={{
              x: animation.x[0],
              y: animation.y[0],
              opacity: 0.3,
              scale: 0.8,
              rotate: 0
            }}
            animate={{
              x: animation.x,
              y: animation.y,
              rotate: animation.rotate,
              scale: animation.scale,
              opacity: animation.opacity
            }}
            transition={{
              duration: 25 + Math.random() * 25, // Animation between 25-50s
              repeat: Infinity,
              ease: "linear",
              delay: index * 4, // Staggered start times
              times: [0, 0.33, 0.66, 1] // Four keyframes timing
            }}
            style={{
              filter: 'blur(1px)',
              mixBlendMode: 'soft-light'
            }}
          >
            <Icon 
              size={size}
              color={color}
              style={{
                filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.1))',
                opacity: 0.3
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
