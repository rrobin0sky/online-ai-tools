'use client';

import React, { useState } from 'react';
import { Copy, Check, Image as ImageIcon, Star } from 'lucide-react';
import { IconMeta } from '../types/icon';
import { copyPngToClipboard, copySvgToClipboard, svgToPngBlob } from '../lib/clipboard';
import { applyThemeToSvg } from '../lib/colorEngine';
import { PROVIDERS, ICONS } from '../data/icons';

interface IconCardProps {
  icon: IconMeta;
  lang: 'en' | 'zh';
  themeColor?: string;
  preserveAccents?: boolean;
  isFavorite: boolean;
  onToggleFavorite: (iconId: string) => void;
  onSelect: (icon: IconMeta) => void;
  onSwitchIcon?: (newIcon: IconMeta) => void;
  onNotify?: (title: string, subtitle?: string, type?: 'copy' | 'download' | 'code' | 'success') => void;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon,
  lang,
  themeColor = '#0284c7',
  preserveAccents = true,
  isFavorite,
  onToggleFavorite,
  onSelect,
  onSwitchIcon,
  onNotify,
}) => {
  const [copiedType, setCopiedType] = useState<'svg' | 'png' | null>(null);

  // Compute final themed SVG
  const finalSvg = icon.isTintable !== false
    ? applyThemeToSvg(icon.svgRaw, themeColor, preserveAccents)
    : icon.svgRaw;

  // Clean name without any redundant "2.5D" prefix
  const cleanName = (name: string) => name.replace(/^2\.5D\s*/i, '').trim();
  const displayName = cleanName(icon.name[lang]);

  // Provider metadata
  const providerMeta = PROVIDERS.find((p) => p.id === icon.provider) || PROVIDERS[0];

  // Find equivalent icons in the same style or same group if available
  const equivalentIcons = icon.equivalentGroup
    ? ICONS.filter(
        (other) =>
          other.id !== icon.id &&
          other.equivalentGroup === icon.equivalentGroup &&
          (other.style === icon.style || !other.style)
      )
    : [];

  const handleCopySvg = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const success = await copySvgToClipboard(finalSvg);
    if (success) {
      setCopiedType('svg');
      setTimeout(() => setCopiedType(null), 1600);
      if (onNotify) {
        onNotify(
          lang === 'zh' ? '✓ SVG 矢量代码已复制' : '✓ SVG Code Copied',
          `${displayName} - 贴入 PPT / Draw.io / Figma`,
          'copy'
        );
      }
    }
  };

  const handleCopyPng = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const res = await copyPngToClipboard(finalSvg, 256, themeColor);
    if (res.success) {
      setCopiedType('png');
      setTimeout(() => setCopiedType(null), 1600);
      if (onNotify) {
        onNotify(
          lang === 'zh' ? '✓ PNG 图像已复制' : '✓ PNG Image Copied',
          `${displayName} - 直接贴入文档或设计图`,
          'copy'
        );
      }
    } else {
      // Fallback to instant download
      try {
        const blob = await svgToPngBlob(finalSvg, 256, themeColor);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${icon.id}.png`;
        a.click();
        URL.revokeObjectURL(url);
        setCopiedType('png');
        setTimeout(() => setCopiedType(null), 1600);
        if (onNotify) {
          onNotify(
            lang === 'zh' ? '✓ PNG 图像已下载' : '✓ PNG Image Downloaded',
            `${icon.id}.png`,
            'download'
          );
        }
      } catch (err) {
        console.error('PNG conversion failed:', err);
      }
    }
  };

  return (
    <div
      onClick={() => onSelect(icon)}
      className="group relative flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#09090b] hover:border-slate-900 dark:hover:border-zinc-500 hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.98]"
    >
      {/* Top row: Vendor Badge & Favorite Star button */}
      <div className="flex items-center justify-between h-5">
        <div className="flex items-center gap-1.5 overflow-hidden">
          {/* Subtle Vendor Chip */}
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 truncate">
            {providerMeta.name[lang]}
          </span>
          {icon.code && (
            <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-zinc-500 hidden sm:inline truncate">
              {icon.code}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(icon.id);
          }}
          className="p-1 -mr-1 rounded-lg text-slate-300 dark:text-zinc-600 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
          title={isFavorite ? (lang === 'zh' ? '取消收藏' : 'Remove from Favorites') : (lang === 'zh' ? '添加收藏' : 'Add to Favorites')}
        >
          <Star
            className={`w-4 h-4 transition-all ${
              isFavorite
                ? 'fill-amber-400 text-amber-500 scale-110'
                : 'hover:scale-110'
            }`}
          />
        </button>
      </div>

      {/* Center Icon: Large and prominent */}
      <div className="h-20 sm:h-24 w-full flex items-center justify-center my-2 group-hover:scale-105 transition-transform duration-200">
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center drop-shadow-xs"
          dangerouslySetInnerHTML={{ __html: finalSvg }}
        />
      </div>

      {/* Clean Title */}
      <div className="text-center my-1">
        <h3
          className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate"
          title={displayName}
        >
          {displayName}
        </h3>
      </div>

      {/* Optional Cross-Vendor Equivalents Switcher */}
      {equivalentIcons.length > 0 && onSwitchIcon && (
        <div
          className="flex items-center justify-center gap-1 my-1 py-0.5"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-[9px] text-slate-400 dark:text-zinc-500 mr-0.5">
            {lang === 'zh' ? '等价:' : 'Equiv:'}
          </span>
          {equivalentIcons.slice(0, 3).map((eq) => {
            const eqProvider = PROVIDERS.find((p) => p.id === eq.provider) || PROVIDERS[0];
            return (
              <button
                key={eq.id}
                type="button"
                onClick={() => onSwitchIcon(eq)}
                className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-950 dark:hover:text-blue-300 transition-colors"
                title={`${cleanName(eq.name[lang])} (${eqProvider.name[lang]})`}
              >
                {eqProvider.name[lang]}
              </button>
            );
          })}
        </div>
      )}

      {/* Dual Copy Action Buttons: Minimal and high-contrast */}
      <div className="mt-2 pt-2 border-t border-slate-100 dark:border-zinc-800 grid grid-cols-2 gap-1.5 text-xs font-semibold">
        {/* SVG Copy */}
        <button
          type="button"
          onClick={handleCopySvg}
          className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl border transition-all active:scale-95 ${
            copiedType === 'svg'
              ? 'bg-emerald-600 border-emerald-600 text-white font-bold shadow-xs'
              : 'border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 dark:hover:bg-blue-950/50 dark:hover:border-blue-700/60 dark:hover:text-blue-300'
          }`}
          title={lang === 'zh' ? '复制 SVG 矢量' : 'Copy SVG'}
        >
          {copiedType === 'svg' ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
          <span className="text-[11px]">{copiedType === 'svg' ? (lang === 'zh' ? '已拷' : 'Done') : 'SVG'}</span>
        </button>

        {/* PNG Copy */}
        <button
          type="button"
          onClick={handleCopyPng}
          className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl border transition-all active:scale-95 ${
            copiedType === 'png'
              ? 'bg-blue-600 border-blue-600 text-white font-bold shadow-xs'
              : 'border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 dark:hover:bg-blue-950/50 dark:hover:border-blue-700/60 dark:hover:text-blue-300'
          }`}
          title={lang === 'zh' ? '复制 PNG 图片' : 'Copy PNG'}
        >
          {copiedType === 'png' ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <ImageIcon className="w-3.5 h-3.5" />
          )}
          <span className="text-[11px]">{copiedType === 'png' ? (lang === 'zh' ? '已拷' : 'Done') : 'PNG'}</span>
        </button>
      </div>
    </div>
  );
};
