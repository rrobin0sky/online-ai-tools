'use client';

import React, { useState } from 'react';
import { Copy, Check, Image as ImageIcon } from 'lucide-react';
import { IconMeta } from '../types/icon';
import { PROVIDERS } from '../data/icons';
import { copyPngToClipboard, copySvgToClipboard, svgToPngBlob } from '../lib/clipboard';
import { applyThemeToSvg } from '../lib/colorEngine';

interface IconCardProps {
  icon: IconMeta;
  lang: 'en' | 'zh';
  themeColor?: string;
  preserveAccents?: boolean;
  onSelect: (icon: IconMeta) => void;
  onNotify?: (title: string, subtitle?: string, type?: 'copy' | 'download' | 'code' | 'success') => void;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon,
  lang,
  themeColor = '#0284c7',
  preserveAccents = true,
  onSelect,
  onNotify,
}) => {
  const [copiedType, setCopiedType] = useState<'svg' | 'png' | null>(null);

  const providerMeta = PROVIDERS.find((p) => p.id === icon.provider);

  // Compute final themed 2.5D SVG with isometric lighting
  const finalSvg = applyThemeToSvg(icon.svgRaw, themeColor, preserveAccents);

  const handleCopySvg = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const success = await copySvgToClipboard(finalSvg);
    if (success) {
      setCopiedType('svg');
      setTimeout(() => setCopiedType(null), 1800);
      if (onNotify) {
        onNotify(
          lang === 'zh' ? '✓ SVG 矢量代码已复制' : '✓ SVG Code Copied',
          `${icon.name[lang]} - 贴入 PPT / Draw.io / Figma`,
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
      setTimeout(() => setCopiedType(null), 1800);
      if (onNotify) {
        onNotify(
          lang === 'zh' ? '✓ PNG 图像已复制' : '✓ PNG Image Copied',
          `${icon.name[lang]} - 直接贴入 PPT/文档`,
          'copy'
        );
      }
    } else {
      // If clipboard write permission is restricted, fallback to instant download
      try {
        const blob = await svgToPngBlob(finalSvg, 256, themeColor);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${icon.id}.png`;
        a.click();
        URL.revokeObjectURL(url);
        setCopiedType('png');
        setTimeout(() => setCopiedType(null), 1800);
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
      className="group relative flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900/90 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer backdrop-blur-xs"
    >
      {/* Top row: Badges */}
      <div className="flex items-center justify-between gap-1 mb-2">
        <span
          className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md border ${
            providerMeta?.badgeBg || 'bg-slate-100 text-slate-800 border-slate-300'
          }`}
        >
          {providerMeta?.name[lang]}
        </span>
        {icon.code && (
          <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
            {icon.code}
          </span>
        )}
      </div>

      {/* Center Icon View with dynamic 2.5D lighting */}
      <div className="h-16 sm:h-20 w-full flex items-center justify-center my-1 group-hover:scale-110 transition-transform duration-250">
        <div
          className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center drop-shadow-sm"
          dangerouslySetInnerHTML={{ __html: finalSvg }}
        />
      </div>

      {/* Title & Info */}
      <div className="mt-2 text-center">
        <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" title={icon.name[lang]}>
          {icon.name[lang]}
        </h3>
        <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">
          {icon.name[lang === 'zh' ? 'en' : 'zh']}
        </p>
      </div>

      {/* Dual Copy Action Buttons */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-2 gap-1.5 text-xs font-semibold">
        {/* SVG Copy */}
        <button
          onClick={handleCopySvg}
          className={`flex items-center justify-center gap-1 py-1.5 px-1.5 rounded-xl border transition-all ${
            copiedType === 'svg'
              ? 'bg-emerald-600 border-emerald-600 text-white font-bold shadow-xs'
              : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-700'
          }`}
          title={lang === 'zh' ? '复制 SVG 矢量代码到剪贴板 (可直接粘贴进 PPT)' : 'Copy SVG vector code'}
        >
          {copiedType === 'svg' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />}
          <span className="text-[11px]">{copiedType === 'svg' ? (lang === 'zh' ? '已复制' : 'Copied') : 'SVG'}</span>
        </button>

        {/* PNG Copy */}
        <button
          onClick={handleCopyPng}
          className={`flex items-center justify-center gap-1 py-1.5 px-1.5 rounded-xl border transition-all ${
            copiedType === 'png'
              ? 'bg-blue-600 border-blue-600 text-white font-bold shadow-xs'
              : 'border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/80'
          }`}
          title={lang === 'zh' ? '直接复制透明 PNG 图片到剪贴板 (可直接贴入 Word 标书或微信)' : 'Copy PNG image to clipboard'}
        >
          {copiedType === 'png' ? <Check className="w-3.5 h-3.5" /> : <ImageIcon className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />}
          <span className="text-[11px]">{copiedType === 'png' ? (lang === 'zh' ? '已复制' : 'Copied') : 'PNG'}</span>
        </button>
      </div>
    </div>
  );
};
