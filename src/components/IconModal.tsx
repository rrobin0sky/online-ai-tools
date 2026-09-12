'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Palette, ArrowRight, Sparkles } from 'lucide-react';
import { IconMeta } from '../types/icon';
import { PROVIDERS, ICONS } from '../data/icons';

interface IconModalProps {
  icon: IconMeta | null;
  lang: 'en' | 'zh';
  onClose: () => void;
  onSelectIcon: (icon: IconMeta) => void;
}

const PRESET_COLORS = [
  '#0ea5e9', // Sky Blue
  '#3b82f6', // Royal Blue
  '#10b981', // Emerald
  '#ef4444', // Red
  '#f59e0b', // Amber
  '#8b5cf6', // Violet
  '#475569', // Slate
  '#111827', // Black
];

export const IconModal: React.FC<IconModalProps> = ({
  icon,
  lang,
  onClose,
  onSelectIcon,
}) => {
  if (!icon) return null;

  const [copied, setCopied] = useState(false);
  const [customColor, setCustomColor] = useState<string>(icon.defaultColor || '#0ea5e9');
  const [resolution, setResolution] = useState<number>(256);

  const providerMeta = PROVIDERS.find((p) => p.id === icon.provider);

  // Find cross-cloud equivalent icons
  const equivalentIcons = icon.equivalentGroup
    ? ICONS.filter((i) => i.equivalentGroup === icon.equivalentGroup && i.id !== icon.id)
    : [];

  const getProcessedSvg = () => {
    if (icon.isTintable && customColor) {
      return icon.svgRaw.replace(/currentColor/g, customColor);
    }
    return icon.svgRaw;
  };

  const handleCopySvg = () => {
    const finalSvg = getProcessedSvg();
    navigator.clipboard.writeText(finalSvg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
  };

  const handleDownloadPng = (size: number) => {
    const svgString = getProcessedSvg();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const blobURL = URL.createObjectURL(svgBlob);

    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(image, 0, 0, size, size);
        const png = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = png;
        a.download = `${icon.id}-${size}px.png`;
        a.click();
      }
      URL.revokeObjectURL(blobURL);
    };
    image.src = blobURL;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 pr-10">
          <div className="w-16 h-16 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-2 shrink-0">
            <div
              className="w-12 h-12 flex items-center justify-center"
              style={icon.isTintable ? { color: customColor } : undefined}
              dangerouslySetInnerHTML={{ __html: icon.svgRaw }}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${providerMeta?.badgeBg}`}>
                {providerMeta?.name[lang]}
              </span>
              {icon.code && (
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                  {icon.code}
                </span>
              )}
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {icon.name[lang]}
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {icon.name[lang === 'zh' ? 'en' : 'zh']}
            </p>
          </div>
        </div>

        {/* Description */}
        {icon.description && (
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
            {icon.description[lang]}
          </p>
        )}

        {/* Tintable Color Picker (If Vendor-Neutral / Tintable) */}
        {icon.isTintable && (
          <div className="mt-6 p-4 rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20">
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-blue-500" />
                {lang === 'zh' ? '自定义设备图标颜色' : 'Customize Icon Color'}
              </label>
              <span className="text-xs font-mono font-medium text-slate-500">{customColor}</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {PRESET_COLORS.map((color) => (
                <button
                  key={color}
                  onClick={() => setCustomColor(color)}
                  style={{ backgroundColor: color }}
                  className={`w-7 h-7 rounded-full transition-transform ${
                    customColor.toLowerCase() === color.toLowerCase()
                      ? 'scale-110 ring-2 ring-offset-2 ring-blue-500'
                      : 'hover:scale-105'
                  }`}
                />
              ))}
              <input
                type="color"
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
                title="Pick custom hex color"
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          <button
            onClick={handleCopySvg}
            className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-md shadow-blue-500/20 transition-all"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? (lang === 'zh' ? '已复制 SVG' : 'Copied SVG') : (lang === 'zh' ? '一键复制 SVG 源码' : 'Copy SVG Code')}</span>
          </button>

          <button
            onClick={handleDownloadSvg}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium transition-colors"
          >
            <Download className="w-4 h-4 text-blue-500" />
            <span>.SVG</span>
          </button>

          {/* PNG Resolution Selector */}
          <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            {[128, 256, 512].map((size) => (
              <button
                key={size}
                onClick={() => handleDownloadPng(size)}
                className="px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border-r last:border-r-0 border-slate-200 dark:border-slate-800 transition-colors"
                title={`Download PNG ${size}x${size}px`}
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
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{lang === 'zh' ? '官方文档' : 'Docs'}</span>
            </a>
          )}
        </div>

        {/* Cross-Cloud Equivalence Suggestion (杀手级特性) */}
        {equivalentIcons.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {lang === 'zh' ? '跨云服务等价对照 (Cross-Cloud Equivalence)' : 'Cross-Cloud Equivalents'}
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              {lang === 'zh'
                ? '正在绘制多云架构或迁移拓扑？以下是其他云厂商的同类架构服务：'
                : 'Drawing multi-cloud or migration topologies? Here are the equivalent services across providers:'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {equivalentIcons.map((eq) => {
                const eqProvider = PROVIDERS.find((p) => p.id === eq.provider);
                return (
                  <div
                    key={eq.id}
                    onClick={() => onSelectIcon(eq)}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 bg-slate-50/50 dark:bg-slate-800/30 cursor-pointer group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-7 h-7 flex items-center justify-center shrink-0"
                        dangerouslySetInnerHTML={{ __html: eq.svgRaw }}
                      />
                      <div>
                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 transition-colors">
                          {eq.name[lang]}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {eqProvider?.name[lang]}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-500 transition-all" />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {icon.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
