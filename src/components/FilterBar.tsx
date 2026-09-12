'use client';

import React from 'react';
import { Search, X, Filter } from 'lucide-react';
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
}) => {
  return (
    <div className="w-full space-y-4">
      {/* Search Input Bar */}
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={
            lang === 'zh'
              ? '实时毫秒搜索：输入服务名/拼音/缩写（如 S3, EC2, 防火墙, Router, LB, 数据库）...'
              : 'Instant search: service name, acronym, category (e.g. S3, EC2, Firewall, Router, LB, Cache)...'
          }
          className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-sm sm:text-base backdrop-blur-md transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Provider Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none justify-start md:justify-center">
        <button
          onClick={() => onProviderChange('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            selectedProvider === 'all'
              ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
              : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          {lang === 'zh' ? '全部厂商' : 'All Providers'} ({totalCount})
        </button>

        {PROVIDERS.map((p) => {
          const isSelected = selectedProvider === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onProviderChange(p.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all ${
                isSelected
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm'
                  : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
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
          className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
            selectedCategory === 'all'
              ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
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
              className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
                isSelected
                  ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {c.name[lang]}
            </button>
          );
        })}
      </div>

      {/* Result stats */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 pt-1">
        <span>
          {lang === 'zh'
            ? `共匹配到 ${filteredCount} 个架构图标`
            : `Showing ${filteredCount} of ${totalCount} architecture icons`}
        </span>
        <span className="text-[11px] text-slate-400">
          {lang === 'zh' ? '提示：点击卡片可查看跨云等价物与换色' : 'Tip: Click any icon for cross-cloud mapping'}
        </span>
      </div>
    </div>
  );
};
