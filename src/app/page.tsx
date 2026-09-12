'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { GlobalPaletteBar } from '../components/GlobalPaletteBar';
import { FilterBar } from '../components/FilterBar';
import { IconCard } from '../components/IconCard';
import { IconModal } from '../components/IconModal';
import { BatchExportModal } from '../components/BatchExportModal';
import { FloatingHudToast, HudToastState } from '../components/FloatingHudToast';
import { AdSenseSlot } from '../components/AdSenseSlot';
import { ICONS, PROVIDERS, CATEGORIES } from '../data/icons';
import { IconMeta, CloudProvider, IconCategory } from '../types/icon';
import { downloadDrawioLibrary } from '../lib/drawio';
import { Sparkles, Layers, Download, CheckCircle2, Shield, BookOpen, FileCode2, Terminal, Network } from 'lucide-react';

export default function HomePage() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProvider, setSelectedProvider] = useState<CloudProvider | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<IconCategory | 'all'>('all');
  const [themeColor, setThemeColor] = useState<string>('#0284c7');
  const [preserveAccents, setPreserveAccents] = useState<boolean>(true);
  const [activeModalIcon, setActiveModalIcon] = useState<IconMeta | null>(null);
  const [isBatchExportOpen, setIsBatchExportOpen] = useState<boolean>(false);
  const [hudToast, setHudToast] = useState<HudToastState | null>(null);

  // Initialize theme based on user preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
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

  const handleNotify = (
    title: string,
    subtitle?: string,
    type: 'copy' | 'download' | 'code' | 'success' = 'copy'
  ) => {
    setHudToast({ show: true, title, subtitle, type });
    setTimeout(() => {
      setHudToast((prev) => (prev?.title === title ? null : prev));
    }, 2400);
  };

  // Direct Draw.io stencil library export
  const handleExportDrawio = () => {
    downloadDrawioLibrary(filteredIcons, `ArchIcons-2.5D-Topology.xml`, {
      themeColor,
      preserveAccents,
      lang,
    });
    handleNotify(
      lang === 'zh' ? '✓ Draw.io 图库文件已生成下载' : '✓ Draw.io Library Exported',
      lang === 'zh'
        ? `已导出 ${filteredIcons.length} 个 2.5D 图标，可直接拖入 Draw.io 左侧图库`
        : `${filteredIcons.length} icons exported. Drag into Draw.io to use!`,
      'download'
    );
  };

  // Filter & search logic
  const filteredIcons = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return ICONS.filter((icon) => {
      // 1. Device scope filter
      if (selectedProvider !== 'all') {
        if (selectedProvider === 'physical' && icon.deviceType !== 'physical' && icon.provider !== 'physical') {
          return false;
        }
        if (selectedProvider === 'cloud' && icon.deviceType !== 'cloud' && icon.provider !== 'cloud') {
          return false;
        }
      }

      // 2. Category filter
      if (selectedCategory !== 'all' && icon.category !== selectedCategory) {
        return false;
      }

      // 3. Search query filter
      if (!query) return true;

      // Match name in en & zh
      const nameEn = icon.name.en.toLowerCase();
      const nameZh = icon.name.zh.toLowerCase();
      if (nameEn.includes(query) || nameZh.includes(query)) return true;

      // Match code (e.g. CORE-SW, NGFW, SLB, RDS)
      if (icon.code && icon.code.toLowerCase().includes(query)) return true;

      // Match tags
      const hasMatchingTag = icon.tags.some((tag) => tag.toLowerCase().includes(query));
      if (hasMatchingTag) return true;

      // Match ID
      if (icon.id.toLowerCase().includes(query)) return true;

      return false;
    });
  }, [searchQuery, selectedProvider, selectedCategory]);

  return (
    <div className="flex-1 flex flex-col bg-grid-pattern min-h-screen">
      {/* Floating Apple HUD Toast */}
      <FloatingHudToast toast={hudToast} />

      <Header
        lang={lang}
        onToggleLang={toggleLang}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4 animate-in fade-in slide-in-from-top-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>
              {lang === 'zh'
                ? '网络售前工程师专属 · 30° 等轴测 2.5D 拓扑图标库'
                : '30° Isometric 2.5D Network Topology Icons for Pre-Sales Engineers'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {lang === 'zh' ? (
              <>
                网络售前与架构师的<span className="text-blue-600 dark:text-blue-400">2.5D 拓扑设备库</span>
              </>
            ) : (
              <>
                Isometric 2.5D <span className="text-blue-600 dark:text-blue-400">Network Architecture Icons</span>
              </>
            )}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {lang === 'zh'
              ? '精选物理网络与云上最常用设备，全局等轴测调色板自动计算顶面高光与立体阴影，1-Click 原生矢量无损粘贴进 PPT / Word / Draw.io。'
              : 'Essential physical and cloud network equipment with live isometric shading engine. 1-click vector paste into PowerPoint, Word and Draw.io.'}
          </p>
        </div>

        {/* Global 2.5D Color & Isometric Shading Palette Bar */}
        <GlobalPaletteBar
          currentColor={themeColor}
          onColorChange={setThemeColor}
          preserveAccents={preserveAccents}
          onTogglePreserveAccents={setPreserveAccents}
          lang={lang}
          onOpenBatchExport={() => setIsBatchExportOpen(true)}
          onExportDrawio={handleExportDrawio}
        />

        {/* Search & Filter Toolbar */}
        <div className="mb-8">
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedProvider={selectedProvider}
            onProviderChange={setSelectedProvider}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            lang={lang}
            totalCount={ICONS.length}
            filteredCount={filteredIcons.length}
            onOpenBatchExport={() => setIsBatchExportOpen(true)}
            onExportDrawio={handleExportDrawio}
          />
        </div>

        {/* Google AdSense / Sponsor Slot */}
        <AdSenseSlot lang={lang} />

        {/* Icons Grid with live themed isometric shading */}
        {filteredIcons.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4">
            {filteredIcons.map((icon) => (
              <IconCard
                key={icon.id}
                icon={icon}
                lang={lang}
                themeColor={themeColor}
                preserveAccents={preserveAccents}
                onSelect={(selected) => setActiveModalIcon(selected)}
                onNotify={handleNotify}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30">
            <Layers className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              {lang === 'zh' ? '未找到匹配的拓扑设备' : 'No matching devices found'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              {lang === 'zh'
                ? '尝试搜索更通用的关键词，如 "核心交换机", "防火墙", "服务器", "VPC", "WAF", 或切换分类。'
                : 'Try searching for general terms like "Switch", "Firewall", "Server", "VPC", "WAF", or reset filters.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedProvider('all');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              {lang === 'zh' ? '重置所有筛选' : 'Reset all filters'}
            </button>
          </div>
        )}

        {/* Educational Content & Pre-sales Presentation Guide */}
        <section className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {lang === 'zh'
                  ? '网络售前工程师拓扑图实战指南 (Pre-sales Best Practices)'
                  : 'Pre-sales Network Topology & Presentation Best Practices'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {/* 1. Direct Paste to PPT */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {lang === 'zh' ? '1-Click 粘贴进 PowerPoint / Figma' : '1-Click Paste into PowerPoint'}
                </h3>
                <p>
                  {lang === 'zh'
                    ? '在任意设备卡片点击「SVG」按钮，矢量代码即存入剪贴板。在 PowerPoint、Figma 或 Draw.io 中直接按下 Ctrl+V (Cmd+V)，即可作为原生矢量图形粘贴，任意放大不模糊，支持在 PPT 中解散组合。点击「PNG」可直接贴入 Word 技术标书。'
                    : 'Click "SVG" on any card to copy clean vector code. In PowerPoint or Figma, press Ctrl+V (Cmd+V) to paste native lossless vector graphics directly.'}
                </p>
              </div>

              {/* 2. Global Palette */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  {lang === 'zh' ? '全局调色板自动光影计算' : 'Dynamic 2.5D Shading Engine'}
                </h3>
                <p>
                  {lang === 'zh'
                    ? '只需在上方调色板选择你的品牌或行业预设（如商务蓝、信创红、深空青），算法自动计算 30° 等轴测顶面高光、侧面基色与阴影暗面，告别传统拓扑图颜色拼凑、风格不搭的痛点。'
                    : 'Select a corporate preset or pick any custom color. The engine dynamically calculates 3D highlights and shadows for all 2.5D equipment simultaneously.'}
                </p>
              </div>

              {/* 3. Draw.io Stencil Library */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                  <FileCode2 className="w-4 h-4 text-indigo-500" />
                  {lang === 'zh' ? 'Draw.io 永久常驻图库' : 'Permanent Draw.io Stencils'}
                </h3>
                <p>
                  {lang === 'zh'
                    ? '点击右上角「Draw.io 库 (.xml)」按钮，将生成的图库文件下载到本地。在 Draw.io 中打开菜单「文件 -> 打开图库 -> 从设备」，整套 2.5D 设备即可永久常驻在你的 Draw.io 左侧栏随拖随用！'
                    : 'Download the customized Draw.io library XML, open Draw.io -> "File -> Open Library from -> Device". All 2.5D devices will stay permanently in your sidebar!'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal for detail view, color tuning and cross-cloud mapping */}
      <IconModal
        icon={activeModalIcon}
        lang={lang}
        themeColor={themeColor}
        preserveAccents={preserveAccents}
        onClose={() => setActiveModalIcon(null)}
        onSelectIcon={(icon) => setActiveModalIcon(icon)}
        onNotify={handleNotify}
      />

      {/* Modal for batch packaging and unified theme color export */}
      <BatchExportModal
        isOpen={isBatchExportOpen}
        onClose={() => setIsBatchExportOpen(false)}
        lang={lang}
        allIcons={ICONS}
        filteredIcons={filteredIcons}
        currentColor={themeColor}
        preserveAccents={preserveAccents}
        onNotify={handleNotify}
      />

      <Footer lang={lang} />
    </div>
  );
}
