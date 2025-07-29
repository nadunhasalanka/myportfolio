import { portfolioData } from '../data/portfolioData';

const InfoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 ">
      {portfolioData.infoItems.map((item, index) => (
        <div key={index} className="flex items-center gap-3 ">
          <div className="w-5 h-5 flex items-center justify-center text-base">
            {item.icon}
          </div>
          <span className="text-text-secondary font-medium">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default InfoGrid;
