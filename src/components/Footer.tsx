
import { Heart } from "lucide-react";
import Linkedin from "./IconeLinkedin"
import Instagram from "./IconeInstagram"

const Footer = () => {
  return (
    <footer className="bg-francis-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <img 
              src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@main/dist/lovable-uploads/074ae349-8ac1-44b2-8801-5f709c4c6b98.png" 
              alt="Francis Life" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed">
              Mais do que suplementos, oferecemos soluções completas para sua saúde e bem-estar.
            </p>
            <div className="flex justify-start gap-12 items-center [&_img]:w-32 mt-12 [&_svg]:w-5 [&_path]:fill-white">
            <a href="https://www.linkedin.com/company/francis-life-produtos-naturais-ltda/" target="_blank"><Linkedin/></a>
            <a href="https://www.instagram.com/francislifesuplementos/" target="_blank"><Instagram/></a>
          </div>
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
            <h3 className="font-bold text-lg mb-4 font-inter">Informações de contato:</h3>
            <ul className="space-y-2 text-white/80">
              <li>SAC: (11) 5588-7878</li>
              <li>Email: <a href="mailto:atendimento@francislife.com.br" target="_blank">atendimento@francislife.com.br</a></li>
              <li>Localização: <a target="_blank" href="https://www.google.com/maps?sca_esv=45c8bf4228d081b3&output=search&q=R.+Prof.+Apr%C3%ADgio+Gonzaga,+78+-+S%C3%A3o+Judas,+S%C3%A3o+Paulo+-+SP,+04303-000&source=lnms&fbs=AIIjpHxX5k-tONtMCu8aDeA7E5WMlVZjGnBiGIxaghLPqA-PlfgbLKUxiHcJwD8uXnH2piRyKM12_cSdaiHx34ICa6job54HaXV5uis1-k7h9VLxS8xdSsgmtZJ_jbed6F347LGucFrWzysfWZaudhxEXuj17yWsIk42rBNqT6PpnzHrad1eHSwEzPbq2m0hQFarm_qPBYmWfS4ORIyQfTop1lhtGB29Mw&entry=mc&ved=1t:200715&ictx=111">
              R. Prof. Aprígio Gonzaga, 78 - São Judas, São Paulo - SP, 04303-000</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex justify-center gap-12 items-center [&_img]:w-32 mb-12">
            <img src="https://www.francislifesuplementos.com.br/wp-content/uploads/2023/05/compra-segura.webp"/>
            <img src="https://www.francislifesuplementos.com.br/wp-content/uploads/2023/05/site-seguro.png"/>
          </div>

          

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
