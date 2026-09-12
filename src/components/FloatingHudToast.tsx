'use client';

import React from 'react';
import { CheckCircle2, Sparkles, Download, Copy, Code2 } from 'lucide-react';

export interface HudToastState {
  show: boolean;
  type: 'copy' | 'download' | 'code' | 'success';
  title: string;
  subtitle?: string;
}

interface FloatingHudToastProps {
  toast: HudToastState | null;
}

export const FloatingHudToast: React.FC<FloatingHudToastProps> = ({ toast }) => {
  if (!toast || !toast.show) return null;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] pointer-events-none animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white border border-white/15 shadow-2xl shadow-black/30 backdrop-blur-xl max-w-md pointer-events-auto">
        {/* Icon Pill */}
        <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
          {toast.type === 'code' ? (
            <Code2 className="w-3.5 h-3.5" />
          ) : toast.type === 'download' ? (
            <Download className="w-3.5 h-3.5" />
          ) : (
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          )}
        </div>

        {/* Text */}
        <div className="text-xs font-medium pr-1">
          <div className="font-bold text-slate-100">{toast.title}</div>
          {toast.subtitle && (
            <div className="text-[11px] text-slate-300 font-normal">{toast.subtitle}</div>
          )}
        </div>
      </div>
    </div>
  );
};
