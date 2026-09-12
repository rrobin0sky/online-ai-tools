'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FilterBar } from '../components/FilterBar';
import { IconCard } from '../components/IconCard';
import { IconModal } from '../components/IconModal';
import { BatchExportModal } from '../components/BatchExportModal';
import { FloatingHudToast, HudToastState } from '../components/FloatingHudToast';
import { AdSenseSlot } from '../components/AdSenseSlot';
import { ICONS, PROVIDERS, CATEGORIES } from '../data/icons';
import { IconMeta, CloudProvider, IconCategory } from '../types/icon';
import { downloadDrawioLibrary } from '../lib/drawio';
import { Sparkles, Layers, Download, CheckCircle2, Shield, BookOpen, FileCode2, Terminal } from 'lucide-react';

export default function HomePage() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProvider, setSelectedProvider] = useState<CloudProvider | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<IconCategory | 'all'>('all');
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
    downloadDrawioLibrary(filteredIcons, `ArchIcons-Drawio-Library.xml`, { lang });
    handleNotify(
      lang === 'zh' ? '✓ Draw.io 图库文件已生成下载' : '✓ Draw.io Library Exported',
      lang === 'zh'
        ? `已导出 ${filteredIcons.length} 个图标，可直接拖入 Draw.io 左侧图库`
        : `${filteredIcons.length} icons exported. Drag into Draw.io to use!`,
      'download'
    );
  };

  // Filter & search logic
  const filteredIcons = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return ICONS.filter((icon) => {
      // 1. Provider filter
      if (selectedProvider !== 'all' && icon.provider !== selectedProvider) {
        return false;
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

      // Match code (e.g. EC2, S3, LB, NGFW, TGW)
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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4 animate-in fade-in slide-in-from-top-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>
              {lang === 'zh'
                ? '专业架构师中立矢量图标库 & Draw.io 原生生态'
                : 'Vendor-Neutral Architecture Icons & Draw.io Stencils'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {lang === 'zh' ? (
              <>
                主流云厂商与<span className="text-blue-600 dark:text-blue-400">中立架构拓扑图标库</span>
              </>
            ) : (
              <>
                Cloud & Generic <span className="text-blue-600 dark:text-blue-400">Architecture Icons</span>
              </>
            )}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {lang === 'zh'
              ? '双色调高质感中立设备、Draw.io 图库导出、画布环境模拟、Mermaid/PlantUML 代码即图，专为网络工程师与解决方案专家打造。'
              : 'Dual-tone neutral devices, Draw.io stencils, canvas context simulator & Diagrams-as-Code.'}
          </p>
        </div>

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

        {/* Icons Grid */}
        {filteredIcons.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4">
            {filteredIcons.map((icon) => (
              <IconCard
                key={icon.id}
                icon={icon}
                lang={lang}
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
              {lang === 'zh' ? '未找到匹配的图标' : 'No matching icons found'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              {lang === 'zh'
                ? '尝试搜索更通用的关键词，如 "Spine", "TGW", "WAF", "S3", "防火墙", 或切换厂商。'
                : 'Try searching for general terms like "Spine", "TGW", "WAF", "S3", "Firewall", or reset filters.'}
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

        {/* Educational Content & Architecture Guidelines (Vital for Google AdSense Approval & SEO) */}
        <section className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {lang === 'zh'
                  ? '架构师拓扑图绘制实用指南 (Architecture Best Practices)'
                  : 'Architecture Diagram Best Practices & Draw.io Guide'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {/* 1. Draw.io Library Stencil */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                  <FileCode2 className="w-4 h-4 text-indigo-500" />
                  {lang === 'zh' ? '在 Draw.io 中永久常驻图库' : 'Permanent Draw.io Stencil Library'}
                </h3>
                <p>
                  {lang === 'zh'
                    ? '点击顶部工具栏的「Draw.io 库 (.xml)」按钮，将生成的 XML 文件下载到本地。在 Draw.io 中打开菜单「文件 -> 打开图库 -> 从设备」，选择该文件，全套中立设备即可永久常驻在你的 Draw.io 左侧栏！'
                    : 'Click "Draw.io Library (.xml)" on the toolbar to export the XML stencil. Then in Draw.io, navigate to "File -> Open Library from -> Device". All neutral icons will permanently stay in your sidebar!'}
                </p>
              </div>

              {/* 2. Direct Paste */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {lang === 'zh' ? '1-Click 粘贴进 Figma / PPT' : 'Paste into Figma & PPT'}
                </h3>
                <p>
                  {lang === 'zh'
                    ? '点击卡片底部的「SVG」按钮，矢量代码已存入剪贴板。在 Draw.io、Figma 或 PPT 中按下 Ctrl+V (Cmd+V)，图标即可作为高质量矢量图元无损粘贴，任意缩放不失真。点击「PNG」可直接贴入微信或文档。'
                    : 'Click the "SVG" button on any card to copy clean vector code. Then in Figma or PowerPoint, hit Ctrl+V (Cmd+V) to paste lossless vector graphics directly.'}
                </p>
              </div>

              {/* 3. Diagrams as Code */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-500" />
                  {lang === 'zh' ? 'Diagrams-as-Code (代码即图)' : 'Diagrams as Code Support'}
                </h3>
                <p>
                  {lang === 'zh'
                    ? '点击进入任意图标详情，在代码即图板块可一键复制 Mermaid.js、PlantUML 或 D2 拓扑声明语法，轻松在 Notion、Obsidian、GitHub README 或技术博客中用 Markdown 直接渲染架构拓扑。'
                    : 'Open any icon detail modal to grab one-click Mermaid.js, PlantUML or D2 topology snippets for seamless architecture drafting in Notion, Obsidian and GitHub Markdown.'}
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
        onNotify={handleNotify}
      />

      <Footer lang={lang} />
    </div>
  );
}
