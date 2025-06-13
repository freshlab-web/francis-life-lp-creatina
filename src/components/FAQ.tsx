
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Já tomo creatina. Posso tomar essa?",
      answer: "Sim! Essa fórmula vai além da creatina comum e entrega resultados muito mais completos. Você pode substituir sua creatina atual pela Francis Life e obter benefícios adicionais para articulações e saúde cardiovascular."
    },
    {
      question: "Tem contraindicação?",
      answer: "Se tiver alguma condição de saúde específica, recomendamos conversar com seu médico antes de iniciar o uso. O produto é seguro para adultos saudáveis quando usado conforme as instruções."
    },
    {
      question: "Qual a diferença para outras creatinas?",
      answer: "As creatinas comuns contêm apenas creatina monohidratada. A nossa tem 3 ingredientes ativos essenciais: Creatina + Colágeno Tipo II + Coenzima Q10, oferecendo benefícios para força, mobilidade articular e saúde cardiovascular em uma única fórmula."
    },
    {
      question: "Como devo tomar?",
      answer: "A dosagem recomendada está na embalagem. Geralmente é uma dose por dia, podendo ser misturada com água ou sua bebida preferida. Para melhores resultados, mantenha o uso regular."
    },
    {
      question: "Em quanto tempo vejo resultados?",
      answer: "Os primeiros efeitos podem ser percebidos nas primeiras semanas de uso regular. Para resultados mais significativos, recomendamos o uso contínuo por pelo menos 30 dias."
    },
    {
      question: "Posso tomar junto com outros suplementos?",
      answer: "Sim, nossa fórmula é compatível com a maioria dos suplementos. Porém, se você toma medicamentos específicos, consulte seu médico para orientação personalizada."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-francis-dark mb-6 font-inter">
              Perguntas <span className="text-francis-red">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre a Creatina Premium Francis Life
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-francis-dark hover:text-francis-red font-inter">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
