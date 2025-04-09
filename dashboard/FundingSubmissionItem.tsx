import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Edit, Trash2, ExternalLink } from "lucide-react";

interface FundingSubmissionItemProps {
  id: string;
  projectTitle: string;
  amount: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onViewDetails: (id: string) => void;
}

const FundingSubmissionItem = ({
  id,
  projectTitle,
  amount,
  status,
  submittedAt,
  onEdit,
  onDelete,
  onViewDetails
}: FundingSubmissionItemProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'rejected':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{projectTitle}</CardTitle>
            <CardDescription>Funding Amount: {amount}</CardDescription>
          </div>
          <Badge className={getStatusColor(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-1" />
          <span>Submitted {new Date(submittedAt).toLocaleDateString()}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" size="sm" onClick={() => onViewDetails(id)}>
          <ExternalLink className="h-4 w-4 mr-1" />
          View Details
        </Button>
        <Button variant="outline" size="sm" onClick={() => onEdit(id)}>
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
        <Button variant="destructive" size="sm" onClick={() => onDelete(id)}>
          <Trash2 className="h-4 w-4 mr-1" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FundingSubmissionItem; 