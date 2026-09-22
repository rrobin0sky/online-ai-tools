'use client';

import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Image as ImageIcon } from 'lucide-react';
import { IconMeta } from '../types/icon';
import { copyPngToClipboard, copySvgToClipboard, svgToPngBlob } from '../lib/clipboard';
import { applyThemeToSvg } from '../lib/colorEngine';
import { PROVIDERS, ICONS } from '../data/icons';

interface IconModalProps {
  icon: IconMeta | null;
  lang: 'en' | 'zh';
  themeColor?: string;
  preserveAccents?: boolean;
  onClose: () => void;
  onSelectIcon?: (icon: IconMeta) => void;
  onNotify?: (title: string, subtitle?: string, type?: 'copy' | 'download' | 'code' | 'success') => void;
}

export const IconModal: React.FC<IconModalProps> = ({
  icon,
  lang,
  themeColor = '#0284c7',
  preserveAccents = true,
  onClose,
  onSelectIcon,
  onNotify,
}) => {
  const [copiedType, setCopiedType] = useState<'svg' | 'png' | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (icon) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [icon, onClose]);

  if (!icon) return null;

  const finalSvg = icon.isTintable !== false
    ? applyThemeToSvg(icon.svgRaw, themeColor, preserveAccents)
    : icon.svgRaw;

  // Clean name without any redundant "2.5D" prefix
  const cleanName = (name: string) => name.replace(/^2\.5D\s*/i, '').trim();
  const displayName = cleanName(icon.name[lang]);
  const subDescription =
    icon.description?.[lang] ||
    cleanName(icon.name[lang === 'zh' ? 'en' : 'zh']);

  const providerMeta = PROVIDERS.find((p) => p.id === icon.provider) || PROVIDERS[0];

  const equivalentIcons = icon.equivalentGroup
    ? ICONS.filter((other) => other.id !== icon.id && other.equivalentGroup === icon.equivalentGroup)
    : [];

  const notify = (title: string, subtitle?: string, type: 'copy' | 'download' | 'code' | 'success' = 'copy') => {
    if (onNotify) {
      onNotify(title, subtitle, type);
    }
  };

  const handleCopySvg = async () => {
    const ok = await copySvgToClipboard(finalSvg);
    if (ok) {
      setCopiedType('svg');
      setTimeout(() => setCopiedType(null), 1600);
      notify(
        lang === 'zh' ? '✓ SVG 矢量代码已复制' : '✓ SVG Code Copied',
        lang === 'zh' ? '已存入剪贴板，可直接在 PPT / Draw.io / Figma 中按 ⌘V 粘贴' : 'Ready to paste in PPT, Draw.io or Figma',
        'copy'
      );
    }
  };

  const handleCopyPng = async (size = 256) => {
    const res = await copyPngToClipboard(finalSvg, size, themeColor);
    if (res.success) {
      setCopiedType('png');
      setTimeout(() => setCopiedType(null), 1600);
      notify(
        lang === 'zh' ? '✓ PNG 透明图像已复制' : '✓ PNG Image Copied',
        lang === 'zh' ? '已存入剪贴板，可直接粘贴进 PPT 或 Word 标书' : 'Ready to paste directly into documents',
        'copy'
      );
    } else {
      await handleDownloadPng(size);
    }
  };

  const handleDownloadSvg = () => {
    const blob = new Blob([finalSvg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${icon.id}.svg`;
    a.click();
    URL.revokeObjectURL(url);
    notify(
      lang === 'zh' ? '✓ .SVG 矢量文件已下载' : '✓ SVG File Downloaded',
      `${icon.id}.svg`,
      'download'
    );
  };

  const handleDownloadPng = async (size: number) => {
    try {
      const blob = await svgToPngBlob(finalSvg, size, themeColor);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${icon.id}-${size}px.png`;
      a.click();
      URL.revokeObjectURL(url);
      notify(
        lang === 'zh' ? `✓ ${size}px PNG 已下载` : `✓ ${size}px PNG Downloaded`,
        `${icon.id}-${size}px.png`,
        'download'
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/70 backdrop-blur-xl animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-3xl bg-white dark:bg-[#121214] border border-slate-200/80 dark:border-zinc-800 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-150 text-slate-900 dark:text-white"
      >
        {/* Top bar: Vendor Badge & Apple-style Circular Close Button */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200">
              {providerMeta.name[lang]}
            </span>
            {icon.code && (
              <span className="text-xs font-mono font-bold tracking-wider px-2 py-0.5 rounded-md border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-slate-500 dark:text-zinc-400">
                {icon.code}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-zinc-700 flex items-center justify-center transition-all active:scale-90"
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Central Stage: Elegant spotlight showcase */}
        <div className="my-3 py-6 px-4 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 flex items-center justify-center shadow-inner">
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center drop-shadow-md transition-transform hover:scale-105"
            dangerouslySetInnerHTML={{ __html: finalSvg }}
          />
        </div>

        {/* Apple Typography: Clean Title & Subtitle */}
        <div className="text-center mt-2 mb-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {displayName}
          </h2>
          <p className="text-xs sm:text-sm font-normal text-slate-500 dark:text-zinc-400 mt-1 max-w-sm mx-auto leading-relaxed">
            {subDescription}
          </p>
        </div>

        {/* Cross-vendor equivalent switcher in modal if available */}
        {equivalentIcons.length > 0 && onSelectIcon && (
          <div className="mb-5 p-2.5 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800/80 flex flex-col gap-1.5">
            <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 text-center">
              {lang === 'zh' ? '查看同类其他厂商版本：' : 'Switch to equivalent vendor:'}
            </span>
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {equivalentIcons.map((eq) => {
                const eqProvider = PROVIDERS.find((p) => p.id === eq.provider) || PROVIDERS[0];
                return (
                  <button
                    key={eq.id}
                    type="button"
                    onClick={() => onSelectIcon(eq)}
                    className="text-xs font-bold px-2.5 py-1 rounded-xl bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700 hover:border-blue-500 hover:text-blue-600 transition-all shadow-2xs"
                  >
                    {eqProvider.name[lang]} - {cleanName(eq.name[lang])}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Primary Action Buttons: Brand-aligned Modern Blue & Tinted Glass Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {/* Copy SVG: Primary Action (Brand Blue Gradient) */}
          <button
            type="button"
            onClick={handleCopySvg}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs transition-all active:scale-[0.97] shadow-sm ${
              copiedType === 'svg'
                ? 'bg-emerald-600 text-white shadow-emerald-500/25'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25'
            }`}
          >
            {copiedType === 'svg' ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span>
              {copiedType === 'svg'
                ? (lang === 'zh' ? 'SVG 已复制' : 'Copied!')
                : (lang === 'zh' ? '复制 SVG 矢量' : 'Copy SVG')}
            </span>
          </button>

          {/* Copy PNG: Secondary Action (Sophisticated Ice-blue / Subtle Tech Surface) */}
          <button
            type="button"
            onClick={() => handleCopyPng(256)}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs border transition-all active:scale-[0.97] shadow-2xs ${
              copiedType === 'png'
                ? 'bg-blue-600 border-blue-600 text-white shadow-blue-500/25'
                : 'bg-blue-50/80 hover:bg-blue-100/90 text-blue-700 border-blue-200/80 dark:bg-blue-950/30 dark:hover:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800/50'
            }`}
          >
            {copiedType === 'png' ? (
              <Check className="w-4 h-4" />
            ) : (
              <ImageIcon className="w-4 h-4" />
            )}
            <span>
              {copiedType === 'png'
                ? (lang === 'zh' ? 'PNG 已复制' : 'Copied!')
                : (lang === 'zh' ? '复制 PNG 图片' : 'Copy PNG')}
            </span>
          </button>
        </div>

        {/* Secondary Downloads: Refined Pill Badges */}
        <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-zinc-500">
          <span className="font-medium text-[11px] mr-1">
            {lang === 'zh' ? '下载文件：' : 'Download:'}
          </span>
          <button
            type="button"
            onClick={handleDownloadSvg}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-all active:scale-95"
          >
            .SVG
          </button>
          <button
            type="button"
            onClick={() => handleDownloadPng(256)}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-all active:scale-95"
          >
            256px
          </button>
          <button
            type="button"
            onClick={() => handleDownloadPng(512)}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-all active:scale-95"
          >
            512px
          </button>
        </div>
      </div>
    </div>
  );
};
