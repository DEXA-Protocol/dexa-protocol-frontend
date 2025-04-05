
import { useState } from "react";
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FileUpIcon, Briefcase, Calendar, Users, Globe, FlaskConical, Award, PenLine } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  field: z.string().min(1, "Please select a field"),
  duration: z.string().min(1, "Please select a duration"),
  fundingGoal: z.string().min(1, "Please enter a funding goal"),
  teamSize: z.string().min(1, "Please select a team size"),
  keywords: z.string().min(3, "Please enter at least one keyword"),
});

const CreateProject = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      field: "",
      duration: "",
      fundingGoal: "",
      teamSize: "",
      keywords: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Project Created",
        description: "Your research project has been successfully created.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-card/80 to-accent/10">
          <CardHeader className="pb-2">
            <FlaskConical className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-lg">Research Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Define your groundbreaking research project and seek collaboration and funding from the community.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-card/80 to-accent/10">
          <CardHeader className="pb-2">
            <Users className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-lg">Team Building</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Find and connect with talented researchers, scientists, and academics to join your research initiative.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-card/80 to-accent/10">
          <CardHeader className="pb-2">
            <Award className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-lg">Recognition & Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Gain visibility in the scientific community and make a significant impact with your research.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create New Research Project</CardTitle>
          <CardDescription>
            Define your research initiative, explain your objectives, and find collaborators and funding.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a descriptive title for your research project" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="field"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Research Field</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select field" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="health">Health Sciences</SelectItem>
                          <SelectItem value="pharma">Pharmaceuticals</SelectItem>
                          <SelectItem value="biotech">Biotechnology</SelectItem>
                          <SelectItem value="social">Social Sciences</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expected Duration</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="3months">3 Months</SelectItem>
                          <SelectItem value="6months">6 Months</SelectItem>
                          <SelectItem value="1year">1 Year</SelectItem>
                          <SelectItem value="2years">2 Years</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fundingGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Funding Goal</FormLabel>
                      <FormControl>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                            $
                          </span>
                          <Input 
                            type="number" 
                            placeholder="Amount needed" 
                            className="rounded-l-none" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="teamSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Size</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="solo">Solo Researcher</SelectItem>
                          <SelectItem value="small">Small Team (2-5)</SelectItem>
                          <SelectItem value="medium">Medium Team (6-10)</SelectItem>
                          <SelectItem value="large">Large Team (11+)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your research project, its objectives, methodology, and expected outcomes" 
                        className="min-h-[150px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter keywords separated by commas" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Add relevant keywords to help others find your project
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="space-y-2">
                <Label>Supporting Documents</Label>
                <div className="border-2 border-dashed rounded-md p-6 text-center cursor-pointer hover:bg-background/80 transition">
                  <FileUpIcon className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Drop files here or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, DOCX, or PPT files up to 10MB
                  </p>
                  <input type="file" className="hidden" multiple />
                </div>
              </div>
              
              <Button type="submit" className="w-full button-gradient" disabled={isSubmitting}>
                {isSubmitting ? "Creating Project..." : "Create Research Project"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProject;
