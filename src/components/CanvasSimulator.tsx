'use client';

import React, { useState } from 'react';
import { Layers, Grid, Moon, Sun, Compass } from 'lucide-react';

export type CanvasTheme = 'white' | 'gray' | 'blueprint' | 'dark' | 'dotgrid';

interface CanvasSimulatorProps {
  svgContent: string;
  lang: 'zh' | 'en';
  activeColor?: string;
  isTintable?: boolean;
}

const CANVAS_PRESETS: {
  id: CanvasTheme;
  name: { zh: string; en: string };
  bgClass: string;
  textClass: string;
  borderClass: string;
  isDark: boolean;
}[] = [
  {
    id: 'white',
    name: { zh: 'PPT / 白底', en: 'PPT / White' },
    bgClass: 'bg-white',
    textClass: 'text-slate-800',
    borderClass: 'border-slate-200',
    isDark: false,
  },
  {
    id: 'gray',
    name: { zh: 'Draw.io 浅灰', en: 'Draw.io Gray' },
    bgClass: 'bg-slate-100/90',
    textClass: 'text-slate-800',
    borderClass: 'border-slate-300',
    isDark: false,
  },
  {
    id: 'blueprint',
    name: { zh: '工程蓝图底', en: 'Blueprint Navy' },
    bgClass: 'bg-[#0a192f] bg-blueprint-pattern',
    textClass: 'text-sky-200',
    borderClass: 'border-blue-900/60',
    isDark: true,
  },
  {
    id: 'dark',
    name: { zh: '运维暗黑底', en: 'Dark Ops' },
    bgClass: 'bg-[#0f172a]',
    textClass: 'text-slate-200',
    borderClass: 'border-slate-800',
    isDark: true,
  },
  {
    id: 'dotgrid',
    name: { zh: '点阵工程纸', en: 'Dot Grid Paper' },
    bgClass: 'bg-slate-50 bg-dot-pattern',
    textClass: 'text-slate-800',
    borderClass: 'border-slate-300',
    isDark: false,
  },
];

export const CanvasSimulator: React.FC<CanvasSimulatorProps> = ({
  svgContent,
  lang,
  activeColor,
  isTintable,
}) => {
  const [selectedTheme, setSelectedTheme] = useState<CanvasTheme>('blueprint');

  const currentPreset = CANVAS_PRESETS.find((p) => p.id === selectedTheme) || CANVAS_PRESETS[2];

  // Adjust color for dark backgrounds if necessary for extreme contrast
  const effectiveColor = activeColor || '#0ea5e9';

  return (
    <div className="w-full space-y-2.5">
      {/* Simulator Toolbar */}
      <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
        <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-blue-500" />
          {lang === 'zh' ? '架构师画布实时模拟器' : 'Canvas Context Simulator'}
        </span>

        {/* Theme Pills */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700/60">
          {CANVAS_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setSelectedTheme(preset.id)}
              className={`px-2.5 py-1 rounded-lg font-medium text-[11px] transition-all ${
                selectedTheme === preset.id
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {preset.name[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Simulated Canvas Viewport */}
      <div
        className={`relative h-44 sm:h-48 w-full rounded-2xl border ${currentPreset.borderClass} ${currentPreset.bgClass} flex flex-col items-center justify-center p-4 transition-all duration-300 overflow-hidden shadow-inner`}
      >
        {/* Subtle watermark grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center">
          <div className="w-full h-full border border-dashed border-current opacity-20" />
        </div>

        {/* Icon Preview */}
        <div
          className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center drop-shadow-md transition-transform duration-200 hover:scale-105"
          style={isTintable ? { color: effectiveColor } : undefined}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />

        {/* Bottom context label */}
        <div className="absolute bottom-2.5 inset-x-0 text-center pointer-events-none">
          <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full ${
            currentPreset.isDark ? 'bg-black/40 text-slate-300' : 'bg-white/80 text-slate-600'
          } border border-current/10 backdrop-blur-xs`}>
            {lang === 'zh'
              ? `在「${currentPreset.name.zh}」拓扑图上的实际呈现效果`
              : `Rendering on ${currentPreset.name.en} Canvas`}
          </span>
        </div>
      </div>
    </div>
  );
};
