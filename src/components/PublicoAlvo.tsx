
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const PublicoAlvo = () => {
  const publicos = [
    "Já toma creatina, mas quer mais benefícios reais",
    "Pratica atividades físicas ou sente fadiga frequente",
    "Busca saúde muscular, articular e cardiovascular com um único suplemento",
    "Está acima dos 40 e quer manter força, mobilidade e energia com segurança"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-francis-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-francis-dark mb-6 font-inter">
            Ideal para <span className="text-francis-red">quem:</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {publicos.map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-francis-red/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-francis-red" />
                  </div>
                  <p className="text-francis-dark font-medium leading-relaxed font-inter">
                    {item}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicoAlvo;
