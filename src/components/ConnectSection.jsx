import { portfolioData } from '../data/portfolioData';
import SocialLink from './SocialLink';

const ConnectSection = () => {
  return (
    <div>
      <h2 className="text-white text-lg font-semibold mb-4 uppercase tracking-wide">
        CONNECT
      </h2>
      
      <div className="flex flex-col gap-3">
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
