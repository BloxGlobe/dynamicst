import type { NavItem } from '../types';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    key: 'home',
    label: 'Home',
    icon: 'Home',
    path: '/dashboard/home'
  },
  {
    key: 'creations',
    label: 'Creations',
    icon: 'Package',
    path: '/dashboard/creations'
  },
  {
    key: 'learn',
    label: 'Learn',
    icon: 'BookOpen',
    path: '/dashboard/learn'
  },
  {
    key: 'store',
    label: 'Store',
    icon: 'Store',
    path: '/dashboard/store'
  },
  {
    key: 'forum',
    label: 'Forum',
    icon: 'MessageSquare',
    path: '/dashboard/forum'
  },
  {
    key: 'finances',
    label: 'Finances',
    icon: 'DollarSign',
    path: '/dashboard/finances'
  },
  {
    key: 'analytics',
    label: 'Analytics',
    icon: 'TrendingUp',
    path: '/dashboard/analytics'
  },
  {
    key: 'ads',
    label: 'Ads',
    icon: 'Megaphone',
    path: '/dashboard/ads'
  },
  {
    key: 'tools',
    label: 'All tools',
    icon: 'Grid3x3',
    path: '/dashboard/tools'
  }
];

