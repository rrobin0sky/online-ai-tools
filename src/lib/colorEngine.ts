/**
 * 2.5D Isometric Color & Shading Engine
 * Dynamically computes lighting, bevels, depth tones, and accents for 2.5D topology icons.
 */

export interface IsometricShades {
  base: string;
  topLight: string;
  topDark: string;
  leftFace: string;
  rightFace: string;
  bottomDark: string;
  gridGlow: string;
  borderStroke: string;
  accentGreen: string;
  accentAmber: string;
  accentRed: string;
  accentCyan: string;
  accentPurple: string;
}

export interface ColorPreset {
  id: string;
  name: { zh: string; en: string };
  color: string;
  description: { zh: string; en: string };
}

export const PRESET_THEMES: ColorPreset[] = [
  {
    id: 'telecom-blue',
    name: { zh: '商务科技蓝', en: 'Tech Blue' },
    color: '#0284c7',
    description: { zh: '最通用的行业方案色，配任何白底/浅蓝底 PPT 极具质感', en: 'Industry standard for PPT and solution proposals' },
  },
  {
    id: 'mission-red',
    name: { zh: '党政信创红', en: 'Huawei / Gov Red' },
    color: '#dc2626',
    description: { zh: '适用于政府、军队、政法与国企数字化专网标书方案', en: 'Ideal for public sector, government, and enterprise tenders' },
  },
  {
    id: 'cyber-cyan',
    name: { zh: '暗夜极客青', en: 'Cyber Cyan' },
    color: '#06b6d4',
    description: { zh: '用于网络安全监控中心、态势感知大屏与高科技展示', en: 'Optimized for SOC dashboards and high-tech visualization' },
  },
  {
    id: 'slate-gray',
    name: { zh: '极简石墨灰', en: 'Morandi Slate' },
    color: '#475569',
    description: { zh: '适用于需要黑白或单色印刷的纸质技术标书，不糊墨', en: 'Perfect for grayscale printing and monochrome documents' },
  },
  {
    id: 'fintech-green',
    name: { zh: '金融安全绿', en: 'Fintech Green' },
    color: '#059669',
    description: { zh: '适用于银行、保险、能源与高可用灾备中心方案', en: 'Great for banking, disaster recovery, and data center topologies' },
  },
  {
    id: 'deep-violet',
    name: { zh: '高可用紫', en: 'High-Availability Violet' },
    color: '#7c3aed',
    description: { zh: '常用于区分双活核心、微服务网络与跨域互联专线', en: 'Commonly used for dual-active cores and hybrid cloud fabrics' },
  },
];

/**
 * Converts Hex string to RGB
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let cleanHex = hex.replace('#', '').trim();
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split('')
      .map((c) => c + c)
      .join('');
  }
  const num = parseInt(cleanHex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

/**
 * Converts RGB to HSL
 */
export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rNorm:
        h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
        break;
      case gNorm:
        h = (bNorm - rNorm) / d + 2;
        break;
      case bNorm:
        h = (rNorm - gNorm) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Converts HSL to Hex
 */
export function hslToHex(h: number, s: number, l: number): string {
  const hNorm = h / 360;
  const sNorm = Math.max(0, Math.min(100, s)) / 100;
  const lNorm = Math.max(0, Math.min(100, l)) / 100;

  let r: number, g: number, b: number;

  if (sNorm === 0) {
    r = g = b = lNorm; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      let tAdj = t;
      if (tAdj < 0) tAdj += 1;
      if (tAdj > 1) tAdj -= 1;
      if (tAdj < 1 / 6) return p + (q - p) * 6 * tAdj;
      if (tAdj < 1 / 2) return q;
      if (tAdj < 2 / 3) return p + (q - p) * (2 / 3 - tAdj) * 6;
      return p;
    };

    const q = lNorm < 0.5 ? lNorm * (1 + sNorm) : lNorm + sNorm - lNorm * sNorm;
    const p = 2 * lNorm - q;

    r = hue2rgb(p, q, hNorm + 1 / 3);
    g = hue2rgb(p, q, hNorm);
    b = hue2rgb(p, q, hNorm - 1 / 3);
  }

  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Generates all 2.5D isometric light & shadow tiers from a base color
 */
