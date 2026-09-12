'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import { CloudProvider, IconCategory } from '../types/icon';
import { PROVIDERS, CATEGORIES } from '../data/icons';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
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
  return (
    <div className="w-full space-y-4">
      {/* Search Input Bar */}
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 dark:text-slate-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={
            lang === 'zh'
              ? '搜索常用设备：核心交换机、防火墙、服务器、VPC、S3、WAF、堡垒机、AP...'
              : 'Search 2.5D devices: Core Switch, NGFW, Server, VPC, S3, WAF, Bastion, AP...'
          }
          className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-sm sm:text-base transition-all font-medium"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Main Scope Filter Tabs (All / Physical / Cloud) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none justify-start md:justify-center">
        <button
          onClick={() => onProviderChange('all')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all border ${
            selectedProvider === 'all'
              ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
              : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400'
          }`}
        >
          {lang === 'zh' ? '全部 2.5D 设备' : 'All 2.5D Icons'} ({totalCount})
        </button>

        {PROVIDERS.filter((p) => p.id === 'physical' || p.id === 'cloud').map((p) => {
          const isSelected = selectedProvider === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onProviderChange(p.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap border transition-all ${
                isSelected
                  ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white border-slate-900 dark:border-blue-600 shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400'
              }`}
            >
              {p.name[lang]}
            </button>
          );
        })}
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center text-xs">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-3 py-1 rounded-lg font-bold whitespace-nowrap transition-colors ${
            selectedCategory === 'all'
              ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
              : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-800'
          }`}
        >
          {lang === 'zh' ? '全部分类' : 'All Categories'}
        </button>

        {CATEGORIES.map((c) => {
          const isSelected = selectedCategory === c.id;
          return (
            <button
              key={c.id}
              onClick={() => onCategoryChange(c.id)}
              className={`px-3 py-1 rounded-lg font-bold whitespace-nowrap transition-colors ${
                isSelected
                  ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-800'
              }`}
            >
              {c.name[lang]}
            </button>
          );
        })}
      </div>

      {/* Result stats and Action bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-300 px-1 pt-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-900 dark:text-slate-100">
            {lang === 'zh'
              ? `已展示 ${filteredCount} 个常用拓扑设备图标`
              : `Showing ${filteredCount} 2.5D equipment icons`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onExportDrawio && (
            <button
              onClick={onExportDrawio}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl border border-indigo-300 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 font-bold text-xs transition-all shadow-xs"
              title={lang === 'zh' ? '下载当前配色 Draw.io 图库文件 (.xml)' : 'Export as Draw.io Stencil (.xml)'}
            >
              <span>📐</span>
              <span>{lang === 'zh' ? 'Draw.io 库 (.xml)' : 'Draw.io Library'}</span>
            </button>
          )}

          <button
            onClick={onOpenBatchExport}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl border border-blue-300 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/80 font-bold text-xs transition-all shadow-xs"
          >
            <span>📦</span>
            <span>{lang === 'zh' ? '一键打包导出' : 'Batch Export'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
