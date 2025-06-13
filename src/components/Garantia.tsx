
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, RefreshCw } from "lucide-react";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';

const Garantia = () => {
  return (
    <>
    <section className="py-20 h-[450px] text-white bg-[linear-gradient(0deg,#0005,#0005),url('https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@refs/heads/main/dist/lovable-uploads/imgFundo2.webp')] bg-center bg-fixed bg-cover [background-blend-mode:multiply]">
      {/* <div className="container mx-auto px-4">
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
                  <h3 className="font-bold text-lg mb-2 font-inter text-white">7 Dias</h3>
                  <p className="text-white/80 text-sm">Para testar</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-francis-red/20 flex items-center justify-center">
                    <RefreshCw className="w-8 h-8 text-francis-red" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 font-inter text-white">100% do Dinheiro</h3>
                  <p className="text-white/80 text-sm">De volta</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-francis-gold/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-francis-gold" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 font-inter text-white">Sem Burocracia</h3>
                  <p className="text-white/80 text-sm">Processo simples</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl md:text-2xl font-semibold mb-4 text-white font-inter">
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
      </div> */}
    </section>
    <section className="[&_img]:object-contain [&_img]:mx-auto [&_img]:w-auto [&_img]:h-auto [&_ul]:items-center [&_img]:rounded-xl sm:px-20 px-5 py-20 [&_img]:w-auto [&_img]:object-contain [&_img]:block [&_img]:!h-[10rem]">
        <h3 className="text-4xl md:text-5xl font-bold text-francis-dark mb-6 font-inter text-center">Francis Life é Destaque na mídia</h3> <br/><br/>
        <Splide options={{perPage:4, pauseOnHover:false, pauseOnFocus:false, gap:'1rem', autoplay:true, type:'loop', pagination:false, breakpoints:{1120:{perPage:3},960:{perPage:2},640:{perPage:1}}}}>
          <SplideSlide data-splide-interval="2500">
            <img src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@refs/heads/main/dist/lovable-uploads/logo-redetv.webp"/>
          </SplideSlide>

          <SplideSlide data-splide-interval="2500">
            <img src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@refs/heads/main/dist/lovable-uploads/logo-record.webp"/>
          </SplideSlide>

          <SplideSlide data-splide-interval="2500">
            <img src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@refs/heads/main/dist/lovable-uploads/logo-donosbola.webp"/>
          </SplideSlide>

          <SplideSlide data-splide-interval="2500">
            <img src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@refs/heads/main/dist/lovable-uploads/logo-boranews.webp"/>
          </SplideSlide>
        </Splide>
    </section>
    </>
  );
};

export default Garantia;
