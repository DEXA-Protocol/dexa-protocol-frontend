import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";

const AITools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">AI-Powered Research Tools</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leverage advanced AI to translate, summarize, and generate insights from research papers
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/20 p-4 rounded-full">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">Coming Soon</CardTitle>
              <CardDescription className="text-center">
                Our AI-powered research tools are currently under development. Stay tuned for updates!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>We're working hard to bring you powerful AI tools for:</p>
              <ul className="mt-4 space-y-2">
                <li>• Research paper translation</li>
                <li>• Document summarization</li>
                <li>• Research topic generation</li>
                <li>• And much more...</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AITools;
