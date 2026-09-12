'use client';

import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Download,
  ExternalLink,
  Palette,
  Sparkles,
  Image as ImageIcon,
  Code2,
  FileCode2,
  FileBox,
} from 'lucide-react';
import { IconMeta } from '../types/icon';
import { PROVIDERS, ICONS } from '../data/icons';
import { copyPngToClipboard, copySvgToClipboard, svgToPngBlob } from '../lib/clipboard';
import { CanvasSimulator } from './CanvasSimulator';
import {
  generateMermaidSnippet,
  generatePlantUmlSnippet,
  generateD2Snippet,
} from '../lib/diagramsCode';
import { downloadDrawioLibrary, generateSingleDrawioModelXml } from '../lib/drawio';

interface IconModalProps {
  icon: IconMeta | null;
  lang: 'en' | 'zh';
  onClose: () => void;
  onSelectIcon: (icon: IconMeta) => void;
  onNotify?: (title: string, subtitle?: string, type?: 'copy' | 'download' | 'code' | 'success') => void;
}

const PRESET_COLORS = [
  '#0ea5e9', // Sky Blue
  '#2563eb', // Corporate Blue
  '#059669', // Emerald Green
  '#dc2626', // Crimson Red
  '#d97706', // Amber
  '#7c3aed', // Violet
  '#334155', // Slate
  '#0f172a', // Obsidian Dark
];

