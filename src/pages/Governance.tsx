
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check, FileText, Users, VoteIcon, Shield } from "lucide-react";

const Governance = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("proposals");
  
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Governance Portal</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Participate in the decentralized governance of the platform. Submit proposals, vote on changes, 
              and help shape the future of scientific research and funding.
            </p>
          </div>
          
          <Tabs defaultValue="proposals" value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="proposals">Proposals</TabsTrigger>
              <TabsTrigger value="voting">Voting</TabsTrigger>
              <TabsTrigger value="delegation">Delegation</TabsTrigger>
              <TabsTrigger value="treasury">Treasury</TabsTrigger>
            </TabsList>
            
            <TabsContent value="proposals" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Submit a Proposal
                    </CardTitle>
                    <CardDescription>Create governance proposals for the community to vote on</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Proposals can include funding requests, protocol upgrades, parameter changes, 
                      or community initiatives.
                    </p>
                    <Button variant="outline" className="w-full">Create New Proposal</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Governance Rules
                    </CardTitle>
                    <CardDescription>Learn about the governance process</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Proposals need 100 tokens to submit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Voting period lasts 7 days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Quorum requires 10% of staked tokens</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Active Proposals</h2>
              
              <div className="space-y-4">
                {[1, 2, 3].map((id) => (
                  <Card key={id}>
                    <CardHeader>
                      <CardTitle>Proposal #{id}: Research Fund Allocation</CardTitle>
                      <CardDescription>Proposed by 0x71C...93B4 • Ends in {7 - id} days</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        This proposal suggests allocating 10,000 tokens to the quantum computing research fund.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm">
                        <span className="font-medium">Status:</span> Voting Active
                      </div>
                      <Button size="sm">View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="voting" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <VoteIcon className="h-5 w-5" />
                    Your Voting Power
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Available Voting Power</p>
                      <p className="text-2xl font-bold">120 votes</p>
                    </div>
                    <Button>Cast Vote</Button>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">Recent Votes</h3>
                    <div className="space-y-2">
                      <p className="text-sm flex justify-between">
                        <span>Proposal #1: Research Fund Allocation</span>
                        <span className="font-medium text-green-500">Voted For</span>
                      </p>
                      <p className="text-sm flex justify-between">
                        <span>Proposal #2: Protocol Upgrade v2.5</span>
                        <span className="font-medium text-red-500">Voted Against</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="delegation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Delegate Your Votes
                  </CardTitle>
                  <CardDescription>Assign your voting power to trusted community members</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    You can delegate your voting power to active community members who will vote on your behalf.
                  </p>
                  <Button variant="outline" className="w-full">Manage Delegations</Button>
                </CardContent>
              </Card>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Top Delegates</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Research Council", address: "0x74D...93F4", votes: 1250000 },
                  { name: "Tech Committee", address: "0x62B...41A2", votes: 980000 },
                  { name: "Community DAO", address: "0x31C...77E8", votes: 850000 },
                  { name: "Education Fund", address: "0x93A...45C2", votes: 720000 }
                ].map((delegate, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{delegate.name}</CardTitle>
                      <CardDescription>{delegate.address}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm">
                        <span>Delegated Votes:</span>
                        <span className="font-semibold">{delegate.votes.toLocaleString()}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">Delegate to This Address</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="treasury" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Treasury Overview</CardTitle>
                  <CardDescription>Current funds available for governance allocation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Available Funds</h3>
                    <p className="text-3xl font-bold">5,620,000 tokens</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">Recent Allocations</h3>
                    <ul className="space-y-2">
                      <li className="text-sm flex justify-between">
                        <span>Research Grants Program</span>
                        <span className="font-medium">1,200,000 tokens</span>
                      </li>
                      <li className="text-sm flex justify-between">
                        <span>Protocol Development</span>
                        <span className="font-medium">850,000 tokens</span>
                      </li>
                      <li className="text-sm flex justify-between">
                        <span>Community Initiatives</span>
                        <span className="font-medium">320,000 tokens</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Transaction History</Button>
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

export default Governance;
