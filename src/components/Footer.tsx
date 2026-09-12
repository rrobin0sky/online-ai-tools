import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'zh';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Purpose */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              ArchIcons Toolbox
            </h4>
            <p className="leading-relaxed">
              {lang === 'zh'
                ? '专为网络工程师、系统架构师和开发者打造的高清矢量架构拓扑图标库。支持一键复制 SVG、导出 PNG，以及多云服务跨平台等价对照。'
                : 'High-definition vector architecture icons for network engineers, cloud architects and developers. Instant SVG copy, PNG export, and cross-cloud equivalence mapping.'}
            </p>
          </div>

          {/* Quick Links & Legal */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">
              {lang === 'zh' ? '网站导航 & 合规条款' : 'Navigation & Compliance'}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {lang === 'zh' ? '关于我们与画图指引' : 'About & Diagram Guidelines'}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {lang === 'zh' ? '隐私政策 (Privacy Policy)' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {lang === 'zh' ? '服务条款 (Terms of Service)' : 'Terms of Service'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer (Critical for AdSense & Trademarks) */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">
              {lang === 'zh' ? '商标与版权声明 (Disclaimer)' : 'Trademark Disclaimer'}
            </h4>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px]">
              {lang === 'zh'
                ? '所有提及的云厂商名称与官方商标（包括 AWS、Microsoft Azure、Google Cloud、阿里云、Kubernetes 等）版权归各自所属公司所有。本站为中立辅助工具，仅用于架构拓扑学习与设计交流。'
                : 'All cloud provider trademarks, logos, and service icons (including AWS, Microsoft Azure, Google Cloud, Alibaba Cloud, Kubernetes) are properties of their respective trademark owners. This website is an independent reference tool for architecture diagrams.'}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} <span className="font-semibold text-slate-800 dark:text-slate-200">bin0sky.tech</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Built with precision for Cloud Architects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
