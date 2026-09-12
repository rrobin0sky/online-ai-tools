/**
 * Utility functions for clipboard operations and image conversions
 */

/**
 * Converts an SVG string to a PNG Blob via an offscreen canvas
 */
export async function svgToPngBlob(svgString: string, size = 256): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);

    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        URL.revokeObjectURL(blobURL);
        return reject(new Error('Canvas 2D context unavailable'));
      }
      // Ensure transparent background
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(image, 0, 0, size, size);
      URL.revokeObjectURL(blobURL);

      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Canvas toBlob conversion failed'));
        }
      }, 'image/png');
    };

    image.onerror = (err) => {
      URL.revokeObjectURL(blobURL);
      reject(err);
    };

    image.src = blobURL;
  });
}

/**
 * Directly writes a PNG image to the system clipboard
 * (Directly pasteable into PPT, Word, Slack, WeChat, Figma, etc.)
 */
export async function copyPngToClipboard(svgString: string, size = 256): Promise<boolean> {
  try {
    if (!navigator.clipboard || !window.ClipboardItem) {
      console.warn('ClipboardItem API not supported in this browser');
      return false;
    }

    const pngBlob = await svgToPngBlob(svgString, size);
    await navigator.clipboard.write([
      new ClipboardItem({
        'image/png': pngBlob,
      }),
    ]);
    return true;
  } catch (error) {
    console.error('Failed to copy PNG to clipboard:', error);
    return false;
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
