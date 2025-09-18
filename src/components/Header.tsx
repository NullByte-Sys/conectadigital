import { Menu, X, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            Marketing Digital
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left btn-primary w-fit"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;