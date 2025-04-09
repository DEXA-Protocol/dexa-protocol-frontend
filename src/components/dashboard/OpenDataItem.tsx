import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Edit, Trash2, Download, Eye, DollarSign } from "lucide-react";

interface OpenDataItemProps {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'available' | 'sold' | 'pending';
  price: string;
  createdAt: string;
  salesCount?: number;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onViewDetails: (id: string) => void;
}

const OpenDataItem = ({
  id,
  title,
  description,
  category,
  status,
  price,
  createdAt,
  salesCount = 0,
  onEdit,
  onDelete,
  onViewDetails
}: OpenDataItemProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500';
      case 'sold':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge className={getStatusColor(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>Created {new Date(createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1 text-primary" />
              <span className="font-medium">{price}</span>
            </div>
            <div className="flex items-center">
              <Download className="h-4 w-4 mr-1 text-primary" />
              <span>{salesCount} sales</span>
            </div>
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" size="sm" onClick={() => onViewDetails(id)}>
          <Eye className="h-4 w-4 mr-1" />
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

export default OpenDataItem; 