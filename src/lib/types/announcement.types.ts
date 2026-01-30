export interface Announcement {
  id: string;
  date: string;
  title: string;
  content?: string;
  author?: string;
  avatars: string[];
  link?: string;
}
