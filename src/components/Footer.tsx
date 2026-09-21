import React from 'react';
import Link from 'next/link';

interface FooterProps {
  lang: 'en' | 'zh';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 text-slate-500 dark:text-zinc-500 text-xs py-6 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Copyright & Legal Navigation Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-slate-600 dark:text-zinc-400 font-medium">
          <span>&copy; {new Date().getFullYear()} bin0sky.tech</span>
          <span className="text-slate-300 dark:text-zinc-700">·</span>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {lang === 'zh' ? '关于与设计指南' : 'About & Guidelines'}
          </Link>
          <span className="text-slate-300 dark:text-zinc-700">·</span>
          <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {lang === 'zh' ? '隐私政策' : 'Privacy'}
          </Link>
          <span className="text-slate-300 dark:text-zinc-700">·</span>
          <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {lang === 'zh' ? '服务条款' : 'Terms'}
          </Link>
        </div>

        {/* Right: Essential Lightweight Trademark Disclaimer (Protects against infringement & fits AdSense) */}
        <div className="text-[11px] text-slate-400 dark:text-zinc-500 text-center md:text-right max-w-xl">
          {lang === 'zh'
            ? '声明：本站为中立架构图辅助工具。Cisco、Huawei、AWS、Azure、Aliyun 等商标与官方标识版权归原厂商所有。'
            : 'Disclaimer: Independent tool. Cisco, Huawei, AWS, Azure, and other trademarks belong to their respective owners.'}
        </div>
      </div>
    </footer>
  );
};
