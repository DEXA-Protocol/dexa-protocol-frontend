
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Users, Calendar, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const universities = [
  {
    id: 1,
    name: "Stanford University",
    location: "Stanford, California",
    image: "https://i.pravatar.cc/150?img=5",
    opportunities: [
      {
        id: 101,
        title: "Cancer Research Initiative",
        department: "School of Medicine",
        type: "Joint Research",
        deadline: "2023-07-30",
        tags: ["Oncology", "Clinical Trials", "Immunotherapy"]
      },
      {
        id: 102,
        title: "AI in Healthcare",
        department: "Computer Science",
        type: "Academic Partnership",
        deadline: "2023-08-15",
        tags: ["Artificial Intelligence", "Machine Learning", "Neural Networks"]
      }
    ]
  },
  {
    id: 2,
    name: "MIT",
    location: "Cambridge, Massachusetts",
    image: "https://i.pravatar.cc/150?img=6",
    opportunities: [
      {
        id: 201,
        title: "Quantum Computing Applications",
        department: "Physics Department",
        type: "Industry Partnership",
        deadline: "2023-09-01",
        tags: ["Quantum Computing", "Algorithms", "Cryptography"]
      }
    ]
  },
  {
    id: 3,
    name: "University of Tokyo",
    location: "Tokyo, Japan",
    image: "https://i.pravatar.cc/150?img=7",
    opportunities: [
      {
        id: 301,
        title: "Sustainable Urban Development",
        department: "Environmental Engineering",
        type: "Research Grant",
        deadline: "2023-08-10",
        tags: ["Sustainability", "Urban Planning", "Ecology"]
      }
    ]
  },
  {
    id: 4,
    name: "Oxford University",
    location: "Oxford, United Kingdom",
    image: "https://i.pravatar.cc/150?img=8",
    opportunities: [
      {
        id: 401,
        title: "Vaccine Development Consortium",
        department: "Medical Sciences Division",
        type: "International Collaboration",
        deadline: "2023-09-30",
        tags: ["Virology", "Immunology", "Public Health"]
      },
      {
        id: 402,
        title: "Historical Data Analysis",
        department: "History Department",
        type: "Academic Exchange",
        deadline: "2023-10-15",
        tags: ["Data Science", "Historical Analysis", "Archives"]
      }
    ]
  }
];

const UniversityCollaborations = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedUniversity, setExpandedUniversity] = useState<number | null>(null);
  
  const filteredUniversities = universities.filter(university => 
    university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    university.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    university.opportunities.some(opp => 
      opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );

  const handleApply = (uniName: string, oppTitle: string) => {
    toast({
      title: "Application Submitted",
      description: `You've applied to collaborate on "${oppTitle}" at ${uniName}.`,
    });
  };

  const toggleExpand = (id: number) => {
    setExpandedUniversity(expandedUniversity === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-dexa-purple/10 to-dexa-blue/10 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-2">University Collaborations Network</h2>
        <p className="text-muted-foreground mb-4">
          Explore collaboration opportunities with universities and research institutions around the world.
        </p>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search universities, departments, or research areas"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-6">
        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No universities found matching your search criteria.</p>
          </div>
        )}

        {filteredUniversities.map((university) => (
          <Card key={university.id} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-md overflow-hidden">
                  <img 
                    src={university.image} 
                    alt={university.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-xl">{university.name}</CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{university.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pb-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span><strong>{university.opportunities.length}</strong> collaboration opportunities</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => toggleExpand(university.id)}
                >
                  {expandedUniversity === university.id ? "Collapse" : "View All"}
                </Button>
              </div>

              {(expandedUniversity === university.id || university.opportunities.length <= 2) ? (
                <div className="space-y-4">
                  {university.opportunities.map((opp) => (
                    <div key={opp.id} className="border rounded-md p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{opp.title}</h4>
                        <Badge variant="outline">{opp.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {opp.department}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {opp.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Deadline: {new Date(opp.deadline).toLocaleDateString()}</span>
                        </div>
                        <Button 
                          size="sm" 
                          onClick={() => handleApply(university.name, opp.title)}
                          className="ml-2"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {university.opportunities.slice(0, 1).map((opp) => (
                    <div key={opp.id} className="border rounded-md p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{opp.title}</h4>
                        <Badge variant="outline">{opp.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {opp.department}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {opp.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Deadline: {new Date(opp.deadline).toLocaleDateString()}</span>
                        </div>
                        <Button 
                          size="sm" 
                          onClick={() => handleApply(university.name, opp.title)}
                          className="ml-2"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  ))}
                  <p className="text-center text-sm text-muted-foreground">
                    +{university.opportunities.length - 1} more opportunities
                  </p>
                </div>
              )}
            </CardContent>

            <CardFooter className="border-t mt-2 flex justify-between">
              <Button variant="ghost" size="sm">
                Institution Profile
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <ExternalLink className="h-4 w-4" />
                Visit Website
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UniversityCollaborations;
