'use client';

import React, { useState } from 'react';
import { Copy, Check, Download, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { IconMeta } from '../types/icon';
import { PROVIDERS } from '../data/icons';
import { copyPngToClipboard, copySvgToClipboard, svgToPngBlob } from '../lib/clipboard';

interface IconCardProps {
  icon: IconMeta;
  lang: 'en' | 'zh';
  selectedColor?: string;
  onSelect: (icon: IconMeta) => void;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon,
  lang,
  selectedColor,
  onSelect,
}) => {
  const [copiedType, setCopiedType] = useState<'svg' | 'png' | null>(null);

  const providerMeta = PROVIDERS.find((p) => p.id === icon.provider);

  // Active color for tintable icons
  const activeColor = icon.isTintable ? (selectedColor || icon.defaultColor || '#0ea5e9') : undefined;

  const getProcessedSvg = () => {
    if (icon.isTintable && activeColor) {
      return icon.svgRaw.replace(/currentColor/g, activeColor);
    }
    return icon.svgRaw;
  };

  const handleCopySvg = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const finalSvg = getProcessedSvg();
    const success = await copySvgToClipboard(finalSvg);
    if (success) {
      setCopiedType('svg');
      setTimeout(() => setCopiedType(null), 1800);
    }
  };

  const handleCopyPng = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const finalSvg = getProcessedSvg();
    const success = await copyPngToClipboard(finalSvg, 256);
    if (success) {
      setCopiedType('png');
      setTimeout(() => setCopiedType(null), 1800);
    } else {
      // Fallback: trigger download if clipboard API is restricted
      handleDownloadPng(e);
    }
  };

  const handleDownloadPng = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const finalSvg = getProcessedSvg();
      const blob = await svgToPngBlob(finalSvg, 256);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${icon.id}.png`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      onClick={() => onSelect(icon)}
      className="group relative flex flex-col justify-between p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 cursor-pointer"
    >
      {/* Top row: Badges */}
      <div className="flex items-center justify-between gap-1 mb-2">
        <span
          className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md border ${
            providerMeta?.badgeBg || 'bg-slate-100 text-slate-700'
          }`}
        >
          {providerMeta?.name[lang]}
        </span>
        {icon.code && (
          <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
            {icon.code}
          </span>
        )}
      </div>

      {/* Center Icon View */}
      <div className="h-16 sm:h-20 w-full flex items-center justify-center my-1 group-hover:scale-105 transition-transform duration-200">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
          style={icon.isTintable ? { color: activeColor } : undefined}
          dangerouslySetInnerHTML={{ __html: icon.svgRaw }}
        />
      </div>

      {/* Title & Info */}
      <div className="mt-2 text-center">
        <h3 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 truncate" title={icon.name[lang]}>
          {icon.name[lang]}
        </h3>
        <p className="text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
          {icon.name[lang === 'zh' ? 'en' : 'zh']}
        </p>
      </div>

      {/* Dual Copy Action Buttons (Copy SVG & Copy PNG directly) */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-2 gap-1.5 text-xs font-medium">
        <button
          onClick={handleCopySvg}
          className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded-lg border transition-all ${
            copiedType === 'svg'
              ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 font-bold scale-95'
              : 'border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:border-blue-300 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
          }`}
          title={lang === 'zh' ? '复制 SVG 矢量代码到剪贴板' : 'Copy SVG code'}
        >
          {copiedType === 'svg' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span className="text-[11px]">{copiedType === 'svg' ? (lang === 'zh' ? '已复制' : 'Copied') : 'SVG'}</span>
        </button>

        <button
          onClick={handleCopyPng}
          className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded-lg border transition-all ${
            copiedType === 'png'
              ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 font-bold scale-95'
              : 'border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:border-blue-300 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
          }`}
          title={lang === 'zh' ? '直接复制透明 PNG 图片到剪贴板 (可直接贴入 PPT/Word/微信)' : 'Copy PNG image to clipboard'}
        >
          {copiedType === 'png' ? <Check className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
          <span className="text-[11px]">{copiedType === 'png' ? (lang === 'zh' ? '已复制' : 'Copied') : 'PNG'}</span>
        </button>
      </div>
    </div>
  );
};
