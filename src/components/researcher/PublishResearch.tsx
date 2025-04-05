
import { useState } from 'react';
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
import { FileUpIcon, BookIcon, ArrowRightIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PublishResearch = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Research Submitted",
        description: "Your research paper has been submitted for review.",
      });
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Publish Your Research</CardTitle>
          <CardDescription>
            Share your findings with the scientific community and get recognized for your work.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Research Title</Label>
                <Input id="title" placeholder="Enter the title of your research paper" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="abstract">Abstract</Label>
                <Textarea 
                  id="abstract" 
                  placeholder="Provide a brief summary of your research" 
                  className="min-h-[120px]" 
                  required 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Research Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
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
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input id="keywords" placeholder="Enter keywords separated by commas" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Upload Research Paper (PDF)</Label>
                <div className="border-2 border-dashed rounded-md p-6 text-center cursor-pointer hover:bg-background/80 transition">
                  <FileUpIcon className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Drop your file here, or click to browse
                  </p>
                  <input type="file" className="hidden" accept=".pdf" />
                </div>
              </div>
            </div>
            
            <Button type="submit" className="w-full button-gradient" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Publish Research"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-card/80 to-accent/10">
          <CardHeader>
            <BookIcon className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-lg">Open Access Publishing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Your research will be accessible to everyone on the DEXA platform with proper attribution and immutable proof of ownership.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card/80 to-accent/10">
          <CardHeader>
            <FileUpIcon className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-lg">Transparent Peer Review</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Get valuable feedback from peers in your field through our transparent and fair review process.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card/80 to-accent/10">
          <CardHeader>
            <ArrowRightIcon className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-lg">Citation Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Track the impact of your research with comprehensive citation metrics and analytics.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PublishResearch;
