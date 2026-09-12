import JSZip from 'jszip';
import { IconMeta } from '../types/icon';
import { svgToPngBlob } from './clipboard';

export interface BatchExportOptions {
  icons: IconMeta[];
  themeColor: string;
  format: 'svg' | 'png' | 'both';
  pngResolution?: number;
  onProgress?: (current: number, total: number) => void;
}

/**
 * Packages multiple icons into a zip file with custom theme colors
 */
export async function generateIconsZip(options: BatchExportOptions): Promise<Blob> {
  const { icons, themeColor, format, pngResolution = 256, onProgress } = options;
  const zip = new JSZip();

  let processed = 0;
  const total = icons.length;

  for (const icon of icons) {
    // Process SVG string with customized color if tintable
    const finalSvg = icon.isTintable
      ? icon.svgRaw.replace(/currentColor/g, themeColor)
      : icon.svgRaw;

    const baseName = `${icon.provider}-${icon.id}`;

    // Add SVG
    if (format === 'svg' || format === 'both') {
      zip.file(`svg/${baseName}.svg`, finalSvg);
    }

    // Add PNG
    if (format === 'png' || format === 'both') {
      try {
        const pngBlob = await svgToPngBlob(finalSvg, pngResolution);
        zip.file(`png/${baseName}.png`, pngBlob);
      } catch (err) {
        console.error(`Failed to rasterize ${icon.id} to PNG:`, err);
      }
    }

    processed++;
    if (onProgress) {
      onProgress(processed, total);
    }
  }

  // Generate metadata README in the zip
  const readmeContent = `# ArchIcons Export Pack
- Total Icons: ${icons.length}
- Theme Color Applied (for neutral icons): ${themeColor}
- Format: ${format}
- Generated at: ${new Date().toISOString()}
- Website: https://tools.bin0sky.tech

All vendor trademarks (AWS, Azure, GCP, Alibaba Cloud, Kubernetes) belong to their respective owners.
Neutral topology icons are free for architecture and system diagram design.
`;
  zip.file('README.txt', readmeContent);

  return zip.generateAsync({ type: 'blob' });
}
