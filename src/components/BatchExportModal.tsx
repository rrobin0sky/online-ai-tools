'use client';

import React, { useState } from 'react';
import { X, Download, Archive, Palette, Check, Sparkles, Layers, FileBox } from 'lucide-react';
import { IconMeta } from '../types/icon';
import { generateIconsZip } from '../lib/zip';
import { downloadDrawioLibrary } from '../lib/drawio';

interface BatchExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'zh';
  allIcons: IconMeta[];
  filteredIcons: IconMeta[];
  onNotify?: (title: string, subtitle?: string, type?: 'copy' | 'download' | 'code' | 'success') => void;
}

const PRESET_THEMES = [
  { name: { zh: '电信企业蓝', en: 'Telecom Blue' }, color: '#0284c7' },
  { name: { zh: '商务科技蓝', en: 'Corporate Blue' }, color: '#2563eb' },
  { name: { zh: '暗夜极客青', en: 'Cyber Cyan' }, color: '#06b6d4' },
  { name: { zh: '高雅莫兰迪灰', en: 'Morandi Slate' }, color: '#475569' },
  { name: { zh: '金融安全绿', en: 'Fintech Forest' }, color: '#059669' },
  { name: { zh: '关键任务红', en: 'Mission Red' }, color: '#dc2626' },
  { name: { zh: '沉稳幽紫', en: 'Deep Violet' }, color: '#7c3aed' },
  { name: { zh: '预警琥珀', en: 'Amber Warning' }, color: '#d97706' },
];

export const BatchExportModal: React.FC<BatchExportModalProps> = ({
  isOpen,
  onClose,
  lang,
  allIcons,
  filteredIcons,
  onNotify,
}) => {
  if (!isOpen) return null;

  const [scope, setScope] = useState<'neutral' | 'filtered' | 'all'>('neutral');
  const [selectedColor, setSelectedColor] = useState<string>('#0284c7');
  const [format, setFormat] = useState<'both' | 'drawio' | 'svg' | 'png'>('both');
  const [isPackaging, setIsPackaging] = useState<boolean>(false);
  const [progress, setProgress] = useState<{ current: number; total: number } | null>(null);

  // Compute icons to export
  const exportList = React.useMemo(() => {
    if (scope === 'neutral') {
      return allIcons.filter((i) => i.provider === 'generic');
    }
    if (scope === 'filtered') {
      return filteredIcons;
    }
    return allIcons;
  }, [scope, allIcons, filteredIcons]);

  const handleStartDownload = async () => {
    if (format === 'drawio') {
      // Direct instant download of Draw.io library XML
      downloadDrawioLibrary(exportList, `ArchIcons-${scope}-theme.xml`, {
        themeColor: selectedColor,
        lang,
      });
      if (onNotify) {
        onNotify(
          lang === 'zh' ? '✓ Draw.io 图库已生成下载' : '✓ Draw.io Library Exported',
          `ArchIcons-${scope}-theme.xml (${exportList.length} 个图标)`,
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
        format: format === 'both' ? 'both' : (format as 'svg' | 'png'),
        onProgress: (current, total) => {
          setProgress({ current, total });
        },
      });

      // Trigger download
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `archicons-${scope}-${format}.zip`;
      a.click();
      URL.revokeObjectURL(url);

      setIsPackaging(false);
      setProgress(null);
      if (onNotify) {
        onNotify(
          lang === 'zh' ? '✓ 图标包已打包完成' : '✓ Package Download Ready',
          `archicons-${scope}-${format}.zip (${exportList.length} 项)`,
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
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                onClick={() => setScope('neutral')}
                className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                  scope === 'neutral'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {lang === 'zh' ? '全套中立设备' : 'Neutral Set'}
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  ({allIcons.filter((i) => i.provider === 'generic').length} 项)
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
                {lang === 'zh' ? '当前筛选结果' : 'Filtered Set'}
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  ({filteredIcons.length} 项)
                </span>
              </button>

              <button
                onClick={() => setScope('all')}
                className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                  scope === 'all'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {lang === 'zh' ? '全站所有图标' : 'All Icons'}
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  ({allIcons.length} 项)
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
            <div className="flex items-center gap-2 flex-wrap mb-2">
              {PRESET_THEMES.map((theme) => (
                <button
                  key={theme.color}
                  onClick={() => setSelectedColor(theme.color)}
                  style={{ backgroundColor: theme.color }}
                  className={`w-7 h-7 rounded-full transition-transform ${
                    selectedColor.toLowerCase() === theme.color.toLowerCase()
                      ? 'scale-110 ring-2 ring-offset-2 ring-blue-500 shadow-md'
                      : 'hover:scale-105 opacity-85 hover:opacity-100'
                  }`}
                  title={theme.name[lang]}
                />
              ))}
              <input
                type="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-7 h-7 rounded-full cursor-pointer border-0 bg-transparent"
                title="Custom hex color"
              />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
              {lang === 'zh'
                ? '* 此主题色将批量注入到所有通用中立设备；原厂官方图标严格保持官方品牌色。'
                : '* Injected into neutral devices; official vendor logos preserve original colors.'}
            </p>
          </div>

          {/* 3. Export Format */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              {lang === 'zh' ? '3. 导出格式 (含 Draw.io 原生库)' : '3. Export Format (inc. Draw.io)'}
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: 'both', label: lang === 'zh' ? '完整包 (SVG+PNG+Draw.io)' : 'Full Pack (All)', icon: '📦' },
                { id: 'drawio', label: lang === 'zh' ? 'Draw.io 库 (.xml)' : 'Draw.io Library (.xml)', icon: '📐' },
                { id: 'svg', label: lang === 'zh' ? '纯 SVG 矢量包' : 'SVG Vector Only', icon: '⚡' },
                { id: 'png', label: lang === 'zh' ? '高清 PNG 图包' : 'PNG Images', icon: '🖼️' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFormat(f.id as any)}
                  className={`p-2.5 rounded-xl border text-left font-bold transition-all flex items-center gap-2 ${
                    format === f.id
                      ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="text-base">{f.icon}</span>
                  <span className="text-xs truncate">{f.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar or Action */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          {isPackaging && progress ? (
            <div className="space-y-2 text-center py-2">
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-150"
                  style={{ width: `${(progress.current / progress.total) * 100}%` }}
                />
              </div>
              <span className="text-xs text-slate-500 font-mono">
                {lang === 'zh'
                  ? `正在处理矢量文件 (${progress.current} / ${progress.total})...`
                  : `Packaging icons (${progress.current} / ${progress.total})...`}
              </span>
            </div>
          ) : (
            <button
              onClick={handleStartDownload}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>
                {format === 'drawio'
                  ? (lang === 'zh'
                      ? `一键导出 Draw.io 图库文件 (${exportList.length} 项)`
                      : `Download Draw.io Stencil (.xml)`)
                  : (lang === 'zh'
                      ? `一键生成并下载 (${exportList.length} 个图标)`
                      : `Download Package (${exportList.length} icons)`)}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
