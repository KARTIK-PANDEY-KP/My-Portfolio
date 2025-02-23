import { MenuItem } from './types';
import { Github, Linkedin } from 'lucide-react';

export const leftMenuItems: MenuItem[] = [
  { 
    icon: <Github className="w-6 h-6" />, 
    label: 'Github',
    url: 'https://github.com/KARTIK-PANDEY-KP'
  },
  { 
    icon: <Linkedin className="w-6 h-6" />, 
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kartik-pandey-kp/'
  },
  { 
    icon: <img 
      src="/lovable-uploads/a3afcc23-7e14-48d1-a9b3-37d6a529a850.png" 
      alt="HuggingFace" 
      className="w-6 h-6" 
    />, 
    label: 'HuggingFace',
    url: 'https://huggingface.co/kapiekp'
  },
  { 
    icon: <img 
      src="/lovable-uploads/9790699b-2351-4e15-a1d6-7ec499b94d02.png" 
      alt="Devpost" 
      className="w-6 h-6" 
    />, 
    label: 'Devpost Portfolio',
    url: 'https://devpost.com/pandeyk'
  },
];

export const rightMenuItems: MenuItem[] = [
  { 
    icon: <img 
      src="/lovable-uploads/efca3d77-9436-42e1-a271-65d3be957bde.png" 
      alt="My Documents" 
      className="w-6 h-6" 
    />, 
    label: 'My Documents',
    uploadAccept: '.doc,.docx,.pdf,.txt'
  },
  { 
    icon: <img 
      src="/lovable-uploads/a6918753-b977-4b95-b7ac-7fa56656bd65.png" 
      alt="My Pictures" 
      className="w-6 h-6" 
    />, 
    label: 'My Pictures',
    uploadAccept: 'image/*'
  },
  { 
    icon: <img 
      src="/lovable-uploads/22ca3516-6ce9-4d06-9c2e-f8724afb08da.png" 
      alt="My Music" 
      className="w-6 h-6" 
    />, 
    label: 'My Music' 
  },
  { 
    icon: <img 
      src="/lovable-uploads/6e35bda1-6465-4300-8789-438e81d958ad.png" 
      alt="My Videos" 
      className="w-6 h-6" 
    />, 
    label: 'My Videos',
    uploadAccept: 'video/*'
  },
  { 
    icon: <img 
      src="/lovable-uploads/126b68a4-507f-465c-bd2a-f9659a16e2b0.png" 
      alt="Settings" 
      className="w-6 h-6" 
    />, 
    label: 'Settings' 
  },
  { 
    icon: <img 
      src="/lovable-uploads/3e54d53e-af2e-42d6-b066-4e18735b907d.png" 
      alt="Help and Support" 
      className="w-6 h-6" 
    />, 
    label: 'Help and Support' 
  },
  { 
    icon: <img 
      src="/lovable-uploads/94a6af0b-2891-48c7-b77b-586289ce9a7e.png" 
      alt="Run" 
      className="w-6 h-6" 
    />, 
    label: 'Run...' 
  },
];
