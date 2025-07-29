import { portfolioData } from '../data/portfolioData';

const AboutSection = () => {
  return (
    <div>
      <h2 className="text-white text-lg font-semibold mb-4 uppercase tracking-wide">
        {portfolioData.about.title}
      </h2>
      
      {portfolioData.about.paragraphs.map((paragraph, index) => (
        <p key={index} className="text-zinc-400 text-sm leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default AboutSection;
