import { useState, useMemo } from "react";
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
  ArrowUpRight,
  X,
  Building,
  MapPin,
  GraduationCap,
  Link as LinkIcon
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Discovery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [selectedResearcher, setSelectedResearcher] = useState(null);
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDateRange, setSelectedDateRange] = useState("all");
  const { toast } = useToast();
  
  const papers = useMemo(() => [
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
  ], []);

  const researchers = useMemo(() => [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      institution: "Stanford University",
      field: "Genomics",
      papers: 38,
      collaborations: 12,
      bio: "Dr. Sarah Johnson is a leading researcher in genomics with over 15 years of experience. Her work focuses on identifying genetic markers for rare diseases.",
      recentPublications: [
        "Genetic Markers in Rare Diseases (2023)",
        "Advances in Genomic Sequencing (2022)",
        "Population Genetics Study (2021)"
      ],
      expertise: ["Genomics", "Rare Diseases", "Population Genetics", "Bioinformatics"],
      email: "sarah.johnson@stanford.edu",
      website: "https://stanford.edu/~sjohnson"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      institution: "MIT",
      field: "Quantum Biology",
      papers: 45,
      collaborations: 18,
      bio: "Prof. Michael Chen is pioneering the intersection of quantum physics and biology. His research explores how quantum phenomena might influence biological processes.",
      recentPublications: [
        "Quantum Effects in Photosynthesis (2023)",
        "Quantum Biology: A New Frontier (2022)",
        "Quantum Computing Applications in Biology (2021)"
      ],
      expertise: ["Quantum Biology", "Physics", "Computational Biology", "Molecular Biology"],
      email: "mchen@mit.edu",
      website: "https://mit.edu/~mchen"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      institution: "Harvard Medical School",
      field: "Immunology",
      papers: 26,
      collaborations: 8,
      bio: "Dr. Emily Rodriguez specializes in immune system responses to viral infections. Her work has been crucial in developing new vaccine approaches.",
      recentPublications: [
        "Novel Vaccine Approaches (2023)",
        "Immune Response to Viral Infections (2022)",
        "T-Cell Memory in Long-term Immunity (2021)"
      ],
      expertise: ["Immunology", "Vaccinology", "Virology", "Infectious Diseases"],
      email: "erodriguez@hms.harvard.edu",
      website: "https://hms.harvard.edu/~erodriguez"
    }
  ], []);
  
  const institutions = useMemo(() => [
    {
      id: 1,
      name: "Stanford University",
      location: "California, USA",
      researchers: 120,
      papers: 850,
      focusAreas: ["Genomics", "AI in Medicine", "Neuroscience"],
      description: "Stanford University is a world-renowned research institution with a strong focus on interdisciplinary research. The university's medical school and research centers are at the forefront of innovation in healthcare and biotechnology.",
      established: 1885,
      website: "https://stanford.edu",
      departments: ["School of Medicine", "School of Engineering", "School of Humanities and Sciences"],
      notableAchievements: [
        "Nobel Prize in Physiology or Medicine (2020)",
        "Breakthrough in CRISPR Technology (2019)",
        "Development of AI for Medical Imaging (2021)"
      ]
    },
    {
      id: 2,
      name: "ETH Zurich",
      location: "Zurich, Switzerland",
      researchers: 95,
      papers: 720,
      focusAreas: ["Biotechnology", "Quantum Computing", "Climate Science"],
      description: "ETH Zurich is one of the world's leading universities in science and technology. The institution has a strong tradition of innovation and has produced numerous Nobel laureates.",
      established: 1855,
      website: "https://ethz.ch",
      departments: ["Department of Biology", "Department of Chemistry", "Department of Physics"],
      notableAchievements: [
        "Nobel Prize in Chemistry (2019)",
        "Breakthrough in Quantum Computing (2022)",
        "Innovation in Sustainable Materials (2021)"
      ]
    },
    {
      id: 3,
      name: "Oxford University",
      location: "Oxford, UK",
      researchers: 110,
      papers: 780,
      focusAreas: ["Vaccines", "Infectious Diseases", "Clinical Trials"],
      description: "Oxford University is one of the oldest and most prestigious universities in the world. Its medical sciences division is particularly renowned for research in vaccines and infectious diseases.",
      established: 1096,
      website: "https://ox.ac.uk",
      departments: ["Nuffield Department of Medicine", "Department of Biochemistry", "Department of Zoology"],
      notableAchievements: [
        "Development of Oxford-AstraZeneca COVID-19 Vaccine (2020)",
        "Breakthrough in Malaria Treatment (2018)",
        "Innovation in Clinical Trial Design (2022)"
      ]
    }
  ], []);

  const filteredPapers = useMemo(() => {
    return papers.filter(paper => {
      const matchesSearch = searchQuery === "" || 
        paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || paper.category === selectedCategory;
      
      // Simple date filtering - can be enhanced based on actual date format
      const matchesDate = selectedDateRange === "all" || true; // Implement proper date filtering if needed
      
      return matchesSearch && matchesCategory && matchesDate;
    });
  }, [papers, searchQuery, selectedCategory, selectedDateRange]);

  const filteredResearchers = useMemo(() => {
    return researchers.filter(researcher => {
      return searchQuery === "" || 
        researcher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        researcher.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        researcher.field.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [researchers, searchQuery]);

  const filteredInstitutions = useMemo(() => {
    return institutions.filter(institution => {
      return searchQuery === "" || 
        institution.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        institution.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        institution.focusAreas.some(area => area.toLowerCase().includes(searchQuery.toLowerCase()));
    });
  }, [institutions, searchQuery]);

  const handleViewPaper = (paper) => {
    setSelectedPaper(paper);
    toast({
      title: "Paper Details",
      description: "Viewing paper details. In a real implementation, this would open the full paper.",
    });
  };

  const handleViewResearcher = (researcher) => {
    setSelectedResearcher(researcher);
    toast({
      title: "Researcher Profile",
      description: "Viewing researcher profile. In a real implementation, this would show more details.",
    });
  };

  const handleViewInstitution = (institution) => {
    setSelectedInstitution(institution);
    toast({
      title: "Institution Details",
      description: "Viewing institution details. In a real implementation, this would show more information.",
    });
  };

  const categories = ["all", ...new Set(papers.map(paper => paper.category))];
  const dateRanges = ["all", "last month", "last 3 months", "last 6 months", "last year"];

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
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Results</SheetTitle>
                    <SheetDescription>
                      Refine your search results using the filters below
                    </SheetDescription>
                  </SheetHeader>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map(category => (
                            <SelectItem key={category} value={category}>
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Date Range</label>
                      <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select date range" />
                        </SelectTrigger>
                        <SelectContent>
                          {dateRanges.map(range => (
                            <SelectItem key={range} value={range}>
                              {range.charAt(0).toUpperCase() + range.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={() => setIsFilterOpen(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
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
              {filteredPapers.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No papers found matching your criteria</p>
                </div>
              ) : (
                filteredPapers.map(paper => (
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
                        <Button 
                          className="flex-shrink-0" 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewPaper(paper)}
                        >
                          View Paper <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>
            
            <TabsContent value="researchers" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResearchers.length === 0 ? (
                  <div className="col-span-full text-center py-8">
                    <p className="text-muted-foreground">No researchers found matching your criteria</p>
                  </div>
                ) : (
                  filteredResearchers.map(researcher => (
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
                          <Button 
                            className="w-full mt-2" 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewResearcher(researcher)}
                          >
                            View Profile <ArrowUpRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="institutions" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {filteredInstitutions.length === 0 ? (
                  <div className="col-span-full text-center py-8">
                    <p className="text-muted-foreground">No institutions found matching your criteria</p>
                  </div>
                ) : (
                  filteredInstitutions.map(institution => (
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
                          
                          <Button 
                            className="w-full mt-2" 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewInstitution(institution)}
                          >
                            View Institution <ArrowUpRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />

      {/* Paper Details Dialog */}
      <Dialog open={!!selectedPaper} onOpenChange={() => setSelectedPaper(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedPaper?.title}</DialogTitle>
            <DialogDescription>
              {selectedPaper?.authors}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{selectedPaper?.category}</Badge>
              {selectedPaper?.tags.map((tag, index) => (
                <Badge key={index} variant="outline">{tag}</Badge>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Journal</p>
                <p className="text-muted-foreground">{selectedPaper?.journal}</p>
              </div>
              <div>
                <p className="font-medium">Publication Date</p>
                <p className="text-muted-foreground">{selectedPaper?.date}</p>
              </div>
              <div>
                <p className="font-medium">Citations</p>
                <p className="text-muted-foreground">{selectedPaper?.citations}</p>
              </div>
            </div>
            <div className="pt-4">
              <Button className="w-full">
                View Full Paper <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Researcher Profile Dialog */}
      <Dialog open={!!selectedResearcher} onOpenChange={() => setSelectedResearcher(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-2xl">
                {selectedResearcher?.name.charAt(0)}
              </div>
              <div>
                <DialogTitle>{selectedResearcher?.name}</DialogTitle>
                <DialogDescription>
                  {selectedResearcher?.institution}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Biography</h4>
              <p className="text-sm text-muted-foreground">{selectedResearcher?.bio}</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {selectedResearcher?.expertise.map((skill, index) => (
                  <Badge key={index} variant="outline">{skill}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Recent Publications</h4>
              <ul className="space-y-1 text-sm">
                {selectedResearcher?.recentPublications.map((pub, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{pub}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Field</p>
                <p className="text-muted-foreground">{selectedResearcher?.field}</p>
              </div>
              <div>
                <p className="font-medium">Papers</p>
                <p className="text-muted-foreground">{selectedResearcher?.papers}</p>
              </div>
              <div>
                <p className="font-medium">Collaborations</p>
                <p className="text-muted-foreground">{selectedResearcher?.collaborations}</p>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">{selectedResearcher?.email}</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="w-full" variant="outline">
                <LinkIcon className="mr-2 h-4 w-4" />
                Visit Website
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Institution Details Dialog */}
      <Dialog open={!!selectedInstitution} onOpenChange={() => setSelectedInstitution(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Building className="h-10 w-10" />
              </div>
              <div>
                <DialogTitle>{selectedInstitution?.name}</DialogTitle>
                <DialogDescription className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {selectedInstitution?.location}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">About</h4>
              <p className="text-sm text-muted-foreground">{selectedInstitution?.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Established</p>
                <p className="text-muted-foreground">{selectedInstitution?.established}</p>
              </div>
              <div>
                <p className="font-medium">Researchers</p>
                <p className="text-muted-foreground">{selectedInstitution?.researchers}</p>
              </div>
              <div>
                <p className="font-medium">Papers</p>
                <p className="text-muted-foreground">{selectedInstitution?.papers}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {selectedInstitution?.focusAreas.map((area, index) => (
                  <Badge key={index} variant="outline">{area}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Departments</h4>
              <ul className="space-y-1 text-sm">
                {selectedInstitution?.departments.map((dept, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{dept}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Notable Achievements</h4>
              <ul className="space-y-1 text-sm">
                {selectedInstitution?.notableAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4">
              <Button className="w-full" variant="outline">
                <LinkIcon className="mr-2 h-4 w-4" />
                Visit Website
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Discovery;
