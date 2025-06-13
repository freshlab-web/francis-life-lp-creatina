
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Heart } from "lucide-react";

const Diferenciais = () => {
  const diferenciais = [
    {
      icon: Zap,
      title: "Creatina Pura (3g por dose)",
      benefits: [
        "Ajuda no ganho de força e massa muscular",
        "Melhora o desempenho físico e a recuperação"
      ],
      color: "francis-gold"
    },
    {
      icon: Shield,
      title: "Colágeno Tipo II",
      benefits: [
        "Protege e fortalece as articulações",
        "Reduz dores e melhora a lubrificação das juntas"
      ],
      color: "francis-blue"
    },
    {
      icon: Heart,
      title: "Coenzima Q10",
      benefits: [
        "Suporte essencial à saúde do coração",
        "Aumenta a produção de energia celular",
        "Ação antioxidante poderosa"
      ],
      color: "francis-red"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-francis-dark mb-6 font-inter">
            Por que a nossa Creatina Premium é <span className="text-francis-red">diferente?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {diferenciais.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${item.color}/10 flex items-center justify-center`}>
                  <item.icon className={`w-8 h-8 text-${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-francis-dark mb-4 font-inter">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-600 text-sm leading-relaxed">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-francis-blue/10 via-francis-light to-francis-red/10 rounded-2xl p-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-francis-dark font-inter leading-relaxed">
            "Enquanto outras creatinas cuidam só do músculo, 
            <span className="text-francis-red"> a nossa cuida do corpo todo:</span> 
            <span className="text-francis-blue"> músculo, articulação e coração.</span>"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
