'use client';

import React, { useRef } from 'react';
import { Palette, Check, Sparkles, Sliders, Layers, Download } from 'lucide-react';
import { PRESET_THEMES, generateIsometricShades } from '../lib/colorEngine';

interface GlobalPaletteBarProps {
  currentColor: string;
  onColorChange: (color: string) => void;
  preserveAccents: boolean;
  onTogglePreserveAccents: (preserve: boolean) => void;
  lang: 'en' | 'zh';
  onOpenBatchExport?: () => void;
  onExportDrawio?: () => void;
}

export const GlobalPaletteBar: React.FC<GlobalPaletteBarProps> = ({
  currentColor,
  onColorChange,
  preserveAccents,
  onTogglePreserveAccents,
  lang,
  onOpenBatchExport,
  onExportDrawio,
}) => {
  const colorInputRef = useRef<HTMLInputElement>(null);
  const shades = generateIsometricShades(currentColor, preserveAccents);

  return (
    <div className="w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-lg shadow-blue-500/5 mb-8 transition-all">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left: Title & Presets */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-xs">
              <Palette className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                  {lang === 'zh' ? '全局等轴测调色板' : 'Global 2.5D Palette'}
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">
                  {lang === 'zh' ? '实时同构' : 'Live Sync'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                {lang === 'zh' ? '自动计算 30° 等轴测顶面高光、侧面基色与立体阴影' : 'Auto-computes top highlight, side face & shadow'}
              </p>
            </div>
          </div>

          {/* Color Preset Pills */}
          <div className="flex items-center gap-1.5 flex-wrap sm:ml-2">
            {PRESET_THEMES.map((preset) => {
              const isSelected = currentColor.toLowerCase() === preset.color.toLowerCase();
              return (
                <button
                  key={preset.id}
                  onClick={() => onColorChange(preset.color)}
                  className={`group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                    isSelected
                      ? 'border-slate-900 dark:border-white bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                      : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                  title={preset.description[lang]}
                >
                  <span
                    className="w-3 h-3 rounded-full border border-white/40 shadow-xs flex items-center justify-center"
                    style={{ backgroundColor: preset.color }}
                  >
                    {isSelected && <Check className="w-2 h-2 text-white drop-shadow-xs" />}
                  </span>
                  <span>{preset.name[lang]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Custom Color Picker & Accent Toggle & Action Buttons */}
        <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-800 flex-wrap">
          {/* Custom Hex Picker */}
          <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/80 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
            <input
              ref={colorInputRef}
              type="color"
              value={currentColor}
              onChange={(e) => onColorChange(e.target.value)}
              className="w-6 h-6 rounded-lg cursor-pointer border-0 p-0 bg-transparent"
              title={lang === 'zh' ? '自定义颜色' : 'Custom color'}
            />
            <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-200 uppercase">
              {currentColor}
            </span>
          </div>

          {/* Semantic Accents Toggle */}
          <button
            onClick={() => onTogglePreserveAccents(!preserveAccents)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              preserveAccents
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'
            }`}
            title={lang === 'zh' ? '保留交换机端口绿灯、告警灯等微小特征点缀' : 'Keep status LED highlights'}
          >
            <span className={`w-2 h-2 rounded-full ${preserveAccents ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
            <span>{preserveAccents ? (lang === 'zh' ? '语义状态灯: 开启' : 'LEDs: On') : (lang === 'zh' ? '极简纯单色' : 'Monochrome')}</span>
          </button>

          {/* Isometric Shading Micro Preview */}
          <div
            className="hidden xl:flex items-center gap-1 px-2 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-[10px] text-slate-500 border border-slate-200 dark:border-slate-700"
            title={lang === 'zh' ? '2.5D 光影实时色阶：顶面高光 / 左侧基准 / 阴影暗面' : 'Isometric Lighting Preview'}
          >
            <span className="w-3 h-3 rounded-xs border border-black/10" style={{ backgroundColor: shades.topLight }} title="Top Light" />
            <span className="w-3 h-3 rounded-xs border border-black/10" style={{ backgroundColor: shades.leftFace }} title="Left Face" />
            <span className="w-3 h-3 rounded-xs border border-black/10" style={{ backgroundColor: shades.rightFace }} title="Right Shadow" />
            <span className="w-3 h-3 rounded-xs border border-black/10" style={{ backgroundColor: shades.bottomDark }} title="Chassis Dark" />
          </div>

          {/* Quick Export Drawio & Batch */}
          <div className="flex items-center gap-1.5">
            {onExportDrawio && (
              <button
                onClick={onExportDrawio}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 font-bold text-xs transition-all shadow-xs"
                title={lang === 'zh' ? '以当前配色下载 Draw.io 图库文件 (.xml)' : 'Export Draw.io XML Stencil'}
              >
                <span>📐</span>
                <span className="hidden sm:inline">{lang === 'zh' ? 'Draw.io 库' : 'Draw.io'}</span>
              </button>
            )}

            {onOpenBatchExport && (
              <button
                onClick={onOpenBatchExport}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/80 font-bold text-xs transition-all shadow-xs"
                title={lang === 'zh' ? '一键打包下载当前配色全部图标 (SVG/PNG)' : 'Batch Export ZIP'}
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? '打包下载' : 'Export Pack'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
