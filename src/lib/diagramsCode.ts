import { IconMeta } from '../types/icon';

/**
 * Generates declarative topology code snippets for modern architects
 */

export function sanitizeIdentifier(id: string): string {
  return id.replace(/[^a-zA-Z0-9_]/g, '_');
}

/**
 * Generate Mermaid.js flowchart node snippet
 */
export function generateMermaidSnippet(icon: IconMeta, lang: 'zh' | 'en' = 'zh', customColor?: string): string {
  const nodeId = sanitizeIdentifier(icon.id);
  const title = icon.name[lang] || icon.name.en;
  const codeBadge = icon.code ? ` (${icon.code})` : '';
  const fill = customColor || icon.defaultColor || '#0ea5e9';

  return `%% Mermaid.js Topology Node
flowchart TD
  ${nodeId}["${title}${codeBadge}"]
  style ${nodeId} fill:${fill}15,stroke:${fill},stroke-width:2px,color:#0f172a,rx:8,ry:8`;
}

/**
 * Generate PlantUML component/node snippet
 */
export function generatePlantUmlSnippet(icon: IconMeta, lang: 'zh' | 'en' = 'zh'): string {
  const nodeId = sanitizeIdentifier(icon.id);
  const title = icon.name[lang] || icon.name.en;
  const codeBadge = icon.code ? ` [${icon.code}]` : '';
  const categoryTag = icon.category.toUpperCase();

  return `' PlantUML Architecture Node
node "${title}${codeBadge}" as ${nodeId} <<${categoryTag}>> {
  ' Category: ${icon.category} | Provider: ${icon.provider}
}`;
}

/**
 * Generate D2 declarative diagram snippet
 */
export function generateD2Snippet(icon: IconMeta, lang: 'zh' | 'en' = 'zh', customColor?: string): string {
  const nodeId = sanitizeIdentifier(icon.id);
  const title = icon.name[lang] || icon.name.en;
  const stroke = customColor || icon.defaultColor || '#0ea5e9';

  return `# D2 Declarative Architecture Node
${nodeId}: "${title}" {
  shape: rectangle
  style: {
    stroke: "${stroke}"
    stroke-width: 2
    border-radius: 8
  }
}`;
}
