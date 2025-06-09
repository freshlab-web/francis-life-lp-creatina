
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import PublicoAlvo from "@/components/PublicoAlvo";
import Tecnologia from "@/components/Tecnologia";
import Depoimentos from "@/components/Depoimentos";
import OfertaEspecial from "@/components/OfertaEspecial";
import Garantia from "@/components/Garantia";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Hero />
      <Diferenciais />
      <PublicoAlvo />
      <Tecnologia />
      <Depoimentos />
      <OfertaEspecial />
      <Garantia />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
