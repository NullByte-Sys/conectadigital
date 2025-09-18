import { MessageCircle, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary-glow">
              Marketing Digital
            </h3>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Especialista em transformar marcas em histórias digitais. 
              Estratégias criativas e resultados comprovados para seu negócio crescer online.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary-glow transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary-glow transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary-glow transition-smooth"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Serviços</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#services" className="hover:text-primary-glow transition-smooth">
                  Gestão de Redes Sociais
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-glow transition-smooth">
                  Consultoria Digital
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-glow transition-smooth">
                  Anúncios Pagos
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-glow transition-smooth">
                  Branding Digital
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-glow transition-smooth">
                  Análise de Dados
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Contato Rápido</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-background/80 hover:text-primary-glow transition-smooth"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
              <a
                href="mailto:contato@marketing.com"
                className="flex items-center text-background/80 hover:text-primary-glow transition-smooth"
              >
                <Mail className="h-4 w-4 mr-2" />
                E-mail
              </a>
              <p className="text-background/60 text-sm">
                Resposta em até 2h<br />
                (Horário comercial)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © {currentYear} Marketing Digital. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-background text-sm transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-smooth">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;