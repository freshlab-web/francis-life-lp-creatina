
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, RefreshCw } from "lucide-react";

const Garantia = () => {
  return (
    <section className="py-20 bg-francis-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-francis-gold/20 flex items-center justify-center">
              <Shield className="w-10 h-10 text-francis-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
              Garantia de <span className="text-francis-gold">Satisfação</span>
            </h2>
          </div>

          <Card className="bg-white/10 border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-francis-blue/20 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-francis-blue" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 font-inter">7 Dias</h3>
                  <p className="text-white/80 text-sm">Para testar</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-francis-red/20 flex items-center justify-center">
                    <RefreshCw className="w-8 h-8 text-francis-red" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 font-inter">100% do Dinheiro</h3>
                  <p className="text-white/80 text-sm">De volta</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-francis-gold/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-francis-gold" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 font-inter">Sem Burocracia</h3>
                  <p className="text-white/80 text-sm">Processo simples</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl md:text-2xl font-semibold mb-4 font-inter">
                  Tome por até 7 dias. Se não sentir diferença no seu corpo, 
                  <span className="text-francis-gold"> devolvemos seu dinheiro.</span>
                </p>
                <p className="text-white/80">
                  Sem burocracia. Simples assim.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Garantia;
