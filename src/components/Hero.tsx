import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import professionalAvatar from "@/assets/professional-avatar.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transformo Marcas em
              <span className="block text-primary-glow">
                Histórias Digitais
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Especialista em marketing digital e gestão de redes sociais. 
              Ajudo empresas a crescerem online com estratégias criativas e 
              resultados comprovados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary group"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </button>
              
              <button
                onClick={() => scrollToSection('portfolio')}
                className="btn-outline"
              >
                Ver Portfólio
              </button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white/80 hover:text-white transition-smooth"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
              <a
                href="mailto:contato@marketing.com"
                className="flex items-center text-white/80 hover:text-white transition-smooth"
              >
                <Mail className="h-5 w-5 mr-2" />
                E-mail
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
              <img
                src={professionalAvatar}
                alt="Especialista em Marketing Digital"
                className="relative w-80 h-80 object-cover rounded-full shadow-strong border-4 border-white/20"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-medium shadow-medium">
                Disponível para projetos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;