import ProfileHeader from './ProfileHeader';
import InfoGrid from './InfoGrid';
import AboutSection from './AboutSection';
import ConnectSection from './ConnectSection';
import { motion } from 'framer-motion';

const ProfileCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-br from-zinc-900/60 via-zinc-800/40 to-zinc-900/60 border border-zinc-700/30 rounded-2xl p-8 backdrop-blur-sm shadow-2xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ProfileHeader />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <InfoGrid />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8"
      >
        <AboutSection />
        <ConnectSection />
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
