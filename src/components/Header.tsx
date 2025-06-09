
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@main/dist/lovable-uploads/074ae349-8ac1-44b2-8801-5f709c4c6b98.png" 
            alt="Francis Life" 
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#diferenciais" className="text-francis-dark hover:text-francis-blue transition-colors">
            Diferenciais
          </a>
          <a href="#depoimentos" className="text-francis-dark hover:text-francis-blue transition-colors">
            Depoimentos
          </a>
          <a href="#faq" className="text-francis-dark hover:text-francis-blue transition-colors">
            FAQ
          </a>
        </nav>

        <Button 
          className="bg-francis-red hover:bg-francis-red/90 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Comprar Agora
        </Button>
      </div>
    </header>
  );
};

export default Header;
