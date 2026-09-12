/**
 * Robust utility functions for clipboard operations and SVG rasterization
 */

/**
 * Normalizes and prepares an SVG string for clean offscreen canvas rasterization
 */
export function prepareSvgForRasterization(
  svgString: string,
  size = 256,
  fallbackColor = '#2563eb'
): string {
  let processed = svgString.trim();

  // 1. Ensure XML namespace is present
  if (!processed.includes('xmlns="http://www.w3.org/2000/svg"') && !processed.includes("xmlns='http://www.w3.org/2000/svg'")) {
    processed = processed.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  }

  // 2. Ensure width & height are explicitly set on the root SVG tag
  if (!/width=/.test(processed)) {
    processed = processed.replace('<svg', `<svg width="${size}"`);
  } else {
    processed = processed.replace(/width="[^"]*"/, `width="${size}"`);
  }

  if (!/height=/.test(processed)) {
    processed = processed.replace('<svg', `<svg height="${size}"`);
  } else {
    processed = processed.replace(/height="[^"]*"/, `height="${size}"`);
  }

  // 3. Replace any un-replaced currentColor with an actual color
  processed = processed.replace(/currentColor/g, fallbackColor);

  return processed;
}

/**
 * Converts an SVG string to a PNG Blob via an offscreen canvas
 */
export async function svgToPngBlob(
  svgString: string,
  size = 256,
  fallbackColor = '#2563eb'
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const normalizedSvg = prepareSvgForRasterization(svgString, size, fallbackColor);
    const dataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(normalizedSvg)}`;

    const image = new Image();
    image.crossOrigin = 'anonymous';

    image.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          return reject(new Error('Canvas 2D context unavailable'));
        }

        // Draw onto canvas with clean transparent background
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(image, 0, 0, size, size);

        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Canvas toBlob failed'));
          }
        }, 'image/png');
      } catch (err) {
        reject(err);
      }
    };

    image.onerror = (err) => {
      console.error('Image element failed to load SVG data URI:', err);
      reject(err);
    };

    image.src = dataUri;
  });
}

export type CopyResult = {
  success: boolean;
  message?: string;
};

/**
 * Directly writes a PNG image to the system clipboard
 * (Directly pasteable into PPT, Word, Slack, WeChat, Figma, etc.)
 */
export async function copyPngToClipboard(
  svgString: string,
  size = 256,
  fallbackColor = '#2563eb'
): Promise<CopyResult> {
  try {
    if (!navigator.clipboard) {
      return { success: false, message: 'Clipboard API not supported' };
    }

    if (typeof ClipboardItem === 'undefined') {
      return { success: false, message: 'ClipboardItem API not supported in this browser' };
    }

    const pngBlob = await svgToPngBlob(svgString, size, fallbackColor);
    
    await navigator.clipboard.write([
      new ClipboardItem({
        'image/png': pngBlob,
      }),
    ]);

    return { success: true };
  } catch (error: any) {
    console.warn('Failed to write PNG directly to clipboard:', error);
    return { success: false, message: error?.message || 'Permission denied' };
  }
}

/**
 * Copies SVG text code to clipboard
 */
export async function copySvgToClipboard(svgString: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(svgString);
    return true;
  } catch (error) {
    console.error('Failed to copy SVG to clipboard:', error);
    return false;
  }
}
