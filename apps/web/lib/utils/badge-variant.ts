
type BadgeVariant = 'default' | 'success' | 'warning' | 'error';
export const getStatusVariant = (status: string): BadgeVariant => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'success';
    case 'suspended':
      return 'warning';
    case 'expired':
      return 'error';
    default:
      return 'default';
  }
};
export const getSyncVariant = (sync: string): BadgeVariant => {
  switch (sync.toLowerCase()) {
    case 'in sync':
      return 'success';
    case 'out of sync':
      return 'warning';
    case 'not found in s2':
    case 'not found in temptation':
      return 'error';
    default:
      return 'default';
  }
};
