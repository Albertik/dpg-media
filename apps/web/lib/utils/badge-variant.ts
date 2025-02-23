
type BadgeVariant = 'default' | 'destructive' | 'outline' | 'secondary';
export const getStatusVariant = (status: string): BadgeVariant => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'default';
    case 'suspended':
      return 'secondary';
    case 'expired':
      return 'destructive';
    default:
      return 'default';
  }
};
export const getSyncVariant = (sync: string): BadgeVariant => {
  switch (sync.toLowerCase()) {
    case 'in sync':
      return 'default';
    case 'out of sync':
      return 'secondary';
    case 'not found in s2':
    case 'not found in temptation':
      return 'destructive';
    default:
      return 'default';
  }
};
