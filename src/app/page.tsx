'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { IconCard } from '../components/IconCard';
import { IconModal } from '../components/IconModal';
import { FilterBar } from '../components/FilterBar';
import { BatchExportModal } from '../components/BatchExportModal';
import { FloatingHudToast, HudToastState } from '../components/FloatingHudToast';
import { AdSenseSlot } from '../components/AdSenseSlot';
import { ICONS, PROVIDERS } from '../data/icons';
import { IconMeta, IconCategory, IconStyle, CloudProvider } from '../types/icon';
import { Layers, BookOpen, CheckCircle2, Sparkles, FileCode2, Star } from 'lucide-react';
import { downloadDrawioLibrary } from '../lib/drawio';

export default function HomePage() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<IconStyle | 'all'>('all');
  const [selectedProvider, setSelectedProvider] = useState<CloudProvider | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<IconCategory | 'all'>('all');
  const [themeColor, setThemeColor] = useState<string>('#0284c7');
  const [activeModalIcon, setActiveModalIcon] = useState<IconMeta | null>(null);
  const [hudToast, setHudToast] = useState<HudToastState | null>(null);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState<boolean>(false);

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

  // Draw.io export handler
  const handleExportDrawio = () => {
    try {
      downloadDrawioLibrary(ICONS, 'ArchIcons-Library.xml', {
        themeColor,
        lang,
      });
      handleNotify(
        lang === 'zh' ? '✓ Draw.io 库已导出' : '✓ Draw.io Stencil Exported',
        lang === 'zh' ? '拖入 draw.io 即可使用' : 'Drag into Draw.io to use',
        'download'
      );
    } catch (e) {
      console.error(e);
    }
  };

  // Filter & search logic
  const filteredIcons = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return ICONS.filter((icon) => {
      // 1. Favorite filter
      if (showOnlyFavorites && !favorites.includes(icon.id)) {
        return false;
      }

      // 2. Style filter
      if (selectedStyle !== 'all') {
        const itemStyle = icon.style || 'isometric';
        if (itemStyle !== selectedStyle) return false;
      }

      // 3. Provider/Vendor filter
      if (selectedProvider !== 'all') {
        if (icon.provider !== selectedProvider) return false;
      }

      // 4. Category filter
      if (selectedCategory !== 'all' && icon.category !== selectedCategory) {
        return false;
      }

      // 5. Search query filter
      if (!query) return true;

      const nameEn = icon.name.en.toLowerCase();
      const nameZh = icon.name.zh.toLowerCase();
      if (nameEn.includes(query) || nameZh.includes(query)) return true;

      if (icon.code && icon.code.toLowerCase().includes(query)) return true;

      const hasMatchingTag = icon.tags.some((tag) => tag.toLowerCase().includes(query));
      if (hasMatchingTag) return true;

      const providerObj = PROVIDERS.find((p) => p.id === icon.provider);
      if (providerObj) {
        if (
          providerObj.name.zh.toLowerCase().includes(query) ||
          providerObj.name.en.toLowerCase().includes(query)
        ) {
          return true;
        }
      }

      if (icon.id.toLowerCase().includes(query)) return true;

      return false;
    });
  }, [searchQuery, selectedStyle, selectedProvider, selectedCategory, showOnlyFavorites, favorites]);

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-[#09090b] min-h-screen text-slate-900 dark:text-white transition-colors">
      {/* Floating Apple HUD Toast Notification */}
      <FloatingHudToast toast={hudToast} />

      {/* Top Sticky Header with search, dark mode, language and favorites */}
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

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {/* Main Filter & Scope Controls */}
        <div className="mb-6">
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedStyle={selectedStyle}
            onStyleChange={setSelectedStyle}
            selectedProvider={selectedProvider}
            onProviderChange={setSelectedProvider}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            lang={lang}
            totalCount={ICONS.length}
            filteredCount={filteredIcons.length}
            onOpenBatchExport={() => setIsBatchModalOpen(true)}
            onExportDrawio={handleExportDrawio}
          />
        </div>

        {/* Reset filter button if filtered */}
        {(searchQuery || selectedStyle !== 'all' || selectedProvider !== 'all' || selectedCategory !== 'all' || showOnlyFavorites) && (
          <div className="flex items-center justify-between py-1 mb-3 text-xs text-slate-500 dark:text-zinc-400">
            <span>
              {showOnlyFavorites
                ? (lang === 'zh' ? `★ 正在展示 ${filteredIcons.length} 款已收藏设备` : `★ Showing ${filteredIcons.length} Favorites`)
                : (lang === 'zh' ? `当前筛选结果：${filteredIcons.length} 款设备` : `Filtered: ${filteredIcons.length} icons`)}
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedStyle('all');
                setSelectedProvider('all');
                setSelectedCategory('all');
                setShowOnlyFavorites(false);
              }}
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              {lang === 'zh' ? '重置所有筛选' : 'Clear all filters'}
            </button>
          </div>
        )}

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
                onSwitchIcon={(newIcon) => setActiveModalIcon(newIcon)}
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
                    ? '尝试调整风格模式，或搜索核心交换机、Cisco、华为、VPC 等关键词。'
                    : 'Try changing style mode, or searching for Cisco, Huawei, Switch, VPC, etc.'}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedStyle('all');
                    setSelectedProvider('all');
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

        {/* Educational Content & Usage Guide */}
        <section className="mt-20 pt-10 border-t border-slate-100 dark:border-zinc-800">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                {lang === 'zh'
                  ? '网络拓扑与架构图设计全景指南'
                  : 'Architecture & Network Topology Design Guide'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>{lang === 'zh' ? '💎 2.5D 等轴测 (售前方案)' : '💎 2.5D Isometric'}</span>
                </div>
                <p className="leading-relaxed">
                  {lang === 'zh'
                    ? '统一 30° 立体机架视角，具有极强的空间视觉冲击力。专为售前技术标书、方案建议书（RFP）、高管汇报演示 PPT 打造。'
                    : 'Unified 30-degree isometric projection designed for executive PPT presentations and technical tenders.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <FileCode2 className="w-4 h-4 text-blue-500" />
                  <span>{lang === 'zh' ? '📐 2D 逻辑拓扑 (L2/L3规划)' : '📐 2D Modern Flat'}</span>
                </div>
                <p className="leading-relaxed">
                  {lang === 'zh'
                    ? '规范的现代扁平 2D 矢量标准（涵盖 Cisco CCIE 与华为标准规范）。适合大型复杂网络规划、路由协议走向与链路分析。'
                    : 'Industry standard 2D flat vector icons for L2/L3 topology designs, protocol flows, and clean routing maps.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>{lang === 'zh' ? '☁️ 云服务架构 (公有云/云原生)' : '☁️ Cloud Architecture'}</span>
                </div>
                <p className="leading-relaxed">
                  {lang === 'zh'
                    ? '公有云与云原生架构标准组件（AWS、阿里云、Kubernetes 等），强调数据流与服务拓扑，完美支持混合云场景。'
                    : 'Standard cloud service icons for AWS, Alibaba Cloud, and Kubernetes hybrid infrastructure designs.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Detail Modal */}
      <IconModal
        icon={activeModalIcon}
        lang={lang}
        themeColor={themeColor}
        preserveAccents={true}
        onClose={() => setActiveModalIcon(null)}
        onSelectIcon={(newIcon) => setActiveModalIcon(newIcon)}
        onNotify={handleNotify}
      />

      {/* Batch Export Modal */}
      <BatchExportModal
        isOpen={isBatchModalOpen}
        onClose={() => setIsBatchModalOpen(false)}
        lang={lang}
        allIcons={ICONS}
        filteredIcons={filteredIcons}
        currentColor={themeColor}
        onNotify={handleNotify}
      />

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
