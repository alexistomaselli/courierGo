
import { Package, PackageStatus, DashboardStats, UserProfile } from './types';

export const ADMIN_PROFILE: UserProfile = {
  name: "Alexis Tomaselli",
  role: "Super Admin",
  id: "#ADM-2024",
  avatar: "https://portafolio.dydlabs.com/images/alexis-profile.jpg"
};

export const CUSTOMER_PROFILE: UserProfile = {
  name: "Alex Johnson",
  role: "Customer",
  id: "#CUS-8821",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfijGssSJqLF64vEn3G2WuLld_-eIwykFvJlWnTUvP46GSENCLHv8g20ykZmWDHPUyEFNqx0hEF12WdLgx0Q5vGc0ftJlQfER-KUNFtVGOvyWjfQMT8v1TcLCluK5p6jD2spE8UTNEQyLuFQDHBIdYvx4Osp9iWrsutXapoicgQVS-six3fqkG5sOHLLI7953hrqyig3IGo1aXWpZ3fbREBvyc_lVThABp6xYZSI87thsF7KvPSfMR8qnLLiRgVUWsMt8ouGiCrx8"
};

export const MOCK_PACKAGES: Package[] = [
  {
    id: "1",
    trackingId: "#TRK-9901",
    client: "Global Tech Corp",
    status: PackageStatus.IN_TRANSIT,
    weight: "12.4 kg",
    lastUpdated: "2 mins ago",
    estimatedArrival: "Oct 24, 2023",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXFpEjDaV_yssi9t-DHOzYv5-UIAx-kM8NIqBaArjJg3p0sDHCJgVLr1KMjkC89hZ-ATkky2dLl_yItU6BTjj4OnUlIbF7xzbwDcmdXYPE1bE_WUSFxXICPTBM7oOFGY0oiq563nEGR0GZiWvrsWyKqawXx-oeQASZRWsRLU-n-nNppqdoUkqwzaY3su7Xdi4Pqgw8eW9P6vTm9KcTQsQxn9mf7PQEYZQ5dpa8nTk9dc9T-e5IVYjgxLNeLgqBDXX4i5AXeG03_3Q"
  },
  {
    id: "2",
    trackingId: "#TRK-8842",
    client: "Sarah Jenkins",
    status: PackageStatus.DELIVERED,
    weight: "0.8 kg",
    lastUpdated: "14 mins ago",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClxBRUfBwioUOX1uUd_T8uljTd_VWo-iYJEny0sP5TUhMTVfoUG6Y8EA5jq-LNczwWjtllntAcFu9KR3VDCaN3BPFMUMRR0TRfuvqeyjTCW2GKP8x0hlbBAFjYWN49BBLGGJnUDYcwwsIx-oU8pHSbnjYw9QboVcpfTVK3YHgf94qkboGOOsf5KqrmNI43VeZSLS4Cmlv5QJKnYhyKVJnt25bXnjLJSj4UEThEAFWuCJA4lpA6qi7S685r2rOhdkJ-MgQnZuxWkss"
  },
  {
    id: "3",
    trackingId: "#TRK-1022",
    client: "Blue Horizon Logistics",
    status: PackageStatus.PENDING,
    weight: "45.0 kg",
    lastUpdated: "45 mins ago",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX68h6Jj9lrRVNhCKEgfDiLIC4clDB2Ts_4pTzNwYPCIa-chPwaJs13eFOG9YYutQV9Nm1S-KTFR8_uHJ_OEaKLkp3A6X1iC4kljRW8Op7nO4e4w_DNV-rpS94Eu4FO-YOmoKpT1KRbB2xBP2yhfpJng6hKXSBS0b5iWjXgRvMP7zWUpTrmPZT6XHx2HCuzLdmh0HS-venJfleRqT7-dkj11Pt7rcv1l6ZxnVAibyy0aVl1dvsgReYyDOlhBw1UkISXHzZNB8rFuw"
  },
  {
    id: "4",
    trackingId: "#TRK-9556",
    client: "Industrial Solutions",
    status: PackageStatus.IN_TRANSIT,
    weight: "112.5 kg",
    lastUpdated: "1 hour ago",
    image: "https://picsum.photos/id/10/400/300"
  },
  {
    id: "5",
    trackingId: "#TRK-7712",
    client: "Marc Richards",
    status: PackageStatus.DELAYED,
    weight: "2.1 kg",
    lastUpdated: "3 hours ago",
    image: "https://picsum.photos/id/11/400/300"
  }
];

export const STATS: DashboardStats = {
  totalActive: 1248,
  delivered: 8432,
  registeredUsers: 512,
  estimatedRevenue: "$142,500.00",
  activeTrend: "12.5%",
  deliveredTrend: "8.2%",
  usersTrend: "5.4%",
  revenueTrend: "10.1%"
};
