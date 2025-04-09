export interface Load {
  id: number;
  status: 'in route' | 'pick up' | 'delivered';
  origin: string;
  destination: string;
  client_name: string;
  carrier_name: string;
}
