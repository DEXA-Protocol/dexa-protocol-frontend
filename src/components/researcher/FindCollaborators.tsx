
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  UserPlus, 
  MessageCircle, 
  Star, 
  Filter,
  Briefcase,
  Building2,
  GraduationCap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const researchers = [
  {
    id: 1,
    name: "Dr. Emma Watson",
    institution: "Cambridge University",
    field: "Biotechnology",
    specialization: ["Gene Therapy", "CRISPR", "Genomics"],
    rating: 4.9,
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Prof. James Chen",
    institution: "Stanford Research Center",
    field: "Pharmaceuticals",
    specialization: ["Drug Discovery", "Medicinal Chemistry", "Immunology"],
    rating: 4.8,
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Dr. Olivia Martinez",
    institution: "MIT",
    field: "Health Sciences",
    specialization: ["Neuroscience", "Clinical Trials", "Bioinformatics"],
    rating: 4.7,
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Prof. Michael Brown",
    institution: "Oxford University",
    field: "Social Sciences",
    specialization: ["Behavioral Economics", "Public Health Policy", "Statistics"],
    rating: 4.6,
    image: "https://i.pravatar.cc/150?img=4",
  }
];

const FindCollaborators = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  
  const filteredResearchers = researchers.filter(researcher => {
    const matchesTerm = researcher.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        researcher.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        researcher.specialization.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
                        
    const matchesField = selectedField ? researcher.field === selectedField : true;
    
    return matchesTerm && matchesField;
  });
  
  const handleInvite = (id: number) => {
    toast({
      title: "Invitation Sent",
      description: `You've invited researcher #${id} to collaborate.`,
    });
  };
  
  const handleMessage = (id: number) => {
    toast({
      title: "Message Sent",
      description: `Your message to researcher #${id} has been sent.`,
    });
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Find Research Collaborators</CardTitle>
          <CardDescription>
            Connect with leading researchers in your field to collaborate on groundbreaking projects.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, institution, or specialization"
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select onValueChange={(value) => setSelectedField(value)}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Field" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fields</SelectItem>
                <SelectItem value="Health Sciences">Health Sciences</SelectItem>
                <SelectItem value="Pharmaceuticals">Pharmaceuticals</SelectItem>
                <SelectItem value="Biotechnology">Biotechnology</SelectItem>
                <SelectItem value="Social Sciences">Social Sciences</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResearchers.map((researcher) => (
          <Card key={researcher.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={researcher.image} 
                      alt={researcher.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{researcher.name}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <span>{researcher.rating}/5.0</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span>{researcher.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{researcher.field}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <div className="flex flex-wrap gap-1">
                      {researcher.specialization.map((spec, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t p-4 flex gap-2 justify-end">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex gap-1"
                  onClick={() => handleMessage(researcher.id)}
                >
                  <MessageCircle className="h-4 w-4" />
                  Message
                </Button>
                <Button 
                  size="sm" 
                  className="flex gap-1 bg-primary"
                  onClick={() => handleInvite(researcher.id)}
                >
                  <UserPlus className="h-4 w-4" />
                  Invite
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Post a Collaboration Request</CardTitle>
          <CardDescription>
            Let other researchers know what you're working on and find potential collaborators.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            setIsPosting(true);
            setTimeout(() => {
              setIsPosting(false);
              toast({
                title: "Request Posted",
                description: "Your collaboration request has been posted successfully.",
              });
            }, 1000);
          }}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="post-title">Research Topic</Label>
                <Input id="post-title" placeholder="Enter the title of your research topic" required />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="field">Field</Label>
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
                  <Label htmlFor="duration">Expected Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">1-3 months</SelectItem>
                      <SelectItem value="medium">3-6 months</SelectItem>
                      <SelectItem value="long">6-12 months</SelectItem>
                      <SelectItem value="extended">Over 12 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Describe your research project and what kind of collaborators you're looking for" 
                  className="min-h-[150px]" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="skills">Required Skills & Expertise</Label>
                <Textarea 
                  id="skills"
                  placeholder="List the skills and expertise you're looking for in potential collaborators" 
                  className="min-h-[100px]" 
                  required 
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full button-gradient" disabled={isPosting}>
              {isPosting ? "Posting..." : "Post Collaboration Request"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FindCollaborators;