export function generateIsometricShades(baseHex: string, preserveAccents = true): IsometricShades {
  const { r, g, b } = hexToRgb(baseHex);
  const { h, s, l } = rgbToHsl(r, g, b);

  // 1. Top face (most illuminated surface facing upward)
  const topLight = hslToHex(h, Math.min(100, s + 4), Math.min(94, l + 22));
  const topDark = hslToHex(h, s, Math.min(88, l + 8));

  // 2. Left face (front-left key illuminated surface)
  const leftFace = baseHex;

  // 3. Right face (shadow side, facing away from light source)
  const rightFace = hslToHex(h, Math.max(15, s - 6), Math.max(10, l - 20));

  // 4. Chassis bottom & recessed dark grooves
  const bottomDark = hslToHex(h, Math.max(12, s - 12), Math.max(5, l - 34));

  // 5. Laser grid lines & specular edge highlights
  const gridGlow = hslToHex(h, Math.min(100, s + 12), Math.min(96, l + 28));
  const borderStroke = hslToHex(h, s, Math.min(98, l + 32));

  // 6. Semantic Accents (LEDs, traffic flow, status rings)
  let accentGreen = '#22c55e';
  let accentAmber = '#f59e0b';
  let accentRed = '#ef4444';
  let accentCyan = '#38bdf8';
  let accentPurple = '#a855f7';

  if (!preserveAccents) {
    // In pure monochrome mode, all LEDs and indicators derive strictly from base hue
    accentGreen = hslToHex(h, s, Math.min(95, l + 32));
    accentAmber = hslToHex(h, s, Math.min(90, l + 24));
    accentRed = hslToHex(h, Math.max(20, s - 10), Math.max(10, l - 15));
    accentCyan = hslToHex(h, s, Math.min(92, l + 20));
    accentPurple = hslToHex(h, s, Math.min(85, l + 10));
  }

  return {
    base: baseHex,
    topLight,
    topDark,
    leftFace,
    rightFace,
    bottomDark,
    gridGlow,
    borderStroke,
    accentGreen,
    accentAmber,
    accentRed,
    accentCyan,
    accentPurple,
  };
}

/**
 * Applies a theme color to a 2.5D SVG template.
 * Replaces template color tokens with mathematically computed isometric shades.
 */
export function applyThemeToSvg(
  svgTemplate: string,
  baseHex = '#0284c7',
  preserveAccents = true
): string {
  const shades = generateIsometricShades(baseHex, preserveAccents);

  let result = svgTemplate;

  // Replace standard isometric tokens if present
  result = result
    .replace(/%%TOP_LIGHT%%/g, shades.topLight)
    .replace(/%%TOP_DARK%%/g, shades.topDark)
    .replace(/%%LEFT_FACE%%/g, shades.leftFace)
    .replace(/%%RIGHT_FACE%%/g, shades.rightFace)
    .replace(/%%BOTTOM_DARK%%/g, shades.bottomDark)
    .replace(/%%GRID_GLOW%%/g, shades.gridGlow)
    .replace(/%%BORDER_STROKE%%/g, shades.borderStroke)
    .replace(/%%BASE_COLOR%%/g, shades.base)
    .replace(/%%ACCENT_GREEN%%/g, shades.accentGreen)
    .replace(/%%ACCENT_AMBER%%/g, shades.accentAmber)
    .replace(/%%ACCENT_RED%%/g, shades.accentRed)
    .replace(/%%ACCENT_CYAN%%/g, shades.accentCyan)
    .replace(/%%ACCENT_PURPLE%%/g, shades.accentPurple);

  // Fallback support: replace generic currentColor
  result = result.replace(/currentColor/g, shades.base);

  return result;
}
