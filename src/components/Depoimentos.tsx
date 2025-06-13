
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Depoimentos = () => {
  const depoimentos = [
    {
      name: "Mariana",
      age: "46 anos",
      text: "Estava tomando creatina de farmácia e sentia dores nas articulações. Com a Francis Life, além da força, senti melhora na minha mobilidade. Foi um divisor de águas.",
      rating: 5
    },
    {
      name: "Roberto",
      age: "54 anos", 
      text: "Me explicaram que a Coenzima Q10 é essencial para o coração. Nunca mais tomo creatina comum.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-francis-gold fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-[linear-gradient(0deg,#0005,#0005),url('https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@refs/heads/main/dist/lovable-uploads/fundoTeconologi.webp')] bg-center bg-fixed bg-cover [background-blend-mode:multiply]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            Depoimentos de quem já experimentou
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {depoimentos.map((depoimento, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {renderStars(depoimento.rating)}
                </div>
                <blockquote className="text-francis-dark text-lg leading-relaxed mb-6 font-inter">
                  "{depoimento.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-francis-blue/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-francis-blue font-bold text-lg">
                      {depoimento.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-francis-dark font-inter">
                      {depoimento.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {depoimento.age}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
