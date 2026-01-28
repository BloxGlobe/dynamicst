export type PageKey = 
  | 'home' 
  | 'creations' 
  | 'learn' 
  | 'store' 
  | 'forum' 
  | 'finances' 
  | 'analytics' 
  | 'ads' 
  | 'tools'
  | 'messages'
  | 'settings'
  | 'profile';

export interface NavItem {
  key: PageKey;
  label: string;
  icon: string; // Icon name or component
  path: string;
}