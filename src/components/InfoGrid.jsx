import { portfolioData } from '../data/portfolioData';

const InfoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {portfolioData.infoItems.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-800 shadow-md flex items-center justify-center text-sm">
            {item.icon}
          </div>
          <span className="text-zinc-300 text-sm font-medium">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default InfoGrid;
