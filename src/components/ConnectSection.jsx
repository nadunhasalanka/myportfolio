import { portfolioData } from '../data/portfolioData';
import SocialLink from './SocialLink';

const ConnectSection = () => {
  return (
    <div>
      <h2 className="text-white text-xl font-semibold mb-6">
        CONNECT
      </h2>
      
      <div className="flex flex-col gap-4">
        {portfolioData.socialLinks.map((link, index) => (
          <SocialLink
            key={index}
            platform={link.platform}
            handle={link.handle}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ConnectSection;
