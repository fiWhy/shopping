import { HTMLAttributes } from 'react';

export interface GalleryImage {
  id: string;
  src: string;
  alt?: string;
}

export interface GalleryProps {
  data: GalleryImage[];
  onImagePick?: (id: string) => void;
}

export interface GalleryImageProps
  extends HTMLAttributes<HTMLImageElement>,
    Omit<GalleryImage, 'id'> {
  specialId: string;
  onPick?: (id: string) => void;
}
