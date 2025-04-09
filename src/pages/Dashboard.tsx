import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
  Settings,
  Plus,
  History
} from "lucide-react";
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ProjectItem from '@/components/dashboard/ProjectItem';
import FundingSubmissionItem from '@/components/dashboard/FundingSubmissionItem';
import TransactionHistoryItem from '@/components/dashboard/TransactionHistoryItem';
import OpenDataItem from '@/components/dashboard/OpenDataItem';

// Mock data for demonstration
const mockProjects = [
  {
    id: '1',
    title: 'Decentralized Clinical Trials Platform',
    description: 'A blockchain-based platform for managing clinical trials data',
    status: 'published' as const,
    createdAt: '2024-03-15',
  },
  {
    id: '2',
    title: 'AI-Powered Drug Discovery',
    description: 'Using machine learning to accelerate drug discovery process',
    status: 'draft' as const,
    createdAt: '2024-03-20',
  },
];

const mockFundingSubmissions = [
  {
    id: '1',
    projectTitle: 'Decentralized Clinical Trials Platform',
    amount: '50,000 USDC',
    status: 'pending' as const,
    submittedAt: '2024-03-15',
  },
  {
    id: '2',
    projectTitle: 'AI-Powered Drug Discovery',
    amount: '75,000 USDC',
    status: 'approved' as const,
    submittedAt: '2024-03-10',
  },
];

const mockTransactions = [
  {
    id: '1',
    type: 'vote' as const,
    title: 'Vote on Protocol Upgrade',
    description: 'Voted YES on proposal #123 to upgrade the protocol to v2.0',
    timestamp: '2024-03-15T14:30:00Z',
    status: 'completed' as const,
    transactionHash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
  },
  {
    id: '2',
    type: 'proposal' as const,
    title: 'New Research Grant Program',
    description: 'Submitted proposal #124 for a new research grant program',
    timestamp: '2024-03-10T09:15:00Z',
    status: 'pending' as const,
    transactionHash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
  },
  {
    id: '3',
    type: 'contribution' as const,
    title: 'DAO Treasury Contribution',
    description: 'Contributed 1000 USDC to the DAO treasury',
    timestamp: '2024-03-05T16:45:00Z',
    status: 'completed' as const,
    amount: '1000 USDC',
    transactionHash: '0x7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef123456',
  },
];

const mockOpenDataItems = [
  {
    id: '1',
    title: 'Clinical Trial Dataset - Phase 1',
    description: 'Comprehensive dataset from Phase 1 clinical trials for cancer treatment',
    category: 'Healthcare',
    status: 'available' as const,
    price: '500 USDC',
    createdAt: '2024-03-15',
    salesCount: 3,
  },
  {
    id: '2',
    title: 'Genomic Sequencing Data',
    description: 'High-quality genomic sequencing data from 1000 patients',
    category: 'Genomics',
    status: 'sold' as const,
    price: '1200 USDC',
    createdAt: '2024-03-01',
    salesCount: 1,
  },
  {
    id: '3',
    title: 'Drug Interaction Database',
    description: 'Database of known drug interactions and side effects',
    category: 'Pharmacology',
    status: 'pending' as const,
    price: '800 USDC',
    createdAt: '2024-03-20',
    salesCount: 0,
  },
];

const Dashboard = () => {
  const { isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState("projects");

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h1 className="text-2xl font-bold">Please connect your wallet to view your dashboard</h1>
        <ConnectButton />
      </div>
    );
  }

  const handleProjectEdit = (id: string) => {
    console.log('Edit project:', id);
    // Implement edit functionality
  };

  const handleProjectDelete = (id: string) => {
    console.log('Delete project:', id);
    // Implement delete functionality
  };

  const handleFundingEdit = (id: string) => {
    console.log('Edit funding submission:', id);
    // Implement edit functionality
  };

  const handleFundingDelete = (id: string) => {
    console.log('Delete funding submission:', id);
    // Implement delete functionality
  };

  const handleFundingViewDetails = (id: string) => {
    console.log('View funding details:', id);
    // Implement view details functionality
  };

  const handleOpenDataEdit = (id: string) => {
    console.log('Edit open data item:', id);
    // Implement edit functionality
  };

  const handleOpenDataDelete = (id: string) => {
    console.log('Delete open data item:', id);
    // Implement delete functionality
  };

  const handleOpenDataViewDetails = (id: string) => {
    console.log('View open data details:', id);
    // Implement view details functionality
  };

  const getNewButtonText = () => {
    switch (activeTab) {
      case 'projects':
        return 'New Project';
      case 'funding':
        return 'New Funding Request';
      case 'open-data':
        return 'New Data Item';
      default:
        return 'New Item';
    }
  };

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
          
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            {activeTab !== 'transactions' && (
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                {getNewButtonText()}
              </Button>
            )}
          </div>
          
          <Tabs defaultValue="projects" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="projects">My Projects</TabsTrigger>
              <TabsTrigger value="funding">Funding Submissions</TabsTrigger>
              <TabsTrigger value="transactions">
                <History className="h-4 w-4 mr-1" />
                Transactions
              </TabsTrigger>
              <TabsTrigger value="open-data">
                <Database className="h-4 w-4 mr-1" />
                Open Data
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="projects">
              <Card>
                <CardHeader>
                  <CardTitle>My Published Projects</CardTitle>
                  <CardDescription>Manage your published projects and their status</CardDescription>
                </CardHeader>
                <CardContent>
                  {mockProjects.length > 0 ? (
                    mockProjects.map((project) => (
                      <ProjectItem
                        key={project.id}
                        {...project}
                        onEdit={handleProjectEdit}
                        onDelete={handleProjectDelete}
                      />
                    ))
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-muted-foreground">No projects published yet</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="funding">
              <Card>
                <CardHeader>
                  <CardTitle>Funding Submissions</CardTitle>
                  <CardDescription>View and manage your funding requests</CardDescription>
                </CardHeader>
                <CardContent>
                  {mockFundingSubmissions.length > 0 ? (
                    mockFundingSubmissions.map((submission) => (
                      <FundingSubmissionItem
                        key={submission.id}
                        {...submission}
                        onEdit={handleFundingEdit}
                        onDelete={handleFundingDelete}
                        onViewDetails={handleFundingViewDetails}
                      />
                    ))
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-muted-foreground">No funding submissions yet</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transactions">
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>View your governance activities and contributions</CardDescription>
                </CardHeader>
                <CardContent>
                  {mockTransactions.length > 0 ? (
                    mockTransactions.map((transaction) => (
                      <TransactionHistoryItem
                        key={transaction.id}
                        {...transaction}
                      />
                    ))
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-muted-foreground">No transaction history yet</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="open-data">
              <Card>
                <CardHeader>
                  <CardTitle>Open Data Marketplace</CardTitle>
                  <CardDescription>Manage your data items in the marketplace</CardDescription>
                </CardHeader>
                <CardContent>
                  {mockOpenDataItems.length > 0 ? (
                    mockOpenDataItems.map((item) => (
                      <OpenDataItem
                        key={item.id}
                        {...item}
                        onEdit={handleOpenDataEdit}
                        onDelete={handleOpenDataDelete}
                        onViewDetails={handleOpenDataViewDetails}
                      />
                    ))
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-muted-foreground">No data items in the marketplace yet</p>
                    </div>
                  )}
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
