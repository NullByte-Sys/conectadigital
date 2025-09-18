import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted section-padding">
      <div className="text-center animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Página não encontrada
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="btn-outline group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-smooth" />
            Voltar
          </button>
          <a href="/" className="btn-primary group">
            <Home className="h-4 w-4 mr-2" />
            Página Inicial
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
