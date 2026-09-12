'use client';

import React from 'react';
import Link from 'next/link';
import { Layers, Globe, Github, Moon, Sun, Sparkles } from 'lucide-react';

interface HeaderProps {
  lang: 'en' | 'zh';
  onToggleLang: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  darkMode,
  onToggleDarkMode,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                ArchIcons
              </span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium">
                Toolbox
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
              {lang === 'zh' ? '多云与通用架构拓扑图标库' : 'Cloud & Generic Topology Icons'}
            </p>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="/" className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            {lang === 'zh' ? '图标库' : 'Icon Library'}
          </Link>
          <Link href="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            {lang === 'zh' ? '使用指南 & 关于' : 'Guide & About'}
          </Link>
          <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            {lang === 'zh' ? '隐私政策' : 'Privacy'}
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-blue-500" />
            <span>{lang === 'zh' ? 'English' : '中文'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Domain / GitHub Link */}
          <a
            href="https://tools.bin0sky.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span>tools.bin0sky.tech</span>
          </a>
        </div>
      </div>
    </header>
  );
};
