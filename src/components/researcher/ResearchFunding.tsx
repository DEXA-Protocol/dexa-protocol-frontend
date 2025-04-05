
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CoinsIcon, TrendingUpIcon, UsersIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ResearchFunding = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Funding Request Submitted",
      description: "Your research funding request has been submitted successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-card/80 to-accent/10">
          <CardHeader>
            <CoinsIcon className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-lg">Community Funding</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Get your research funded by the DEXA community through decentralized crowdfunding.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Learn More</Button>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-card/80 to-accent/10">
          <CardHeader>
            <TrendingUpIcon className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-lg">Grant Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Apply for grants from institutions and organizations partnered with DEXA Protocol.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Browse Grants</Button>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-card/80 to-accent/10">
          <CardHeader>
            <UsersIcon className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-lg">Private Investors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Connect with private investors interested in funding promising research projects.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Connect</Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Submit Funding Request</CardTitle>
          <CardDescription>
            Create a detailed funding proposal to secure resources for your research.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="project-title">Research Project Title</Label>
                <Input id="project-title" placeholder="Enter the title of your research project" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="amount">Funding Amount Requested</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                    $
                  </span>
                  <Input 
                    id="amount"
                    type="number" 
                    placeholder="5000" 
                    className="rounded-l-none"
                    required 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Research Field</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="health">Health Sciences</SelectItem>
                      <SelectItem value="pharma">Pharmaceuticals</SelectItem>
                      <SelectItem value="biotech">Biotechnology</SelectItem>
                      <SelectItem value="social">Social Sciences</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="duration">Project Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3months">3 Months</SelectItem>
                      <SelectItem value="6months">6 Months</SelectItem>
                      <SelectItem value="1year">1 Year</SelectItem>
                      <SelectItem value="2years">2 Years</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="summary">Research Summary</Label>
                <Textarea 
                  id="summary" 
                  placeholder="Briefly describe your research project and its objectives" 
                  className="min-h-[100px]" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="impact">Expected Impact</Label>
                <Textarea 
                  id="impact" 
                  placeholder="Explain the potential impact and significance of your research" 
                  className="min-h-[100px]" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timeline">Project Timeline</Label>
                <Textarea 
                  id="timeline" 
                  placeholder="Provide a timeline with key milestones" 
                  className="min-h-[100px]" 
                  required 
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full button-gradient">
              Submit Funding Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResearchFunding;
