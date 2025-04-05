
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PublishResearch from '../components/researcher/PublishResearch';
import ResearchFunding from '../components/researcher/ResearchFunding';
import FindCollaborators from '../components/researcher/FindCollaborators';
import UniversityCollaborations from '../components/researcher/UniversityCollaborations';
import CreateProject from '../components/researcher/CreateProject';
import { useToast } from "@/hooks/use-toast";

const ResearcherHub = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("publish");
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    toast({
      title: "Section Changed",
      description: `You are now viewing the ${value.charAt(0).toUpperCase() + value.slice(1)} section`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Researcher Hub</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Collaborate, publish, and fund groundbreaking research in a decentralized ecosystem.
              Connect with peers, institutions, and funders to advance scientific discovery.
            </p>
          </div>
          
          <Tabs defaultValue="publish" value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="publish">Publish</TabsTrigger>
              <TabsTrigger value="funding">Seek Funding</TabsTrigger>
              <TabsTrigger value="collaborate">Find Collaborators</TabsTrigger>
              <TabsTrigger value="universities">University Network</TabsTrigger>
              <TabsTrigger value="projects">Create Project</TabsTrigger>
            </TabsList>
            
            <TabsContent value="publish" className="space-y-6">
              <PublishResearch />
            </TabsContent>
            
            <TabsContent value="funding" className="space-y-6">
              <ResearchFunding />
            </TabsContent>
            
            <TabsContent value="collaborate" className="space-y-6">
              <FindCollaborators />
            </TabsContent>
            
            <TabsContent value="universities" className="space-y-6">
              <UniversityCollaborations />
            </TabsContent>
            
            <TabsContent value="projects" className="space-y-6">
              <CreateProject />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResearcherHub;
