
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, ShoppingCart, Truck } from "lucide-react";

const OfertaEspecial = () => {
  return (
    <section id="oferta" className="py-20 bg-gradient-to-br from-francis-red/5 via-white to-francis-blue/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-francis-red text-white px-6 py-2 rounded-full font-bold text-sm mb-4 animate-pulse">
              OFERTA ESPECIAL
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-francis-dark mb-6 font-inter">
              Garante já o seu!
            </h2>
          </div>

          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-gray-500 line-through">
                        De R$ 479,99
                      </span>
                      <div className="bg-francis-red text-white px-3 py-1 rounded-full text-sm font-bold">
                        21% OFF
                      </div>
                    </div>
                    <div className="text-5xl md:text-6xl font-bold text-francis-red font-inter">
                      R$ 379,99
                    </div>
                    <p className="text-lg text-francis-dark font-semibold">
                      Creatina + Colágeno Tipo II + CoQ10
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Truck className="w-5 h-5 text-francis-blue" />
                      <span className="text-francis-dark">Frete grátis nas compras acima de R$ 399,00</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-francis-gold" />
                      <span className="text-francis-dark">Estoque limitado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-francis-red" />
                      <span className="text-francis-dark">Garantia de 7 dias</span>
                    </div>
                  </div>

                  <a href="https://www.francislifesuplementos.com.br/energia-e-disposicao/" target="_blank"><Button 
                    size="lg" 
                    className="w-full bg-francis-red hover:bg-francis-red/90 text-white py-6 text-xl rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <ShoppingCart className="w-6 h-6 mr-2" />
                    COMPRE AGORA
                  </Button>
                  </a>

                  <p className="text-center text-sm text-gray-600">
                    Pagamento seguro e protegido
                  </p>
                </div>

                <div className="bg-gradient-to-br from-francis-blue/10 to-francis-red/10 p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@main/dist/lovable-uploads/a63c31bf-67aa-4a8e-adda-f7372b249b5f.png" 
                      alt="Creatina Francis Life" 
                      className="w-64 h-auto mx-auto drop-shadow-xl transform hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-francis-dark font-semibold font-inter">
                      A creatina da Francis Life é muito mais do que um suplemento esportivo.
                    </p>
                    <p className="text-gray-600">
                      É uma fórmula inteligente para quem cuida da saúde de forma completa: 
                      <strong> força, articulação e coração</strong> — tudo em um único frasco.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OfertaEspecial;
