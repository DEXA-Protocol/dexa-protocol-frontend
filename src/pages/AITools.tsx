
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Brain,
  Languages,
  FileText,
  Upload,
  LucideIcon,
  CircleSlash,
  FileUp,
  Lightbulb
} from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  active: boolean;
  onClick: () => void;
}

const ToolCard = ({ title, description, icon: Icon, active, onClick }: ToolCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all hover:border-primary/50 ${active ? 'border-primary ring-2 ring-primary/20' : ''}`}
      onClick={onClick}
    >
      <CardContent className="p-6 flex items-start gap-4">
        <div className="bg-primary/20 p-2 rounded-full">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const AITools = () => {
  const [activeTool, setActiveTool] = useState<string>("translate");
  const [documentInput, setDocumentInput] = useState<File | null>(null);
  const [textInput, setTextInput] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocumentInput(file);
      toast({
        title: "File uploaded",
        description: `${file.name} selected`
      });
    }
  };

  const handleProcess = () => {
    setProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setProcessing(false);
      
      // Mock results based on selected tool
      if (activeTool === "translate") {
        setResult(
          "Translated content will appear here. This is a simulation of the translation feature. In a real implementation, the text would be processed by an AI service and the translated content would be displayed here."
        );
      } else if (activeTool === "summarize") {
        setResult(
          "Summary of the document: The paper discusses advances in gene therapy for rare genetic disorders. Key points include: (1) Novel viral vector delivery systems with improved targeting, (2) CRISPR-based approaches for genetic editing, (3) Case studies showing success in treating previously untreatable conditions, (4) Challenges in scaling treatments for wider patient populations."
        );
      } else if (activeTool === "research") {
        setResult(
          "Research topic suggestions:\n\n1. Impact of quantum computing on pharmaceutical drug discovery pipelines\n2. Blockchain-based verification systems for clinical trial data\n3. AI models for predicting drug interactions in complex disease states\n4. Decentralized approaches to patient data ownership in genomic research"
        );
      }
      
      toast({
        title: "Processing complete",
        description: "View your results below"
      });
    }, 2000);
  };

  const clearInputs = () => {
    setDocumentInput(null);
    setTextInput("");
    setResult("");
  };

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <ToolCard
              title="Translate Research"
              description="Translate papers into multiple languages"
              icon={Languages}
              active={activeTool === "translate"}
              onClick={() => {
                setActiveTool("translate");
                clearInputs();
              }}
            />
            
            <ToolCard
              title="Summarize Papers"
              description="Get concise summaries of complex papers"
              icon={FileText}
              active={activeTool === "summarize"}
              onClick={() => {
                setActiveTool("summarize");
                clearInputs();
              }}
            />
            
            <ToolCard
              title="Research Ideas"
              description="Generate research topic suggestions"
              icon={Lightbulb}
              active={activeTool === "research"}
              onClick={() => {
                setActiveTool("research");
                clearInputs();
              }}
            />
          </div>
          
          <Card className="mb-10">
            <CardHeader>
              <CardTitle>
                {activeTool === "translate" && "Translate Research Paper"}
                {activeTool === "summarize" && "Summarize Research Paper"}
                {activeTool === "research" && "Generate Research Ideas"}
              </CardTitle>
              <CardDescription>
                {activeTool === "translate" && "Upload a paper or paste text to translate into your preferred language"}
                {activeTool === "summarize" && "Upload a paper or paste text to generate a concise summary"}
                {activeTool === "research" && "Describe your field of interest to get AI-generated research topic suggestions"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="text" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="text" className="flex gap-1">
                    <FileText className="h-4 w-4" />
                    <span>Text Input</span>
                  </TabsTrigger>
                  <TabsTrigger value="document" className="flex gap-1">
                    <FileUp className="h-4 w-4" />
                    <span>Upload Document</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="text" className="space-y-4">
                  <Textarea
                    placeholder={
                      activeTool === "translate" ? "Enter text to translate..." :
                      activeTool === "summarize" ? "Enter text to summarize..." :
                      "Describe your research interests and field..."
                    }
                    className="min-h-[200px]"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                  />
                  
                  {activeTool === "translate" && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Source Language</label>
                        <select className="w-full rounded-md border border-input bg-background px-3 h-10">
                          <option value="english">English</option>
                          <option value="spanish">Spanish</option>
                          <option value="french">French</option>
                          <option value="german">German</option>
                          <option value="chinese">Chinese</option>
                          <option value="japanese">Japanese</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Target Language</label>
                        <select className="w-full rounded-md border border-input bg-background px-3 h-10">
                          <option value="english">English</option>
                          <option value="spanish">Spanish</option>
                          <option value="french">French</option>
                          <option value="german">German</option>
                          <option value="chinese">Chinese</option>
                          <option value="japanese">Japanese</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-end gap-3">
                    <Button 
                      variant="outline" 
                      onClick={clearInputs}
                      disabled={processing || (!textInput && !documentInput)}
                    >
                      <CircleSlash className="mr-2 h-4 w-4" />
                      Clear
                    </Button>
                    <Button 
                      onClick={handleProcess} 
                      disabled={processing || !textInput}
                    >
                      {processing ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Brain className="mr-2 h-4 w-4" />
                          {activeTool === "translate" && "Translate"}
                          {activeTool === "summarize" && "Summarize"}
                          {activeTool === "research" && "Generate"}
                        </>
                      )}
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="document" className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="flex flex-col items-center gap-2">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <p className="font-medium">Click to upload or drag and drop</p>
                        <p className="text-sm text-muted-foreground">PDF, DOCX, or TXT (max 20MB)</p>
                        
                        {documentInput && (
                          <div className="mt-4 p-2 bg-primary/10 rounded-md text-sm">
                            {documentInput.name}
                          </div>
                        )}
                        
                        <Input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept=".pdf,.docx,.txt"
                          onChange={handleFileUpload}
                        />
                      </div>
                    </label>
                  </div>
                  
                  {activeTool === "translate" && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Source Language</label>
                        <select className="w-full rounded-md border border-input bg-background px-3 h-10">
                          <option value="english">English</option>
                          <option value="spanish">Spanish</option>
                          <option value="french">French</option>
                          <option value="german">German</option>
                          <option value="chinese">Chinese</option>
                          <option value="japanese">Japanese</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Target Language</label>
                        <select className="w-full rounded-md border border-input bg-background px-3 h-10">
                          <option value="english">English</option>
                          <option value="spanish">Spanish</option>
                          <option value="french">French</option>
                          <option value="german">German</option>
                          <option value="chinese">Chinese</option>
                          <option value="japanese">Japanese</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-end gap-3">
                    <Button 
                      variant="outline" 
                      onClick={clearInputs}
                      disabled={processing || (!textInput && !documentInput)}
                    >
                      <CircleSlash className="mr-2 h-4 w-4" />
                      Clear
                    </Button>
                    <Button 
                      onClick={handleProcess} 
                      disabled={processing || !documentInput}
                    >
                      {processing ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Brain className="mr-2 h-4 w-4" />
                          {activeTool === "translate" && "Translate"}
                          {activeTool === "summarize" && "Summarize"}
                          {activeTool === "research" && "Generate"}
                        </>
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          {result && (
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>
                  {activeTool === "translate" && "Translated content"}
                  {activeTool === "summarize" && "Summary of your document"}
                  {activeTool === "research" && "Research topic suggestions"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary/50 p-4 rounded-md whitespace-pre-wrap">
                  {result}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AITools;
