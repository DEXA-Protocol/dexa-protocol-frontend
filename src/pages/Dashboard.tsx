
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  BarChart,
  FileText,
  Users,
  Database,
  Clock,
  Star,
  Bell,
  Bookmark,
  Settings
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Researcher</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Published Papers</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span className="text-3xl font-bold">3</span>
                <FileText className="h-10 w-10 text-primary/30" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Research Collaborators</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span className="text-3xl font-bold">24</span>
                <Users className="h-10 w-10 text-primary/30" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Datasets Contributed</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span className="text-3xl font-bold">8</span>
                <Database className="h-10 w-10 text-primary/30" />
              </CardContent>
            </Card>
          </div>
          
          <Tabs
            defaultValue="overview"
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:w-[600px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="papers">Papers</TabsTrigger>
              <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
              <TabsTrigger value="datasets">Datasets</TabsTrigger>
              <TabsTrigger value="proposals">Proposals</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="animate-fade-in space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research Activity</CardTitle>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <BarChart className="h-16 w-16 text-muted" />
                    <p className="text-muted-foreground">Activity chart will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-2 rounded-full">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Published new paper</p>
                        <p className="text-sm text-muted-foreground">Quantum Computing Applications in Genomics</p>
                        <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-2 rounded-full">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">New collaboration request</p>
                        <p className="text-sm text-muted-foreground">From Dr. Sarah Johnson - Stanford University</p>
                        <p className="text-xs text-muted-foreground mt-1">5 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-2 rounded-full">
                        <Database className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Dataset accessed</p>
                        <p className="text-sm text-muted-foreground">Clinical Trial Results - Project Alpha</p>
                        <p className="text-xs text-muted-foreground mt-1">1 week ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Research Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <p className="text-sm font-medium">Gene Therapy Project</p>
                        <p className="text-sm text-muted-foreground">75%</p>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <p className="text-sm font-medium">AI Model Training</p>
                        <p className="text-sm text-muted-foreground">40%</p>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <p className="text-sm font-medium">Data Collection</p>
                        <p className="text-sm text-muted-foreground">90%</p>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <p className="text-sm font-medium">Literature Review</p>
                        <p className="text-sm text-muted-foreground">60%</p>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="papers" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Published Papers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-3 rounded-full">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Quantum Computing Applications in Genomics</p>
                          <p className="text-sm text-muted-foreground">Published in Nature Biotechnology</p>
                          <div className="flex items-center mt-2">
                            <Clock className="h-3 w-3 text-muted-foreground mr-1" /> 
                            <span className="text-xs text-muted-foreground">May 15, 2023</span>
                            <span className="mx-2 text-muted-foreground">•</span>
                            <Star className="h-3 w-3 text-amber-500 mr-1" />
                            <span className="text-xs text-muted-foreground">12 Citations</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-3 rounded-full">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Decentralized Clinical Trials: A Blockchain Approach</p>
                          <p className="text-sm text-muted-foreground">Published in Journal of Medical Internet Research</p>
                          <div className="flex items-center mt-2">
                            <Clock className="h-3 w-3 text-muted-foreground mr-1" /> 
                            <span className="text-xs text-muted-foreground">March 3, 2023</span>
                            <span className="mx-2 text-muted-foreground">•</span>
                            <Star className="h-3 w-3 text-amber-500 mr-1" />
                            <span className="text-xs text-muted-foreground">8 Citations</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-3 rounded-full">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">AI-Assisted Drug Discovery: Current Challenges and Future Prospects</p>
                          <p className="text-sm text-muted-foreground">Published in Science Advances</p>
                          <div className="flex items-center mt-2">
                            <Clock className="h-3 w-3 text-muted-foreground mr-1" /> 
                            <span className="text-xs text-muted-foreground">November 20, 2022</span>
                            <span className="mx-2 text-muted-foreground">•</span>
                            <Star className="h-3 w-3 text-amber-500 mr-1" />
                            <span className="text-xs text-muted-foreground">15 Citations</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="collaborations" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Active Collaborations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-8">
                    Your collaborations will appear here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="datasets" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Your Datasets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-8">
                    Your contributed datasets will appear here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="proposals" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Funding Proposals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-8">
                    Your funding proposals will appear here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
