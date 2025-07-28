import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white font-bold text-xl">
          {portfolioData.footer.brand}
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
          <div className="text-zinc-400 text-sm">
            {portfolioData.footer.copyright}
          </div>
          <div className="text-zinc-500 text-sm">
            {portfolioData.footer.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
