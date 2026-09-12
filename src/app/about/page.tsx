'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ArrowLeft, CheckCircle, ShieldCheck, Mail, Globe, Layers } from 'lucide-react';

export default function AboutPage() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex-1 flex flex-col bg-grid-pattern min-h-screen">
      <Header
        lang={lang}
        onToggleLang={() => setLang(lang === 'zh' ? 'en' : 'zh')}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'zh' ? '返回图标库' : 'Back to Icons Library'}
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          {lang === 'zh' ? '关于 ArchIcons 工具箱' : 'About ArchIcons Toolbox'}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
          {lang === 'zh'
            ? 'ArchIcons 是由独立云架构师与开源爱好者维护的高质量架构矢量图标库与设计辅助工具箱。'
            : 'ArchIcons is a free, high-performance architecture icon directory and toolset built for software engineers, cloud architects, and sysadmins.'}
        </p>

        <div className="space-y-8 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          <section className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-500" />
              {lang === 'zh' ? '我们的初衷 (Our Mission)' : 'Our Mission'}
            </h2>
            <p>
              {lang === 'zh'
                ? '在绘制企业级系统拓扑图、技术方案 PPT 或架构白皮书时，架构师经常面临官方图标搜集繁琐、格式混乱（低清 PNG、未清洗 SVG）、缺乏统一中立设备符号、多云服务对应困难等痛点。ArchIcons 旨在提供最干净、轻量、无需登录即可一键取用的架构矢量图标方案。'
                : 'Designing high-quality system architecture diagrams often requires searching scattered official portals, dealing with poorly formatted assets, and struggling to find consistent vendor-neutral icons. ArchIcons bridges this gap with an ultra-fast, clean, and 100% free vector repository.'}
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              {lang === 'zh' ? '三大核心特色' : 'Core Features'}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <span>
                  <strong>{lang === 'zh' ? '一键复制 SVG 源码：' : '1-Click SVG Copy: '}</strong>
                  {lang === 'zh'
                    ? '无需保存文件到磁盘，点击直接复制代码，Ctrl+V 粘贴进 Draw.io、Figma、Excalidraw。'
                    : 'No tedious file downloads needed. Copy clean SVG code with a single click and paste directly into diagram tools.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <span>
                  <strong>{lang === 'zh' ? '独创跨云等价物映射：' : 'Cross-Cloud Equivalence: '}</strong>
                  {lang === 'zh'
                    ? '比如查看 AWS S3 时，自动为您推荐 Azure Blob、阿里云 OSS 及通用对象存储，多云方案设计更游刃有余。'
                    : 'Instantly view counterpart services across AWS, Azure, GCP, and Alibaba Cloud for smooth multi-cloud migration diagrams.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <span>
                  <strong>{lang === 'zh' ? '中立设备自由换色：' : 'Customizable Neutral Palette: '}</strong>
                  {lang === 'zh'
                    ? '通用路由器、交换机、防火墙支持在线实时改色与按需尺寸导出 PNG。'
                    : 'Customize colors on generic network symbols and export high-resolution PNGs tailored to your diagram style.'}
                </span>
              </li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-500" />
              {lang === 'zh' ? '联系我们与建议' : 'Contact & Suggestions'}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {lang === 'zh'
                ? '若您希望增加特定云厂商的最新服务图标，或对网站工具有任何优化建议，欢迎访问 bin0sky.tech 或通过邮件与我们交流。'
                : 'Have questions, feedback, or icon requests? Reach out to us via bin0sky.tech.'}
            </p>
          </section>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
