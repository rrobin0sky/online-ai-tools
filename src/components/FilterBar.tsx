'use client';

import React, { useMemo, useRef, useEffect, useState } from 'react';
import { Search, X, ChevronDown, Check } from 'lucide-react';
import { CloudProvider, IconCategory, IconStyle } from '../types/icon';
import { PROVIDERS, CATEGORIES } from '../data/icons';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedStyle: IconStyle | 'all';
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
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isVendorOpen, setIsVendorOpen] = useState<boolean>(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);

  const vendorRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Global shortcut ⌘K or / to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === 'Escape') {
        setIsVendorOpen(false);
        setIsCategoryOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside listener for dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (vendorRef.current && !vendorRef.current.contains(e.target as Node)) {
        setIsVendorOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Available providers based on active style
  const availableProviders = useMemo(() => {
    if (selectedStyle === 'all') return PROVIDERS;
    return PROVIDERS.filter(
      (p) => !p.supportedStyles || p.supportedStyles.includes(selectedStyle)
    );
  }, [selectedStyle]);

  const currentProviderObj = PROVIDERS.find((p) => p.id === selectedProvider);
  const currentCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="w-full space-y-2">
      {/* Single-Row Unified Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
        {/* 1. Search Input (Flex 1) */}
        <div className="relative flex-1 min-w-[220px]">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-zinc-500">
            <Search className="w-4 h-4" />
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={
              lang === 'zh'
                ? '搜索设备、厂商、协议 (如: Cisco, 华为, VPC, 核心交换机)...'
                : 'Search equipment, vendor (e.g. Cisco, Huawei, VPC, Switch)...'
            }
            className="w-full pl-10 pr-12 py-2 sm:py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm font-medium transition-all shadow-2xs"
          />
          {searchQuery ? (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="px-1.5 py-0.5 rounded border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/80 text-[10px] font-mono font-semibold text-slate-400 dark:text-zinc-500">
                ⌘K
              </span>
            </div>
          )}
        </div>

        {/* 2. Vendor Dropdown Button */}
        <div className="relative" ref={vendorRef}>
          <button
            type="button"
            onClick={() => {
              setIsVendorOpen((prev) => !prev);
              setIsCategoryOpen(false);
            }}
            className={`w-full md:w-auto inline-flex items-center justify-between gap-1.5 px-3 py-2 sm:py-2.5 rounded-xl border text-xs font-bold transition-all ${
              selectedProvider !== 'all'
                ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-800'
                : 'bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800'
            }`}
          >
            <span className="text-slate-400 dark:text-zinc-500 font-normal">
              {lang === 'zh' ? '厂商:' : 'Vendor:'}
            </span>
            <span className="truncate max-w-[120px]">
              {selectedProvider === 'all'
                ? (lang === 'zh' ? '全部' : 'All')
                : currentProviderObj?.name[lang]}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isVendorOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Vendor Dropdown Menu */}
          {isVendorOpen && (
            <div className="absolute left-0 md:right-0 md:left-auto top-full mt-1.5 w-48 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100 max-h-64 overflow-y-auto">
              <button
                type="button"
                onClick={() => {
                  onProviderChange('all');
                  setIsVendorOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-left transition-colors ${
                  selectedProvider === 'all'
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
              >
                <span>{lang === 'zh' ? '全部厂商 / 生态' : 'All Vendors'}</span>
                {selectedProvider === 'all' && <Check className="w-3.5 h-3.5" />}
              </button>

              {availableProviders.map((p) => {
                const isSelected = selectedProvider === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      onProviderChange(p.id);
                      setIsVendorOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-left transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <span>{p.name[lang]}</span>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 3. Category Dropdown Button */}
        <div className="relative" ref={categoryRef}>
          <button
            type="button"
            onClick={() => {
              setIsCategoryOpen((prev) => !prev);
              setIsVendorOpen(false);
            }}
            className={`w-full md:w-auto inline-flex items-center justify-between gap-1.5 px-3 py-2 sm:py-2.5 rounded-xl border text-xs font-bold transition-all ${
              selectedCategory !== 'all'
                ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-800'
                : 'bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800'
            }`}
          >
            <span className="text-slate-400 dark:text-zinc-500 font-normal">
              {lang === 'zh' ? '分类:' : 'Category:'}
            </span>
            <span className="truncate max-w-[120px]">
              {selectedCategory === 'all'
                ? (lang === 'zh' ? '全部' : 'All')
                : currentCategoryObj?.name[lang]}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Category Dropdown Menu */}
          {isCategoryOpen && (
            <div className="absolute left-0 md:right-0 md:left-auto top-full mt-1.5 w-48 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100 max-h-64 overflow-y-auto">
              <button
                type="button"
                onClick={() => {
                  onCategoryChange('all');
                  setIsCategoryOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-left transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
              >
                <span>{lang === 'zh' ? '全部分类' : 'All Categories'}</span>
                {selectedCategory === 'all' && <Check className="w-3.5 h-3.5" />}
              </button>

              {CATEGORIES.map((c) => {
                const isSelected = selectedCategory === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      onCategoryChange(c.id);
                      setIsCategoryOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-left transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <span>{c.name[lang]}</span>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 4. Action Export Buttons (Draw.io & Batch Export) */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {onExportDrawio && (
            <button
              type="button"
              onClick={onExportDrawio}
              className="inline-flex items-center justify-center gap-1 px-2.5 py-2 sm:py-2.5 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 font-bold text-xs transition-all shadow-2xs"
              title={lang === 'zh' ? '下载当前配色 Draw.io 图库文件 (.xml)' : 'Export as Draw.io Stencil (.xml)'}
            >
              <span>📐</span>
              <span className="hidden sm:inline">{lang === 'zh' ? 'Draw.io' : 'Draw.io'}</span>
            </button>
          )}

          <button
            type="button"
            onClick={onOpenBatchExport}
            className="inline-flex items-center justify-center gap-1 px-2.5 py-2 sm:py-2.5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 font-bold text-xs transition-all shadow-2xs"
          >
            <span>📦</span>
            <span className="hidden sm:inline">{lang === 'zh' ? '导出' : 'Export'}</span>
          </button>
        </div>
      </div>

      {/* Lightweight Active Filters & Result Count Line */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400 px-0.5">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-800 dark:text-zinc-200">
            {lang === 'zh'
              ? `共展示 ${filteredCount} 款图标 (全库 ${totalCount} 款)`
              : `Showing ${filteredCount} of ${totalCount} icons`}
          </span>

          {/* Clear active filter tag if any filter is on */}
          {(selectedProvider !== 'all' || selectedCategory !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                onSearchChange('');
                onProviderChange('all');
                onCategoryChange('all');
              }}
              className="text-blue-600 dark:text-blue-400 hover:underline font-bold"
            >
              {lang === 'zh' ? '清空条件' : 'Clear filters'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
