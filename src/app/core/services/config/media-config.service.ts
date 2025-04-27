import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaConfigService {
  private baseMediaUrl: string;

  constructor() {
    // Use environment-provided media URL or fallback to a default
    this.baseMediaUrl = environment.mediaBaseUrl || 'https://raw.githubusercontent.com/strike-museum-2024/media/main/';
  }

  /**
   * Get the full URL for an image
   * @param path - The relative path of the image
   * @returns The full URL to the image
   */
  getImageUrl(path: string): string {
    return `${this.baseMediaUrl}images/${path}`;
  }

  /**
   * Get the full URL for a video
   * @param path - The relative path of the video
   * @returns The full URL to the video
   */
  getVideoUrl(path: string): string {
    return `${this.baseMediaUrl}videos/${path}`;
  }

  /**
   * Get the full URL for a document
   * @param path - The relative path of the document
   * @returns The full URL to the document
   */
  getDocumentUrl(path: string): string {
    return `${this.baseMediaUrl}documents/${path}`;
  }

  /**
   * Generate a responsive image srcset
   * @param path - The base image path
   * @param sizes - Array of sizes to include in the srcset
   * @returns The srcset string for responsive images
   */
  getImageSrcset(path: string, sizes: number[] = [480, 768, 1024, 1920]): string {
    return sizes
      .map(size => `${this.getImageUrl(`${path}-${size}.jpg`)} ${size}w`)
      .join(', ');
  }
}