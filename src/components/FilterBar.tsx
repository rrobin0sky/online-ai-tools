'use client';

import React, { useMemo } from 'react';
import { Search, X, Check } from 'lucide-react';
import { CloudProvider, IconCategory, IconStyle } from '../types/icon';
import { PROVIDERS, CATEGORIES, STYLES } from '../data/icons';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedStyle: IconStyle | 'all';
  onStyleChange: (style: IconStyle | 'all') => void;
  selectedProvider: CloudProvider | 'all';
  onProviderChange: (provider: CloudProvider | 'all') => void;
  selectedCategory: IconCategory | 'all';
  onCategoryChange: (category: IconCategory | 'all') => void;
  lang: 'en' | 'zh';
  totalCount: number;
  filteredCount: number;
  onOpenBatchExport: () => void;
  onExportDrawio?: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedStyle,
  onStyleChange,
  selectedProvider,
  onProviderChange,
  selectedCategory,
  onCategoryChange,
  lang,
  totalCount,
  filteredCount,
  onOpenBatchExport,
  onExportDrawio,
}) => {
  // Dynamically compute available providers based on selected style
  const availableProviders = useMemo(() => {
    if (selectedStyle === 'all') return PROVIDERS;
    return PROVIDERS.filter(
      (p) => !p.supportedStyles || p.supportedStyles.includes(selectedStyle)
    );
  }, [selectedStyle]);

  return (
    <div className="w-full space-y-4">
      {/* 1. Top Style Paradigm Selector (Tabs) */}
      <div className="flex items-center justify-center">
        <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-inner max-w-full overflow-x-auto scrollbar-none">
          <button
            onClick={() => {
              onStyleChange('all');
              onProviderChange('all');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all ${
              selectedStyle === 'all'
                ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {lang === 'zh' ? '全部风格' : 'All Styles'}
          </button>

          {STYLES.map((style) => {
            const isSelected = selectedStyle === style.id;
            return (
              <button
                key={style.id}
                onClick={() => {
                  onStyleChange(style.id);
                  // Reset provider if current provider is not supported in new style
                  const isSupported =
                    selectedProvider === 'all' ||
                    PROVIDERS.find((p) => p.id === selectedProvider)?.supportedStyles?.includes(style.id);
                  if (!isSupported) {
                    onProviderChange('all');
                  }
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {style.name[lang]}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Global Unified Search Input */}
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 dark:text-zinc-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={
            lang === 'zh'
              ? '搜索核心设备与厂商：Cisco、华为USG、核心交换机、VPC、S3、防火墙、K8s...'
              : 'Search devices & vendors: Cisco, Huawei USG, Core Switch, VPC, S3, Firewall, K8s...'
          }
          className="w-full pl-11 pr-10 py-3 rounded-2xl border border-slate-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-sm transition-all font-medium"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 3. Adaptive Vendor Filter Chips (Only show vendors matching active style) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none justify-start md:justify-center">
        <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider px-1">
          {lang === 'zh' ? '厂商/生态:' : 'Vendor:'}
        </span>
        <button
          onClick={() => onProviderChange('all')}
          className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${
            selectedProvider === 'all'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs'
              : 'bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800'
          }`}
        >
          {lang === 'zh' ? '全部' : 'All'}
        </button>

        {availableProviders.map((p) => {
          const isSelected = selectedProvider === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onProviderChange(p.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap border transition-all ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800'
              }`}
            >
              {p.name[lang]}
            </button>
          );
        })}
      </div>

      {/* 4. Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none justify-start md:justify-center text-xs">
        <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider px-1">
          {lang === 'zh' ? '分类:' : 'Category:'}
        </span>
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-2.5 py-1 rounded-lg font-bold whitespace-nowrap transition-colors ${
            selectedCategory === 'all'
              ? 'bg-slate-200 text-slate-900 dark:bg-zinc-800 dark:text-white'
              : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/60'
          }`}
        >
          {lang === 'zh' ? '全部' : 'All'}
        </button>

        {CATEGORIES.map((c) => {
          const isSelected = selectedCategory === c.id;
          return (
            <button
              key={c.id}
              onClick={() => onCategoryChange(c.id)}
              className={`px-2.5 py-1 rounded-lg font-bold whitespace-nowrap transition-colors ${
                isSelected
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 font-extrabold'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              {c.name[lang]}
            </button>
          );
        })}
      </div>

      {/* 5. Result stats and Export action bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 dark:text-zinc-400 px-1 pt-1 border-t border-slate-100 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900 dark:text-zinc-200">
            {lang === 'zh'
              ? `已展示 ${filteredCount} 个专业拓扑设备图标 (共 ${totalCount} 款)`
              : `Showing ${filteredCount} of ${totalCount} equipment icons`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onExportDrawio && (
            <button
              onClick={onExportDrawio}
              className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 font-bold text-xs transition-all shadow-xs"
              title={lang === 'zh' ? '下载当前配色 Draw.io 图库文件 (.xml)' : 'Export as Draw.io Stencil (.xml)'}
            >
              <span>📐</span>
              <span>{lang === 'zh' ? 'Draw.io 库' : 'Draw.io Stencil'}</span>
            </button>
          )}

          <button
            onClick={onOpenBatchExport}
            className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 font-bold text-xs transition-all shadow-xs"
          >
            <span>📦</span>
            <span>{lang === 'zh' ? '一键打包导出' : 'Batch Export'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
