import { portfolioData } from '../data/portfolioData';

const AboutSection = () => {
  return (
    <div>
      <h2 className="text-white text-xl font-semibold mb-6">
        {portfolioData.about.title}
      </h2>
      
      {portfolioData.about.paragraphs.map((paragraph, index) => (
        <p key={index} className="text-text-secondary leading-relaxed mb-6">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default AboutSection;
