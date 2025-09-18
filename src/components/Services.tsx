import { Share2, Target, TrendingUp, Users, BarChart3, Megaphone } from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Gestão de Redes Sociais",
    description: "Criação de conteúdo estratégico, planejamento de posts e interação ativa com seguidores para aumentar o engajamento.",
    features: ["Criação de conteúdo", "Planejamento editorial", "Interação com seguidores", "Stories e Reels"]
  },
  {
    icon: Target,
    title: "Consultoria em Marketing Digital",
    description: "Estratégias personalizadas de marketing digital para aumentar sua presença online e gerar mais vendas.",
    features: ["Estratégias de conteúdo", "SEO básico", "Análise de métricas", "Otimização de conversão"]
  },
  {
    icon: TrendingUp,
    title: "Anúncios Pagos",
    description: "Criação e gestão de campanhas no Facebook Ads, Instagram Ads e Google Ads para maximizar seu retorno.",
    features: ["Facebook & Instagram Ads", "Google Ads", "Segmentação avançada", "Relatórios de performance"]
  },
  {
    icon: Users,
    title: "Branding Digital",
    description: "Desenvolvimento de identidade visual digital e posicionamento de marca consistente em todas as plataformas.",
    features: ["Identidade visual", "Tom de voz", "Posicionamento", "Consistência de marca"]
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Monitoramento de métricas importantes e relatórios detalhados para otimizar suas estratégias digitais.",
    features: ["Google Analytics", "Métricas de redes sociais", "ROI de campanhas", "Relatórios mensais"]
  },
  {
    icon: Megaphone,
    title: "Marketing de Influência",
    description: "Estratégias de parcerias com influenciadores e criação de campanhas colaborativas para ampliar seu alcance.",
    features: ["Seleção de influenciadores", "Campanhas colaborativas", "Negociação de parcerias", "Acompanhamento de resultados"]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em marketing digital para fazer sua marca se destacar no mercado online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="gradient-card p-8 rounded-xl shadow-soft card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Solicitar Orçamento Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;