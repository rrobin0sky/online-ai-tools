'use client';

import React from 'react';

interface AdSenseSlotProps {
  slotId?: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
  className?: string;
  lang?: 'en' | 'zh';
}

export const AdSenseSlot: React.FC<AdSenseSlotProps> = ({
  slotId = 'demo-slot',
  format = 'auto',
  className = '',
  lang = 'zh',
}) => {
  return (
    <div
      className={`w-full overflow-hidden my-6 p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col items-center justify-center text-center transition-all ${className}`}
    >
      <div className="text-[11px] font-medium tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-1">
        {lang === 'zh' ? '赞助商与推荐' : 'Sponsor & Advertisement'}
      </div>
      <div className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
        {/* Placeholder for Google AdSense <ins class="adsbygoogle" ...> */}
        <p>
          {lang === 'zh'
            ? '此处为 Google 广告 / 合作推广预留位。页面加载完成后自动填充高质量赞助内容。'
            : 'Reserved slot for Google AdSense / Sponsor Ads. High quality tech-related offers will render here.'}
        </p>
      </div>
    </div>
  );
};
