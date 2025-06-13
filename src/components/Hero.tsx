
import { Button } from "@/components/ui/button";
import { Check, Heart, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-francis-light via-white to-francis-light min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-inter font-bold text-francis-dark leading-tight">
                Mais do que Creatina.
                <span className="text-francis-red">
                  &nbsp;Energia, articulação e saúde 
                </span> <br />
                <span className="text-francis-blue">
                    em uma única fórmula.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 font-inter">
                Você sabia que a maioria das creatinas vendidas no mercado é apenas creatina pura?
              </p>
              

              <p className="text-xl text-gray-600 font-inter">A Creatina Premium Francis Life vai muito além: é um suplemento completo com 
                <strong className="text-francis-red"> Creatina + Colágeno Tipo II + Coenzima Q10</strong>, 
                desenvolvido para quem busca mais força, mobilidade e vitalidade com saúde real.</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-francis-gold" />
                <span className="text-sm font-medium">Mais Energia</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-francis-blue" />
                <span className="text-sm font-medium">Articulações Protegidas</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
                <Heart className="w-5 h-5 text-francis-red" />
                <span className="text-sm font-medium">Saúde Cardiovascular</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="!bg-francis-red hover:!bg-francis-red/90 text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Compre Agora - R$ 379,99
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-francis-blue text-francis-blue hover:bg-francis-blue hover:text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300"
                onClick={() => document.getElementById('diferenciais')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="relative z-10 mx-auto max-w-md">
              <img 
                src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@refs/heads/main/dist/lovable-uploads/img-produto.webp" 
                alt="Creatina Francis Life - Q10 + Colágeno TII" 
                className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-francis-blue/20 to-francis-red/20 rounded-full blur-3xl transform scale-75"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
