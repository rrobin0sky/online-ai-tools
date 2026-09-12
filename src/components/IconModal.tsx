'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Palette, ArrowRight, Sparkles, Image as ImageIcon } from 'lucide-react';
import { IconMeta } from '../types/icon';
import { PROVIDERS, ICONS } from '../data/icons';
import { copyPngToClipboard, copySvgToClipboard, svgToPngBlob } from '../lib/clipboard';

interface IconModalProps {
  icon: IconMeta | null;
  lang: 'en' | 'zh';
  onClose: () => void;
  onSelectIcon: (icon: IconMeta) => void;
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
}) => {
  if (!icon) return null;

  const [copiedType, setCopiedType] = useState<'svg' | 'png' | null>(null);
  const [eqCopiedId, setEqCopiedId] = useState<string | null>(null);
  const [customColor, setCustomColor] = useState<string>(icon.defaultColor || '#0ea5e9');

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
    } else {
      await handleDownloadPng(size, targetIcon);
      if (isEquivalent) {
        setEqCopiedId(`${targetIcon.id}-png`);
        setTimeout(() => setEqCopiedId(null), 1800);
      } else {
        setCopiedType('png');
        setTimeout(() => setCopiedType(null), 1800);
      }
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
    } catch (err) {
      console.error(err);
    }
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
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              {icon.name[lang === 'zh' ? 'en' : 'zh']}
            </p>
          </div>
        </div>

        {/* Description with high contrast */}
        {icon.description && (
          <p className="mt-4 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed bg-slate-100 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200 dark:border-slate-700 font-medium">
            {icon.description[lang]}
          </p>
        )}

        {/* Custom Color Palette (If tintable) */}
        {icon.isTintable && (
          <div className="mt-5 p-4 rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20">
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-blue-500" />
                {lang === 'zh' ? '自定义设备专属主题色' : 'Customize Icon Color'}
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

        {/* Primary Actions (Copy PNG & Copy SVG) */}
        <div className="mt-6 space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Direct Copy PNG */}
            <button
              onClick={() => handleCopyPng()}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all active:scale-95"
            >
              {copiedType === 'png' ? <Check className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
              <span>
                {copiedType === 'png'
                  ? (lang === 'zh' ? '✓ PNG 已直接复制到剪贴板！' : '✓ PNG Copied to Clipboard!')
                  : (lang === 'zh' ? '复制 PNG 图片 (直接贴 PPT/微信)' : 'Copy PNG Image (Ready to Paste)')}
              </span>
            </button>

            {/* Direct Copy SVG */}
            <button
              onClick={() => handleCopySvg()}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm shadow-md transition-all active:scale-95"
            >
              {copiedType === 'svg' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>
                {copiedType === 'svg'
                  ? (lang === 'zh' ? '✓ SVG 源码已复制！' : '✓ SVG Code Copied!')
                  : (lang === 'zh' ? '复制 SVG 矢量源码' : 'Copy SVG Vector Code')}
              </span>
            </button>
          </div>

          {/* Secondary Download Bar */}
          <div className="flex items-center justify-between flex-wrap gap-2 pt-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span>{lang === 'zh' ? '本地下载：' : 'Download:'}</span>
              <button
                onClick={handleDownloadSvg}
                className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium transition-colors"
              >
                .SVG 矢量文件
              </button>
              {[256, 512].map((size) => (
                <button
                  key={size}
                  onClick={() => handleDownloadPng(size)}
                  className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium transition-colors"
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
                className="flex items-center gap-1 text-slate-500 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? '官方文档' : 'Official Docs'}</span>
              </a>
            )}
          </div>
        </div>

        {/* Cross-Cloud Equivalence (With Instant Copy for Each Vendor) */}
        {equivalentIcons.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  {lang === 'zh' ? '跨云/中立服务等价对照 (各大厂商可直接复制使用)' : 'Cross-Cloud Equivalents (Directly Copyable)'}
                </h4>
              </div>
            </div>
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-3">
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
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 bg-white dark:bg-slate-800 shadow-sm transition-all"
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
                        <div className="text-[11px] font-medium text-slate-600 dark:text-slate-300 truncate">
                          {eqProvider?.name[lang]}
                        </div>
                      </div>
                    </div>

                    {/* Quick Copy Buttons for Equivalent Icons with high contrast */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleCopySvg(eq, true)}
                        className={`px-2 py-1 rounded-lg text-[11px] font-bold border transition-all ${
                          isSvgCopied
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-600'
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
                            : 'bg-blue-50 dark:bg-blue-950 border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900'
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
