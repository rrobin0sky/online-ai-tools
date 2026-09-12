'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, Star, Moon, Sun, Globe, ArrowLeft } from 'lucide-react';
import { PalettePopover } from './PalettePopover';
import { CATEGORIES } from '../data/icons';
import { IconCategory } from '../types/icon';

interface HeaderProps {
  lang: 'en' | 'zh';
  onToggleLang: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  selectedCategory?: IconCategory | 'all';
  onCategoryChange?: (category: IconCategory | 'all') => void;
  themeColor?: string;
  onThemeColorChange?: (color: string) => void;
  favoritesCount?: number;
  showOnlyFavorites?: boolean;
  onToggleShowOnlyFavorites?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  darkMode,
  onToggleDarkMode,
  searchQuery,
  onSearchChange,
  selectedCategory = 'all',
  onCategoryChange,
  themeColor = '#0284c7',
  onThemeColorChange,
  favoritesCount = 0,
  showOnlyFavorites = false,
  onToggleShowOnlyFavorites,
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Apple-style Keyboard Shortcut: ⌘K or / to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-[#09090b] border-b border-slate-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 sm:gap-4">
        {/* 1. Left: Pure Brand Logo (Removed "Diagram assets" tag) */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-black dark:bg-white flex items-center justify-center text-white dark:text-black transition-transform group-hover:scale-105 active:scale-95 shadow-xs">
            {/* Custom 30° Isometric Cube & Topology Node SVG */}
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 stroke-current"
            >
              <path
                d="M16 4L26 9.77V21.32L16 27.09L6 21.32V9.77L16 4Z"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M16 4V15.54M16 15.54L26 9.77M16 15.54L6 9.77M16 15.54V27.09"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle cx="16" cy="15.54" r="2.2" fill="currentColor" />
            </svg>
          </div>
          <div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
              ArchIcons
            </span>
          </div>
        </Link>

        {/* 2. Middle: Integrated Search Box with Category Dropdown & ⌘K shortcut */}
        {onSearchChange ? (
          <div className="flex-1 max-w-xl hidden md:flex items-center">
            <div className="relative flex items-center w-full rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/80 focus-within:border-slate-900 dark:focus-within:border-white focus-within:bg-white dark:focus-within:bg-zinc-900 transition-all">
              {/* Category Dropdown Select */}
              {onCategoryChange && (
                <select
                  value={selectedCategory}
                  onChange={(e) => onCategoryChange(e.target.value as IconCategory | 'all')}
                  className="h-9 pl-3 pr-2 rounded-l-xl text-xs font-semibold bg-transparent border-r border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 focus:outline-none cursor-pointer"
                >
                  <option value="all" className="dark:bg-zinc-900">
                    {lang === 'zh' ? '全部分类' : 'All Categories'}
                  </option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id} className="dark:bg-zinc-900">
                      {cat.name[lang]}
                    </option>
                  ))}
                </select>
              )}

              {/* Search Icon */}
              <div className="pl-3 pointer-events-none text-slate-400 dark:text-zinc-500">
                <Search className="w-4 h-4" />
              </div>

              {/* Search Input */}
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery || ''}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={
                  lang === 'zh'
                    ? '搜索核心交换机、防火墙、服务器、VPC...'
                    : 'Search Core Switch, Firewall, Server, VPC...'
                }
                className="w-full pl-2 pr-12 py-2 text-xs sm:text-sm bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none font-medium"
              />

              {/* Apple-style ⌘K badge or Clear button */}
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 p-0.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : (
                <span className="absolute right-2.5 px-1.5 py-0.5 rounded border border-slate-200 dark:border-zinc-700 text-[10px] font-mono font-semibold text-slate-400 dark:text-zinc-500 pointer-events-none">
                  ⌘K
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '返回图标库' : 'Back to Icons'}</span>
            </Link>
          </div>
        )}

        {/* 3. Right: 4 Utility Buttons (Palette, Lang, Dark/Light, Favorites) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Button 1: Palette Popover */}
          {onThemeColorChange && (
            <PalettePopover
              currentColor={themeColor}
              onColorChange={onThemeColorChange}
              lang={lang}
            />
          )}

          {/* Button 2: Language Switcher (中 / EN) */}
          <button
            type="button"
            onClick={onToggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-bold text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 active:scale-95 transition-all"
            title={lang === 'zh' ? '切换语言 (Switch to English)' : 'Switch Language (切换中文)'}
          >
            <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
            <span>{lang === 'zh' ? 'EN' : '中'}</span>
          </button>

          {/* Button 3: High-contrast Dark/Light Mode Switcher */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 active:scale-95 transition-all"
            title={darkMode ? (lang === 'zh' ? '切换为亮色模式' : 'Light Mode') : (lang === 'zh' ? '切换为暗色模式' : 'Dark Mode')}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Button 4: Favorites Filter Button */}
          {onToggleShowOnlyFavorites && (
            <button
              type="button"
              onClick={onToggleShowOnlyFavorites}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-bold active:scale-95 transition-all ${
                showOnlyFavorites
                  ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300'
                  : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800'
              }`}
              title={
                showOnlyFavorites
                  ? (lang === 'zh' ? '显示全部图标' : 'Show All')
                  : (lang === 'zh' ? '仅看已收藏图标' : 'Show Favorites Only')
              }
            >
              <Star
                className={`w-3.5 h-3.5 ${
                  showOnlyFavorites || favoritesCount > 0
                    ? 'fill-amber-400 text-amber-500'
                    : 'text-slate-400 dark:text-zinc-500'
                }`}
              />
              <span className="hidden sm:inline">
                {showOnlyFavorites ? (lang === 'zh' ? '收藏' : 'Saved') : (lang === 'zh' ? '收藏' : 'Stars')}
              </span>
              {favoritesCount > 0 && (
                <span className="text-[10px] px-1 py-0.2 rounded-full bg-amber-500 text-white font-mono">
                  {favoritesCount}
                </span>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Search Bar */}
      {onSearchChange && (
        <div className="md:hidden px-4 pb-3 pt-1">
          <div className="relative flex items-center w-full rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900">
            {onCategoryChange && (
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value as IconCategory | 'all')}
                className="h-8 pl-2 pr-1 rounded-l-xl text-xs font-semibold bg-transparent border-r border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 focus:outline-none"
              >
                <option value="all">{lang === 'zh' ? '全部' : 'All'}</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name[lang]}
                  </option>
                ))}
              </select>
            )}
            <input
              type="text"
              value={searchQuery || ''}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={lang === 'zh' ? '搜索网络拓扑与架构设备...' : 'Search topology devices...'}
              className="w-full pl-2 pr-8 py-1.5 text-xs bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2 p-0.5 text-slate-400"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
