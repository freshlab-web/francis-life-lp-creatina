
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-francis-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/074ae349-8ac1-44b2-8801-5f709c4c6b98.png" 
              alt="Francis Life" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed">
              Mais do que suplementos, oferecemos soluções completas para sua saúde e bem-estar.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 font-inter">Links Rápidos</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#diferenciais" className="hover:text-francis-gold transition-colors">Diferenciais</a></li>
              <li><a href="#depoimentos" className="hover:text-francis-gold transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-francis-gold transition-colors">FAQ</a></li>
              <li><a href="#oferta" className="hover:text-francis-gold transition-colors">Oferta Especial</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 font-inter">Contato</h3>
            <ul className="space-y-2 text-white/80">
              <li>SAC: (11) 9999-9999</li>
              <li>Email: contato@francislife.com.br</li>
              <li>Seg a Sex: 8h às 18h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center gap-2">
            © 2024 Francis Life. Todos os direitos reservados. 
            <span className="flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-francis-red" /> para sua saúde.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
