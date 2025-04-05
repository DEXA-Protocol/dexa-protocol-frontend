
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Database, FileText, Filter, Search, Link, Download } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const OpenData = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("datasets");
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    toast({
      title: "Section Changed",
      description: `You are now viewing the ${value.charAt(0).toUpperCase() + value.slice(1)} section`,
    });
  };

  const datasets = [
    {
      id: 1,
      name: "Clinical Trial Results - 2023",
      category: "Medical",
      contributors: 48,
      size: "2.8 GB",
      lastUpdated: "2023-12-15"
    },
    {
      id: 2,
      name: "Climate Change Observations",
      category: "Environmental",
      contributors: 126,
      size: "5.4 GB",
      lastUpdated: "2024-01-22"
    },
    {
      id: 3,
      name: "Genomic Sequencing Database",
      category: "Biology",
      contributors: 73,
      size: "12.1 GB",
      lastUpdated: "2024-02-08"
    },
    {
      id: 4,
      name: "Particle Physics Experiments",
      category: "Physics",
      contributors: 35,
      size: "8.3 GB",
      lastUpdated: "2024-03-01"
    },
    {
      id: 5,
      name: "Neural Network Training Data",
      category: "Computer Science",
      contributors: 92,
      size: "3.7 GB",
      lastUpdated: "2024-03-10"
    }
  ];

  const repositories = [
    {
      id: 1,
      name: "OpenNeuro",
      description: "A free and open platform for sharing neuroimaging data",
      datasets: 458,
      members: 1240
    },
    {
      id: 2,
      name: "GenBank",
      description: "Annotated collection of all publicly available DNA sequences",
      datasets: 2356,
      members: 8750
    },
    {
      id: 3,
      name: "ProtocolShare",
      description: "Open repository for experimental protocols across disciplines",
      datasets: 187,
      members: 562
    },
    {
      id: 4,
      name: "EarthData",
      description: "Collaborative platform for environmental and climate datasets",
      datasets: 843,
      members: 2190
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Open Data Repository</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse, contribute, and collaborate on open datasets. All data is openly accessible, 
              transparent, and follows FAIR principles (Findable, Accessible, Interoperable, and Reusable).
            </p>
          </div>
          
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search datasets..." 
                className="flex h-10 w-full sm:w-[300px] rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <Button className="w-full sm:w-auto">
              <Filter className="mr-2 h-4 w-4" /> Filter Results
            </Button>
          </div>
          
          <Tabs defaultValue="datasets" value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-8">
              <TabsTrigger value="datasets">Datasets</TabsTrigger>
              <TabsTrigger value="repositories">Repositories</TabsTrigger>
              <TabsTrigger value="contribute">Contribute</TabsTrigger>
            </TabsList>
            
            <TabsContent value="datasets" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Available Datasets
                  </CardTitle>
                  <CardDescription>Browse through publicly available research datasets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Contributors</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Last Updated</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {datasets.map((dataset) => (
                          <TableRow key={dataset.id}>
                            <TableCell className="font-medium">{dataset.name}</TableCell>
                            <TableCell>{dataset.category}</TableCell>
                            <TableCell>{dataset.contributors}</TableCell>
                            <TableCell>{dataset.size}</TableCell>
                            <TableCell>{dataset.lastUpdated}</TableCell>
                            <TableCell>
                              <Button size="sm" variant="outline">
                                <Download className="h-4 w-4 mr-1" /> Access
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing 5 of 243 datasets
                  </div>
                  <Button variant="outline">Load More</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="repositories" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {repositories.map((repo) => (
                  <Card key={repo.id}>
                    <CardHeader>
                      <CardTitle>{repo.name}</CardTitle>
                      <CardDescription>{repo.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Datasets:</span>
                        <span className="font-semibold">{repo.datasets}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Community:</span>
                        <span className="font-semibold">{repo.members} members</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Link className="mr-2 h-4 w-4" /> Visit Repository
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="contribute" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Contribute Your Data
                  </CardTitle>
                  <CardDescription>Share your research data with the global scientific community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Why Contribute?</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Increase visibility and impact of your research</li>
                      <li>Enable reproducibility and validation of results</li>
                      <li>Foster collaboration with other researchers</li>
                      <li>Fulfill funding agency and journal requirements</li>
                      <li>Earn citation credit for your datasets</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Data Guidelines</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Data must be anonymized and comply with privacy regulations</li>
                      <li>Include clear documentation and metadata</li>
                      <li>Provide information on data collection methodology</li>
                      <li>Use standard formats when possible</li>
                      <li>Specify appropriate licensing terms</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Data Submission Process</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OpenData;
