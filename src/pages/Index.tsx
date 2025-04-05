import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  Search, 
  FileText, 
  Users, 
  Brain, 
  Database, 
  Vote, 
  ArrowRight,
  Sparkles,
  ExternalLink,
  BookOpen
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="container text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4 animate-fade-in">
            Decentralized Excellence in Science & AI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
            A blockchain-powered research collaboration platform revolutionizing scientific discovery, funding, and data accessibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Button variant="outline" size="lg" asChild>
              <Link to="#features">Learn More</Link>
            </Button>
          </div>
          <div className="pt-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading research institutions</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <div className="h-8 w-24 bg-muted rounded-md"></div>
              <div className="h-8 w-24 bg-muted rounded-md"></div>
              <div className="h-8 w-24 bg-muted rounded-md"></div>
              <div className="h-8 w-24 bg-muted rounded-md"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 bg-accent/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              DEXA Protocol offers a comprehensive suite of tools to enhance scientific research and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Discovery Feature */}
            <Card className="card-gradient overflow-hidden border">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-muted-foreground mb-4">
                  Explore the latest publications and cutting-edge research from top scientists worldwide.
                </p>
                <Link 
                  to="/discovery" 
                  className="flex items-center text-sm text-primary font-medium"
                >
                  Explore Research <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Researcher Hub Feature */}
            <Card className="card-gradient overflow-hidden border">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Researcher Hub</h3>
                <p className="text-muted-foreground mb-4">
                  Publish papers, find collaborators, and seek funding for groundbreaking research projects.
                </p>
                <Link 
                  to="/researcher-hub" 
                  className="flex items-center text-sm text-primary font-medium"
                >
                  Join Community <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* AI Tools Feature */}
            <Card className="card-gradient overflow-hidden border">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Powered Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Leverage AI to translate, summarize and extract insights from complex research papers.
                </p>
                <Link 
                  to="/ai-tools" 
                  className="flex items-center text-sm text-primary font-medium"
                >
                  Try AI Tools <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Open Data Market Feature */}
            <Card className="card-gradient overflow-hidden border">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Open Data Market</h3>
                <p className="text-muted-foreground mb-4">
                  Access and share health datasets, medicine trials, and clinical research data securely.
                </p>
                <Link 
                  to="/open-data" 
                  className="flex items-center text-sm text-primary font-medium"
                >
                  Browse Datasets <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Governance & Funding Feature */}
            <Card className="card-gradient overflow-hidden border">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Vote className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Governance & Funding</h3>
                <p className="text-muted-foreground mb-4">
                  Submit proposals for community funding and participate in DAO-based voting systems.
                </p>
                <Link 
                  to="/governance" 
                  className="flex items-center text-sm text-primary font-medium"
                >
                  View Proposals <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Publishing Feature */}
            <Card className="card-gradient overflow-hidden border">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Publishing</h3>
                <p className="text-muted-foreground mb-4">
                  Publish findings with transparent peer review and earn recognition for your contributions.
                </p>
                <Link 
                  to="/researcher-hub" 
                  className="flex items-center text-sm text-primary font-medium"
                >
                  Start Publishing <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              DEXA Protocol simplifies research collaboration through blockchain technology
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Steps */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
              
              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/2 lg:text-right">
                    <div className="bg-primary/10 text-primary inline-block px-3 py-1 rounded-full text-sm font-medium mb-2">Step 01</div>
                    <h3 className="text-xl font-bold mb-2">Connect Your Wallet</h3>
                    <p className="text-muted-foreground">
                      Sign in using your blockchain identity through wallet connection or social login for secure authentication.
                    </p>
                  </div>
                  <div className="hidden lg:flex h-12 w-12 rounded-full bg-primary items-center justify-center z-10 lg:-ml-6">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="lg:hidden bg-primary/10 text-primary inline-block px-3 py-1 rounded-full text-sm font-medium mb-2">Step 01</div>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <div className="h-full flex items-center justify-center">
                        <Sparkles className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/2 order-1 lg:order-2 lg:text-left">
                    <div className="bg-primary/10 text-primary inline-block px-3 py-1 rounded-full text-sm font-medium mb-2">Step 02</div>
                    <h3 className="text-xl font-bold mb-2">Explore the Platform</h3>
                    <p className="text-muted-foreground">
                      Browse through research papers, find collaborators, or access AI tools to assist your research needs.
                    </p>
                  </div>
                  <div className="hidden lg:flex h-12 w-12 rounded-full bg-primary items-center justify-center z-10 lg:-mr-6 order-2 lg:order-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="lg:w-1/2 order-0 lg:order-0">
                    <div className="lg:hidden bg-primary/10 text-primary inline-block px-3 py-1 rounded-full text-sm font-medium mb-2">Step 02</div>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <div className="h-full flex items-center justify-center">
                        <ExternalLink className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/2 lg:text-right">
                    <div className="bg-primary/10 text-primary inline-block px-3 py-1 rounded-full text-sm font-medium mb-2">Step 03</div>
                    <h3 className="text-xl font-bold mb-2">Contribute & Collaborate</h3>
                    <p className="text-muted-foreground">
                      Publish your findings, share datasets, or participate in governance to help shape the future of science.
                    </p>
                  </div>
                  <div className="hidden lg:flex h-12 w-12 rounded-full bg-primary items-center justify-center z-10 lg:-ml-6">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="lg:hidden bg-primary/10 text-primary inline-block px-3 py-1 rounded-full text-sm font-medium mb-2">Step 03</div>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <div className="h-full flex items-center justify-center">
                        <BookOpen className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10 px-4">
        <div className="container text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Scientific Research?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the DEXA Protocol community today and be part of the revolution in decentralized scientific collaboration.
          </p>
          <Button 
            size="lg"
            className="button-gradient"
          >
            Connect Wallet & Get Started
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
