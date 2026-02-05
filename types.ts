
export enum PackageStatus {
  PRE_ALERTED = 'Pre-alerted',
  IN_WAREHOUSE = 'In Warehouse',
  IN_TRANSIT = 'In Transit',
  READY_FOR_PICKUP = 'Ready for Pickup',
  DELIVERED = 'Delivered',
  DELAYED = 'Delayed',
  PENDING = 'Pending'
}

export interface Package {
  id: string;
  trackingId: string;
  client: string;
  status: PackageStatus;
  weight: string;
  lastUpdated: string;
  estimatedArrival?: string;
  destination?: string;
  image?: string;
}

export interface DashboardStats {
  totalActive: number;
  delivered: number;
  registeredUsers: number;
  estimatedRevenue: string;
  activeTrend: string;
  deliveredTrend: string;
  usersTrend: string;
  revenueTrend: string;
}

export interface UserProfile {
  name: string;
  role: string;
  id: string;
  avatar: string;
}
