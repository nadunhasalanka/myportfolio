import ProfileHeader from './ProfileHeader';
import InfoGrid from './InfoGrid';
import AboutSection from './AboutSection';
import ConnectSection from './ConnectSection';

const ProfileCard = () => {
  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-12 backdrop-blur-[10px] relative">
      <ProfileHeader />
      <InfoGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <AboutSection />
        <ConnectSection />
      </div>
    </div>
  );
};

export default ProfileCard;
