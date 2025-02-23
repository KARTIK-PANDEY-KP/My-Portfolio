
import { ReactNode } from 'react';

export interface MenuItem {
  icon: ReactNode;
  label: string;
  url?: string;
}

export interface MenuSectionProps {
  items: MenuItem[];
  className?: string;
}
