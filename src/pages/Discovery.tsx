
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Book, 
  Users, 
  BookOpen, 
  Star,
  FileText,
  Calendar,
  ArrowUpRight
} from "lucide-react";

const Discovery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const papers = [
    {
      id: 1,
      title: "The Impact of Artificial Intelligence on Drug Discovery Processes",
      authors: "James Smith, Maria Garcia, Robert Johnson",
      journal: "Journal of Medicinal Chemistry",
      date: "June 2023",
      citations: 42,
      category: "AI",
      tags: ["drug discovery", "machine learning", "pharmaceuticals"]
    },
    {
      id: 2,
      title: "Blockchain Applications in Clinical Trial Management",
      authors: "Sarah Williams, David Lee, Emma Brown",
      journal: "BMC Medical Research Methodology",
      date: "April 2023",
      citations: 28,
      category: "Blockchain",
      tags: ["clinical trials", "data security", "healthcare"]
    },
    {
      id: 3,
      title: "Gene Therapy Approaches to Rare Genetic Disorders",
      authors: "Michael Chen, Olivia Wilson, Thomas Anderson",
      journal: "Nature Genetics",
      date: "May 2023",
      citations: 35,
      category: "Genetics",
      tags: ["gene therapy", "rare diseases", "genetic disorders"]
    },
    {
      id: 4,
      title: "Quantum Computing's Role in Computational Biology",
      authors: "Lisa Taylor, Kevin Martinez, Rachel Davis",
      journal: "Science Advances",
      date: "March 2023",
      citations: 17,
      category: "Quantum Computing",
      tags: ["quantum biology", "computational modeling", "algorithms"]
    },
    {
      id: 5,
      title: "Advancements in mRNA Vaccine Technology",
      authors: "Daniel Brown, Jennifer White, Christopher Miller",
      journal: "Vaccine",
      date: "July 2023",
      citations: 51,
      category: "Vaccines",
      tags: ["mRNA", "immunology", "vaccine development"]
    },
    {
      id: 6,
      title: "Ethical Implications of AI in Healthcare Decision Making",
      authors: "Elizabeth Clark, Andrew Lewis, Patricia Moore",
      journal: "Journal of Medical Ethics",
      date: "February 2023",
      citations: 23,
      category: "Ethics",
      tags: ["medical ethics", "decision making", "AI ethics"]
    }
  ];

  const researchers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      institution: "Stanford University",
      field: "Genomics",
      papers: 38,
      collaborations: 12
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      institution: "MIT",
      field: "Quantum Biology",
      papers: 45,
      collaborations: 18
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      institution: "Harvard Medical School",
      field: "Immunology",
      papers: 26,
      collaborations: 8
    }
  ];
  
  const institutions = [
    {
      id: 1,
      name: "Stanford University",
      location: "California, USA",
      researchers: 120,
      papers: 850,
      focusAreas: ["Genomics", "AI in Medicine", "Neuroscience"]
    },
    {
      id: 2,
      name: "ETH Zurich",
      location: "Zurich, Switzerland",
      researchers: 95,
      papers: 720,
      focusAreas: ["Biotechnology", "Quantum Computing", "Climate Science"]
    },
    {
      id: 3,
      name: "Oxford University",
      location: "Oxford, UK",
      researchers: 110,
      papers: 780,
      focusAreas: ["Vaccines", "Infectious Diseases", "Clinical Trials"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Research Discovery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the latest publications, researchers, and institutions pushing the boundaries of science
            </p>
          </div>
          
          {/* Search Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  className="pl-9" 
                  placeholder="Search papers, researchers, or institutions..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </div>
          
          {/* Results Tabs */}
          <Tabs defaultValue="papers" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="papers" className="flex gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Papers</span>
              </TabsTrigger>
              <TabsTrigger value="researchers" className="flex gap-2">
                <Users className="h-4 w-4" />
                <span>Researchers</span>
              </TabsTrigger>
              <TabsTrigger value="institutions" className="flex gap-2">
                <Book className="h-4 w-4" />
                <span>Institutions</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="papers" className="animate-fade-in space-y-4">
              {papers.map(paper => (
                <Card key={paper.id} className="overflow-hidden hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold hover:text-primary cursor-pointer transition-colors">
                          {paper.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{paper.authors}</p>
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <FileText className="h-3 w-3" /> {paper.journal}
                          </span>
                          <span className="text-muted-foreground">•</span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="h-3 w-3" /> {paper.date}
                          </span>
                          <span className="text-muted-foreground">•</span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Star className="h-3 w-3 text-amber-500" /> {paper.citations} citations
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge variant="secondary">{paper.category}</Badge>
                          {paper.tags.map((tag, index) => (
                            <Badge key={index} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="flex-shrink-0" variant="outline" size="sm">
                        View Paper <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="researchers" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchers.map(researcher => (
                  <Card key={researcher.id} className="overflow-hidden hover:border-primary/50 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                          {researcher.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold hover:text-primary cursor-pointer transition-colors">
                            {researcher.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{researcher.institution}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm"><span className="font-medium">Field: </span>{researcher.field}</p>
                        <div className="flex justify-between text-sm">
                          <p><span className="font-medium">Papers: </span>{researcher.papers}</p>
                          <p><span className="font-medium">Collaborations: </span>{researcher.collaborations}</p>
                        </div>
                        <Button className="w-full mt-2" variant="outline" size="sm">
                          View Profile <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="institutions" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {institutions.map(institution => (
                  <Card key={institution.id} className="overflow-hidden hover:border-primary/50 transition-all">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg hover:text-primary cursor-pointer transition-colors mb-2">
                        {institution.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{institution.location}</p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <p><span className="font-medium">Researchers: </span>{institution.researchers}</p>
                          <p><span className="font-medium">Papers: </span>{institution.papers}</p>
                        </div>
                        
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Focus Areas:</p>
                          <div className="flex flex-wrap gap-2">
                            {institution.focusAreas.map((area, index) => (
                              <Badge key={index} variant="outline">{area}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Button className="w-full mt-2" variant="outline" size="sm">
                          View Institution <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Discovery;
