
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Users, TrendingUp } from "lucide-react";

const Tecnologia = () => {
  const features = [
    // {
    //   icon: Award,
    //   title: "Fórmula com nano e biotecnologia",
    //   description: "Para maior absorção"
    // },
    {
      icon: Globe,
      title: "Matéria-prima importada",
      description: "E segura"
    },
    {
      icon: Users,
      title: "Recomendado por profissionais",
      description: "Médicos e nutricionistas"
    },
    {
      icon: TrendingUp,
      title: "Resultados validados",
      description: "Por clientes reais e estudos científicos"
    }
  ];

  return (
    <section className="py-20 text-white bg-francis-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
            Alta tecnologia e <span className="text-francis-gold">confiança</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 border-0 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-francis-gold/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-francis-gold" />
                </div>
                <h3 className="font-bold mb-2 font-inter text-white">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tecnologia;
