'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, X, Download, FileCode2 } from 'lucide-react';
import { PRESET_THEMES, generateIsometricShades } from '../lib/colorEngine';

interface PalettePopoverProps {
  currentColor: string;
  onColorChange: (color: string) => void;
  preserveAccents: boolean;
  onTogglePreserveAccents: (preserve: boolean) => void;
  lang: 'en' | 'zh';
  onOpenBatchExport?: () => void;
  onExportDrawio?: () => void;
}

export const PalettePopover: React.FC<PalettePopoverProps> = ({
  currentColor,
  onColorChange,
  preserveAccents,
  onTogglePreserveAccents,
  lang,
  onOpenBatchExport,
  onExportDrawio,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);
  const shades = generateIsometricShades(currentColor, preserveAccents);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={popoverRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border transition-all text-xs font-semibold ${
          isOpen
            ? 'border-slate-900 dark:border-white bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
            : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800'
        }`}
        title={lang === 'zh' ? '调色板与光影设置' : 'Color Palette & Lighting'}
      >
        <span
          className="w-3.5 h-3.5 rounded-full border border-black/20 dark:border-white/20 shadow-xs flex-shrink-0"
          style={{ backgroundColor: currentColor }}
        />
        <span className="hidden sm:inline">{lang === 'zh' ? '调色板' : 'Palette'}</span>
      </button>

      {/* Popover Dropdown Modal */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 text-slate-900 dark:text-white">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-bold tracking-tight">
                {lang === 'zh' ? '全局调色板 (等轴测光影)' : 'Global Palette (30° Shading)'}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Color Presets */}
          <div className="mt-3">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-zinc-400 block mb-2">
              {lang === 'zh' ? '预设场景主题' : 'Preset Themes'}
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {PRESET_THEMES.map((preset) => {
                const isSelected = currentColor.toLowerCase() === preset.color.toLowerCase();
                return (
                  <button
                    key={preset.id}
                    onClick={() => onColorChange(preset.color)}
                    className={`flex items-center gap-1.5 p-1.5 rounded-xl border text-[11px] font-medium transition-all ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                        : 'border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800/60'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-black/10 shadow-xs flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: preset.color }}
                    >
                      {isSelected && <Check className="w-2 h-2 text-white" />}
                    </span>
                    <span className="truncate">{preset.name[lang]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Hex Color & Shading Preview */}
          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-zinc-400">
                {lang === 'zh' ? '自定义 Hex' : 'Custom Hex'}:
              </span>
              <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-zinc-800 px-2 py-1 rounded-lg border border-slate-200 dark:border-zinc-700">
                <input
                  ref={colorInputRef}
                  type="color"
                  value={currentColor}
                  onChange={(e) => onColorChange(e.target.value)}
                  className="w-5 h-5 rounded cursor-pointer border-0 p-0 bg-transparent"
                />
                <span className="font-mono text-xs font-bold uppercase">{currentColor}</span>
              </div>
            </div>

            {/* Shading micro gradient */}
            <div className="flex items-center gap-1" title="Top / Left / Right face shades">
              <span className="w-2.5 h-2.5 rounded-xs border border-black/10" style={{ backgroundColor: shades.topLight }} />
              <span className="w-2.5 h-2.5 rounded-xs border border-black/10" style={{ backgroundColor: shades.leftFace }} />
              <span className="w-2.5 h-2.5 rounded-xs border border-black/10" style={{ backgroundColor: shades.rightFace }} />
            </div>
          </div>

          {/* Accent toggle switch */}
          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-700 dark:text-zinc-300">
              {lang === 'zh' ? '指示灯/状态点缀' : 'Status LED Highlights'}
            </span>
            <button
              type="button"
              onClick={() => onTogglePreserveAccents(!preserveAccents)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-colors ${
                preserveAccents
                  ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                  : 'bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 border-slate-200 dark:border-zinc-700'
              }`}
            >
              {preserveAccents ? (lang === 'zh' ? '开' : 'ON') : (lang === 'zh' ? '关 (纯色)' : 'OFF')}
            </button>
          </div>

          {/* Quick Export Actions */}
          {(onExportDrawio || onOpenBatchExport) && (
            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-zinc-800 grid grid-cols-2 gap-2">
              {onExportDrawio && (
                <button
                  type="button"
                  onClick={() => {
                    onExportDrawio();
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold hover:bg-indigo-100 dark:hover:bg-indigo-900/80 transition-colors"
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  <span>{lang === 'zh' ? 'Draw.io 库' : 'Draw.io XML'}</span>
                </button>
              )}
              {onOpenBatchExport && (
                <button
                  type="button"
                  onClick={() => {
                    onOpenBatchExport();
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-bold hover:bg-blue-100 dark:hover:bg-blue-900/80 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{lang === 'zh' ? '打包下载' : 'Export Pack'}</span>
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