export const IconModal: React.FC<IconModalProps> = ({
  icon,
  lang,
  onClose,
  onSelectIcon,
  onNotify,
}) => {
  if (!icon) return null;

  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [eqCopiedId, setEqCopiedId] = useState<string | null>(null);
  const [customColor, setCustomColor] = useState<string>(icon.defaultColor || '#0ea5e9');
  const [codeTab, setCodeTab] = useState<'mermaid' | 'plantuml' | 'd2'>('mermaid');

  const providerMeta = PROVIDERS.find((p) => p.id === icon.provider);

  // Find cross-cloud equivalent icons
  const equivalentIcons = icon.equivalentGroup
    ? ICONS.filter((i) => i.equivalentGroup === icon.equivalentGroup && i.id !== icon.id)
    : [];

  const getProcessedSvg = (targetIcon = icon, color = customColor) => {
    if (targetIcon.isTintable && color) {
      return targetIcon.svgRaw.replace(/currentColor/g, color);
    }
    return targetIcon.svgRaw;
  };

  const notify = (title: string, subtitle?: string, type: 'copy' | 'download' | 'code' | 'success' = 'copy') => {
    if (onNotify) {
      onNotify(title, subtitle, type);
    }
  };

  const handleCopySvg = async (targetIcon = icon, isEquivalent = false) => {
    const finalSvg = getProcessedSvg(targetIcon);
    const ok = await copySvgToClipboard(finalSvg);
    if (ok) {
      if (isEquivalent) {
        setEqCopiedId(`${targetIcon.id}-svg`);
        setTimeout(() => setEqCopiedId(null), 1800);
      } else {
        setCopiedType('svg');
        setTimeout(() => setCopiedType(null), 1800);
      }
      notify(
        lang === 'zh' ? '✓ SVG 矢量代码已复制' : '✓ SVG Code Copied',
        lang === 'zh' ? '可直接无损粘贴至 Draw.io / Figma / PPT' : 'Ready to paste into Draw.io, Figma or PPT',
        'copy'
      );
    }
  };

  const handleCopyPng = async (targetIcon = icon, size = 256, isEquivalent = false) => {
    const finalSvg = getProcessedSvg(targetIcon);
    const color = targetIcon.isTintable ? customColor : undefined;
    const res = await copyPngToClipboard(finalSvg, size, color);
    if (res.success) {
      if (isEquivalent) {
        setEqCopiedId(`${targetIcon.id}-png`);
        setTimeout(() => setEqCopiedId(null), 1800);
      } else {
        setCopiedType('png');
        setTimeout(() => setCopiedType(null), 1800);
      }
      notify(
        lang === 'zh' ? '✓ PNG 透明图像已复制' : '✓ PNG Image Copied',
        lang === 'zh' ? '已存入剪贴板，可直接粘贴进 PPT/微信/文档' : 'Directly pasteable into PPT, Word or Chat',
        'copy'
      );
    } else {
      await handleDownloadPng(size, targetIcon);
    }
  };

  const handleDownloadSvg = () => {
    const finalSvg = getProcessedSvg();
    const blob = new Blob([finalSvg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${icon.id}.svg`;
    a.click();
    URL.revokeObjectURL(url);
    notify(
      lang === 'zh' ? '✓ .SVG 矢量文件已下载' : '✓ SVG Downloaded',
      `${icon.id}.svg`,
      'download'
    );
  };

  const handleDownloadPng = async (size: number, targetIcon = icon) => {
    try {
      const finalSvg = getProcessedSvg(targetIcon);
      const blob = await svgToPngBlob(finalSvg, size);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${targetIcon.id}-${size}px.png`;
      a.click();
      URL.revokeObjectURL(url);
      notify(
        lang === 'zh' ? `✓ ${size}px PNG 已下载` : `✓ ${size}px PNG Downloaded`,
        `${targetIcon.id}-${size}px.png`,
        'download'
      );
    } catch (err) {
      console.error(err);
    }
  };

  // Draw.io single snippet download
  const handleExportDrawio = () => {
    downloadDrawioLibrary([icon], `${icon.id}-drawio.xml`, {
      themeColor: customColor,
      lang,
    });
    notify(
      lang === 'zh' ? '✓ Draw.io 图元库 (.xml) 已导出' : '✓ Draw.io Stencil Exported',
      lang === 'zh' ? '在 Draw.io 中点击「文件 -> 打开图库」即可加载' : 'Load via File -> Open Library in Draw.io',
      'download'
    );
  };

  // Diagrams-as-Code snippet generator
  const currentCodeSnippet = React.useMemo(() => {
    if (codeTab === 'mermaid') {
      return generateMermaidSnippet(icon, lang, customColor);
    }
    if (codeTab === 'plantuml') {
      return generatePlantUmlSnippet(icon, lang);
    }
    return generateD2Snippet(icon, lang, customColor);
  }, [codeTab, icon, lang, customColor]);

  const handleCopyCodeSnippet = async () => {
    try {
      await navigator.clipboard.writeText(currentCodeSnippet);
      setCopiedType('code');
      setTimeout(() => setCopiedType(null), 1800);
      notify(
        lang === 'zh' ? `✓ ${codeTab.toUpperCase()} 代码已复制` : `✓ ${codeTab.toUpperCase()} Snippet Copied`,
        lang === 'zh' ? '可直接粘贴至 Notion, Obsidian 或 Markdown' : 'Ready to paste into Markdown, Notion or Obsidian',
        'code'
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-2xl p-5 sm:p-7 space-y-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 pr-8">
          <div className="w-16 h-16 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center p-2.5 shrink-0 shadow-sm">
            <div
              className="w-11 h-11 flex items-center justify-center"
              style={icon.isTintable ? { color: customColor } : undefined}
              dangerouslySetInnerHTML={{ __html: icon.svgRaw }}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${providerMeta?.badgeBg}`}>
                {providerMeta?.name[lang]}
              </span>
              {icon.code && (
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                  {icon.code}
                </span>
              )}
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {icon.name[lang]}
            </h2>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
              {icon.name[lang === 'zh' ? 'en' : 'zh']}
            </p>
          </div>
        </div>

        {/* Description */}
        {icon.description && (
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium">
            {icon.description[lang]}
          </p>
        )}

        {/* Custom Color Palette (If tintable) */}
        {icon.isTintable && (
          <div className="p-3.5 rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/30 dark:bg-blue-950/20">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-blue-500" />
                {lang === 'zh' ? '定制设备专属工业主题色' : 'Customize Equipment Theme Color'}
              </label>
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">{customColor}</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {PRESET_COLORS.map((color) => (
                <button
                  key={color}
                  onClick={() => setCustomColor(color)}
                  style={{ backgroundColor: color }}
                  className={`w-7 h-7 rounded-full transition-transform ${
                    customColor.toLowerCase() === color.toLowerCase()
                      ? 'scale-110 ring-2 ring-offset-2 ring-blue-500 shadow-md'
                      : 'hover:scale-105 opacity-80 hover:opacity-100'
                  }`}
                />
              ))}
              <input
                type="color"
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                className="w-7 h-7 rounded-full cursor-pointer border-0 bg-transparent"
                title="Pick custom hex color"
              />
            </div>
          </div>
        )}

        {/* Canvas Context Simulator (P0 Feature) */}
        <CanvasSimulator
          svgContent={getProcessedSvg()}
          lang={lang}
          activeColor={customColor}
          isTintable={icon.isTintable}
        />

        {/* Primary Action Buttons */}
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm font-semibold">
            {/* Direct Copy PNG */}
            <button
              onClick={() => handleCopyPng()}
              className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md shadow-blue-500/20 transition-all active:scale-95"
            >
              {copiedType === 'png' ? <Check className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
              <span>
                {copiedType === 'png'
                  ? (lang === 'zh' ? '✓ PNG 已直接复制！' : '✓ PNG Copied!')
                  : (lang === 'zh' ? '复制 PNG (贴 PPT/文档)' : 'Copy PNG Image')}
              </span>
            </button>

            {/* Direct Copy SVG */}
            <button
              onClick={() => handleCopySvg()}
              className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold shadow-md transition-all active:scale-95"
            >
              {copiedType === 'svg' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>
                {copiedType === 'svg'
                  ? (lang === 'zh' ? '✓ SVG 矢量已复制！' : '✓ SVG Copied!')
                  : (lang === 'zh' ? '复制 SVG 矢量源码' : 'Copy SVG Vector')}
              </span>
            </button>

            {/* Draw.io Stencil Export */}
            <button
              onClick={handleExportDrawio}
              className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl border border-indigo-300 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 font-bold transition-all active:scale-95 shadow-sm"
              title={lang === 'zh' ? '导出符合 Draw.io 规范的 XML 独立图库文件' : 'Export as Draw.io Stencil XML'}
            >
              <FileBox className="w-4 h-4 text-indigo-500" />
              <span>{lang === 'zh' ? '导出 Draw.io 图元' : 'Draw.io Stencil (.xml)'}</span>
            </button>
          </div>

          {/* Secondary Download Bar */}
          <div className="flex items-center justify-between flex-wrap gap-2 pt-1 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {lang === 'zh' ? '下载文件：' : 'Downloads:'}
              </span>
              <button
                onClick={handleDownloadSvg}
                className="px-2.5 py-1 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold transition-colors"
              >
                .SVG 矢量
              </button>
              {[256, 512].map((size) => (
                <button
                  key={size}
                  onClick={() => handleDownloadPng(size)}
                  className="px-2.5 py-1 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold transition-colors"
                >
                  {size}px PNG
                </button>
              ))}
            </div>

            {icon.officialDocUrl && (
              <a
                href={icon.officialDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? '官方架构文档' : 'Official Docs'}</span>
              </a>
            )}
          </div>
        </div>

        {/* Diagrams-as-Code (P1 Feature: Mermaid, PlantUML, D2) */}
        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2.5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
              <Code2 className="w-4 h-4 text-blue-500" />
              <span>{lang === 'zh' ? 'Diagrams-as-Code (代码即图语法)' : 'Diagrams-as-Code Snippets'}</span>
            </div>

            {/* Code Format Switcher */}
            <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
              {(['mermaid', 'plantuml', 'd2'] as const).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setCodeTab(fmt)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                    codeTab === fmt
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {fmt === 'mermaid' ? 'Mermaid' : fmt === 'plantuml' ? 'PlantUML' : 'D2'}
                </button>
              ))}
            </div>
          </div>

          {/* Snippet Display and Copy */}
          <div className="relative">
            <pre className="text-[11px] font-mono p-3 rounded-xl bg-slate-900 text-slate-200 overflow-x-auto selection:bg-blue-600">
              {currentCodeSnippet}
            </pre>
            <button
              onClick={handleCopyCodeSnippet}
              className="absolute top-2 right-2 flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-bold border border-slate-700 shadow-sm transition-all"
            >
              {copiedType === 'code' ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>{lang === 'zh' ? '已复制' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-slate-400" />
                  <span>{lang === 'zh' ? '复制代码' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Cross-Cloud Equivalence (With Instant Copy for Each Vendor) */}
        {equivalentIcons.length > 0 && (
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {lang === 'zh' ? '跨云/中立服务等价对照 (多云选型秒级速查)' : 'Cross-Cloud Equivalents'}
              </h4>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
              {lang === 'zh'
                ? '以下为各厂商官方标准图标或中立替代品，同样支持一键直接复制使用：'
                : 'Official vendor and neutral equivalents. Copy PNG or SVG directly for each:'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {equivalentIcons.map((eq) => {
                const eqProvider = PROVIDERS.find((p) => p.id === eq.provider);
                const isSvgCopied = eqCopiedId === `${eq.id}-svg`;
                const isPngCopied = eqCopiedId === `${eq.id}-png`;

                return (
                  <div
                    key={eq.id}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 bg-white dark:bg-slate-800/60 shadow-xs transition-all"
                  >
                    <div
                      onClick={() => onSelectIcon(eq)}
                      className="flex items-center gap-2.5 cursor-pointer min-w-0 flex-1 pr-2"
                    >
                      <div
                        className="w-8 h-8 flex items-center justify-center shrink-0"
                        dangerouslySetInnerHTML={{ __html: eq.svgRaw }}
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 dark:text-white truncate hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {eq.name[lang]}
                        </div>
                        <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                          {eqProvider?.name[lang]}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleCopySvg(eq, true)}
                        className={`px-2 py-1 rounded-lg text-[11px] font-bold border transition-all ${
                          isSvgCopied
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:bg-slate-200'
                        }`}
                        title="复制该厂商官方 SVG"
                      >
                        {isSvgCopied ? '已复制' : 'SVG'}
                      </button>
                      <button
                        onClick={() => handleCopyPng(eq, 256, true)}
                        className={`px-2 py-1 rounded-lg text-[11px] font-bold border transition-all ${
                          isPngCopied
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-blue-50 dark:bg-blue-950 border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-100'
                        }`}
                        title="直接复制该厂商官方 PNG"
                      >
                        {isPngCopied ? '已复制' : 'PNG'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {icon.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
