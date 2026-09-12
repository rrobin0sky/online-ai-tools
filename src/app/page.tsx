'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { IconCard } from '../components/IconCard';
import { IconModal } from '../components/IconModal';
import { FloatingHudToast, HudToastState } from '../components/FloatingHudToast';
import { AdSenseSlot } from '../components/AdSenseSlot';
import { ICONS } from '../data/icons';
import { IconMeta, IconCategory } from '../types/icon';
import { Layers, BookOpen, CheckCircle2, Sparkles, FileCode2, Star } from 'lucide-react';

export default function HomePage() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<IconCategory | 'all'>('all');
  const [themeColor, setThemeColor] = useState<string>('#0284c7');
  const [activeModalIcon, setActiveModalIcon] = useState<IconMeta | null>(null);
  const [hudToast, setHudToast] = useState<HudToastState | null>(null);

  // Favorites state with localStorage persistence
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState<boolean>(false);

  // Load theme & favorites on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      }

      try {
        const saved = localStorage.getItem('archicons_favorites');
        if (saved) {
          setFavorites(JSON.parse(saved));
        }
      } catch (err) {
        console.error('Failed to load favorites from localStorage', err);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  const handleToggleFavorite = (iconId: string) => {
    setFavorites((prev) => {
      let updated: string[];
      const isAdding = !prev.includes(iconId);
      if (isAdding) {
        updated = [...prev, iconId];
        handleNotify(
          lang === 'zh' ? '★ 已加入收藏' : '★ Added to Favorites',
          undefined,
          'success'
        );
      } else {
        updated = prev.filter((id) => id !== iconId);
        handleNotify(
          lang === 'zh' ? '☆ 已取消收藏' : '☆ Removed from Favorites',
          undefined,
          'copy'
        );
      }
      try {
        localStorage.setItem('archicons_favorites', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save favorites', e);
      }
      return updated;
    });
  };

  const handleNotify = (
    title: string,
    subtitle?: string,
    type: 'copy' | 'download' | 'code' | 'success' = 'copy'
  ) => {
    setHudToast({ show: true, title, subtitle, type });
    setTimeout(() => {
      setHudToast((prev) => (prev?.title === title ? null : prev));
    }, 2000);
  };

  // Filter & search logic
  const filteredIcons = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return ICONS.filter((icon) => {
      // 1. Favorite filter
      if (showOnlyFavorites && !favorites.includes(icon.id)) {
        return false;
      }

      // 2. Category filter
      if (selectedCategory !== 'all' && icon.category !== selectedCategory) {
        return false;
      }

      // 3. Search query filter
      if (!query) return true;

      const nameEn = icon.name.en.toLowerCase();
      const nameZh = icon.name.zh.toLowerCase();
      if (nameEn.includes(query) || nameZh.includes(query)) return true;

      if (icon.code && icon.code.toLowerCase().includes(query)) return true;

      const hasMatchingTag = icon.tags.some((tag) => tag.toLowerCase().includes(query));
      if (hasMatchingTag) return true;

      if (icon.id.toLowerCase().includes(query)) return true;

      return false;
    });
  }, [searchQuery, selectedCategory, showOnlyFavorites, favorites]);

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-[#09090b] min-h-screen text-slate-900 dark:text-white transition-colors">
      {/* Floating Apple HUD Toast Notification */}
      <FloatingHudToast toast={hudToast} />

      {/* Top Sticky Header with all search, filter, and utility buttons */}
      <Header
        lang={lang}
        onToggleLang={toggleLang}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        themeColor={themeColor}
        onThemeColorChange={setThemeColor}
        favoritesCount={favorites.length}
        showOnlyFavorites={showOnlyFavorites}
        onToggleShowOnlyFavorites={() => setShowOnlyFavorites((prev) => !prev)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        {/* Compact Status Bar: Count only */}
        <div className="flex items-center justify-between py-2 mb-4 border-b border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
          <div className="flex items-center gap-2 font-medium">
            <span>
              {showOnlyFavorites
                ? (lang === 'zh' ? `★ 已收藏 ${filteredIcons.length} 个设备图标` : `★ ${filteredIcons.length} Favorite Icons`)
                : (lang === 'zh' ? `共 ${filteredIcons.length} 款画图图标` : `${filteredIcons.length} Diagram Icons Available`)}
            </span>
            {(searchQuery || selectedCategory !== 'all' || showOnlyFavorites) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setShowOnlyFavorites(false);
                }}
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline ml-1"
              >
                {lang === 'zh' ? '清除筛选' : 'Clear filters'}
              </button>
            )}
          </div>
        </div>

        {/* Google AdSense / Sponsor Slot */}
        <AdSenseSlot lang={lang} />

        {/* Icons Grid */}
        {filteredIcons.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 mt-4">
            {filteredIcons.map((icon) => (
              <IconCard
                key={icon.id}
                icon={icon}
                lang={lang}
                themeColor={themeColor}
                preserveAccents={true}
                isFavorite={favorites.includes(icon.id)}
                onToggleFavorite={handleToggleFavorite}
                onSelect={(selected) => setActiveModalIcon(selected)}
                onNotify={handleNotify}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 px-4 rounded-2xl border border-dashed border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/30">
            {showOnlyFavorites ? (
              <>
                <Star className="w-12 h-12 text-slate-300 dark:text-zinc-600 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-slate-800 dark:text-zinc-200">
                  {lang === 'zh' ? '暂无收藏的图标' : 'No favorites saved yet'}
                </h3>
                <p className="text-xs text-slate-400 dark:text-zinc-500 mt-1 max-w-sm mx-auto">
                  {lang === 'zh'
                    ? '点击任意图标卡片右上角的星标（☆），即可收藏常用画图设备。'
                    : 'Click the star icon (☆) on any card to save frequently used equipment.'}
                </p>
                <button
                  onClick={() => setShowOnlyFavorites(false)}
                  className="mt-4 px-4 py-2 text-xs font-bold rounded-xl bg-black dark:bg-white text-white dark:text-black hover:opacity-90 active:scale-95 transition-all"
                >
                  {lang === 'zh' ? '查看全部图标' : 'Browse all icons'}
                </button>
              </>
            ) : (
              <>
                <Layers className="w-12 h-12 text-slate-300 dark:text-zinc-600 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-slate-800 dark:text-zinc-200">
                  {lang === 'zh' ? '未找到匹配的设备图标' : 'No matching devices found'}
                </h3>
                <p className="text-xs text-slate-400 dark:text-zinc-500 mt-1 max-w-sm mx-auto">
                  {lang === 'zh'
                    ? '尝试搜索核心交换机、防火墙、服务器、VPC 等关键词，或重置分类。'
                    : 'Try searching for Switch, Firewall, Server, VPC, or reset filters.'}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 px-4 py-2 text-xs font-bold rounded-xl bg-black dark:bg-white text-white dark:text-black hover:opacity-90 active:scale-95 transition-all"
                >
                  {lang === 'zh' ? '重置所有筛选' : 'Reset all filters'}
                </button>
              </>
            )}
          </div>
        )}

        {/* Educational Content & Usage Guide (Placed at the bottom) */}
        <section className="mt-20 pt-10 border-t border-slate-100 dark:border-zinc-800">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-4 h-4 text-slate-700 dark:text-zinc-300" />
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
                {lang === 'zh'
                  ? '架构与拓扑画图实战指引 (Diagram & Presentation Guide)'
                  : 'Diagramming & Presentation Guide'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              {/* 1. Direct Paste to PPT */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {lang === 'zh' ? '1-Click 粘贴进 PPT / Figma' : '1-Click Vector Paste'}
                </h3>
                <p>
                  {lang === 'zh'
                    ? '点击「SVG」按钮，矢量代码即存入剪贴板。在 PowerPoint、Figma 或 Draw.io 中按 Ctrl+V (Cmd+V) 即可作为原生矢量图形粘贴，任意放大不失真。点击「PNG」可直接贴入 Word 或微信。'
                    : 'Click "SVG" on any card to copy clean vector code. In PowerPoint or Figma, press Ctrl+V (Cmd+V) to paste native lossless vector graphics.'}
                </p>
              </div>

              {/* 2. Global Palette */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  {lang === 'zh' ? '全局光影调色引擎' : 'Live Isometric Shading'}
                </h3>
                <p>
                  {lang === 'zh'
                    ? '在顶部调色板选择你的品牌预设或任意 Hex 色彩，算法自动计算 30° 顶面高光、侧面基色与立体阴影，保持整套图纸风格与颜色绝对统一。'
                    : 'Select a preset or custom hex in the top palette. The engine auto-computes highlights and 3D shadows for all equipment simultaneously.'}
                </p>
              </div>

              {/* 3. Direct Draw.io Paste */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5 flex items-center gap-1.5">
                  <FileCode2 className="w-4 h-4 text-indigo-500" />
                  {lang === 'zh' ? '原生支持 Draw.io 矢量编辑' : 'Native Draw.io Vector'}
                </h3>
                <p>
                  {lang === 'zh'
                    ? '在任意设备卡片点击「SVG」后，直接在 Draw.io 画板按下 Cmd+V / Ctrl+V，矢量图元立即呈现，支持无限缩放、无损旋转与解散编组。'
                    : 'Click "SVG" on any device card and press Cmd+V directly in Draw.io. The vector graphic will appear instantly.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Apple-style Focused Modal for detail view */}
      <IconModal
        icon={activeModalIcon}
        lang={lang}
        themeColor={themeColor}
        preserveAccents={true}
        onClose={() => setActiveModalIcon(null)}
        onNotify={handleNotify}
      />

      <Footer lang={lang} />
    </div>
  );
}
