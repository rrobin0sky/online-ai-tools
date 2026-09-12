'use client';

import React, { useState } from 'react';
import { X, Download, Archive, Palette, Check, Sparkles, Layers } from 'lucide-react';
import { IconMeta } from '../types/icon';
import { generateIconsZip } from '../lib/zip';

interface BatchExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'zh';
  allIcons: IconMeta[];
  filteredIcons: IconMeta[];
}

const PRESET_THEMES = [
  { name: { zh: '商务深蓝', en: 'Corporate Blue' }, color: '#2563eb' },
  { name: { zh: '科技青蓝', en: 'Tech Cyan' }, color: '#0ea5e9' },
  { name: { zh: '高雅黑灰', en: 'Charcoal Slate' }, color: '#1e293b' },
  { name: { zh: '安全森林绿', en: 'Forest Green' }, color: '#059669' },
  { name: { zh: '警戒深红', en: 'Crimson Red' }, color: '#dc2626' },
  { name: { zh: '沉稳幽紫', en: 'Deep Violet' }, color: '#7c3aed' },
];

export const BatchExportModal: React.FC<BatchExportModalProps> = ({
  isOpen,
  onClose,
  lang,
  allIcons,
  filteredIcons,
}) => {
  if (!isOpen) return null;

  const [scope, setScope] = useState<'neutral' | 'filtered' | 'all'>('neutral');
  const [selectedColor, setSelectedColor] = useState<string>('#2563eb');
  const [format, setFormat] = useState<'svg' | 'png' | 'both'>('both');
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
    try {
      setIsPackaging(true);
      setProgress({ current: 0, total: exportList.length });

      const zipBlob = await generateIconsZip({
        icons: exportList,
        themeColor: selectedColor,
        format,
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
      onClose();
    } catch (err) {
      console.error('Packaging failed:', err);
      setIsPackaging(false);
      setProgress(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-7">
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isPackaging}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 flex items-center justify-center">
            <Archive className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {lang === 'zh' ? '批量打包下载图标库' : 'Batch Package Download'}
            </h3>
            <p className="text-xs text-slate-500">
              {lang === 'zh' ? '支持自定义企业统一主题色并一键生成 ZIP' : 'Apply custom corporate theme and export ZIP'}
            </p>
          </div>
        </div>

        <div className="space-y-5 text-sm">
          {/* 1. Scope Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              {lang === 'zh' ? '1. 选择打包范围' : '1. Select Package Scope'}
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                onClick={() => setScope('neutral')}
                className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                  scope === 'neutral'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-sm'
                    : 'border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {lang === 'zh' ? '全套中立设备' : 'Neutral Set'}
                <span className="block text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
                  ({allIcons.filter((i) => i.provider === 'generic').length} 项)
                </span>
              </button>

              <button
                onClick={() => setScope('filtered')}
                className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                  scope === 'filtered'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-sm'
                    : 'border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {lang === 'zh' ? '当前筛选结果' : 'Filtered Set'}
                <span className="block text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
                  ({filteredIcons.length} 项)
                </span>
              </button>

              <button
                onClick={() => setScope('all')}
                className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                  scope === 'all'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-sm'
                    : 'border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {lang === 'zh' ? '全站所有图标' : 'All Icons'}
                <span className="block text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
                  ({allIcons.length} 项)
                </span>
              </button>
            </div>
          </div>

          {/* 2. Theme Color Selection */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-blue-500" />
                {lang === 'zh' ? '2. 定制中立图标统一主题色' : '2. Neutral Icons Theme Color'}
              </label>
              <span className="text-xs font-mono font-medium text-slate-500">{selectedColor}</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              {PRESET_THEMES.map((theme) => (
                <button
                  key={theme.color}
                  onClick={() => setSelectedColor(theme.color)}
                  style={{ backgroundColor: theme.color }}
                  className={`w-7 h-7 rounded-full transition-transform ${
                    selectedColor.toLowerCase() === theme.color.toLowerCase()
                      ? 'scale-110 ring-2 ring-offset-2 ring-blue-500'
                      : 'hover:scale-105'
                  }`}
                  title={theme.name[lang]}
                />
              ))}
              <input
                type="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
                title="Custom hex color"
              />
            </div>
            <p className="text-[11px] text-slate-400">
              {lang === 'zh'
                ? '* 此颜色将批量注入到所有通用网络设备中；公有云厂商官方图标将严格保持原厂官方色彩。'
                : '* Applied to all neutral devices; official vendor logos will preserve standard branding.'}
            </p>
          </div>

          {/* 3. Export Format */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              {lang === 'zh' ? '3. 导出文件格式' : '3. Export Formats'}
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: 'svg', label: '纯 SVG 矢量包' },
                { id: 'png', label: '高清 PNG (256px)' },
                { id: 'both', label: 'SVG + PNG 完整包' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFormat(f.id as any)}
                  className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
                    format === f.id
                      ? 'border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 font-bold'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
                  }`}
                >
                  {f.label}
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
              <span className="text-xs text-slate-500">
                {lang === 'zh'
                  ? `正在极速打包 (${progress.current} / ${progress.total})...`
                  : `Generating ZIP (${progress.current} / ${progress.total})...`}
              </span>
            </div>
          ) : (
            <button
              onClick={handleStartDownload}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>
                {lang === 'zh'
                  ? `一键生成并下载 ZIP (${exportList.length} 个图标)`
                  : `Download ZIP Archive (${exportList.length} icons)`}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
