
import { Link } from "react-router-dom";
import { 
  Github, 
  Twitter, 
  Linkedin,
  Mail
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">DEXA</span>
              <span className="text-sm font-medium text-muted-foreground">Protocol</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              DEXA is a blockchain-powered research collaboration platform revolutionizing scientific discovery.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/discovery" className="text-muted-foreground hover:text-primary transition">
                  Discovery
                </Link>
              </li>
              <li>
                <Link to="/researcher-hub" className="text-muted-foreground hover:text-primary transition">
                  Researcher Hub
                </Link>
              </li>
              <li>
                <Link to="/ai-tools" className="text-muted-foreground hover:text-primary transition">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link to="/open-data" className="text-muted-foreground hover:text-primary transition">
                  Open Data
                </Link>
              </li>
              <li>
                <Link to="/governance" className="text-muted-foreground hover:text-primary transition">
                  Governance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DEXA Protocol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
