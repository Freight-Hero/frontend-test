import { FC } from 'react';

interface LoadStatusBadgeProps {
  status: 'in route' | 'pick up' | 'delivered';
}

const statusColors = {
  'in route': {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
  },
  'pick up': {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
  },
  'delivered': {
    bg: 'bg-green-100',
    text: 'text-green-800',
  },
};

export const LoadStatusBadge: FC<LoadStatusBadgeProps> = ({ status }) => {
  const colors = statusColors[status];
  const formattedStatus = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
      {formattedStatus}
    </span>
  );
}; 