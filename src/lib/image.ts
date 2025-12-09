/**
 * Image URL utilities for Notion content
 *
 * This module provides helper functions for building image URLs
 * that point to our R2/CDN storage.
 */

// Re-export all functions from image-url.ts for backwards compatibility
export {
  buildCoverUrl,
  buildFileUrl,
  buildProxyImageUrl,
  buildVideoUrl,
  getBackgroundImage,
} from './image-url'
