import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowUpRight, ArrowDownLeft, CheckCircle, XCircle } from "lucide-react";

interface TransactionHistoryItemProps {
  id: string;
  type: 'vote' | 'proposal' | 'contribution';
  title: string;
  description: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
  amount?: string;
  transactionHash: string;
}

const TransactionHistoryItem = ({
  id,
  type,
  title,
  description,
  timestamp,
  status,
  amount,
  transactionHash
}: TransactionHistoryItemProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'failed':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'vote':
        return <CheckCircle className="h-5 w-5 text-primary" />;
      case 'proposal':
        return <ArrowUpRight className="h-5 w-5 text-primary" />;
      case 'contribution':
        return <ArrowDownLeft className="h-5 w-5 text-primary" />;
      default:
        return null;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'vote':
        return 'Vote';
      case 'proposal':
        return 'Proposal';
      case 'contribution':
        return 'Contribution';
      default:
        return type;
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {getTypeIcon(type)}
            <div>
              <CardTitle className="text-base">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
          <Badge className={getStatusColor(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{new Date(timestamp).toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-4">
            {amount && (
              <div>
                <span className="font-medium">{amount}</span>
              </div>
            )}
            <div className="flex items-center">
              <span className="mr-1">Type:</span>
              <Badge variant="outline" className="text-xs">
                {getTypeLabel(type)}
              </Badge>
            </div>
            <div className="text-xs truncate max-w-[120px]">
              <span className="font-mono">0x{transactionHash.slice(0, 6)}...{transactionHash.slice(-4)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionHistoryItem; 