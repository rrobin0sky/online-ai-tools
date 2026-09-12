import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ArchIcons - Cloud Architecture & Generic Network Topology Icons Library',
  description: 'Download and copy official cloud architecture icons (AWS, Azure, GCP, Alibaba Cloud, Kubernetes) and vendor-neutral network topology symbols in SVG and PNG.',
  keywords: [
    'cloud architecture icons',
    'aws icons svg',
    'azure architecture icons',
    'alibaba cloud icons',
    'network topology symbols',
    'drawio icons library',
    'excalidraw cloud icons',
    '云厂商架构图标库',
    '拓扑图图标',
    '架构师工具箱',
  ],
  authors: [{ name: 'tools.bin0sky.tech' }],
  metadataBase: new URL('https://tools.bin0sky.tech'),
  openGraph: {
    title: 'ArchIcons - Cloud & Network Architecture Icons Library',
    description: 'Free vector architecture icons for cloud engineers and architects. Instant SVG copy & PNG download.',
    url: 'https://tools.bin0sky.tech',
    siteName: 'ArchIcons Toolbox',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#2563eb" />
        {/* Placeholder for Google AdSense Client Script */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossorigin="anonymous"></script> */}
      </head>
      <body className="antialiased bg-slate-50 dark:bg-slate-950 min-h-screen flex flex-col font-sans transition-colors">
        {children}
      </body>
    </html>
  );
}
