import JSZip from 'jszip';
import { IconMeta } from '../types/icon';
import { svgToPngBlob } from './clipboard';
import { generateDrawioLibraryXml } from './drawio';
import { applyThemeToSvg } from './colorEngine';

export interface BatchExportOptions {
  icons: IconMeta[];
  themeColor: string;
  preserveAccents?: boolean;
  format: 'svg' | 'png' | 'both';
  pngResolution?: number;
  onProgress?: (current: number, total: number) => void;
}

/**
 * Packages multiple icons into a zip file with custom theme colors
 */
export async function generateIconsZip(options: BatchExportOptions): Promise<Blob> {
  const { icons, themeColor, preserveAccents = true, format, pngResolution = 256, onProgress } = options;
  const zip = new JSZip();

  let processed = 0;
  const total = icons.length;

  for (const icon of icons) {
    // Process 2.5D SVG string with dynamic isometric lighting and theme color
    const finalSvg = applyThemeToSvg(icon.svgRaw, themeColor, preserveAccents);

    const baseName = `${icon.id}`;

    // Add SVG
    if (format === 'svg' || format === 'both') {
      zip.file(`svg/${baseName}.svg`, finalSvg);
    }

    // Add PNG
    if (format === 'png' || format === 'both') {
      try {
        const pngBlob = await svgToPngBlob(finalSvg, pngResolution, themeColor);
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

  // Add Draw.io XML Stencil Library directly into the zip
  try {
    const drawioXml = generateDrawioLibraryXml(icons, { themeColor, preserveAccents });
    zip.file('drawio/ArchIcons-2.5D-Topology-Library.xml', drawioXml);
  } catch (e) {
    console.error('Failed to attach Draw.io library to zip:', e);
  }

  // Generate metadata README in the zip
  const readmeContent = `# ArchIcons 2.5D Network Equipment Export Pack
- Total 2.5D Icons: ${icons.length}
- Theme Color Applied: ${themeColor}
- Semantic Accents: ${preserveAccents ? 'Enabled' : 'Monochrome'}
- Format: ${format}
- Generated at: ${new Date().toISOString()}
- Website: https://bin0sky.tech

Built with modern 30° isometric projection for network pre-sales engineers and solution architects.
Free for technical proposal PPTs, bidding documents, and system architecture design.
`;
  zip.file('README.txt', readmeContent);

  return zip.generateAsync({ type: 'blob' });
}
