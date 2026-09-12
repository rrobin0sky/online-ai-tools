import { IconMeta } from '../types/icon';

/**
 * Utility for generating Draw.io (diagrams.net) custom libraries and shape snippets
 */

interface DrawioLibraryOptions {
  themeColor?: string;
  lang?: 'zh' | 'en';
  width?: number;
  height?: number;
}

/**
 * Converts UTF-8 string to base64 safely in browser and node environments
 */
function toBase64(str: string): string {
  if (typeof window !== 'undefined' && window.btoa) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }
  return Buffer.from(str, 'utf-8').toString('base64');
}

/**
 * Prepares the processed SVG with active colors and dimensions
 */
export function getCleanSvgForDrawio(icon: IconMeta, themeColor?: string): string {
  let svg = icon.svgRaw.trim();
  const color = icon.isTintable ? (themeColor || icon.defaultColor || '#0ea5e9') : undefined;

  if (color) {
    svg = svg.replace(/currentColor/g, color);
  }

  // Ensure xmlns is present on root svg
  if (!/xmlns\s*=/.test(svg)) {
    svg = svg.replace(/<svg\b/i, '<svg xmlns="http://www.w3.org/2000/svg"');
  }

  return svg;
}

/**
 * Generates an mxGraphModel XML string for a single icon
 */
export function generateSingleDrawioModelXml(icon: IconMeta, options: DrawioLibraryOptions = {}): string {
  const { themeColor, lang = 'zh', width = 64, height = 64 } = options;
  const svg = getCleanSvgForDrawio(icon, themeColor);
  const base64Svg = toBase64(svg);
  const dataUri = `data:image/svg+xml;base64,${base64Svg}`;
  const label = icon.name[lang] || icon.name.en;

  return `<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="${label}" style="shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=${dataUri};" vertex="1" parent="1"><mxGeometry width="${width}" height="${height}" as="geometry"/></mxCell></root></mxGraphModel>`;
}

/**
 * Generates the full Draw.io Stencil Library XML (.xml) containing an array of icons
 */
export function generateDrawioLibraryXml(icons: IconMeta[], options: DrawioLibraryOptions = {}): string {
  const { lang = 'zh', width = 64, height = 64 } = options;

  const entries = icons.map((icon) => {
    const modelXml = generateSingleDrawioModelXml(icon, options);
    const title = `${icon.name[lang] || icon.name.en}${icon.code ? ` (${icon.code})` : ''}`;

    return {
      xml: modelXml,
      w: width,
      h: height,
      title,
    };
  });

  const jsonString = JSON.stringify(entries);
  // XML-escape the JSON string inside <mxlibrary>
  const escapedJson = jsonString
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return `<mxlibrary>${escapedJson}</mxlibrary>`;
}

/**
 * Triggers a browser download of the Draw.io Library (.xml)
 */
export function downloadDrawioLibrary(
  icons: IconMeta[],
  filename = 'ArchIcons-Neutral-Library.xml',
  options: DrawioLibraryOptions = {}
): void {
  if (typeof window === 'undefined') return;

  const xmlContent = generateDrawioLibraryXml(icons, options);
  const blob = new Blob([xmlContent], { type: 'application/xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
