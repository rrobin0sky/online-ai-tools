'use client';

import React, { useState, useEffect } from 'react';
import { X, Download, Archive, Palette, Check, Sparkles, Layers, FileBox } from 'lucide-react';
import { IconMeta } from '../types/icon';
import { generateIconsZip } from '../lib/zip';
import { downloadDrawioLibrary } from '../lib/drawio';
import { PRESET_THEMES } from '../lib/colorEngine';

interface BatchExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'zh';
  allIcons: IconMeta[];
  filteredIcons: IconMeta[];
  currentColor?: string;
  preserveAccents?: boolean;
  onNotify?: (title: string, subtitle?: string, type?: 'copy' | 'download' | 'code' | 'success') => void;
}

export const BatchExportModal: React.FC<BatchExportModalProps> = ({
  isOpen,
  onClose,
  lang,
  allIcons,
  filteredIcons,
  currentColor = '#0284c7',
  preserveAccents = true,
  onNotify,
}) => {
  if (!isOpen) return null;

  const [scope, setScope] = useState<'all' | 'physical' | 'cloud' | 'filtered'>('all');
  const [selectedColor, setSelectedColor] = useState<string>(currentColor);
  const [format, setFormat] = useState<'both' | 'drawio' | 'svg' | 'png'>('both');
  const [isPackaging, setIsPackaging] = useState<boolean>(false);
  const [progress, setProgress] = useState<{ current: number; total: number } | null>(null);

  useEffect(() => {
    if (currentColor) {
      setSelectedColor(currentColor);
    }
  }, [currentColor]);

  // Compute icons to export
  const exportList = React.useMemo(() => {
    if (scope === 'physical') {
      return allIcons.filter((i) => i.deviceType === 'physical' || i.provider === 'physical');
    }
    if (scope === 'cloud') {
      return allIcons.filter((i) => i.deviceType === 'cloud' || i.provider === 'cloud');
    }
    if (scope === 'filtered') {
      return filteredIcons;
    }
    return allIcons;
  }, [scope, allIcons, filteredIcons]);

  const handleStartDownload = async () => {
    if (format === 'drawio') {
      // Direct instant download of Draw.io library XML
      downloadDrawioLibrary(exportList, `ArchIcons-2.5D-${scope}.xml`, {
        themeColor: selectedColor,
        preserveAccents,
        lang,
      });
      if (onNotify) {
        onNotify(
          lang === 'zh' ? '✓ Draw.io 图库已生成下载' : '✓ Draw.io Library Exported',
          `ArchIcons-2.5D-${scope}.xml (${exportList.length} 个图标)`,
          'download'
        );
      }
      onClose();
      return;
    }

    try {
      setIsPackaging(true);
      setProgress({ current: 0, total: exportList.length });

      const zipBlob = await generateIconsZip({
        icons: exportList,
        themeColor: selectedColor,
        preserveAccents,
        format: format === 'both' ? 'both' : (format as 'svg' | 'png'),
        onProgress: (current, total) => {
          setProgress({ current, total });
        },
      });

      // Trigger download
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `archicons-2.5d-${scope}-${format}.zip`;
      a.click();
      URL.revokeObjectURL(url);

      setIsPackaging(false);
      setProgress(null);
      if (onNotify) {
        onNotify(
          lang === 'zh' ? '✓ 图标包已打包完成' : '✓ Package Download Ready',
          `archicons-2.5d-${scope}-${format}.zip (${exportList.length} 项)`,
          'download'
        );
      }
      onClose();
    } catch (err) {
      console.error('Packaging failed:', err);
      setIsPackaging(false);
      setProgress(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-2xl p-6 sm:p-7">
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isPackaging}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
            <Archive className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
              {lang === 'zh' ? '批量打包与全局调色' : 'Batch Export & Theme Engine'}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              {lang === 'zh'
                ? '支持自定义统一工程色系，并一键生成 Draw.io 库或 ZIP 压缩包'
                : 'Apply custom corporate theme and export Draw.io Stencil or ZIP'}
            </p>
          </div>
        </div>

        <div className="space-y-5 text-sm">
          {/* 1. Scope Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              {lang === 'zh' ? '1. 选择打包范围' : '1. Select Package Scope'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <button
                onClick={() => setScope('all')}
                className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                  scope === 'all'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {lang === 'zh' ? '全部 2.5D' : 'All 2.5D'}
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  ({allIcons.length} 项)
                </span>
              </button>

              <button
                onClick={() => setScope('physical')}
                className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                  scope === 'physical'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {lang === 'zh' ? '物理设备' : 'Physical'}
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  ({allIcons.filter((i) => i.deviceType === 'physical' || i.provider === 'physical').length} 项)
                </span>
              </button>

              <button
                onClick={() => setScope('cloud')}
                className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                  scope === 'cloud'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {lang === 'zh' ? '云上设备' : 'Cloud'}
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  ({allIcons.filter((i) => i.deviceType === 'cloud' || i.provider === 'cloud').length} 项)
                </span>
              </button>

              <button
                onClick={() => setScope('filtered')}
                className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                  scope === 'filtered'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {lang === 'zh' ? '筛选结果' : 'Filtered'}
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  ({filteredIcons.length} 项)
                </span>
              </button>
            </div>
          </div>

          {/* 2. Theme Color Selection */}
          <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/40">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-blue-500" />
                {lang === 'zh' ? '2. 定制全局统一方案主题色' : '2. Architecture Theme Color'}
              </label>
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">{selectedColor}</span>
            </div>

            {/* Presets */}
            <div className="flex items-center gap-2 flex-wrap mb-3">
              {PRESET_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedColor(theme.color)}
                  style={{ backgroundColor: theme.color }}
                  className={`w-7 h-7 rounded-full transition-all ${
                    selectedColor.toLowerCase() === theme.color.toLowerCase()
                      ? 'scale-110 ring-2 ring-offset-2 ring-blue-500 shadow-md'
                      : 'hover:scale-105 opacity-80 hover:opacity-100'
                  }`}
                  title={theme.name[lang]}
                />
              ))}
              {/* Custom input */}
              <input
                type="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-7 h-7 rounded-full cursor-pointer border-0 p-0 bg-transparent hover:scale-105 transition-transform"
                title={lang === 'zh' ? '自定义拾色' : 'Pick custom color'}
              />
            </div>
          </div>

          {/* 3. Format Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              {lang === 'zh' ? '3. 导出交付格式' : '3. Export Delivery Format'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <button
                onClick={() => setFormat('both')}
                className={`p-2.5 rounded-xl border font-bold transition-all text-center ${
                  format === 'both'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                SVG + PNG
              </button>
              <button
                onClick={() => setFormat('drawio')}
                className={`p-2.5 rounded-xl border font-bold transition-all text-center ${
                  format === 'drawio'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Draw.io (.xml)
              </button>
              <button
                onClick={() => setFormat('svg')}
                className={`p-2.5 rounded-xl border font-bold transition-all text-center ${
                  format === 'svg'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                仅 SVG (矢量)
              </button>
              <button
                onClick={() => setFormat('png')}
                className={`p-2.5 rounded-xl border font-bold transition-all text-center ${
                  format === 'png'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                仅 PNG (透明)
              </button>
            </div>
          </div>
        </div>

        {/* Footer & Download trigger */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            {progress && (
              <span>
                {lang === 'zh' ? '正在渲染并打包' : 'Rendering & Packing'} ({progress.current}/{progress.total})...
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              disabled={isPackaging}
              className="px-4 py-2 text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {lang === 'zh' ? '取消' : 'Cancel'}
            </button>
            <button
              onClick={handleStartDownload}
              disabled={isPackaging || exportList.length === 0}
              className="px-5 py-2 text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md shadow-blue-500/20 flex items-center gap-1.5 disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isPackaging ? (lang === 'zh' ? '打包中...' : 'Packaging...') : (lang === 'zh' ? '立即导出' : 'Export Now')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
