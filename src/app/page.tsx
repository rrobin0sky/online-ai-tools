'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FilterBar } from '../components/FilterBar';
import { IconCard } from '../components/IconCard';
import { IconModal } from '../components/IconModal';
import { AdSenseSlot } from '../components/AdSenseSlot';
import { ICONS, PROVIDERS, CATEGORIES } from '../data/icons';
import { IconMeta, CloudProvider, IconCategory } from '../types/icon';
import { Sparkles, Layers, Download, CheckCircle2, Shield, Share2, BookOpen } from 'lucide-react';

export default function HomePage() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProvider, setSelectedProvider] = useState<CloudProvider | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<IconCategory | 'all'>('all');
  const [activeModalIcon, setActiveModalIcon] = useState<IconMeta | null>(null);

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

      // Match code (e.g. EC2, S3, LB)
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
    <div className="flex-1 flex flex-col bg-grid-pattern">
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
                ? '专为解决方案与网络架构师打造的在线图标库'
                : 'Free Vector Architecture & Topology Icons'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {lang === 'zh' ? (
              <>
                主流云厂商与<span className="text-blue-600 dark:text-blue-400">中立架构图标库</span>
              </>
            ) : (
              <>
                Cloud & Generic <span className="text-blue-600 dark:text-blue-400">Architecture Icons</span>
              </>
            )}
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === 'zh'
              ? '收录 AWS、Azure、阿里云、Kubernetes 及通用网络设备矢量图标。一键复制 SVG 源码直接粘贴进 Draw.io、Figma、PPT；独创跨云等价物映射，拓扑迁移一目了然。'
              : 'Official AWS, Azure, GCP, Alibaba Cloud, and vendor-neutral network topology symbols. 1-click copy clean SVG to Draw.io, Figma or PPT with cross-cloud equivalence mapping.'}
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
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30">
            <Layers className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
              {lang === 'zh' ? '未找到匹配的图标' : 'No matching icons found'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              {lang === 'zh'
                ? '尝试搜索更通用的关键词，如 "S3", "防火墙", "EC2", "LB", 或切换分类/厂商。'
                : 'Try searching for general terms like "S3", "firewall", "EC2", "LB", or reset filters.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedProvider('all');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              {lang === 'zh' ? '重置所有筛选' : 'Reset all filters'}
            </button>
          </div>
        )}

        {/* Educational Content & Architecture Guidelines (Vital for Google AdSense Approval & SEO) */}
        <section className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {lang === 'zh'
                  ? '架构师拓扑图绘制实用指南 (Best Practices)'
                  : 'Architecture Diagram Best Practices & Draw.io Guide'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
                <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {lang === 'zh' ? '如何直接粘贴进 Draw.io / Figma' : 'How to Paste into Draw.io & Figma'}
                </h3>
                <p>
                  {lang === 'zh'
                    ? '在本站点击任何图标卡片底部的「SVG」按钮，矢量代码已直接存入你的剪贴板。打开 Draw.io 或 Figma 画布，直接按下 Ctrl+V (或 Cmd+V)，图标即可作为高质量矢量图元无损粘贴，任意缩放不失真。'
                    : 'Click the "SVG" button on any card to copy clean vector code directly into your clipboard. Then switch to Draw.io, Figma or Lucidchart and hit Ctrl+V (Cmd+V) to paste lossless vector graphics directly.'}
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
                <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-500" />
                  {lang === 'zh' ? '通用中立图标的优势' : 'Why Use Vendor-Neutral Icons'}
                </h3>
                <p>
                  {lang === 'zh'
                    ? '企业实际网络通常由多家厂商（如思科、华为、F5、以及多家公有云）混合组成。使用本站提供的通用中立设备图标（路由器、交换机、防火墙、负载均衡），不仅可以随意在线自定义颜色，还能保证整个企业技术方案风格的庄重与统一。'
                    : 'Real-world enterprise architectures often span multiple hardware vendors and clouds. Neutral icons keep topology diagrams visually consistent and allow you to freely customize colors for logical zoning (DMZ, Internal, Transit VPC).'}
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
      />

      <Footer lang={lang} />
    </div>
  );
}
