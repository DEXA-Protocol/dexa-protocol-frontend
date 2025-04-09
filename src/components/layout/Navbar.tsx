import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, Menu, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ThemeToggle from '../theme/ThemeToggle';
import { ConnectWallet } from '@/components/ConnectWallet';
import { useAccount } from 'wagmi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  const { isConnected } = useAccount();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">DEXA</span>
          <span className="hidden md:inline-block text-sm font-medium text-muted-foreground">Protocol</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/discovery" className="text-sm font-medium text-foreground/80 hover:text-primary transition">
            Discovery
          </Link>
          <Link to="/researcher-hub" className="text-sm font-medium text-foreground/80 hover:text-primary transition">
            Researcher Hub
          </Link>
          <Link to="/ai-tools" className="text-sm font-medium text-foreground/80 hover:text-primary transition">
            AI Tools
          </Link>
          <Link to="/open-data" className="text-sm font-medium text-foreground/80 hover:text-primary transition">
            Open Data
          </Link>
          <Link to="/governance" className="text-sm font-medium text-foreground/80 hover:text-primary transition">
            Governance
          </Link>
          {isConnected && (
            <Link to="/dashboard" className="text-sm font-medium text-primary hover:text-primary/80 transition">
              Dashboard
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden sm:block">
            <ConnectWallet />
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t animate-fade-in">
          <div className="container py-4 space-y-3">
            <Link 
              to="/discovery" 
              className="block py-2 text-foreground/80 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Discovery
            </Link>
            <Link 
              to="/researcher-hub" 
              className="block py-2 text-foreground/80 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Researcher Hub
            </Link>
            <Link 
              to="/ai-tools" 
              className="block py-2 text-foreground/80 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI Tools
            </Link>
            <Link 
              to="/open-data" 
              className="block py-2 text-foreground/80 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Open Data
            </Link>
            <Link 
              to="/governance" 
              className="block py-2 text-foreground/80 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Governance
            </Link>
            {isConnected && (
              <Link 
                to="/dashboard" 
                className="block py-2 text-primary hover:text-primary/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            <div className="pt-2">
              <ConnectWallet />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
