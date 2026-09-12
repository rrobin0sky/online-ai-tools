'use client';

import React, { useState } from 'react';
import { Copy, Check, Download, ExternalLink, Maximize2 } from 'lucide-react';
import { IconMeta } from '../types/icon';
import { PROVIDERS } from '../data/icons';

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
  const [copied, setCopied] = useState(false);

  // Find provider badge metadata
  const providerMeta = PROVIDERS.find((p) => p.id === icon.provider);

  // Prepare active SVG string with customized color if tintable
  const activeColor = icon.isTintable ? (selectedColor || icon.defaultColor || '#0ea5e9') : undefined;
  
  // Format SVG with custom color for copying
  const getProcessedSvg = () => {
    if (icon.isTintable && activeColor) {
      return icon.svgRaw.replace(/currentColor/g, activeColor);
    }
    return icon.svgRaw;
  };

  const handleCopySvg = (e: React.MouseEvent) => {
    e.stopPropagation();
    const finalSvg = getProcessedSvg();
    navigator.clipboard.writeText(finalSvg);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleDownloadPng = (e: React.MouseEvent) => {
    e.stopPropagation();
    const svgString = getProcessedSvg();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);
    
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(image, 0, 0, 256, 256);
        const png = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = `${icon.id}.png`;
        downloadLink.href = png;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    };
    image.src = blobURL;
  };

  return (
    <div
      onClick={() => onSelect(icon)}
      className="group relative flex flex-col justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 cursor-pointer"
    >
      {/* Top row: Badges */}
      <div className="flex items-center justify-between gap-1 mb-3">
        <span
          className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${
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
      <div className="h-20 w-full flex items-center justify-center my-1 group-hover:scale-105 transition-transform duration-200">
        <div
          className="w-14 h-14 flex items-center justify-center"
          style={icon.isTintable ? { color: activeColor } : undefined}
          dangerouslySetInnerHTML={{ __html: icon.svgRaw }}
        />
      </div>

      {/* Title & Info */}
      <div className="mt-3 text-center">
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate" title={icon.name[lang]}>
          {icon.name[lang]}
        </h3>
        <p className="text-[11px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
          {icon.name[lang === 'zh' ? 'en' : 'zh']}
        </p>
      </div>

      {/* Hover Action Bar */}
      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-1 text-slate-500 dark:text-slate-400">
        <button
          onClick={handleCopySvg}
          className={`flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-colors ${
            copied
              ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
              : 'hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
          }`}
          title="Copy SVG code to clipboard"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? (lang === 'zh' ? '已复制' : 'Copied') : 'SVG'}</span>
        </button>

        <button
          onClick={handleDownloadPng}
          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          title="Quick download PNG (256px)"
        >
          <Download className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(icon);
          }}
          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          title="View details & cross-cloud mapping"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
