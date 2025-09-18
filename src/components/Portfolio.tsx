import { ExternalLink, TrendingUp, Users, Target } from "lucide-react";

const projects = [
  {
    title: "Café Local - Crescimento no Instagram",
    category: "Gestão de Redes Sociais",
    description: "Gerenciamento completo do Instagram de uma cafeteria local, resultando em 300% de aumento de seguidores e 150% mais engajamento em 6 meses.",
    results: [
      "300% aumento de seguidores",
      "150% mais engajamento", 
      "50% aumento nas vendas",
      "Alcance orgânico de 25k pessoas/mês"
    ],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&h=600",
    tags: ["Instagram", "Conteúdo", "Engajamento"]
  },
  {
    title: "Loja de Roupas - Estratégia Digital Completa",
    category: "Marketing Digital",
    description: "Desenvolvimento de estratégia digital completa para e-commerce de moda, incluindo criação de conteúdo, stories e planejamento semanal.",
    results: [
      "200% aumento no tráfego",
      "80% mais conversões",
      "40% redução no CAC",
      "ROI de 450% em campanhas pagas"
    ],
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&h=600",
    tags: ["E-commerce", "Conversão", "ROI"]
  },
  {
    title: "Produtos Artesanais - SEO e Anúncios",
    category: "Consultoria Digital",
    description: "Consultoria completa para marca de produtos artesanais, focando em SEO local, anúncios segmentados e presença digital estratégica.",
    results: [
      "Primeira página no Google",
      "250% aumento nas vendas online",
      "60% mais leads qualificados",
      "Expansão para 3 cidades"
    ],
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&h=600",
    tags: ["SEO", "Leads", "Crescimento"]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cases de Sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns projetos que geraram resultados reais para nossos clientes
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div
                className={`${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                } animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-xl shadow-medium group-hover:shadow-strong transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                } animate-slide-in-${index % 2 === 0 ? 'right' : 'left'}`}
              >
                <div className="mb-4">
                  <span className="text-primary font-medium text-sm uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-success" />
                    Resultados Alcançados
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center p-3 bg-gradient-card rounded-lg shadow-soft"
                      >
                        <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-foreground">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Quer resultados como esses para seu negócio?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Vamos Conversar Sobre Seu Projeto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;