import { useState } from "react";
import { MessageCircle, Mail, Phone, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato e vamos descobrir como posso ajudar sua marca a crescer no digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <div className="gradient-card p-8 rounded-xl shadow-medium h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Formas de Contato
              </h3>

              <div className="space-y-6">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gradient-primary rounded-xl text-white hover:shadow-medium transition-smooth group"
                >
                  <MessageCircle className="h-6 w-6 mr-4 group-hover:scale-110 transition-smooth" />
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-white/80">(11) 99999-9999</div>
                  </div>
                </a>

                <a
                  href="mailto:contato@marketing.com"
                  className="flex items-center p-4 bg-secondary rounded-xl text-secondary-foreground hover:shadow-medium transition-smooth group"
                >
                  <Mail className="h-6 w-6 mr-4 group-hover:scale-110 transition-smooth" />
                  <div>
                    <div className="font-semibold">E-mail</div>
                    <div className="opacity-80">contato@marketing.com</div>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-accent rounded-xl text-accent-foreground">
                  <MapPin className="h-6 w-6 mr-4" />
                  <div>
                    <div className="font-semibold">Atendimento</div>
                    <div className="opacity-80">100% Online</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-card rounded-xl border border-border">
                <h4 className="font-semibold text-foreground mb-2">
                  Resposta Rápida
                </h4>
                <p className="text-sm text-muted-foreground">
                  Normalmente respondo em até 2 horas durante horário comercial (9h às 18h).
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="gradient-card p-8 rounded-xl shadow-medium">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Solicitar Orçamento
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="gestao-redes">Gestão de Redes Sociais</option>
                    <option value="consultoria">Consultoria em Marketing Digital</option>
                    <option value="anuncios">Anúncios Pagos</option>
                    <option value="branding">Branding Digital</option>
                    <option value="analise">Análise de Dados</option>
                    <option value="influencia">Marketing de Influência</option>
                    <option value="completo">Pacote Completo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                    placeholder="Conte-me sobre seu projeto e objetivos..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4 group"
                >
                  <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-smooth" />
                  Enviar Mensagem
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  Seus dados estão seguros e não serão compartilhados com terceiros.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;