import { IconMeta, ProviderMeta, CategoryMeta, StyleMeta } from '../types/icon';

export const STYLES: StyleMeta[] = [
  {
    id: 'isometric',
    name: { en: '2.5D Isometric', zh: '2.5D 等轴测' },
    badge: '💎 售前方案立体',
    description: {
      en: '30° isometric projection for high-impact presales proposals, PPT, and system overviews.',
      zh: '统一 30° 等轴测立体模数，专为技术标书、售前方案、汇报演示 PPT 打造。'
    }
  },
  {
    id: 'flat',
    name: { en: '2D Modern Flat', zh: '2D 逻辑拓扑' },
    badge: '📐 逻辑拓扑规范',
    description: {
      en: 'Modern flat vector icons for CCIE, L2/L3 topology designs, and clean protocol planning.',
      zh: '现代 2D 扁平矢量标准，专为二/三层网络规划、路由协议走向及严谨工程图打造。'
    }
  },
  {
    id: 'cloud',
    name: { en: 'Cloud Architecture', zh: '云架构服务' },
    badge: '☁️ 现代云服务',
    description: {
      en: 'Cloud service components and icons for AWS, Alibaba Cloud, and Kubernetes environments.',
      zh: '公有云与云原生服务架构符号，涵盖 AWS、阿里云及 Kubernetes 生态体系。'
    }
  }
];

export const PROVIDERS: ProviderMeta[] = [
  {
    id: 'isp',
    name: { en: 'ISP / Telecom', zh: '电信运营商 ISP' },
    color: '#005baa',
    badgeBg: 'bg-blue-100 text-blue-950 border-blue-300 dark:bg-blue-500/20 dark:text-blue-200 dark:border-blue-500/40 font-bold',
    supportedStyles: ['isometric', 'flat', 'cloud']
  },
  {
    id: 'generic',
    name: { en: 'Generic / Neutral', zh: '通用中立' },
    color: '#0284c7',
    badgeBg: 'bg-sky-100 text-sky-950 border-sky-300 dark:bg-sky-500/20 dark:text-sky-200 dark:border-sky-500/40 font-bold',
    supportedStyles: ['isometric', 'flat', 'cloud']
  },
  {
    id: 'cisco',
    name: { en: 'Cisco Systems', zh: '思科 Cisco' },
    color: '#049fd9',
    badgeBg: 'bg-cyan-100 text-cyan-950 border-cyan-300 dark:bg-cyan-500/20 dark:text-cyan-200 dark:border-cyan-500/40 font-bold',
    supportedStyles: ['flat']
  },
  {
    id: 'huawei',
    name: { en: 'Huawei / Gov', zh: '华为 / 信创' },
    color: '#dc2626',
    badgeBg: 'bg-red-100 text-red-950 border-red-300 dark:bg-red-500/20 dark:text-red-200 dark:border-red-500/40 font-bold',
    supportedStyles: ['isometric', 'flat']
  },
  {
    id: 'h3c',
    name: { en: 'H3C', zh: '新华三 H3C' },
    color: '#2563eb',
    badgeBg: 'bg-blue-100 text-blue-950 border-blue-300 dark:bg-blue-500/20 dark:text-blue-200 dark:border-blue-500/40 font-bold',
    supportedStyles: ['flat']
  },
  {
    id: 'fortinet',
    name: { en: 'Fortinet', zh: '飞塔 Fortinet' },
    color: '#e11d48',
    badgeBg: 'bg-rose-100 text-rose-950 border-rose-300 dark:bg-rose-500/20 dark:text-rose-200 dark:border-rose-500/40 font-bold',
    supportedStyles: ['flat']
  },
  {
    id: 'aws',
    name: { en: 'Amazon AWS', zh: '亚马逊 AWS' },
    color: '#ff9900',
    badgeBg: 'bg-amber-100 text-amber-950 border-amber-300 dark:bg-amber-500/20 dark:text-amber-200 dark:border-amber-500/40 font-bold',
    supportedStyles: ['cloud', 'isometric']
  },
  {
    id: 'aliyun',
    name: { en: 'Alibaba Cloud', zh: '阿里云' },
    color: '#ff6a00',
    badgeBg: 'bg-orange-100 text-orange-950 border-orange-300 dark:bg-orange-500/20 dark:text-orange-200 dark:border-orange-500/40 font-bold',
    supportedStyles: ['cloud', 'isometric']
  },
  {
    id: 'azure',
    name: { en: 'Microsoft Azure', zh: '微软 Azure' },
    color: '#0078d4',
    badgeBg: 'bg-sky-100 text-sky-950 border-sky-300 dark:bg-sky-500/20 dark:text-sky-200 dark:border-sky-500/40 font-bold',
    supportedStyles: ['cloud']
  },
  {
    id: 'k8s',
    name: { en: 'Kubernetes / CNCF', zh: 'K8s / 云原生' },
    color: '#326ce5',
    badgeBg: 'bg-indigo-100 text-indigo-950 border-indigo-300 dark:bg-indigo-500/20 dark:text-indigo-200 dark:border-indigo-500/40 font-bold',
    supportedStyles: ['cloud', 'isometric']
  }
];

export const CATEGORIES: CategoryMeta[] = [
  { id: 'network', name: { en: 'Routing & Switching', zh: '路由与交换' }, iconName: 'Network' },
  { id: 'security', name: { en: 'Security & Gateway', zh: '安全与防护' }, iconName: 'Shield' },
  { id: 'compute', name: { en: 'Compute & Host', zh: '计算与主机' }, iconName: 'Cpu' },
  { id: 'storage', name: { en: 'Storage & DB', zh: '存储与数据库' }, iconName: 'HardDrive' },
  { id: 'cloud', name: { en: 'Cloud & Network', zh: '云上网络' }, iconName: 'Cloud' },
  { id: 'physical', name: { en: 'Physical & Facility', zh: '机房与外设' }, iconName: 'Server' }
];


export const ICONS: IconMeta[] = [
// =========================================================================
  // 1. 物理网络与基础设施 (Physical On-Premises Network Devices - 12款最常用)
  // =========================================================================
  {
    id: 'core-switch-chassis',
    equivalentGroup: 'core-switch',
    provider: 'generic',
    style: 'isometric',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Chassis Core Switch', zh: '核心交换机 (框式)' },
    code: 'CORE-SW',
    tags: ['core switch', 'chassis', 'l3 switch', 'hexin', 'jiaohuanji', '核心交换机', '框式交换机', '三层交换机', '华为CE12800', '思科Nexus'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-cs-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-cs-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-cs-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="86" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Multi-slot Modular Chassis Shell -->
  <polygon points="60,14 98,34 60,54 22,34" fill="url(#iso-cs-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="22,34 60,54 60,84 22,64" fill="url(#iso-cs-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="60,54 98,34 98,64 60,84" fill="url(#iso-cs-right)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Top Face: 4-Way Diagonal Routing Cross Matrix (L3 Emblem) -->
  <g stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff">
    <line x1="38" y1="31" x2="82" y2="39"/>
    <polygon points="42,30 34,30 38,34"/>
    <polygon points="78,36 86,40 82,42"/>
    <line x1="72" y1="25" x2="48" y2="45"/>
    <polygon points="74,29 76,22 69,25"/>
    <polygon points="51,41 44,48 47,41"/>
    <!-- Central Routing Engine Core Diamond -->
    <polygon points="60,31 65,35 60,39 55,35" fill="%%ACCENT_CYAN%%" stroke="#ffffff" stroke-width="1"/>
  </g>
  <!-- Front Modular Line Card Slots (4 Slot Rows in 2.5D) -->
  <g fill="%%BOTTOM_DARK%%" stroke="%%GRID_GLOW%%" stroke-width="0.6">
    <polygon points="26,42 56,57 56,62 26,47"/>
    <polygon points="26,49 56,64 56,69 26,54"/>
    <polygon points="26,56 56,71 56,76 26,61"/>
    <polygon points="26,63 56,78 56,83 26,68"/>
  </g>
  <!-- High Density QSFP28 Port LEDs (Green/Amber/Blue) -->
  <circle cx="28" cy="45" r="1.3" fill="%%ACCENT_GREEN%%"/>
  <circle cx="33" cy="47.5" r="1.3" fill="%%ACCENT_GREEN%%"/>
  <circle cx="38" cy="50" r="1.3" fill="%%ACCENT_CYAN%%"/>
  <circle cx="28" cy="52" r="1.3" fill="%%ACCENT_GREEN%%"/>
  <circle cx="33" cy="54.5" r="1.3" fill="%%ACCENT_AMBER%%"/>
  <circle cx="28" cy="59" r="1.3" fill="%%ACCENT_GREEN%%"/>
  <circle cx="33" cy="61.5" r="1.3" fill="%%ACCENT_GREEN%%"/>
  <!-- Redundant Power Supplies on Right Face -->
  <polygon points="64,57 94,42 94,49 64,64" fill="%%BOTTOM_DARK%%" stroke="%%GRID_GLOW%%" stroke-width="0.6"/>
  <polygon points="64,66 94,51 94,58 64,73" fill="%%BOTTOM_DARK%%" stroke="%%GRID_GLOW%%" stroke-width="0.6"/>
  <circle cx="68" cy="61" r="1.2" fill="%%ACCENT_GREEN%%"/>
  <circle cx="68" cy="70" r="1.2" fill="%%ACCENT_GREEN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D modular chassis core switch with 4 line-card slots and redundant power', zh: '现代 2.5D 等轴测框式核心交换机，带 4 块高密业务板卡插槽、冗余电源与顶部立体交换矩阵' }
  },
  {
    id: 'access-switch-l2',
    equivalentGroup: 'l2-switch',
    provider: 'generic',
    style: 'isometric',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Access Switch (1U)', zh: '接入/汇聚交换机 (1U)' },
    code: 'ACCESS-SW',
    tags: ['switch', 'access switch', 'l2', 'poe', '1u', 'jieru', 'jiaohuanji', '接入交换机', '二层交换机', 'PoE交换机', '24口交换机'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-as-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-as-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-as-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Standard 1U Switch Chassis -->
  <polygon points="60,26 98,46 60,66 22,46" fill="url(#iso-as-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="22,46 60,66 60,82 22,62" fill="url(#iso-as-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="60,66 98,46 98,62 60,82" fill="url(#iso-as-right)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Top Face: Dual Opposite Parallel High-Speed Traffic Arrows -->
  <g stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff">
    <!-- Top Arrow (flowing right) -->
    <line x1="42" y1="41" x2="72" y2="47"/>
    <polygon points="68,43 76,48 67,49"/>
    <!-- Bottom Arrow (flowing left) -->
    <line x1="78" y1="51" x2="48" y2="45"/>
    <polygon points="52,43 44,44 53,49"/>
  </g>
  <!-- Front Left Panel: 2.5D Isometric Port Matrix with LEDs -->
  <g stroke="%%GRID_GLOW%%" stroke-width="0.8" fill="%%BOTTOM_DARK%%">
    <polygon points="26,52 32,55 32,58 26,55"/>
    <polygon points="34,56 40,59 40,62 34,59"/>
    <polygon points="42,60 48,63 48,66 42,63"/>
    <polygon points="50,64 56,67 56,70 50,67"/>
    <polygon points="26,57 32,60 32,63 26,60"/>
    <polygon points="34,61 40,64 40,67 34,64"/>
    <polygon points="42,65 48,68 48,71 42,68"/>
    <polygon points="50,69 56,72 56,75 50,72"/>
  </g>
  <!-- Port Link Status Activity LEDs -->
  <circle cx="28" cy="50" r="1.2" fill="%%ACCENT_GREEN%%"/>
  <circle cx="36" cy="54" r="1.2" fill="%%ACCENT_GREEN%%"/>
  <circle cx="44" cy="58" r="1.2" fill="%%ACCENT_GREEN%%"/>
  <circle cx="52" cy="62" r="1.2" fill="%%ACCENT_AMBER%%"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric 1U rackmount switch with 24-port LED matrix and dual parallel flow arrows', zh: '现代 2.5D 等轴测 1U 盒式交换机，配备精细以太网口阵列、双向对射流向与运行指示灯' }
  },
  {
    id: 'enterprise-router-l3',
    equivalentGroup: 'router',
    provider: 'generic',
    style: 'isometric',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Enterprise Router', zh: '企业级三层路由器' },
    code: 'RT-L3',
    tags: ['router', 'enterprise router', 'l3', 'wan', 'gateway', 'luyouqi', '路由器', '企业路由器', '出口网关', '三层路由'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-rt-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-rt-side" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="80" rx="46" ry="15" fill="#0f172a" opacity="0.25"/>
  <!-- Lower Cylinder Body -->
  <path d="M 20,40 C 20,58 38,72 60,72 C 82,72 100,58 100,40 L 100,58 C 100,76 82,90 60,90 C 38,90 20,76 20,58 Z" fill="url(#iso-rt-side)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.4"/>
  <!-- Outer Bevel Ring -->
  <ellipse cx="60" cy="40" rx="40" ry="18" fill="%%BOTTOM_DARK%%"/>
  <!-- Inner Recessed Top Face -->
  <ellipse cx="60" cy="38" rx="36" ry="16" fill="url(#iso-rt-top)" stroke="%%BORDER_STROKE%%" stroke-width="1.2" stroke-opacity="0.8"/>
  <!-- Front Status Indicators -->
  <ellipse cx="60" cy="74" rx="28" ry="8" fill="none" stroke="%%GRID_GLOW%%" stroke-width="1" stroke-dasharray="4 6" opacity="0.7"/>
  <circle cx="36" cy="62" r="2" fill="%%ACCENT_GREEN%%"/>
  <circle cx="44" cy="66" r="2" fill="%%ACCENT_CYAN%%"/>
  <circle cx="52" cy="69" r="2" fill="%%ACCENT_CYAN%%"/>
  <!-- Luminous 4-Directional Flow Arrows on Top Face -->
  <g stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff">
    <line x1="32" y1="38" x2="48" y2="38"/>
    <polygon points="43,35 51,38 43,41"/>
    <line x1="88" y1="38" x2="72" y2="38"/>
    <polygon points="77,35 69,38 77,41"/>
    <line x1="60" y1="36" x2="60" y2="26"/>
    <polygon points="57,29 60,24 63,29"/>
    <line x1="60" y1="40" x2="60" y2="50"/>
    <polygon points="57,47 60,52 63,47"/>
    <circle cx="60" cy="38" r="3" fill="#ffffff"/>
  </g>
</svg>`,
    description: { en: 'Modern 2.5D isometric cylindrical router with 4-directional luminous flow arrows', zh: '现代 2.5D 等轴测圆柱路由器，顶部配四向多路径立体寻址流向与前置指示灯环' }
  },
  {
    id: 'firewall-ngfw',
    equivalentGroup: 'firewall',
    provider: 'generic',
    style: 'isometric',
    category: 'security',
    deviceType: 'physical',
    name: { en: 'Next-Gen Firewall (NGFW)', zh: '下一代防火墙 (NGFW)' },
    code: 'NGFW',
    tags: ['firewall', 'ngfw', 'security', 'ips', 'ids', 'fanghuoqiang', '防火墙', '下一代防火墙', '深信服', '天融信', '奇安信'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-fw-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-fw-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-fw-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-fw-shield" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%ACCENT_AMBER%%"/>
      <stop offset="50%" stop-color="%%ACCENT_RED%%"/>
      <stop offset="100%" stop-color="%%LEFT_FACE%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Base Chassis Faces -->
  <polygon points="60,26 98,46 60,66 22,46" fill="url(#iso-fw-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.6"/>
  <polygon points="22,46 60,66 60,84 22,64" fill="url(#iso-fw-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.4"/>
  <polygon points="60,66 98,46 98,64 60,84" fill="url(#iso-fw-right)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.4"/>
  <!-- Top Face Isometric Laser Grid Lines -->
  <line x1="41" y1="36" x2="79" y2="56" stroke="%%GRID_GLOW%%" stroke-width="1.2" opacity="0.7"/>
  <line x1="31" y1="41" x2="69" y2="61" stroke="%%GRID_GLOW%%" stroke-width="1.2" opacity="0.7"/>
  <line x1="79" y1="36" x2="41" y2="56" stroke="%%GRID_GLOW%%" stroke-width="1.2" opacity="0.7"/>
  <line x1="69" y1="31" x2="51" y2="41" stroke="%%GRID_GLOW%%" stroke-width="1.2" opacity="0.7"/>
  <!-- Front Port LEDs & Status Indicators -->
  <circle cx="32" cy="56" r="2" fill="%%ACCENT_GREEN%%"/>
  <circle cx="40" cy="60" r="2" fill="%%ACCENT_CYAN%%"/>
  <circle cx="48" cy="64" r="2" fill="%%ACCENT_AMBER%%"/>
  <!-- Upright 2.5D Glowing Shield Barrier -->
  <g transform="translate(60, 48)">
    <path d="M0,-24 L18,-15 L18,5 C18,17 0,26 0,26 C0,26 -18,17 -18,5 L-18,-15 Z" fill="url(#iso-fw-shield)" stroke="#ffffff" stroke-width="1.5"/>
    <path d="M0,-20 L14,-13 L14,4 C14,13 0,21 0,21 C0,21 -14,13 -14,4 L-14,-13 Z" fill="#ffffff" fill-opacity="0.2"/>
    <!-- Keyhole / Core Emblem -->
    <path d="M0,-8 C-4,-8 -6,-5 -6,0 C-6,4 -3,7 -2,9 L-3,14 L3,14 L2,9 C3,7 6,4 6,0 C6,-5 4,-8 0,-8 Z" fill="#ffffff"/>
  </g>
</svg>`,
    description: { en: 'Modern 2.5D isometric security firewall gateway with neon barrier shield', zh: '现代 2.5D 等轴测立体安全防火墙网关，配高亮防护盾、激光网格与状态指示灯' }
  },
  {
    id: 'waf-gateway',
    equivalentGroup: 'waf',
    provider: 'generic',
    style: 'isometric',
    category: 'security',
    deviceType: 'physical',
    name: { en: 'Web App Firewall (WAF)', zh: 'Web 应用防火墙 (WAF)' },
    code: 'WAF',
    tags: ['waf', 'web application firewall', 'security', 'http', 'https', 'web防火墙', '应用防火墙', '安恒', '绿盟'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-waf-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-waf-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-waf-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Base Chassis -->
  <polygon points="60,26 98,46 60,66 22,46" fill="url(#iso-waf-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="22,46 60,66 60,82 22,62" fill="url(#iso-waf-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="60,66 98,46 98,62 60,82" fill="url(#iso-waf-right)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Upright Layer-7 Web Filtering Emblem -->
  <g transform="translate(60, 44)">
    <!-- Globe/Web Ring -->
    <ellipse cx="0" cy="0" rx="20" ry="10" fill="none" stroke="#ffffff" stroke-width="1.6"/>
    <ellipse cx="0" cy="0" rx="9" ry="10" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="3 2"/>
    <line x1="-20" y1="0" x2="20" y2="0" stroke="#ffffff" stroke-width="1.2"/>
    <line x1="0" y1="-10" x2="0" y2="10" stroke="#ffffff" stroke-width="1.2"/>
    <!-- Protection Shield Overlay -->
    <path d="M-10,-4 L0,-9 L10,-4 L10,6 C10,13 0,17 0,17 C0,17 -10,13 -10,6 Z" fill="%%ACCENT_AMBER%%" stroke="#ffffff" stroke-width="1.2"/>
    <text x="0" y="8" font-size="7" font-weight="900" fill="#ffffff" text-anchor="middle" font-family="sans-serif">WAF</text>
  </g>
  <!-- Front Port Matrix -->
  <circle cx="28" cy="54" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="36" cy="58" r="1.5" fill="%%ACCENT_CYAN%%"/>
  <circle cx="44" cy="62" r="1.5" fill="%%ACCENT_GREEN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D Web Application Firewall with Layer-7 web inspection shield', zh: '现代 2.5D 等轴测 Web 应用防火墙，具备七层应用流量过滤与网站防护盾' }
  },
  {
    id: 'bastion-host',
    equivalentGroup: 'bastion',
    provider: 'generic',
    style: 'isometric',
    category: 'security',
    deviceType: 'physical',
    name: { en: 'Bastion Host (Jump Server)', zh: '运维堡垒机 / 跳板机' },
    code: 'BASTION',
    tags: ['bastion', 'jump server', 'ssh', 'rdp', 'audit', 'baoleiji', '堡垒机', '运维审计', '跳板机', '齐治', '安恒'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-bst-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-bst-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-bst-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Chassis Base -->
  <polygon points="60,24 98,44 60,64 22,44" fill="url(#iso-bst-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="22,44 60,64 60,82 22,62" fill="url(#iso-bst-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="60,64 98,44 98,62 60,82" fill="url(#iso-waf-right)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Upright Bastion Terminal Console with Padlock -->
  <g transform="translate(60, 42)">
    <!-- Terminal Screen Block in 2.5D -->
    <rect x="-18" y="-18" width="36" height="24" rx="3" fill="%%BOTTOM_DARK%%" stroke="%%GRID_GLOW%%" stroke-width="1.2"/>
    <!-- Terminal Prompt '>_' -->
    <text x="-12" y="-5" font-size="9" font-family="monospace" font-weight="bold" fill="%%ACCENT_GREEN%%">&gt;_</text>
    <line x1="-2" y1="-5" x2="4" y2="-5" stroke="%%ACCENT_GREEN%%" stroke-width="1.5"/>
    <!-- Golden Security Lock -->
    <g transform="translate(9, 2)">
      <rect x="-6" y="-3" width="12" height="9" rx="1.5" fill="%%ACCENT_AMBER%%" stroke="#ffffff" stroke-width="0.8"/>
      <path d="M-3,-3 L-3,-7 C-3,-9 3,-9 3,-7 L3,-3" fill="none" stroke="#ffffff" stroke-width="1.2"/>
      <circle cx="0" cy="1.5" r="1" fill="#0f172a"/>
    </g>
  </g>
  <!-- Audit Indicator Lights -->
  <circle cx="28" cy="52" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="36" cy="56" r="1.5" fill="%%ACCENT_AMBER%%"/>
  <circle cx="44" cy="60" r="1.5" fill="%%ACCENT_CYAN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric bastion jump server with terminal screen and cryptographic lock', zh: '现代 2.5D 等轴测运维堡垒机，配备终端命令行显示屏与安全加密锁' }
  },
  {
    id: 'rack-server-2u',
    equivalentGroup: 'server',
    provider: 'generic',
    style: 'isometric',
    category: 'compute',
    deviceType: 'physical',
    name: { en: 'Enterprise Server (2U)', zh: '企业机架服务器 (2U)' },
    code: 'SRV-2U',
    tags: ['server', 'compute', 'host', '2u', 'nvme', 'fuwuqi', '服务器', '机架服务器', '戴尔PowerEdge', '华为FusionServer', '浪潮'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-srv-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-srv-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-srv-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Server 2U Chassis -->
  <polygon points="60,22 98,42 60,62 22,42" fill="url(#iso-srv-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="22,42 60,62 60,82 22,62" fill="url(#iso-srv-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="60,62 98,42 98,62 60,82" fill="url(#iso-srv-right)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Top Face: Tech Circuit Silkscreen Lines -->
  <g stroke="%%GRID_GLOW%%" stroke-width="1" stroke-opacity="0.7" fill="none">
    <path d="M42,36 L52,41 L52,48 L64,54"/>
    <circle cx="42" cy="36" r="1.5" fill="%%GRID_GLOW%%"/>
    <circle cx="64" cy="54" r="1.5" fill="%%GRID_GLOW%%"/>
    <path d="M78,36 L68,41 L68,46"/>
    <circle cx="78" cy="36" r="1.5" fill="%%GRID_GLOW%%"/>
  </g>
  <!-- Front Panel: 2.5D Hot-Swap NVMe Drive Bays -->
  <g fill="%%BOTTOM_DARK%%" stroke="%%GRID_GLOW%%" stroke-width="0.8">
    <polygon points="26,48 38,54 38,59 26,53"/>
    <polygon points="42,56 54,62 54,67 42,61"/>
    <polygon points="26,55 38,61 38,66 26,60"/>
    <polygon points="42,63 54,69 54,74 42,68"/>
  </g>
  <!-- Drive Activity LEDs -->
  <circle cx="28" cy="50" r="1" fill="%%ACCENT_GREEN%%"/>
  <circle cx="44" cy="58" r="1" fill="%%ACCENT_GREEN%%"/>
  <circle cx="28" cy="57" r="1" fill="%%ACCENT_AMBER%%"/>
  <circle cx="44" cy="65" r="1" fill="%%ACCENT_GREEN%%"/>
  <!-- Power Switch -->
  <circle cx="56" cy="77" r="2" fill="%%ACCENT_CYAN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric enterprise 2U rack server with hot-swap NVMe bays and PCB traces', zh: '现代 2.5D 等轴测企业级 2U 机架服务器，带热插拔硬盘舱、电路蚀刻与状态指示灯' }
  },
  {
    id: 'storage-san-nas',
    equivalentGroup: 'storage',
    provider: 'generic',
    style: 'isometric',
    category: 'storage',
    deviceType: 'physical',
    name: { en: 'Centralized Storage (SAN/NAS)', zh: '集中式存储 / SAN 阵列' },
    code: 'SAN-NAS',
    tags: ['storage', 'san', 'nas', 'disk array', 'raid', 'chucun', '存储', '集中式存储', '磁盘阵列', '华为OceanStor', 'EMC'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-san-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-san-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-san-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="84" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Storage Array Chassis -->
  <polygon points="60,18 98,38 60,58 22,38" fill="url(#iso-san-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="22,38 60,58 60,84 22,64" fill="url(#iso-san-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="60,58 98,38 98,64 60,84" fill="url(#iso-san-right)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Front Dense Disk Trays (3 Rows) -->
  <g fill="%%BOTTOM_DARK%%" stroke="%%GRID_GLOW%%" stroke-width="0.6">
    <polygon points="26,46 56,61 56,66 26,51"/>
    <polygon points="26,53 56,68 56,73 26,58"/>
    <polygon points="26,60 56,75 56,80 26,65"/>
  </g>
  <!-- Disk LED Indicators Array -->
  <circle cx="28" cy="49" r="1" fill="%%ACCENT_GREEN%%"/>
  <circle cx="34" cy="52" r="1" fill="%%ACCENT_GREEN%%"/>
  <circle cx="40" cy="55" r="1" fill="%%ACCENT_GREEN%%"/>
  <circle cx="46" cy="58" r="1" fill="%%ACCENT_AMBER%%"/>
  <circle cx="28" cy="56" r="1" fill="%%ACCENT_GREEN%%"/>
  <circle cx="34" cy="59" r="1" fill="%%ACCENT_GREEN%%"/>
  <circle cx="40" cy="62" r="1" fill="%%ACCENT_GREEN%%"/>
  <circle cx="28" cy="63" r="1" fill="%%ACCENT_GREEN%%"/>
  <circle cx="34" cy="66" r="1" fill="%%ACCENT_CYAN%%"/>
  <!-- Top Face Storage Platter Disks -->
  <ellipse cx="60" cy="38" rx="22" ry="9" fill="none" stroke="#ffffff" stroke-width="1.2" opacity="0.8"/>
  <ellipse cx="60" cy="38" rx="12" ry="5" fill="none" stroke="%%ACCENT_CYAN%%" stroke-width="1"/>
</svg>`,
    description: { en: 'Modern 2.5D enterprise SAN/NAS storage array with high-density disk trays', zh: '现代 2.5D 等轴测集中式企业级存储磁盘阵列，配备高密硬盘抽屉与高速光纤通道控制器' }
  },
  {
    id: 'hardware-load-balancer',
    equivalentGroup: 'load-balancer',
    provider: 'generic',
    style: 'isometric',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Hardware Load Balancer', zh: '硬件负载均衡网关' },
    code: 'HW-LB',
    tags: ['load balancer', 'slb', 'f5', 'a10', 'traffic', 'fuzaijunheng', '负载均衡', '硬件负载均衡', '应用交付'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-hlb-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-hlb-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-hlb-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Isometric Balancer Hub Chassis -->
  <polygon points="60,24 98,44 60,64 22,44" fill="url(#iso-hlb-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="22,44 60,64 60,82 22,62" fill="url(#iso-hlb-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="60,64 98,44 98,62 60,82" fill="url(#iso-hlb-right)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Top Face: 1-to-3 Flow Traffic Splitting Distributor System -->
  <g stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff">
    <line x1="32" y1="44" x2="48" y2="44"/>
    <circle cx="32" cy="44" r="2.5" fill="%%ACCENT_CYAN%%"/>
    <circle cx="52" cy="44" r="3.5" fill="%%ACCENT_AMBER%%"/>
    <line x1="56" y1="42" x2="78" y2="34"/>
    <polygon points="73,32 82,32 77,37"/>
    <line x1="56" y1="44" x2="84" y2="44"/>
    <polygon points="79,41 87,44 79,47"/>
    <line x1="56" y1="46" x2="78" y2="54"/>
    <polygon points="77,51 82,56 73,56"/>
  </g>
  <!-- Front Panel Status Matrix -->
  <circle cx="32" cy="56" r="2" fill="%%ACCENT_GREEN%%"/>
  <circle cx="40" cy="60" r="2" fill="%%ACCENT_GREEN%%"/>
  <circle cx="48" cy="64" r="2" fill="%%ACCENT_CYAN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric load balancer node with 1-to-3 dynamic traffic distribution', zh: '现代 2.5D 等轴测硬件负载均衡器，具备 1 对多智能分流引擎与分发流向' }
  },
  {
    id: 'wireless-ap-wifi',
    equivalentGroup: 'ap',
    provider: 'generic',
    style: 'isometric',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Wireless AP (Wi-Fi 6/7)', zh: '企业级无线 AP' },
    code: 'AP-WIFI',
    tags: ['ap', 'wireless', 'wifi', 'wlan', 'access point', 'wuxian', '无线AP', '无线路由器', 'Wi-Fi 7', '吸顶AP'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-ap-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-ap-side" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="80" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Radiating 2.5D Isometric Wi-Fi Wave Rings -->
  <g fill="none" stroke="%%ACCENT_CYAN%%" stroke-width="1.8" stroke-linecap="round">
    <path d="M22,30 C32,18 88,18 98,30" opacity="0.3"/>
    <path d="M28,38 C36,28 84,28 92,38" opacity="0.6"/>
    <path d="M36,46 C42,38 78,38 84,46" opacity="0.9"/>
  </g>
  <!-- Access Point Dome Base Body -->
  <path d="M30,50 C30,64 43,74 60,74 C77,74 90,64 90,50 L90,58 C90,72 77,82 60,82 C43,82 30,72 30,58 Z" fill="url(#iso-ap-side)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.4"/>
  <!-- Top Saucer Disc -->
  <ellipse cx="60" cy="50" rx="30" ry="14" fill="url(#iso-ap-top)" stroke="#ffffff" stroke-width="1.5"/>
  <!-- Center Wi-Fi Glowing Ring & Status Indicator -->
  <ellipse cx="60" cy="50" rx="12" ry="5.5" fill="%%ACCENT_CYAN%%" fill-opacity="0.2" stroke="%%ACCENT_CYAN%%" stroke-width="1.5"/>
  <circle cx="60" cy="50" r="3" fill="%%ACCENT_CYAN%%"/>
  <circle cx="60" cy="50" r="1.5" fill="#ffffff"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric enterprise Wi-Fi 6/7 access point with radiating signal waves', zh: '现代 2.5D 等轴测企业级吸顶无线 AP，配环形指示灯与立体射频信号波' }
  },
  {
    id: 'datacenter-rack-42u',
    equivalentGroup: 'rack',
    provider: 'generic',
    style: 'isometric',
    category: 'physical',
    deviceType: 'physical',
    name: { en: '42U Server Rack', zh: '现代 42U 机房机柜' },
    code: 'RACK-42U',
    tags: ['rack', 'cabinet', 'datacenter', '42u', 'jigui', '机柜', '服务器机柜', '机房机架', '数据中心'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-rk-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-rk-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-rk-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="88" rx="36" ry="10" fill="#0f172a" opacity="0.25"/>
  <!-- Tall Isometric 42U Cabinet Shell -->
  <polygon points="60,8 88,22 60,36 32,22" fill="url(#iso-rk-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="32,22 60,36 60,90 32,76" fill="url(#iso-rk-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="60,36 88,22 88,76 60,90" fill="url(#iso-rk-right)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Top Exhaust Fans -->
  <ellipse cx="50" cy="20" rx="6" ry="3" fill="%%BOTTOM_DARK%%" stroke="%%GRID_GLOW%%" stroke-width="0.8"/>
  <ellipse cx="70" cy="24" rx="6" ry="3" fill="%%BOTTOM_DARK%%" stroke="%%GRID_GLOW%%" stroke-width="0.8"/>
  <!-- Mounted Internal Server Units with Status Lights -->
  <g stroke="%%GRID_GLOW%%" stroke-width="0.8" fill="%%BOTTOM_DARK%%">
    <polygon points="35,35 57,46 57,54 35,43"/>
    <circle cx="39" cy="40" r="1" fill="%%ACCENT_GREEN%%"/>
    <circle cx="43" cy="42" r="1" fill="%%ACCENT_CYAN%%"/>
    <polygon points="35,46 57,57 57,65 35,54"/>
    <circle cx="39" cy="51" r="1" fill="%%ACCENT_GREEN%%"/>
    <circle cx="43" cy="53" r="1" fill="%%ACCENT_GREEN%%"/>
    <polygon points="35,57 57,68 57,76 35,65"/>
    <circle cx="39" cy="62" r="1" fill="%%ACCENT_GREEN%%"/>
    <circle cx="43" cy="64" r="1" fill="%%ACCENT_AMBER%%"/>
    <polygon points="35,68 57,79 57,87 35,76"/>
    <circle cx="39" cy="73" r="1" fill="%%ACCENT_CYAN%%"/>
  </g>
  <!-- Tempered Glass Door Border Accent -->
  <polygon points="33,24 59,37 59,88 33,75" fill="%%ACCENT_CYAN%%" fill-opacity="0.08" stroke="%%ACCENT_CYAN%%" stroke-width="0.8" stroke-opacity="0.5"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric 42U data center server cabinet with glass door and rackmount servers', zh: '现代 2.5D 等轴测 42U 标准数据中心机柜，内置多台满载服务器与顶部排风单元' }
  },
  {
    id: 'optical-sfp-transceiver',
    equivalentGroup: 'sfp',
    provider: 'generic',
    style: 'isometric',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Optical Module (SFP+) & Fiber', zh: '光模块与光纤跳线' },
    code: 'SFP-FIBER',
    tags: ['sfp', 'optical', 'transceiver', 'fiber', 'lc', 'guangxian', '光模块', '光纤', 'LC跳线', '万兆光口'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-sfp-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-sfp-side" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="80" rx="42" ry="12" fill="#0f172a" opacity="0.25"/>
  <!-- SFP Metallic Body -->
  <polygon points="50,26 84,43 54,58 20,41" fill="url(#iso-sfp-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="20,41 54,58 54,74 20,57" fill="url(#iso-sfp-side)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="54,58 84,43 84,59 54,74" fill="%%BOTTOM_DARK%%" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Optical Transceiver Bale Clasp Latch -->
  <polygon points="16,42 22,39 22,55 16,58" fill="%%ACCENT_CYAN%%" stroke="#ffffff" stroke-width="0.8"/>
  <!-- Duplex LC Optical Fiber Pair extending outward -->
  <g stroke-linecap="round" fill="none">
    <path d="M54,66 C68,73 80,70 96,65 C104,62 108,56 112,56" stroke="%%ACCENT_AMBER%%" stroke-width="3"/>
    <path d="M60,63 C74,70 86,67 102,62 C110,59 114,53 118,53" stroke="%%ACCENT_CYAN%%" stroke-width="3"/>
    <circle cx="54" cy="66" r="2" fill="#fde047"/>
    <circle cx="60" cy="63" r="2" fill="%%ACCENT_CYAN%%"/>
  </g>
</svg>`,
    description: { en: 'Modern 2.5D isometric SFP+ optical transceiver module and duplex LC fiber connector', zh: '现代 2.5D 等轴测 SFP+ 金属光模块与双芯 LC 光纤跳线' }
  },

  // =========================================================================
  // 2. 云上与虚拟化设备 (Cloud & Virtualized Devices - 10款最常用)
  // =========================================================================
  {
    id: 'cloud-vpc-zone',
    equivalentGroup: 'vpc',
    provider: 'generic',
    style: 'isometric',
    category: 'cloud',
    deviceType: 'cloud',
    name: { en: 'Cloud VPC & WAN Base', zh: '公有云底座 / 互联网' },
    code: 'VPC-WAN',
    tags: ['cloud', 'vpc', 'wan', 'internet', 'network', 'yun', '公有云', '私有云', '互联网', 'VPC底座'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-wan-cloud" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="50%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Isometric Projected Ring -->
  <ellipse cx="60" cy="80" rx="46" ry="15" fill="#0f172a" opacity="0.25"/>
  <ellipse cx="60" cy="80" rx="42" ry="14" fill="none" stroke="%%GRID_GLOW%%" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.6"/>
  <!-- Floating 2.5D Volumetric Cloud Mesh -->
  <path d="M30,52 C20,52 14,44 14,35 C14,27 20,20 28,18 C31,10 40,5 50,5 C60,5 68,11 72,19 C77,15 84,13 90,13 C102,13 110,22 110,33 C110,44 100,52 90,52 Z" fill="%%BOTTOM_DARK%%" opacity="0.4" transform="translate(0, 10)"/>
  <path d="M30,52 C20,52 14,44 14,35 C14,27 20,20 28,18 C31,10 40,5 50,5 C60,5 68,11 72,19 C77,15 84,13 90,13 C102,13 110,22 110,33 C110,44 100,52 90,52 Z" fill="url(#iso-wan-cloud)" stroke="%%BORDER_STROKE%%" stroke-width="1.5"/>
  <path d="M30,22 C34,12 42,8 50,8 C58,8 65,12 68,18" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
  <!-- Constellation Interconnect Nodes -->
  <g stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" fill="#ffffff">
    <line x1="38" y1="36" x2="58" y2="30"/>
    <line x1="58" y1="30" x2="80" y2="38"/>
    <line x1="58" y1="30" x2="64" y2="46"/>
    <circle cx="38" cy="36" r="2.5"/>
    <circle cx="58" cy="30" r="3.2"/>
    <circle cx="80" cy="38" r="2.5"/>
    <circle cx="64" cy="46" r="2.2"/>
  </g>
</svg>`,
    description: { en: 'Modern 2.5D volumetric cloud with constellation data interconnect nodes', zh: '现代 2.5D 等轴测立体云朵与互联网络节点，代表公共云 VPC 与广域网 WAN' }
  },
  {
    id: 'cloud-vm-ecs',
    equivalentGroup: 'ecs',
    provider: 'generic',
    style: 'isometric',
    category: 'cloud',
    deviceType: 'cloud',
    name: { en: 'Cloud VM (ECS / CVM)', zh: '云服务器 / ECS 虚拟机' },
    code: 'VM-ECS',
    tags: ['vm', 'ecs', 'cvm', 'cloud compute', 'virtual machine', 'xuniji', '云服务器', '虚拟机', '阿里云ECS', 'AWS EC2'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-vm-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-vm-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-vm-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="84" rx="42" ry="13" fill="#0f172a" opacity="0.25"/>
  <!-- Virtual Hypervisor Dashed Base Plate -->
  <polygon points="60,60 92,76 60,92 28,76" fill="none" stroke="%%GRID_GLOW%%" stroke-width="1.5" stroke-dasharray="4 3"/>
  <!-- Floating Virtual VM Instance Body -->
  <polygon points="60,18 94,36 60,54 26,36" fill="url(#iso-vm-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="26,36 60,54 60,72 26,54" fill="url(#iso-vm-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="60,54 94,36 94,54 60,72" fill="url(#iso-vm-right)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Center CPU Compute Microchip Emblem -->
  <g transform="translate(60, 36)">
    <polygon points="0,-10 12,-4 0,2 -12,-4" fill="%%BOTTOM_DARK%%" stroke="#ffffff" stroke-width="1"/>
    <circle cx="0" cy="-4" r="2" fill="%%ACCENT_CYAN%%"/>
  </g>
  <!-- Virtual Link Pulsing Rays -->
  <line x1="26" y1="54" x2="28" y2="76" stroke="%%ACCENT_CYAN%%" stroke-width="1.2" stroke-dasharray="2 2"/>
  <line x1="94" y1="54" x2="92" y2="76" stroke="%%ACCENT_CYAN%%" stroke-width="1.2" stroke-dasharray="2 2"/>
  <circle cx="36" cy="46" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="44" cy="50" r="1.5" fill="%%ACCENT_GREEN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric cloud VM instance with virtual hypervisor boundary and microchip', zh: '现代 2.5D 等轴测云服务器 ECS 虚拟机，带悬浮虚线底座与虚拟算力芯片' }
  },
  {
    id: 'cloud-slb',
    equivalentGroup: 'load-balancer',
    provider: 'generic',
    style: 'isometric',
    category: 'cloud',
    deviceType: 'cloud',
    name: { en: 'Cloud Load Balancer (SLB)', zh: '云负载均衡 (SLB / ALB)' },
    code: 'CLOUD-SLB',
    tags: ['cloud slb', 'alb', 'nlb', 'loadbalancer', 'yun fuzaijunheng', '云负载均衡', '应用型负载均衡', '网络负载均衡'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-cslb-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-cslb-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-cslb-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <polygon points="60,24 98,44 60,64 22,44" fill="url(#iso-cslb-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="22,44 60,64 60,82 22,62" fill="url(#iso-cslb-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="60,64 98,44 98,62 60,82" fill="url(#iso-cslb-right)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Multi-cloud Traffic Flow Rings -->
  <ellipse cx="60" cy="44" rx="24" ry="11" fill="none" stroke="#ffffff" stroke-width="1.5"/>
  <g stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff">
    <circle cx="60" cy="44" r="3.5" fill="%%ACCENT_AMBER%%"/>
    <!-- Radiating Traffic Flow -->
    <line x1="42" y1="44" x2="54" y2="44"/>
    <polygon points="50,41 57,44 50,47"/>
    <line x1="66" y1="44" x2="78" y2="44"/>
    <polygon points="73,41 80,44 73,47"/>
  </g>
  <circle cx="32" cy="56" r="2" fill="%%ACCENT_GREEN%%"/>
  <circle cx="40" cy="60" r="2" fill="%%ACCENT_CYAN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric cloud server load balancer with dynamic multi-tier flow rings', zh: '现代 2.5D 等轴测云负载均衡器，具备多可用区流量分发环与分流引擎' }
  },
  {
    id: 'cloud-rds',
    equivalentGroup: 'database',
    provider: 'generic',
    style: 'isometric',
    category: 'cloud',
    deviceType: 'cloud',
    name: { en: 'Cloud Database (RDS)', zh: '云关系型数据库 (RDS)' },
    code: 'RDS',
    tags: ['rds', 'database', 'mysql', 'postgresql', 'shujuku', '云数据库', '关系型数据库', '高可用数据库'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-rds-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-rds-side" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="86" rx="42" ry="12" fill="#0f172a" opacity="0.25"/>
  <!-- Tier 3 (Bottom Disk) -->
  <path d="M26,52 C26,65 41,75 60,75 C79,75 94,65 94,52 L94,64 C94,77 79,87 60,87 C41,87 26,77 26,64 Z" fill="url(#iso-rds-side)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.4"/>
  <ellipse cx="60" cy="52" rx="34" ry="12" fill="url(#iso-rds-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.6"/>
  <!-- Tier 2 (Middle Disk) -->
  <path d="M26,35 C26,48 41,58 60,58 C79,58 94,48 94,35 L94,47 C94,60 79,70 60,70 C41,70 26,60 26,47 Z" fill="url(#iso-rds-side)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.4"/>
  <ellipse cx="60" cy="35" rx="34" ry="12" fill="url(#iso-rds-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.6"/>
  <!-- Tier 1 (Top Disk) -->
  <path d="M26,18 C26,31 41,41 60,41 C79,41 94,31 94,18 L94,30 C94,43 79,53 60,53 C41,53 26,43 26,30 Z" fill="url(#iso-rds-side)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.4"/>
  <ellipse cx="60" cy="18" rx="34" ry="12" fill="url(#iso-rds-top)" stroke="#ffffff" stroke-width="1.5"/>
  <!-- Luminous Data Bus Beam & Indicator Dots -->
  <ellipse cx="60" cy="18" rx="24" ry="8" fill="none" stroke="#ffffff" stroke-width="1" stroke-dasharray="3 3" opacity="0.8"/>
  <line x1="38" y1="23" x2="38" y2="72" stroke="%%ACCENT_CYAN%%" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
  <circle cx="38" cy="23" r="2" fill="%%ACCENT_GREEN%%"/>
  <circle cx="38" cy="40" r="2" fill="%%ACCENT_GREEN%%"/>
  <circle cx="38" cy="57" r="2" fill="%%ACCENT_GREEN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric tiered cloud database platter stack with laser data bus', zh: '现代 2.5D 等轴测云数据库系统，带高速读写总线与多层数据磁道' }
  },
  {
    id: 'cloud-oss-s3',
    equivalentGroup: 'storage',
    provider: 'generic',
    style: 'isometric',
    category: 'cloud',
    deviceType: 'cloud',
    name: { en: 'Object Storage (OSS / S3)', zh: '对象存储 (OSS / S3)' },
    code: 'OSS-S3',
    tags: ['oss', 's3', 'bucket', 'object storage', 'blob', 'duixiangchucun', '对象存储', '存储桶', '阿里云OSS', 'AWS S3'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-oss-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-oss-side" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="84" rx="42" ry="12" fill="#0f172a" opacity="0.25"/>
  <!-- Storage Bucket Cylinder -->
  <path d="M30,36 C30,52 43,62 60,62 C77,62 90,52 90,36 L90,62 C90,78 77,88 60,88 C43,88 30,78 30,62 Z" fill="url(#iso-oss-side)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <ellipse cx="60" cy="36" rx="30" ry="13" fill="url(#iso-oss-top)" stroke="#ffffff" stroke-width="1.5"/>
  <!-- Cube / Object Block Inside Bucket -->
  <g transform="translate(60, 36)">
    <polygon points="0,-12 12,-6 0,0 -12,-6" fill="%%TOP_LIGHT%%" stroke="#ffffff" stroke-width="0.8"/>
    <polygon points="-12,-6 0,0 0,10 -12,4" fill="%%LEFT_FACE%%" stroke="#ffffff" stroke-width="0.8"/>
    <polygon points="0,0 12,-6 12,4 0,10" fill="%%RIGHT_FACE%%" stroke="#ffffff" stroke-width="0.8"/>
  </g>
  <!-- Storage Sync Signal Rings -->
  <ellipse cx="60" cy="62" rx="22" ry="8" fill="none" stroke="%%ACCENT_CYAN%%" stroke-width="1.2" stroke-dasharray="3 3"/>
  <circle cx="42" cy="55" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="78" cy="55" r="1.5" fill="%%ACCENT_GREEN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric cloud object storage bucket with floating data blocks', zh: '现代 2.5D 等轴测云对象存储桶，具备浮动结构化数据块与同步指示环' }
  },
  {
    id: 'cloud-security-group',
    equivalentGroup: 'firewall',
    provider: 'generic',
    style: 'isometric',
    category: 'security',
    deviceType: 'cloud',
    name: { en: 'Cloud Security Group / vFW', zh: '云安全组 / 虚拟防火墙' },
    code: 'SEC-GRP',
    tags: ['security group', 'vfw', 'firewall', 'cloud security', 'anquanzu', '安全组', '虚拟防火墙', '访问控制', 'ACL'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-sg-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-sg-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="84" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Dashed Virtual Security Boundary Base -->
  <polygon points="60,28 98,48 60,68 22,48" fill="url(#iso-sg-top)" fill-opacity="0.2" stroke="%%BORDER_STROKE%%" stroke-width="1.5" stroke-dasharray="5 3"/>
  <!-- Floating Transparent Virtual Shield Box -->
  <g transform="translate(60, 46)">
    <polygon points="0,-22 18,-13 0,-4 -18,-13" fill="%%TOP_LIGHT%%" fill-opacity="0.4" stroke="#ffffff" stroke-width="1.2"/>
    <polygon points="-18,-13 0,-4 0,16 -18,7" fill="%%LEFT_FACE%%" fill-opacity="0.4" stroke="#ffffff" stroke-width="1"/>
    <polygon points="0,-4 18,-13 18,7 0,16" fill="%%RIGHT_FACE%%" fill-opacity="0.4" stroke="#ffffff" stroke-width="1"/>
    <!-- Padlock Emblem -->
    <rect x="-5" y="-4" width="10" height="8" rx="1.5" fill="%%ACCENT_AMBER%%" stroke="#ffffff" stroke-width="0.8"/>
    <path d="M-3,-4 L-3,-8 C-3,-10 3,-10 3,-8 L3,-4" fill="none" stroke="#ffffff" stroke-width="1.2"/>
  </g>
  <circle cx="36" cy="54" r="2" fill="%%ACCENT_GREEN%%"/>
  <circle cx="84" cy="54" r="2" fill="%%ACCENT_GREEN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric cloud security group virtual boundary with encryption lock', zh: '现代 2.5D 等轴测云安全组虚拟隔离边界，带浮动防护锁与虚线安全域' }
  },
  {
    id: 'cloud-vpn-gateway',
    equivalentGroup: 'vpn',
    provider: 'generic',
    style: 'isometric',
    category: 'cloud',
    deviceType: 'cloud',
    name: { en: 'VPN / IPsec Gateway', zh: 'VPN 专线网关 / SD-WAN' },
    code: 'VPN-GW',
    tags: ['vpn', 'ipsec', 'sd-wan', 'tunnel', 'gateway', 'wangguan', 'VPN网关', 'IPsec隧道', 'SD-WAN POP', '跨域互联'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-vpn-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-vpn-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-vpn-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <polygon points="60,26 98,46 60,66 22,46" fill="url(#iso-vpn-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="22,46 60,66 60,82 22,62" fill="url(#iso-vpn-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="60,66 98,46 98,62 60,82" fill="url(#iso-vpn-right)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Encrypted Tunnel Arch on Top Face -->
  <g transform="translate(60, 44)">
    <path d="M-18,6 C-18,-10 18,-10 18,6" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M-12,6 C-12,-4 12,-4 12,6" fill="none" stroke="%%ACCENT_CYAN%%" stroke-width="1.8" stroke-linecap="round"/>
    <!-- Key Lock -->
    <circle cx="0" cy="-6" r="3" fill="%%ACCENT_AMBER%%"/>
  </g>
  <circle cx="30" cy="54" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="38" cy="58" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="46" cy="62" r="1.5" fill="%%ACCENT_CYAN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric VPN IPsec tunnel gateway with encrypted link bridge', zh: '现代 2.5D 等轴测 VPN 专线互联网关，配备加密安全隧道拱桥与状态指示灯' }
  },
  {
    id: 'cloud-k8s-pod',
    equivalentGroup: 'k8s-pod',
    provider: 'k8s',
    style: 'isometric',
    category: 'cloud',
    deviceType: 'cloud',
    name: { en: 'Container Pod / Kubernetes', zh: '容器集群 / K8s Pod' },
    code: 'K8S-POD',
    tags: ['k8s', 'kubernetes', 'container', 'pod', 'docker', 'rongqi', '容器', 'Pod节点', 'K8s集群', '云原生'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-pod-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-pod-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-pod-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="84" rx="42" ry="12" fill="#0f172a" opacity="0.25"/>
  <!-- Hexagonal Isometric Container Cell -->
  <polygon points="60,18 88,32 88,62 60,76 32,62 32,32" fill="none" stroke="%%GRID_GLOW%%" stroke-width="1.2" stroke-dasharray="3 3"/>
  <!-- Central Container Cube -->
  <polygon points="60,24 84,36 60,48 36,36" fill="url(#iso-pod-top)" stroke="%%BORDER_STROKE%%" stroke-width="1"/>
  <polygon points="36,36 60,48 60,68 36,56" fill="url(#iso-pod-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8"/>
  <polygon points="60,48 84,36 84,56 60,68" fill="url(#iso-pod-right)" stroke="%%BORDER_STROKE%%" stroke-width="0.8"/>
  <!-- K8s Helm Wheel / Pod Anchor Emblem -->
  <circle cx="60" cy="48" r="4" fill="%%ACCENT_CYAN%%" stroke="#ffffff" stroke-width="1"/>
  <line x1="60" y1="44" x2="60" y2="40" stroke="#ffffff" stroke-width="1.5"/>
  <line x1="64" y1="50" x2="68" y2="52" stroke="#ffffff" stroke-width="1.5"/>
  <line x1="56" y1="50" x2="52" y2="52" stroke="#ffffff" stroke-width="1.5"/>
  <circle cx="38" cy="48" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="82" cy="48" r="1.5" fill="%%ACCENT_GREEN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric container Pod node with Kubernetes helm emblem', zh: '现代 2.5D 等轴测云原生容器 Pod 节点，带六边形运行环境与舵轮标识' }
  },
  {
    id: 'cloud-vswitch',
    equivalentGroup: 'l2-switch',
    provider: 'generic',
    style: 'isometric',
    category: 'cloud',
    deviceType: 'cloud',
    name: { en: 'Virtual Switch (vSwitch)', zh: '虚拟交换机 (vSwitch)' },
    code: 'vSW',
    tags: ['vswitch', 'sdn', 'virtual switch', 'ovs', 'xunijiaohuanji', '虚拟交换机', 'SDN交换机', 'Open vSwitch'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-vsw-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-vsw-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <polygon points="60,26 98,46 60,66 22,46" fill="url(#iso-vsw-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="22,46 60,66 60,82 22,62" fill="url(#iso-vsw-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="60,66 98,46 98,62 60,82" fill="%%BOTTOM_DARK%%" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Virtual Flow Lines on Top Face -->
  <g stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" fill="none">
    <path d="M42,42 Q60,52 78,42" stroke-dasharray="3 2"/>
    <path d="M42,50 Q60,40 78,50" stroke-dasharray="3 2"/>
  </g>
  <circle cx="60" cy="46" r="3" fill="%%ACCENT_CYAN%%"/>
  <!-- Front Virtual Port Rows -->
  <circle cx="30" cy="54" r="1.5" fill="%%ACCENT_CYAN%%"/>
  <circle cx="38" cy="58" r="1.5" fill="%%ACCENT_CYAN%%"/>
  <circle cx="46" cy="62" r="1.5" fill="%%ACCENT_GREEN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric virtual switch with SDN flow cross-link lanes', zh: '现代 2.5D 等轴测虚拟交换机 vSwitch，具备 SDN 虚拟流表与虚拟接口阵列' }
  },
  {
    id: 'cloud-nat-gateway',
    equivalentGroup: 'router',
    provider: 'generic',
    style: 'isometric',
    category: 'cloud',
    deviceType: 'cloud',
    name: { en: 'Cloud NAT Gateway', zh: '云 NAT 网关' },
    code: 'NAT-GW',
    tags: ['nat', 'snat', 'dnat', 'gateway', 'cloud nat', 'dizhitongzhuan', 'NAT网关', '地址转换', '公网出口'],
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-nat-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-nat-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <polygon points="60,26 98,46 60,66 22,46" fill="url(#iso-nat-top)" stroke="%%BORDER_STROKE%%" stroke-width="1" stroke-opacity="0.8"/>
  <polygon points="22,46 60,66 60,82 22,62" fill="url(#iso-nat-left)" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="60,66 98,46 98,62 60,82" fill="%%BOTTOM_DARK%%" stroke="%%BORDER_STROKE%%" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- NAT Address Translation Converging Arrows -->
  <g stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff">
    <!-- Multiple Private IPs converging into Single Public IP -->
    <line x1="38" y1="40" x2="52" y2="46"/>
    <line x1="38" y1="52" x2="52" y2="46"/>
    <line x1="56" y1="46" x2="80" y2="46"/>
    <polygon points="76,43 84,46 76,49"/>
    <circle cx="54" cy="46" r="3" fill="%%ACCENT_AMBER%%"/>
  </g>
  <circle cx="30" cy="54" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="38" cy="58" r="1.5" fill="%%ACCENT_GREEN%%"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric NAT gateway with address translation converging flows', zh: '现代 2.5D 等轴测云 NAT 网关，展现私网向公网聚合转换的经典流向' }
  },

  // =========================================================================
  // 3. 2D 现代逻辑拓扑标准库 (Modern Flat L2/L3 Topology - Cisco / 华为 / 通用)
  // =========================================================================
  {
    id: 'flat-cisco-router',
    style: 'flat',
    provider: 'cisco',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Cisco Router (L3)', zh: '思科三层路由器 (经典圆筒)' },
    code: 'CISCO-RTR',
    tags: ['cisco', 'router', 'l3', 'luqi', 'luyouqi', '思科', '路由器', '三层路由', 'CCIE'],
    equivalentGroup: 'router',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="cisco-rtr-fill" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="70%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </radialGradient>
    <filter id="cisco-shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="%%BOTTOM_DARK%%" flood-opacity="0.35"/>
    </filter>
  </defs>
  <ellipse cx="40" cy="40" rx="36" ry="34" fill="url(#cisco-rtr-fill)" filter="url(#cisco-shadow)" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Cisco Standard 4 Arrows -->
  <g fill="#ffffff" stroke="none">
    <!-- Top-Left arrow (pointing inward) -->
    <path d="M 22 28 L 34 32 L 31 35 L 36 40 L 33 43 L 28 38 L 25 41 Z"/>
    <!-- Top-Right arrow (pointing outward) -->
    <path d="M 58 28 L 55 41 L 52 38 L 47 43 L 44 40 L 49 35 L 46 32 Z"/>
    <!-- Bottom-Left arrow (pointing outward) -->
    <path d="M 22 52 L 25 39 L 28 42 L 33 37 L 36 40 L 31 45 L 34 48 Z"/>
    <!-- Bottom-Right arrow (pointing inward) -->
    <path d="M 58 52 L 46 48 L 49 45 L 44 40 L 47 37 L 52 42 L 55 39 Z"/>
  </g>
  <circle cx="40" cy="40" r="3" fill="#ffffff" opacity="0.9"/>
</svg>`
  },
  {
    id: 'flat-cisco-l2-switch',
    style: 'flat',
    provider: 'cisco',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Cisco L2 Switch', zh: '思科二层交换机 (工作组)' },
    code: 'CISCO-L2',
    tags: ['cisco', 'switch', 'l2', 'jiaohuanji', '思科', '交换机', '二层交换机', '接入交换机'],
    equivalentGroup: 'l2-switch',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cisco-sw-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%LEFT_FACE%%"/>
    </linearGradient>
  </defs>
  <rect x="6" y="18" width="68" height="44" rx="8" fill="url(#cisco-sw-grad)" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Cisco L2 Dual Parallel Opposite Arrows -->
  <g fill="#ffffff">
    <!-- Top arrow: Left to Right -->
    <path d="M 18 32 L 52 32 L 52 27 L 62 35 L 52 43 L 52 38 L 18 38 Z"/>
    <!-- Bottom arrow: Right to Left -->
    <path d="M 62 48 L 28 48 L 28 43 L 18 51 L 28 59 L 28 54 L 62 54 Z"/>
  </g>
</svg>`
  },
  {
    id: 'flat-cisco-l3-switch',
    style: 'flat',
    provider: 'cisco',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Cisco Multi-Layer Switch (L3)', zh: '思科三层核心交换机' },
    code: 'CISCO-MLS',
    tags: ['cisco', 'mls', 'l3 switch', 'core switch', '思科', '三层交换机', '核心交换机', '多层交换机'],
    equivalentGroup: 'core-switch',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cisco-mls-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%LEFT_FACE%%"/>
    </linearGradient>
  </defs>
  <rect x="6" y="10" width="68" height="60" rx="10" fill="url(#cisco-mls-grad)" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Cisco Multi-layer Cross 4 Arrows -->
  <g fill="#ffffff">
    <!-- Up arrow -->
    <path d="M 40 18 L 47 28 L 43 28 L 43 36 L 37 36 L 37 28 L 33 28 Z"/>
    <!-- Down arrow -->
    <path d="M 40 62 L 33 52 L 37 52 L 37 44 L 43 44 L 43 52 L 47 52 Z"/>
    <!-- Left arrow -->
    <path d="M 18 40 L 28 33 L 28 37 L 36 37 L 36 43 L 28 43 L 28 47 Z"/>
    <!-- Right arrow -->
    <path d="M 62 40 L 52 47 L 52 43 L 44 43 L 44 37 L 52 37 L 52 33 Z"/>
  </g>
  <circle cx="40" cy="40" r="4" fill="#ffffff" opacity="0.95"/>
</svg>`
  },
  {
    id: 'flat-cisco-firewall',
    style: 'flat',
    provider: 'cisco',
    category: 'security',
    deviceType: 'physical',
    name: { en: 'Cisco Firewall (ASA/FTD)', zh: '思科经典红砖防火墙' },
    code: 'CISCO-FW',
    tags: ['cisco', 'firewall', 'asa', 'ftd', 'fanghuoqiang', '思科', '防火墙', '红砖墙'],
    equivalentGroup: 'firewall',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fw-brick-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>
  </defs>
  <rect x="8" y="16" width="64" height="48" rx="6" fill="url(#fw-brick-grad)" stroke="#7f1d1d" stroke-width="2"/>
  <!-- Classic Brick Lines -->
  <path d="M 8 32 L 72 32 M 8 48 L 72 48" stroke="#ffffff" stroke-width="2" opacity="0.85"/>
  <path d="M 28 16 L 28 32 M 52 16 L 52 32 M 18 32 L 18 48 M 40 32 L 40 48 M 62 32 L 62 48 M 30 48 L 30 64 M 54 48 L 54 64" stroke="#ffffff" stroke-width="2" opacity="0.85"/>
  <!-- Flame / Security Badge -->
  <circle cx="60" cy="22" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5"/>
</svg>`
  },
  {
    id: 'flat-huawei-switch',
    style: 'flat',
    provider: 'huawei',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Huawei CloudEngine Switch', zh: '华为三层核心交换机' },
    code: 'HW-CE',
    tags: ['huawei', 'cloudengine', 'switch', 'core switch', '华为', '交换机', '核心交换机', 'CE12800', '信创'],
    equivalentGroup: 'core-switch',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="16" width="64" height="48" rx="8" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Modern Geometric Arrows -->
  <path d="M 20 28 L 34 28 L 30 24 M 34 28 L 30 32" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 60 52 L 46 52 L 50 48 M 46 52 L 50 56" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 24 50 L 56 30" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="3 3"/>
  <circle cx="24" cy="50" r="3.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="56" cy="30" r="3.5" fill="%%ACCENT_CYAN%%"/>
  <!-- Status Indicator Dots -->
  <circle cx="16" cy="22" r="2" fill="%%ACCENT_GREEN%%"/>
  <circle cx="22" cy="22" r="2" fill="%%ACCENT_AMBER%%"/>
</svg>`
  },
  {
    id: 'flat-huawei-firewall',
    style: 'flat',
    provider: 'huawei',
    category: 'security',
    deviceType: 'physical',
    name: { en: 'Huawei USG NGFW', zh: '华为下一代防火墙 (USG)' },
    code: 'HW-USG',
    tags: ['huawei', 'usg', 'ngfw', 'firewall', '华为', '防火墙', '下一代防火墙', 'USG6000', '信创安全'],
    equivalentGroup: 'firewall',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hw-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </linearGradient>
  </defs>
  <!-- Security Shield shape -->
  <path d="M 40 8 L 66 18 C 66 45 40 68 40 72 C 40 68 14 45 14 18 Z" fill="url(#hw-shield-grad)" stroke="#ffffff" stroke-width="2"/>
  <!-- Lock Core -->
  <rect x="30" y="34" width="20" height="18" rx="4" fill="#ffffff"/>
  <path d="M 34 34 L 34 26 C 34 22 46 22 46 26 L 46 34" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="40" cy="42" r="2.5" fill="#991b1b"/>
</svg>`
  },
  {
    id: 'flat-fortinet-firewall',
    style: 'flat',
    provider: 'fortinet',
    category: 'security',
    deviceType: 'physical',
    name: { en: 'Fortinet FortiGate NGFW', zh: '飞塔 FortiGate 防火墙' },
    code: 'FG-NGFW',
    tags: ['fortinet', 'fortigate', 'ngfw', 'firewall', '飞塔', '防火墙', '安全网关'],
    equivalentGroup: 'firewall',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="14" width="64" height="52" rx="8" fill="#ee1c25" stroke="#be1219" stroke-width="2"/>
  <!-- Fortinet Iconic 4-block Red Matrix -->
  <g fill="#ffffff">
    <rect x="18" y="24" width="18" height="14" rx="3"/>
    <rect x="44" y="24" width="18" height="14" rx="3"/>
    <rect x="18" y="42" width="18" height="14" rx="3"/>
    <rect x="44" y="42" width="18" height="14" rx="3"/>
  </g>
  <circle cx="36" cy="40" r="4" fill="#111827"/>
  <circle cx="44" cy="40" r="4" fill="#111827"/>
</svg>`
  },
  {
    id: 'flat-generic-waf',
    style: 'flat',
    provider: 'generic',
    category: 'security',
    deviceType: 'physical',
    name: { en: 'Web App Firewall (WAF)', zh: '应用防护墙 (WAF)' },
    code: 'WAF',
    tags: ['waf', 'web application firewall', 'security', 'fanghuoqiang', '应用防火墙', 'Web防护'],
    equivalentGroup: 'waf',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="14" width="60" height="52" rx="8" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Globe / Web symbol + Shield -->
  <circle cx="40" cy="40" r="18" fill="none" stroke="#ffffff" stroke-width="2"/>
  <ellipse cx="40" cy="40" rx="8" ry="18" fill="none" stroke="#ffffff" stroke-width="2"/>
  <line x1="22" y1="40" x2="58" y2="40" stroke="#ffffff" stroke-width="2"/>
  <!-- Red Shield on corner -->
  <path d="M 52 44 L 66 48 C 66 60 52 68 52 68 C 52 68 38 60 38 48 Z" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
</svg>`
  },
  {
    id: 'flat-generic-ap',
    style: 'flat',
    provider: 'generic',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Wireless Access Point (AP)', zh: '无线接入点 (AP)' },
    code: 'AP',
    tags: ['ap', 'wireless', 'wifi', 'wlan', '无线AP', '无线接入点', '吸顶AP', 'WiFi6'],
    equivalentGroup: 'ap',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="44" r="28" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- WiFi Radiation Arcs -->
  <path d="M 22 28 A 22 22 0 0 1 58 28" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M 28 35 A 15 15 0 0 1 52 35" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <path d="M 34 42 A 8 8 0 0 1 46 42" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="40" cy="50" r="3.5" fill="%%ACCENT_GREEN%%"/>
</svg>`
  },
  {
    id: 'flat-generic-server',
    style: 'flat',
    provider: 'generic',
    category: 'compute',
    deviceType: 'physical',
    name: { en: 'Rack Server / Host', zh: '机架式服务器 / 主机' },
    code: 'SERVER',
    tags: ['server', 'host', 'compute', 'fuwuqi', '服务器', '计算节点', '主机', '物理机'],
    equivalentGroup: 'server',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="22" width="64" height="36" rx="6" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Drive Bays and Status LEDs -->
  <rect x="14" y="28" width="12" height="10" rx="2" fill="#1e293b"/>
  <rect x="29" y="28" width="12" height="10" rx="2" fill="#1e293b"/>
  <rect x="44" y="28" width="12" height="10" rx="2" fill="#1e293b"/>
  <line x1="14" y1="46" x2="48" y2="46" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
  <circle cx="61" cy="31" r="2.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="61" cy="38" r="2.5" fill="%%ACCENT_CYAN%%"/>
  <circle cx="61" cy="45" r="2.5" fill="%%ACCENT_AMBER%%"/>
</svg>`
  },


  // =========================================================================
  // 4. 云架构与云原生服务标准库 (Cloud Architecture - AWS / 阿里云 / K8s)
  // =========================================================================
  {
    id: 'cloud-aws-vpc-arch',
    style: 'cloud',
    provider: 'aws',
    category: 'cloud',
    deviceType: 'cloud',
    name: { en: 'AWS Virtual Private Cloud', zh: 'AWS 虚拟私有云 (VPC)' },
    code: 'AWS-VPC',
    tags: ['aws', 'vpc', 'cloud', 'network', 'subnets', '亚马逊', '虚拟私有云', '私网'],
    equivalentGroup: 'vpc',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="8" fill="#8c4fff" fill-opacity="0.12" stroke="#8c4fff" stroke-width="2.5" stroke-dasharray="4 4"/>
  <!-- AWS Cloud Shield Outline -->
  <rect x="20" y="20" width="40" height="40" rx="6" fill="#8c4fff" stroke="#ffffff" stroke-width="2"/>
  <path d="M 28 40 L 52 40 M 40 28 L 40 52" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="40" cy="40" r="4" fill="#ff9900"/>
</svg>`
  },
  {
    id: 'cloud-aws-ec2-arch',
    style: 'cloud',
    provider: 'aws',
    category: 'compute',
    deviceType: 'cloud',
    name: { en: 'AWS EC2 Elastic Compute', zh: 'AWS EC2 弹性计算实例' },
    code: 'AWS-EC2',
    tags: ['aws', 'ec2', 'vm', 'instance', 'compute', '亚马逊', '云主机', '弹性计算'],
    equivalentGroup: 'ecs',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="10" fill="#ec7211" stroke="#cc5f08" stroke-width="2"/>
  <!-- EC2 Processor Grid -->
  <rect x="24" y="24" width="32" height="32" rx="4" fill="#ffffff"/>
  <rect x="28" y="28" width="24" height="24" rx="2" fill="#ec7211"/>
  <!-- Pins -->
  <line x1="18" y1="32" x2="24" y2="32" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="18" y1="40" x2="24" y2="40" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="18" y1="48" x2="24" y2="48" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="56" y1="32" x2="62" y2="32" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="56" y1="40" x2="62" y2="40" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="56" y1="48" x2="62" y2="48" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
</svg>`
  },
  {
    id: 'cloud-aws-s3-arch',
    style: 'cloud',
    provider: 'aws',
    category: 'storage',
    deviceType: 'cloud',
    name: { en: 'AWS S3 Simple Storage', zh: 'AWS S3 对象存储桶' },
    code: 'AWS-S3',
    tags: ['aws', 's3', 'storage', 'bucket', 'oss', '亚马逊', '对象存储', '存储桶'],
    equivalentGroup: 'storage',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="10" fill="#3f8624" stroke="#2f661a" stroke-width="2"/>
  <!-- S3 Bucket Cylinder -->
  <path d="M 22 28 C 22 24 58 24 58 28 L 54 52 C 54 56 26 56 26 52 Z" fill="#ffffff"/>
  <ellipse cx="40" cy="28" rx="18" ry="5" fill="#2f661a"/>
  <ellipse cx="40" cy="27" rx="17" ry="4" fill="#ffffff"/>
  <path d="M 26 38 C 30 42 50 42 54 38" fill="none" stroke="#3f8624" stroke-width="2"/>
</svg>`
  },
  {
    id: 'cloud-aliyun-ecs-arch',
    style: 'cloud',
    provider: 'aliyun',
    category: 'compute',
    deviceType: 'cloud',
    name: { en: 'Alibaba Cloud ECS', zh: '阿里云 ECS 弹性计算' },
    code: 'ALI-ECS',
    tags: ['aliyun', 'ecs', 'cloud', 'vm', 'compute', '阿里云', '云服务器', '弹性计算'],
    equivalentGroup: 'ecs',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#ff6a00" stroke="#d95a00" stroke-width="2"/>
  <!-- Hexagon Computing Core -->
  <polygon points="40,20 58,30 58,50 40,60 22,50 22,30" fill="#ffffff"/>
  <polygon points="40,25 53,32 53,48 40,55 27,48 27,32" fill="#ff6a00"/>
  <circle cx="40" cy="40" r="5" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'cloud-aliyun-oss-arch',
    style: 'cloud',
    provider: 'aliyun',
    category: 'storage',
    deviceType: 'cloud',
    name: { en: 'Alibaba Cloud OSS', zh: '阿里云 OSS 对象存储' },
    code: 'ALI-OSS',
    tags: ['aliyun', 'oss', 'storage', 'bucket', 's3', '阿里云', '对象存储', '海量存储'],
    equivalentGroup: 'storage',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#0080ff" stroke="#0066cc" stroke-width="2"/>
  <!-- Layered Data Blocks -->
  <rect x="22" y="24" width="36" height="8" rx="2" fill="#ffffff"/>
  <rect x="22" y="36" width="36" height="8" rx="2" fill="#ffffff" opacity="0.9"/>
  <rect x="22" y="48" width="36" height="8" rx="2" fill="#ffffff" opacity="0.8"/>
  <circle cx="52" cy="28" r="2" fill="#0080ff"/>
  <circle cx="52" cy="40" r="2" fill="#0080ff"/>
  <circle cx="52" cy="52" r="2" fill="#0080ff"/>
</svg>`
  },
  {
    id: 'cloud-k8s-pod-arch',
    style: 'cloud',
    provider: 'k8s',
    category: 'compute',
    deviceType: 'cloud',
    name: { en: 'Kubernetes Pod (Helm Wheel)', zh: 'Kubernetes Pod 原生舵轮' },
    code: 'K8S-POD',
    tags: ['k8s', 'kubernetes', 'pod', 'cncf', 'container', 'docker', '容器', '云原生', '舵轮'],
    equivalentGroup: 'k8s-pod',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="32" fill="#326ce5" stroke="#1d4ed8" stroke-width="2"/>
  <!-- K8s Wheel Spokes -->
  <circle cx="40" cy="40" r="10" fill="#ffffff"/>
  <circle cx="40" cy="40" r="5" fill="#326ce5"/>
  <g stroke="#ffffff" stroke-width="3.5" stroke-linecap="round">
    <line x1="40" y1="16" x2="40" y2="30"/>
    <line x1="40" y1="50" x2="40" y2="64"/>
    <line x1="16" y1="40" x2="30" y2="40"/>
    <line x1="50" y1="40" x2="64" y2="40"/>
    <line x1="23" y1="23" x2="33" y2="33"/>
    <line x1="47" y1="47" x2="57" y2="57"/>
    <line x1="23" y1="57" x2="33" y2="47"/>
    <line x1="47" y1="33" x2="57" y2="23"/>
  </g>
</svg>`
  },
  {
    id: 'cloud-k8s-service-arch',
    style: 'cloud',
    provider: 'k8s',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'Kubernetes Service (SVC)', zh: 'Kubernetes Service 负载服务' },
    code: 'K8S-SVC',
    tags: ['k8s', 'svc', 'service', 'clusterip', 'nodeport', 'kubernetes', '服务网格', '云原生网络'],
    equivalentGroup: 'load-balancer',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,12 66,26 66,54 40,68 14,54 14,26" fill="#326ce5" stroke="#1e40af" stroke-width="2"/>
  <!-- Service Routing Arrows -->
  <circle cx="40" cy="40" r="7" fill="#ffffff"/>
  <path d="M 28 32 L 35 37 M 52 32 L 45 37 M 40 56 L 40 48" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
</svg>`
  },

  // =========================================================================
  // 5. 2D 逻辑拓扑扩展库 (Cisco / 华为 / H3C / 工业与安全设备 - 20款)
  // =========================================================================
  {
    id: 'flat-cisco-dist-switch',
    style: 'flat',
    provider: 'cisco',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Cisco Distribution Switch', zh: '思科汇聚交换机 (分层网络)' },
    code: 'CISCO-DIST',
    tags: ['cisco', 'switch', 'distribution', 'l3 switch', '思科', '汇聚交换机', '分层设计', 'CCIE'],
    equivalentGroup: 'core-switch',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="14" width="64" height="52" rx="8" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Two sets of dual parallel opposing arrows -->
  <g fill="#ffffff">
    <path d="M 18 28 L 46 28 L 46 24 L 54 30 L 46 36 L 46 32 L 18 32 Z"/>
    <path d="M 62 40 L 34 40 L 34 36 L 26 42 L 34 48 L 34 44 L 62 44 Z"/>
    <path d="M 18 52 L 46 52 L 46 48 L 54 54 L 46 60 L 46 56 L 18 56 Z"/>
  </g>
  <circle cx="60" cy="24" r="2" fill="%%ACCENT_GREEN%%"/>
</svg>`
  },
  {
    id: 'flat-cisco-access-sw',
    style: 'flat',
    provider: 'cisco',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Cisco Access Switch', zh: '思科接入交换机 (百兆/千兆)' },
    code: 'CISCO-ACC',
    tags: ['cisco', 'access switch', 'l2', 'catalyst', '思科', '接入交换机', '二层交换机', '桌面接入'],
    equivalentGroup: 'l2-switch',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="64" height="40" rx="6" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <g fill="#ffffff">
    <path d="M 20 34 L 48 34 L 48 30 L 58 37 L 48 44 L 48 40 L 20 40 Z"/>
    <path d="M 60 46 L 32 46 L 32 42 L 22 49 L 32 56 L 32 52 L 60 52 Z"/>
  </g>
  <rect x="14" y="24" width="6" height="3" rx="1" fill="%%ACCENT_GREEN%%"/>
  <rect x="23" y="24" width="6" height="3" rx="1" fill="%%ACCENT_GREEN%%"/>
</svg>`
  },
  {
    id: 'flat-cisco-nexus',
    style: 'flat',
    provider: 'cisco',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Cisco Nexus DC Switch', zh: '思科 Nexus 数据中心交换机' },
    code: 'CISCO-NEXUS',
    tags: ['cisco', 'nexus', 'datacenter', 'n9k', '思科', '数据中心交换机', '核心机', 'VxLAN'],
    equivalentGroup: 'core-switch',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="64" height="56" rx="8" fill="%%BOTTOM_DARK%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <rect x="12" y="16" width="56" height="48" rx="6" fill="%%LEFT_FACE%%"/>
  <!-- Multi-layer Fabric Diamond Matrix -->
  <polygon points="40,24 54,34 54,46 40,56 26,46 26,34" fill="none" stroke="#ffffff" stroke-width="2.5"/>
  <line x1="40" y1="24" x2="40" y2="56" stroke="#ffffff" stroke-width="2"/>
  <line x1="26" y1="34" x2="54" y2="46" stroke="#ffffff" stroke-width="2"/>
  <line x1="26" y1="46" x2="54" y2="34" stroke="#ffffff" stroke-width="2"/>
  <circle cx="40" cy="40" r="4" fill="%%ACCENT_CYAN%%"/>
</svg>`
  },
  {
    id: 'flat-cisco-asr-router',
    style: 'flat',
    provider: 'cisco',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Cisco ASR Enterprise Router', zh: '思科 ASR/ISR 汇聚路由器' },
    code: 'CISCO-ASR',
    tags: ['cisco', 'asr', 'isr', 'router', 'wan', '思科', '广域网路由器', '骨干路由', 'BGP'],
    equivalentGroup: 'router',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="34" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- 8-way routing star -->
  <g fill="#ffffff">
    <path d="M 40 16 L 44 26 L 36 26 Z"/>
    <path d="M 40 64 L 44 54 L 36 54 Z"/>
    <path d="M 16 40 L 26 36 L 26 44 Z"/>
    <path d="M 64 40 L 54 36 L 54 44 Z"/>
  </g>
  <circle cx="40" cy="40" r="12" fill="none" stroke="#ffffff" stroke-width="3"/>
  <circle cx="40" cy="40" r="5" fill="%%ACCENT_GREEN%%"/>
</svg>`
  },
  {
    id: 'flat-cisco-vpn-concentrator',
    style: 'flat',
    provider: 'cisco',
    category: 'security',
    deviceType: 'physical',
    name: { en: 'Cisco VPN Concentrator', zh: '思科 VPN 专线网关' },
    code: 'CISCO-VPN',
    tags: ['cisco', 'vpn', 'ipsec', 'tunnel', '思科', 'VPN网关', '加密隧道', '专线'],
    equivalentGroup: 'vpn',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="16" width="64" height="48" rx="8" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Keyhole & Tunnel Lock -->
  <path d="M 32 30 C 32 24 48 24 48 30 L 48 36 L 32 36 Z" fill="none" stroke="#ffffff" stroke-width="3"/>
  <rect x="26" y="36" width="28" height="20" rx="4" fill="#ffffff"/>
  <circle cx="40" cy="44" r="3" fill="%%LEFT_FACE%%"/>
  <polygon points="38,44 42,44 43,51 37,51" fill="%%LEFT_FACE%%"/>
</svg>`
  },
  {
    id: 'flat-cisco-wlc',
    style: 'flat',
    provider: 'cisco',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Cisco Wireless LAN Controller', zh: '思科无线控制器 (WLC)' },
    code: 'CISCO-WLC',
    tags: ['cisco', 'wlc', 'wireless', 'ac', '思科', '无线控制器', 'AC', '漫游管理'],
    equivalentGroup: 'ap',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="16" width="64" height="48" rx="8" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- WiFi Radiation over switch -->
  <path d="M 24 34 A 20 20 0 0 1 56 34" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <path d="M 30 40 A 12 12 0 0 1 50 40" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="40" cy="48" r="3.5" fill="%%ACCENT_GREEN%%"/>
  <line x1="16" y1="56" x2="64" y2="56" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.6"/>
</svg>`
  },
  {
    id: 'flat-huawei-ne-router',
    style: 'flat',
    provider: 'huawei',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Huawei NetEngine Router', zh: '华为 NetEngine 骨干路由器' },
    code: 'HW-NE',
    tags: ['huawei', 'netengine', 'ne40e', 'router', '华为', '骨干路由器', '核心路由', '信创'],
    equivalentGroup: 'router',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="40" cy="40" rx="34" ry="32" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Huawei Dynamic Cross Wave -->
  <path d="M 22 28 Q 40 40 58 28" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M 22 52 Q 40 40 58 52" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="40" cy="40" r="4.5" fill="%%ACCENT_RED%%"/>
  <circle cx="22" cy="28" r="2.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="58" cy="28" r="2.5" fill="%%ACCENT_GREEN%%"/>
</svg>`
  },
  {
    id: 'flat-huawei-ar-router',
    style: 'flat',
    provider: 'huawei',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Huawei AR Enterprise Router', zh: '华为 AR 多业务企业路由器' },
    code: 'HW-AR',
    tags: ['huawei', 'ar', 'router', 'branch', '华为', '企业路由器', '分支路由', 'AR6000'],
    equivalentGroup: 'router',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="64" height="40" rx="8" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <circle cx="26" cy="40" r="10" fill="none" stroke="#ffffff" stroke-width="2.5"/>
  <circle cx="54" cy="40" r="10" fill="none" stroke="#ffffff" stroke-width="2.5"/>
  <path d="M 26 40 L 54 40" stroke="#ffffff" stroke-width="3"/>
  <circle cx="40" cy="40" r="3.5" fill="%%ACCENT_CYAN%%"/>
</svg>`
  },
  {
    id: 'flat-huawei-wlan-ac',
    style: 'flat',
    provider: 'huawei',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Huawei AirEngine WLAN AC', zh: '华为 AirEngine 无线控制器' },
    code: 'HW-AC',
    tags: ['huawei', 'airengine', 'wlan', 'ac', 'wifi6', '华为', '无线控制器', 'AC'],
    equivalentGroup: 'ap',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="16" width="64" height="48" rx="8" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Huawei Red Accented Signal -->
  <path d="M 20 44 L 34 26 L 46 38 L 60 22" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="60" cy="22" r="3.5" fill="#ef4444"/>
  <circle cx="46" cy="38" r="2.5" fill="#ffffff"/>
  <circle cx="34" cy="26" r="2.5" fill="#ffffff"/>
  <circle cx="20" cy="44" r="2.5" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'flat-huawei-antiddos',
    style: 'flat',
    provider: 'huawei',
    category: 'security',
    deviceType: 'physical',
    name: { en: 'Huawei AntiDDoS Cleaner', zh: '华为 AntiDDoS 流量清洗中心' },
    code: 'HW-DDOS',
    tags: ['huawei', 'ddos', 'antiddos', 'security', '华为', '抗DDoS', '流量清洗', '防攻击'],
    equivalentGroup: 'firewall',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,10 68,22 68,52 40,70 12,52 12,22" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Funnel / Filter Flow -->
  <polygon points="26,26 54,26 44,42 44,54 36,54 36,42" fill="#ffffff"/>
  <line x1="40" y1="54" x2="40" y2="62" stroke="%%ACCENT_GREEN%%" stroke-width="3" stroke-linecap="round"/>
</svg>`
  },
  {
    id: 'flat-h3c-core-switch',
    style: 'flat',
    provider: 'h3c',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'H3C S10500 Core Switch', zh: '新华三 H3C 核心交换机' },
    code: 'H3C-S10K',
    tags: ['h3c', 'switch', 'core', 's10500', '新华三', '核心交换机', '框式交换机', '信创'],
    equivalentGroup: 'core-switch',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="14" width="64" height="52" rx="8" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- H3C Geometric Cube-Arrow -->
  <g fill="#ffffff">
    <path d="M 22 30 L 40 18 L 58 30 L 40 42 Z"/>
    <path d="M 22 34 L 40 46 L 40 62 L 22 50 Z" fill-opacity="0.8"/>
    <path d="M 58 34 L 40 46 L 40 62 L 58 50 Z" fill-opacity="0.6"/>
  </g>
</svg>`
  },
  {
    id: 'flat-h3c-firewall',
    style: 'flat',
    provider: 'h3c',
    category: 'security',
    deviceType: 'physical',
    name: { en: 'H3C SecPath NGFW', zh: '新华三 SecPath 下一代防火墙' },
    code: 'H3C-FW',
    tags: ['h3c', 'secpath', 'firewall', 'ngfw', '新华三', '防火墙', '安全网关'],
    equivalentGroup: 'firewall',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <path d="M 40 10 L 66 20 C 66 48 40 68 40 70 C 40 68 14 48 14 20 Z" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Double Secure Interlock -->
  <path d="M 30 36 C 30 30 38 30 38 36 L 38 46 C 38 52 30 52 30 46 Z" fill="none" stroke="#ffffff" stroke-width="3"/>
  <path d="M 50 36 C 50 30 42 30 42 36 L 42 46 C 42 52 50 52 50 46 Z" fill="none" stroke="#ffffff" stroke-width="3"/>
</svg>`
  },
  {
    id: 'flat-generic-sdwan',
    style: 'flat',
    provider: 'generic',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'SD-WAN Edge Gateway', zh: 'SD-WAN 智能边缘网关' },
    code: 'SD-WAN',
    tags: ['sdwan', 'gateway', 'wan', 'overlay', '智能选路', '边缘网关', '混合广域网'],
    equivalentGroup: 'router',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="16" width="64" height="48" rx="10" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Cloud Loop Interconnect -->
  <circle cx="28" cy="40" r="10" fill="none" stroke="#ffffff" stroke-width="2.5"/>
  <circle cx="52" cy="40" r="10" fill="none" stroke="#ffffff" stroke-width="2.5"/>
  <path d="M 38 34 L 42 34 M 38 46 L 42 46" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <circle cx="28" cy="40" r="3" fill="%%ACCENT_GREEN%%"/>
  <circle cx="52" cy="40" r="3" fill="%%ACCENT_CYAN%%"/>
</svg>`
  },
  {
    id: 'flat-generic-ips-ids',
    style: 'flat',
    provider: 'generic',
    category: 'security',
    deviceType: 'physical',
    name: { en: 'IPS / IDS Security Device', zh: '入侵防御检测系统 (IPS/IDS)' },
    code: 'IPS-IDS',
    tags: ['ips', 'ids', 'intrusion', 'security', '入侵防御', '入侵检测', '安全防护'],
    equivalentGroup: 'firewall',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="16" width="64" height="48" rx="8" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Radar Crosshairs & Bug Detection -->
  <circle cx="40" cy="40" r="16" fill="none" stroke="#ffffff" stroke-width="2"/>
  <circle cx="40" cy="40" r="8" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2 2"/>
  <line x1="40" y1="20" x2="40" y2="60" stroke="#ffffff" stroke-width="1.5"/>
  <line x1="20" y1="40" x2="60" y2="40" stroke="#ffffff" stroke-width="1.5"/>
  <circle cx="48" cy="32" r="3" fill="#ef4444"/>
</svg>`
  },
  {
    id: 'flat-generic-bastion',
    style: 'flat',
    provider: 'generic',
    category: 'security',
    deviceType: 'physical',
    name: { en: 'Bastion / PAM Host', zh: '运维安全审计堡垒机' },
    code: 'BASTION',
    tags: ['bastion', 'pam', 'audit', 'ssh', 'baoleiji', '堡垒机', '运维审计', '跳板机'],
    equivalentGroup: 'bastion',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="16" width="60" height="48" rx="6" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Castle Battlement Silhouette -->
  <path d="M 22 26 L 22 34 L 28 34 L 28 26 L 36 26 L 36 34 L 44 34 L 44 26 L 52 26 L 52 34 L 58 34 L 58 26" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Keyhole in tower -->
  <circle cx="40" cy="44" r="3.5" fill="#ffffff"/>
  <polygon points="38,44 42,44 43,54 37,54" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'flat-generic-loadbalancer-f5',
    style: 'flat',
    provider: 'generic',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Application Delivery ADC (F5)', zh: '应用交付 / 负载均衡 (ADC)' },
    code: 'ADC-LB',
    tags: ['adc', 'load balancer', 'f5', 'a10', 'fuzaijunheng', '负载均衡', '应用交付', 'SLB'],
    equivalentGroup: 'load-balancer',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="32" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Splitting Multi-path Traffic -->
  <line x1="18" y1="40" x2="36" y2="40" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <path d="M 36 40 L 52 26 M 36 40 L 58 40 M 36 40 L 52 54" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <circle cx="56" cy="26" r="3.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="62" cy="40" r="3.5" fill="%%ACCENT_CYAN%%"/>
  <circle cx="56" cy="54" r="3.5" fill="%%ACCENT_AMBER%%"/>
</svg>`
  },
  {
    id: 'flat-generic-poe-switch',
    style: 'flat',
    provider: 'generic',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'PoE Powered Switch', zh: 'PoE 远程供电交换机' },
    code: 'POE-SW',
    tags: ['poe', 'switch', 'power', 'gongdian', 'PoE交换机', '供电交换机', '安防供电'],
    equivalentGroup: 'l2-switch',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="64" height="40" rx="6" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Switch Arrows + Lightning Bolt -->
  <path d="M 18 36 L 42 36 M 18 46 L 42 46" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
  <!-- Power Lightning -->
  <polygon points="56,26 48,40 54,40 50,54 62,38 56,38" fill="#f59e0b" stroke="#ffffff" stroke-width="1.2"/>
</svg>`
  },
  {
    id: 'flat-generic-industrial-switch',
    style: 'flat',
    provider: 'generic',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'DIN-Rail Industrial Switch', zh: '工业导轨式交换机' },
    code: 'IND-SW',
    tags: ['industrial', 'din-rail', 'switch', 'gongye', '工业交换机', '导轨交换机', '工控网络'],
    equivalentGroup: 'l2-switch',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="22" y="10" width="36" height="60" rx="4" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- DIN Rail Clips -->
  <rect x="16" y="26" width="6" height="12" rx="1" fill="%%BOTTOM_DARK%%"/>
  <rect x="16" y="44" width="6" height="12" rx="1" fill="%%BOTTOM_DARK%%"/>
  <!-- Port LEDs Matrix -->
  <circle cx="34" cy="24" r="2.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="46" cy="24" r="2.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="34" cy="34" r="2.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="46" cy="34" r="2.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="34" cy="44" r="2.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="46" cy="44" r="2.5" fill="%%ACCENT_AMBER%%"/>
</svg>`
  },
  {
    id: 'flat-generic-patch-panel',
    style: 'flat',
    provider: 'generic',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Network Patch Panel', zh: '网络跳线配线架 (Patch Panel)' },
    code: 'PATCH-PANEL',
    tags: ['patch panel', 'wiring', 'rack', 'peixianjia', '配线架', '理线架', '跳线架'],
    equivalentGroup: 'rack',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="26" width="68" height="28" rx="4" fill="%%BOTTOM_DARK%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- RJ45 Port rows -->
  <rect x="12" y="32" width="6" height="6" fill="#ffffff"/>
  <rect x="22" y="32" width="6" height="6" fill="#ffffff"/>
  <rect x="32" y="32" width="6" height="6" fill="#ffffff"/>
  <rect x="42" y="32" width="6" height="6" fill="#ffffff"/>
  <rect x="52" y="32" width="6" height="6" fill="#ffffff"/>
  <rect x="62" y="32" width="6" height="6" fill="#ffffff"/>
  <rect x="12" y="42" width="6" height="6" fill="#ffffff"/>
  <rect x="22" y="42" width="6" height="6" fill="#ffffff"/>
  <rect x="32" y="42" width="6" height="6" fill="#ffffff"/>
  <rect x="42" y="42" width="6" height="6" fill="#ffffff"/>
  <rect x="52" y="42" width="6" height="6" fill="#ffffff"/>
  <rect x="62" y="42" width="6" height="6" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'flat-generic-fiber-transceiver',
    style: 'flat',
    provider: 'generic',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Optical Media Converter', zh: '光电转换器 / 光纤收发器' },
    code: 'FIBER-CONV',
    tags: ['fiber', 'media converter', 'transceiver', 'guangxian', '光电转换器', '光纤收发器', '光端机'],
    equivalentGroup: 'sfp',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="22" width="60" height="36" rx="6" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Dual Fiber loop -->
  <circle cx="28" cy="40" r="8" fill="none" stroke="#ffffff" stroke-width="2"/>
  <circle cx="52" cy="40" r="8" fill="none" stroke="#ffffff" stroke-width="2"/>
  <line x1="28" y1="40" x2="52" y2="40" stroke="%%ACCENT_GREEN%%" stroke-width="2.5" stroke-dasharray="2 2"/>
</svg>`
  },

  // =========================================================================
  // 6. 云服务与云原生生态官方扩展库 (AWS / 阿里云 / Azure / CNCF - 28款)
  // =========================================================================
  {
    id: 'cloud-aws-lambda-arch',
    style: 'cloud',
    provider: 'aws',
    category: 'compute',
    deviceType: 'cloud',
    name: { en: 'AWS Lambda Serverless', zh: 'AWS Lambda 无服务器计算' },
    code: 'AWS-LAMBDA',
    tags: ['aws', 'lambda', 'serverless', 'faas', 'function', '亚马逊', '函数计算', '无服务器'],
    equivalentGroup: 'ecs',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#ec7211" stroke="#cc5f08" stroke-width="2"/>
  <!-- Lambda Greek Letter -->
  <path d="M 28 54 L 38 32 M 34 54 L 46 26 L 54 26 M 42 36 L 54 54" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'cloud-aws-rds-arch',
    style: 'cloud',
    provider: 'aws',
    category: 'storage',
    deviceType: 'cloud',
    name: { en: 'AWS RDS Relational DB', zh: 'AWS RDS 云关系型数据库' },
    code: 'AWS-RDS',
    tags: ['aws', 'rds', 'mysql', 'postgres', 'database', '亚马逊', '关系型数据库', '云数据库'],
    equivalentGroup: 'database',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#3b48cc" stroke="#2a3599" stroke-width="2"/>
  <!-- Multi-tier database cylinders -->
  <ellipse cx="40" cy="28" rx="18" ry="6" fill="#ffffff"/>
  <path d="M 22 28 V 38 C 22 44 58 44 58 38 V 28 Z" fill="#ffffff" fill-opacity="0.85"/>
  <path d="M 22 38 V 48 C 22 54 58 54 58 48 V 38 Z" fill="#ffffff" fill-opacity="0.7"/>
</svg>`
  },
  {
    id: 'cloud-aws-dynamodb-arch',
    style: 'cloud',
    provider: 'aws',
    category: 'storage',
    deviceType: 'cloud',
    name: { en: 'AWS DynamoDB NoSQL', zh: 'AWS DynamoDB 键值数据库' },
    code: 'AWS-DDB',
    tags: ['aws', 'dynamodb', 'nosql', 'key-value', 'database', '亚马逊', '文档数据库'],
    equivalentGroup: 'database',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#3b48cc" stroke="#2a3599" stroke-width="2"/>
  <!-- Partition grid blocks -->
  <rect x="24" y="24" width="14" height="14" rx="2" fill="#ffffff"/>
  <rect x="42" y="24" width="14" height="14" rx="2" fill="#ffffff"/>
  <rect x="24" y="42" width="14" height="14" rx="2" fill="#ffffff"/>
  <rect x="42" y="42" width="14" height="14" rx="2" fill="#38bdf8"/>
</svg>`
  },
  {
    id: 'cloud-aws-route53-arch',
    style: 'cloud',
    provider: 'aws',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'AWS Route 53 Cloud DNS', zh: 'AWS Route 53 高可用云解析' },
    code: 'AWS-R53',
    tags: ['aws', 'route53', 'dns', 'domain', 'network', '亚马逊', '域名解析', '云解析'],
    equivalentGroup: 'router',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#8c4fff" stroke="#6d28d9" stroke-width="2"/>
  <!-- Route 53 Roadsign & Globe -->
  <circle cx="40" cy="40" r="18" fill="none" stroke="#ffffff" stroke-width="2"/>
  <polygon points="40,24 54,40 40,40 40,54 36,54 36,40 26,40" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'cloud-aws-cloudfront-arch',
    style: 'cloud',
    provider: 'aws',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'AWS CloudFront Global CDN', zh: 'AWS CloudFront 全球加速 CDN' },
    code: 'AWS-CF',
    tags: ['aws', 'cloudfront', 'cdn', 'edge', 'cache', '亚马逊', '内容分发', '边缘节点'],
    equivalentGroup: 'load-balancer',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#8c4fff" stroke="#6d28d9" stroke-width="2"/>
  <!-- Globe with Edge radiating points -->
  <circle cx="40" cy="40" r="14" fill="#ffffff"/>
  <circle cx="40" cy="40" r="14" fill="none" stroke="#8c4fff" stroke-width="2"/>
  <circle cx="26" cy="26" r="3" fill="#ff9900"/>
  <circle cx="54" cy="26" r="3" fill="#ff9900"/>
  <circle cx="54" cy="54" r="3" fill="#ff9900"/>
  <circle cx="26" cy="54" r="3" fill="#ff9900"/>
</svg>`
  },
  {
    id: 'cloud-aws-tgw-arch',
    style: 'cloud',
    provider: 'aws',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'AWS Transit Gateway (TGW)', zh: 'AWS Transit Gateway 企业中转网关' },
    code: 'AWS-TGW',
    tags: ['aws', 'tgw', 'transit gateway', 'vpc hub', '亚马逊', '中转网关', '专线互联'],
    equivalentGroup: 'router',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#8c4fff" stroke="#6d28d9" stroke-width="2"/>
  <!-- Hub-and-spoke star -->
  <circle cx="40" cy="40" r="8" fill="#ff9900"/>
  <line x1="40" y1="18" x2="40" y2="62" stroke="#ffffff" stroke-width="3"/>
  <line x1="18" y1="40" x2="62" y2="40" stroke="#ffffff" stroke-width="3"/>
  <line x1="24" y1="24" x2="56" y2="56" stroke="#ffffff" stroke-width="2.5"/>
  <line x1="24" y1="56" x2="56" y2="24" stroke="#ffffff" stroke-width="2.5"/>
</svg>`
  },
  {
    id: 'cloud-aws-nat-gw-arch',
    style: 'cloud',
    provider: 'aws',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'AWS NAT Gateway', zh: 'AWS NAT 出网网关' },
    code: 'AWS-NAT',
    tags: ['aws', 'nat gateway', 'snat', 'internet', '亚马逊', 'NAT网关', '私网出海'],
    equivalentGroup: 'router',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#8c4fff" stroke="#6d28d9" stroke-width="2"/>
  <!-- Bidirectional address translation arrows -->
  <path d="M 24 34 L 56 34 M 50 28 L 56 34 L 50 40" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 56 46 L 24 46 M 30 40 L 24 46 L 30 52" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'cloud-aws-iam-arch',
    style: 'cloud',
    provider: 'aws',
    category: 'security',
    deviceType: 'cloud',
    name: { en: 'AWS IAM Identity & Access', zh: 'AWS IAM 身份与访问管理' },
    code: 'AWS-IAM',
    tags: ['aws', 'iam', 'auth', 'security', 'role', '亚马逊', '身份鉴权', '权限管控'],
    equivalentGroup: 'bastion',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#ef4444" stroke="#dc2626" stroke-width="2"/>
  <!-- User ID Card + Key Badge -->
  <rect x="22" y="24" width="36" height="32" rx="4" fill="#ffffff"/>
  <circle cx="34" cy="36" r="4.5" fill="#ef4444"/>
  <line x1="44" y1="33" x2="52" y2="33" stroke="#ef4444" stroke-width="2"/>
  <line x1="44" y1="39" x2="50" y2="39" stroke="#ef4444" stroke-width="2"/>
  <circle cx="40" cy="48" r="2.5" fill="#ef4444"/>
</svg>`
  },
  {
    id: 'cloud-aws-cloudwatch-arch',
    style: 'cloud',
    provider: 'aws',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'AWS CloudWatch Observability', zh: 'AWS CloudWatch 统一可观测告警' },
    code: 'AWS-CW',
    tags: ['aws', 'cloudwatch', 'metrics', 'logs', 'alarm', '亚马逊', '监控中心', '告警'],
    equivalentGroup: 'bastion',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#ff4f8b" stroke="#e11d48" stroke-width="2"/>
  <!-- Metric Heartbeat graph -->
  <path d="M 20 44 L 32 44 L 38 26 L 46 54 L 52 38 L 60 44" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'cloud-aws-api-gateway-arch',
    style: 'cloud',
    provider: 'aws',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'AWS API Gateway', zh: 'AWS API Gateway 接口网关' },
    code: 'AWS-APIGW',
    tags: ['aws', 'api gateway', 'rest', 'http', 'gateway', '亚马逊', 'API网关', '微服务网关'],
    equivalentGroup: 'waf',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#8c4fff" stroke="#6d28d9" stroke-width="2"/>
  <!-- Gateway Portals -->
  <rect x="22" y="24" width="36" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="2.5"/>
  <line x1="30" y1="40" x2="50" y2="40" stroke="#ffffff" stroke-width="3"/>
  <polygon points="46,35 52,40 46,45" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'cloud-aliyun-polardb-arch',
    style: 'cloud',
    provider: 'aliyun',
    category: 'storage',
    deviceType: 'cloud',
    name: { en: 'Alibaba Cloud PolarDB', zh: '阿里云 PolarDB 云原生数据库' },
    code: 'ALI-POLAR',
    tags: ['aliyun', 'polardb', 'database', 'mysql', '阿里云', '云数据库', '分布式数据库'],
    equivalentGroup: 'database',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#ff6a00" stroke="#d95a00" stroke-width="2"/>
  <!-- Multi-layered Polar Core -->
  <polygon points="40,18 58,28 58,52 40,62 22,52 22,28" fill="#ffffff"/>
  <circle cx="40" cy="40" r="8" fill="#ff6a00"/>
  <circle cx="40" cy="40" r="4" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'cloud-aliyun-redis-arch',
    style: 'cloud',
    provider: 'aliyun',
    category: 'storage',
    deviceType: 'cloud',
    name: { en: 'Alibaba Cloud ApsaraDB Redis', zh: '阿里云 Redis 内存缓存' },
    code: 'ALI-REDIS',
    tags: ['aliyun', 'redis', 'cache', 'memory', '阿里云', '缓存数据库', '分布式缓存'],
    equivalentGroup: 'database',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#ff6a00" stroke="#d95a00" stroke-width="2"/>
  <!-- Diamond Cache Layers -->
  <polygon points="40,20 56,28 40,36 24,28" fill="#ffffff"/>
  <polygon points="40,32 56,40 40,48 24,40" fill="#ffffff" fill-opacity="0.85"/>
  <polygon points="40,44 56,52 40,60 24,52" fill="#ffffff" fill-opacity="0.7"/>
</svg>`
  },
  {
    id: 'cloud-aliyun-dns-arch',
    style: 'cloud',
    provider: 'aliyun',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'Alibaba Cloud DNS', zh: '阿里云 云解析 DNS' },
    code: 'ALI-DNS',
    tags: ['aliyun', 'dns', 'domain', 'network', '阿里云', '云解析', '域名服务'],
    equivalentGroup: 'router',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#0080ff" stroke="#0066cc" stroke-width="2"/>
  <!-- DNS Address Routing Nodes -->
  <circle cx="28" cy="28" r="6" fill="#ffffff"/>
  <circle cx="52" cy="28" r="6" fill="#ffffff"/>
  <circle cx="40" cy="52" r="6" fill="#ffffff"/>
  <line x1="28" y1="28" x2="40" y2="52" stroke="#ffffff" stroke-width="2.5"/>
  <line x1="52" y1="28" x2="40" y2="52" stroke="#ffffff" stroke-width="2.5"/>
</svg>`
  },
  {
    id: 'cloud-aliyun-dcdn-arch',
    style: 'cloud',
    provider: 'aliyun',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'Alibaba Cloud DCDN', zh: '阿里云 全站加速 DCDN' },
    code: 'ALI-DCDN',
    tags: ['aliyun', 'dcdn', 'cdn', 'acceleration', '阿里云', '全站加速', '内容分发'],
    equivalentGroup: 'load-balancer',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#0080ff" stroke="#0066cc" stroke-width="2"/>
  <!-- Fast Lightning Pulse over globe -->
  <polygon points="42,20 28,38 38,38 34,58 52,36 42,36" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'cloud-aliyun-nat-arch',
    style: 'cloud',
    provider: 'aliyun',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'Alibaba Cloud NAT Gateway', zh: '阿里云 NAT 网关' },
    code: 'ALI-NAT',
    tags: ['aliyun', 'nat', 'gateway', 'snat', 'dnat', '阿里云', 'NAT网关', '公网出入口'],
    equivalentGroup: 'router',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#0080ff" stroke="#0066cc" stroke-width="2"/>
  <!-- Circular Traffic Convergence -->
  <circle cx="40" cy="40" r="18" fill="none" stroke="#ffffff" stroke-width="2.5"/>
  <path d="M 30 40 L 50 40 M 44 34 L 50 40 L 44 46" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'cloud-aliyun-vpn-arch',
    style: 'cloud',
    provider: 'aliyun',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'Alibaba Cloud VPN Gateway', zh: '阿里云 VPN 专线网关' },
    code: 'ALI-VPN',
    tags: ['aliyun', 'vpn', 'ipsec', 'hybrid cloud', '阿里云', 'VPN网关', '混合云连接'],
    equivalentGroup: 'vpn',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#0080ff" stroke="#0066cc" stroke-width="2"/>
  <circle cx="40" cy="40" r="14" fill="#ffffff"/>
  <rect x="34" y="34" width="12" height="12" rx="2" fill="#0080ff"/>
</svg>`
  },
  {
    id: 'cloud-azure-vm-arch',
    style: 'cloud',
    provider: 'azure',
    category: 'compute',
    deviceType: 'cloud',
    name: { en: 'Microsoft Azure Virtual Machine', zh: '微软 Azure 虚拟机 (VM)' },
    code: 'AZ-VM',
    tags: ['azure', 'vm', 'compute', 'virtual machine', '微软云', '云主机', '虚拟机'],
    equivalentGroup: 'ecs',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#0078d4" stroke="#005a9e" stroke-width="2"/>
  <!-- Azure 3D Compute Cube Outline -->
  <polygon points="40,20 58,30 40,40 22,30" fill="#ffffff"/>
  <polygon points="22,30 40,40 40,60 22,50" fill="#50e6ff"/>
  <polygon points="58,30 40,40 40,60 58,50" fill="#2899f5"/>
</svg>`
  },
  {
    id: 'cloud-azure-vnet-arch',
    style: 'cloud',
    provider: 'azure',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'Microsoft Azure Virtual Network', zh: '微软 Azure 虚拟网络 (VNet)' },
    code: 'AZ-VNET',
    tags: ['azure', 'vnet', 'network', 'vpc', '微软云', '虚拟网络', '私网'],
    equivalentGroup: 'vpc',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#0078d4" stroke="#005a9e" stroke-width="2"/>
  <!-- Azure Interconnected Nodes -->
  <circle cx="28" cy="30" r="5" fill="#ffffff"/>
  <circle cx="52" cy="30" r="5" fill="#ffffff"/>
  <circle cx="40" cy="50" r="5" fill="#50e6ff"/>
  <line x1="28" y1="30" x2="52" y2="30" stroke="#ffffff" stroke-width="2"/>
  <line x1="28" y1="30" x2="40" y2="50" stroke="#ffffff" stroke-width="2"/>
  <line x1="52" y1="30" x2="40" y2="50" stroke="#ffffff" stroke-width="2"/>
</svg>`
  },
  {
    id: 'cloud-azure-blob-arch',
    style: 'cloud',
    provider: 'azure',
    category: 'storage',
    deviceType: 'cloud',
    name: { en: 'Microsoft Azure Blob Storage', zh: '微软 Azure Blob 对象存储' },
    code: 'AZ-BLOB',
    tags: ['azure', 'blob', 'storage', 's3', '微软云', '对象存储', '海量存储'],
    equivalentGroup: 'storage',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#0078d4" stroke="#005a9e" stroke-width="2"/>
  <!-- Layered Blob Disks -->
  <ellipse cx="40" cy="28" rx="16" ry="6" fill="#ffffff"/>
  <path d="M 24 28 V 38 C 24 44 56 44 56 38 V 28 Z" fill="#50e6ff"/>
  <path d="M 24 38 V 48 C 24 54 56 54 56 48 V 38 Z" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'cloud-azure-sql-arch',
    style: 'cloud',
    provider: 'azure',
    category: 'storage',
    deviceType: 'cloud',
    name: { en: 'Microsoft Azure SQL Database', zh: '微软 Azure SQL 关系数据库' },
    code: 'AZ-SQL',
    tags: ['azure', 'sql', 'database', 'rds', '微软云', 'SQL数据库', '关系型数据库'],
    equivalentGroup: 'database',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#0078d4" stroke="#005a9e" stroke-width="2"/>
  <!-- Database with gear -->
  <circle cx="40" cy="40" r="16" fill="#ffffff"/>
  <circle cx="40" cy="40" r="8" fill="#0078d4"/>
</svg>`
  },
  {
    id: 'cloud-docker-container',
    style: 'cloud',
    provider: 'k8s',
    category: 'compute',
    deviceType: 'cloud',
    name: { en: 'Docker Engine Whale', zh: 'Docker 容器引擎 (经典蓝鲸)' },
    code: 'DOCKER',
    tags: ['docker', 'container', 'whale', 'cncf', 'k8s', '容器', 'Docker蓝鲸', '镜像'],
    equivalentGroup: 'k8s-pod',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="64" height="64" rx="14" fill="#0db7ed" stroke="#0288d1" stroke-width="2"/>
  <!-- Docker Containers Matrix on Whale Back -->
  <g fill="#ffffff">
    <rect x="22" y="32" width="6" height="5" rx="1"/>
    <rect x="30" y="32" width="6" height="5" rx="1"/>
    <rect x="38" y="32" width="6" height="5" rx="1"/>
    <rect x="30" y="25" width="6" height="5" rx="1"/>
    <rect x="38" y="25" width="6" height="5" rx="1"/>
    <rect x="46" y="32" width="6" height="5" rx="1"/>
    <!-- Whale Body -->
    <path d="M 18 42 C 18 38 24 38 28 42 C 34 42 54 42 58 48 C 62 52 58 56 50 56 C 36 56 20 54 18 42 Z"/>
    <circle cx="26" cy="45" r="1.5" fill="#0db7ed"/>
  </g>
</svg>`
  },
  {
    id: 'cloud-k8s-node-arch',
    style: 'cloud',
    provider: 'k8s',
    category: 'compute',
    deviceType: 'cloud',
    name: { en: 'Kubernetes Worker Node', zh: 'Kubernetes Node 计算工作节点' },
    code: 'K8S-NODE',
    tags: ['k8s', 'node', 'worker', 'kubelet', 'kubernetes', '集群节点', '计算主机'],
    equivalentGroup: 'server',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#326ce5" stroke="#1d4ed8" stroke-width="2"/>
  <!-- Node Server Chassis + Helm Pin -->
  <rect x="20" y="26" width="40" height="12" rx="2" fill="#ffffff"/>
  <rect x="20" y="42" width="40" height="12" rx="2" fill="#ffffff"/>
  <circle cx="26" cy="32" r="2" fill="#22c55e"/>
  <circle cx="26" cy="48" r="2" fill="#22c55e"/>
  <line x1="34" y1="32" x2="52" y2="32" stroke="#326ce5" stroke-width="2"/>
  <line x1="34" y1="48" x2="52" y2="48" stroke="#326ce5" stroke-width="2"/>
</svg>`
  },
  {
    id: 'cloud-k8s-ingress-arch',
    style: 'cloud',
    provider: 'k8s',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'Kubernetes Ingress Gateway', zh: 'Kubernetes Ingress 流量入口' },
    code: 'K8S-INGRESS',
    tags: ['k8s', 'ingress', 'nginx', 'traffic', 'kubernetes', '入口网关', '域名转发'],
    equivalentGroup: 'load-balancer',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,10 68,24 68,56 40,70 12,56 12,24" fill="#326ce5" stroke="#1d4ed8" stroke-width="2"/>
  <!-- Downward Traffic Fan-out -->
  <path d="M 40 22 L 40 38 M 40 38 L 26 50 M 40 38 L 54 50" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="40" cy="22" r="3.5" fill="#38bdf8"/>
  <circle cx="26" cy="50" r="3.5" fill="#ffffff"/>
  <circle cx="54" cy="50" r="3.5" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'cloud-cncf-istio',
    style: 'cloud',
    provider: 'k8s',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'Istio Service Mesh', zh: 'Istio 服务网格 (官方帆船)' },
    code: 'CNCF-ISTIO',
    tags: ['istio', 'service mesh', 'envoy', 'cncf', '服务网格', '微服务治理', '流量镜像'],
    equivalentGroup: 'waf',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="64" height="64" rx="14" fill="#466bb0" stroke="#324d80" stroke-width="2"/>
  <!-- Istio Sailboat -->
  <polygon points="36,18 36,54 22,54" fill="#ffffff"/>
  <polygon points="42,28 42,54 56,54" fill="#50e6ff"/>
  <polygon points="22,58 56,58 46,64 32,64" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'cloud-cncf-prometheus',
    style: 'cloud',
    provider: 'k8s',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'Prometheus Monitoring Flame', zh: 'Prometheus 云原生监控 (官方火炬)' },
    code: 'CNCF-PROM',
    tags: ['prometheus', 'monitoring', 'metrics', 'grafana', 'cncf', '普罗米修斯', '时序监控'],
    equivalentGroup: 'bastion',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="32" fill="#e6522c" stroke="#b83818" stroke-width="2"/>
  <!-- Prometheus Flame -->
  <path d="M 40 18 C 44 26 50 30 50 38 C 50 46 44 54 40 58 C 36 54 30 46 30 38 C 30 30 36 26 40 18 Z" fill="#ffffff"/>
  <circle cx="40" cy="40" r="4" fill="#e6522c"/>
</svg>`
  },
  {
    id: 'cloud-cncf-envoy',
    style: 'cloud',
    provider: 'k8s',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'Envoy Edge Proxy', zh: 'Envoy 边缘高性能代理' },
    code: 'CNCF-ENVOY',
    tags: ['envoy', 'proxy', 'sidecar', 'mesh', 'cncf', '代理网关', '服务代理'],
    equivalentGroup: 'waf',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="64" height="64" rx="14" fill="#cc2966" stroke="#991f4d" stroke-width="2"/>
  <!-- Envoy Geometric Gateway Loop -->
  <polygon points="40,20 56,30 56,50 40,60 24,50 24,30" fill="none" stroke="#ffffff" stroke-width="3.5"/>
  <circle cx="40" cy="40" r="6" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'cloud-cncf-helm',
    style: 'cloud',
    provider: 'k8s',
    category: 'compute',
    deviceType: 'cloud',
    name: { en: 'Helm Chart Manager', zh: 'Helm 包管理舵轮' },
    code: 'CNCF-HELM',
    tags: ['helm', 'charts', 'k8s', 'package', 'cncf', '包管理器', '舵轮'],
    equivalentGroup: 'k8s-pod',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="32" fill="#0f1689" stroke="#090e59" stroke-width="2"/>
  <!-- Helm Wheel Spokes -->
  <circle cx="40" cy="40" r="14" fill="none" stroke="#ffffff" stroke-width="3"/>
  <circle cx="40" cy="40" r="5" fill="#ffffff"/>
  <line x1="40" y1="16" x2="40" y2="64" stroke="#ffffff" stroke-width="3"/>
  <line x1="16" y1="40" x2="64" y2="40" stroke="#ffffff" stroke-width="3"/>
</svg>`
  },
  {
    id: 'cloud-cncf-etcd',
    style: 'cloud',
    provider: 'k8s',
    category: 'storage',
    deviceType: 'cloud',
    name: { en: 'Etcd Distributed Key-Value', zh: 'Etcd 分布式高可用键值库' },
    code: 'CNCF-ETCD',
    tags: ['etcd', 'raft', 'consensus', 'k8s', 'database', '键值库', '分布式一致性'],
    equivalentGroup: 'database',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="64" height="64" rx="14" fill="#326ce5" stroke="#1d4ed8" stroke-width="2"/>
  <!-- Etcd Raft 3 nodes triangle -->
  <circle cx="40" cy="26" r="6" fill="#ffffff"/>
  <circle cx="26" cy="52" r="6" fill="#ffffff"/>
  <circle cx="54" cy="52" r="6" fill="#ffffff"/>
  <line x1="40" y1="26" x2="26" y2="52" stroke="#ffffff" stroke-width="2"/>
  <line x1="40" y1="26" x2="54" y2="52" stroke="#ffffff" stroke-width="2"/>
  <line x1="26" y1="52" x2="54" y2="52" stroke="#ffffff" stroke-width="2"/>
</svg>`
  },

  // =========================================================================
  // 7. 2.5D 等轴测售前标书硬件补齐库 (5款)
  // =========================================================================
  {
    id: 'iso-tape-library',
    style: 'isometric',
    provider: 'generic',
    category: 'storage',
    deviceType: 'physical',
    name: { en: 'Tape Library Backup', zh: '磁带备份一体机 / 容灾存储' },
    code: 'TAPE-LIB',
    tags: ['tape library', 'backup', 'disaster recovery', 'cidaiku', '磁带机', '冷备份', '容灾一体机'],
    equivalentGroup: 'storage',
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-tape-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-tape-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-tape-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Base Chassis -->
  <polygon points="60,20 100,42 60,64 20,42" fill="url(#iso-tape-top)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <polygon points="20,42 60,64 60,86 20,64" fill="url(#iso-tape-left)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <polygon points="60,64 100,42 100,64 60,86" fill="url(#iso-tape-right)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <!-- Tape Reels Slots on Left Face -->
  <ellipse cx="38" cy="54" rx="6" ry="3" fill="#111827"/>
  <ellipse cx="48" cy="60" rx="6" ry="3" fill="#111827"/>
  <circle cx="38" cy="54" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="48" cy="60" r="1.5" fill="%%ACCENT_GREEN%%"/>
</svg>`
  },
  {
    id: 'iso-tower-server',
    style: 'isometric',
    provider: 'generic',
    category: 'compute',
    deviceType: 'physical',
    name: { en: 'Enterprise Tower Workstation', zh: '企业级塔式服务器 / 工作站' },
    code: 'TOWER-SRV',
    tags: ['tower', 'server', 'workstation', 'tashifuwuqi', '塔式服务器', '图形工作站', '计算节点'],
    equivalentGroup: 'server',
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-twr-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-twr-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-twr-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <!-- Tall Tower Shape -->
  <polygon points="60,12 85,26 60,40 35,26" fill="url(#iso-twr-top)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <polygon points="35,26 60,40 60,88 35,74" fill="url(#iso-twr-left)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <polygon points="60,40 85,26 85,74 60,88" fill="url(#iso-twr-right)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <!-- Front Drive Bays on Left Face -->
  <polygon points="38,36 57,47 57,51 38,40" fill="#111827"/>
  <polygon points="38,43 57,54 57,58 38,47" fill="#111827"/>
  <polygon points="38,50 57,61 57,65 38,54" fill="#111827"/>
  <!-- Power LED -->
  <circle cx="42" cy="32" r="1.5" fill="%%ACCENT_CYAN%%"/>
</svg>`
  },
  {
    id: 'iso-ups-power',
    style: 'isometric',
    provider: 'generic',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Datacenter Precision UPS', zh: '机房精密 UPS 配电柜' },
    code: 'DC-UPS',
    tags: ['ups', 'power', 'battery', 'peidian', '不间断电源', 'UPS配电柜', '动力机房'],
    equivalentGroup: 'rack',
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-ups-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-ups-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-ups-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <polygon points="60,14 90,30 60,46 30,30" fill="url(#iso-ups-top)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <polygon points="30,30 60,46 60,86 30,70" fill="url(#iso-ups-left)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <polygon points="60,46 90,30 90,70 60,86" fill="url(#iso-ups-right)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <!-- Status Screen on Left -->
  <polygon points="36,38 54,48 54,54 36,44" fill="#1e293b"/>
  <!-- Battery Indicator lines -->
  <circle cx="42" cy="45" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="48" cy="48" r="1.5" fill="%%ACCENT_GREEN%%"/>
</svg>`
  },
  {
    id: 'iso-patch-panel-48p',
    style: 'isometric',
    provider: 'generic',
    category: 'physical',
    deviceType: 'physical',
    name: { en: '48-Port Patch Panel', zh: '48口网络配线架 (1U)' },
    code: 'PATCH-48',
    tags: ['patch panel', 'rj45', 'wiring', 'peixianjia', '配线架', '理线架', '跳线'],
    equivalentGroup: 'rack',
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-pp-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-pp-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-pp-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <polygon points="60,32 100,52 60,72 20,52" fill="url(#iso-pp-top)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <polygon points="20,52 60,72 60,82 20,62" fill="url(#iso-pp-left)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <polygon points="60,72 100,52 100,62 60,82" fill="url(#iso-pp-right)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <!-- Matrix of RJ45 Ports dots -->
  <circle cx="30" cy="60" r="1.2" fill="#111827"/>
  <circle cx="36" cy="63" r="1.2" fill="#111827"/>
  <circle cx="42" cy="66" r="1.2" fill="#111827"/>
  <circle cx="48" cy="69" r="1.2" fill="#111827"/>
  <circle cx="54" cy="72" r="1.2" fill="#111827"/>
</svg>`
  },
  {
    id: 'iso-poe-switch-24p',
    style: 'isometric',
    provider: 'generic',
    category: 'network',
    deviceType: 'physical',
    name: { en: '24-Port PoE Access Switch', zh: '24口 PoE 供电接入交换机' },
    code: 'POE-24P',
    tags: ['poe switch', 'poe', 'access', 'camera', 'PoE交换机', '供电交换机', '安防网络'],
    equivalentGroup: 'l2-switch',
    isTintable: true,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-poe-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%TOP_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-poe-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%LEFT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
    <linearGradient id="iso-poe-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%%RIGHT_FACE%%"/>
      <stop offset="100%" stop-color="%%BOTTOM_DARK%%"/>
    </linearGradient>
  </defs>
  <polygon points="60,30 100,50 60,70 20,50" fill="url(#iso-poe-top)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <polygon points="20,50 60,70 60,82 20,62" fill="url(#iso-poe-left)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <polygon points="60,70 100,50 100,62 60,82" fill="url(#iso-poe-right)" stroke="%%BORDER_STROKE%%" stroke-width="1.2"/>
  <!-- PoE Power LEDs (Amber) & Port LEDs (Green) -->
  <circle cx="28" cy="58" r="1.5" fill="#f59e0b"/>
  <circle cx="34" cy="61" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="40" cy="64" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="46" cy="67" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="52" cy="70" r="1.5" fill="%%ACCENT_GREEN%%"/>
</svg>`
  },

  // =========================================================================
  // 8. 运营商ISP、站点建筑、终端用户与VPN通道 (20款高频工程刚需)
  // =========================================================================
  {
    id: 'isp-china-telecom',
    style: 'flat',
    provider: 'isp',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'China Telecom (ISP)', zh: '中国电信 (ISP 运营商出口)' },
    code: 'ISP-CT',
    tags: ['telecom', 'china telecom', 'isp', 'carrier', 'dianxin', '中国电信', '电信宽带', '电信专线', '公网出口', '双线BGP'],
    equivalentGroup: 'isp-carrier',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="34" fill="#005baa" stroke="#00417a" stroke-width="2"/>
  <!-- China Telecom Iconic Dynamic Calligraphy Loops -->
  <path d="M 22 46 C 22 28 38 22 48 24 C 58 26 58 34 50 36 C 38 38 30 46 36 56 C 42 64 56 60 60 52" fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round"/>
  <circle cx="28" cy="48" r="3" fill="#ffffff"/>
  <circle cx="56" cy="30" r="2.5" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'isp-china-unicom',
    style: 'flat',
    provider: 'isp',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'China Unicom (ISP)', zh: '中国联通 (ISP 运营商出口)' },
    code: 'ISP-CU',
    tags: ['unicom', 'china unicom', 'isp', 'carrier', 'liantong', '中国联通', '联通宽带', '联通专线', '公网出口', 'MSTP'],
    equivalentGroup: 'isp-carrier',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="34" fill="#e60012" stroke="#b8000e" stroke-width="2"/>
  <!-- China Unicom Endless Knot Matrix -->
  <g fill="none" stroke="#ffffff" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 28 30 L 40 18 L 52 30 L 40 42 Z"/>
    <path d="M 28 50 L 40 38 L 52 50 L 40 62 Z"/>
    <path d="M 18 40 L 30 28 L 42 40 L 30 52 Z"/>
    <path d="M 38 40 L 50 28 L 62 40 L 50 52 Z"/>
  </g>
</svg>`
  },
  {
    id: 'isp-china-mobile',
    style: 'flat',
    provider: 'isp',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'China Mobile (ISP)', zh: '中国移动 (ISP 运营商出口)' },
    code: 'ISP-CM',
    tags: ['mobile', 'china mobile', 'isp', 'carrier', 'yidong', '中国移动', '移动宽带', '移动专线', '5G专网', 'CMNET'],
    equivalentGroup: 'isp-carrier',
    isTintable: false,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="34" fill="#0085d0" stroke="#00669e" stroke-width="2"/>
  <!-- China Mobile Dual Connecting Arcs -->
  <path d="M 22 42 A 18 18 0 0 1 54 26" fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M 58 38 A 18 18 0 0 1 26 54" fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round"/>
  <circle cx="40" cy="40" r="5" fill="#7ac143"/>
</svg>`
  },
  {
    id: 'net-internet-cloud',
    style: 'flat',
    provider: 'generic',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Internet Public Cloud', zh: 'Internet 互联网公网云团' },
    code: 'INTERNET',
    tags: ['internet', 'cloud', 'public', 'wan', 'hulianwang', '互联网', '公网', '广域网', '外网出口'],
    equivalentGroup: 'isp-carrier',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="inet-cloud-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%%TOP_LIGHT%%"/>
      <stop offset="100%" stop-color="%%LEFT_FACE%%"/>
    </linearGradient>
  </defs>
  <!-- Fluffy Network Cloud Base -->
  <path d="M 26 56 C 18 56 12 50 12 42 C 12 35 17 30 24 29 C 26 20 34 14 44 14 C 54 14 62 21 64 30 C 70 31 76 36 76 43 C 76 50 70 56 62 56 Z" fill="url(#inet-cloud-grad)" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Internal Global Network Grid Lines -->
  <g fill="none" stroke="#ffffff" stroke-width="1.8" opacity="0.85">
    <ellipse cx="42" cy="38" rx="18" ry="12"/>
    <line x1="24" y1="38" x2="60" y2="38"/>
    <line x1="42" y1="26" x2="42" y2="50"/>
  </g>
  <circle cx="42" cy="38" r="3" fill="%%ACCENT_CYAN%%"/>
</svg>`
  },
  {
    id: 'net-leased-line-fiber',
    style: 'flat',
    provider: 'generic',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'Dark Fiber / Leased Line', zh: '点对点裸光纤 / 传输专线' },
    code: 'FIBER-LINE',
    tags: ['fiber', 'leased line', 'mstp', 'dark fiber', 'guangxian', '裸光纤', '拉纤', '专线互联', '点对点'],
    equivalentGroup: 'router',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="24" width="64" height="32" rx="6" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Optical pulse trajectory -->
  <path d="M 16 40 L 28 40 L 34 32 L 42 48 L 48 32 L 54 40 L 64 40" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="16" cy="40" r="3.5" fill="#f59e0b"/>
  <circle cx="64" cy="40" r="3.5" fill="#22c55e"/>
</svg>`
  },
  {
    id: 'site-hq-building',
    style: 'flat',
    provider: 'generic',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Headquarters Building (HQ)', zh: '企业集团总部大楼 (HQ)' },
    code: 'HQ-SITE',
    tags: ['hq', 'headquarters', 'building', 'campus', 'zongbu', '总部', '集团大楼', '主园区', '主站'],
    equivalentGroup: 'building-site',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Skyscraper 1 (Main Tower) -->
  <rect x="16" y="16" width="30" height="52" rx="3" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Skyscraper 2 (Secondary Tower) -->
  <rect x="42" y="28" width="24" height="40" rx="3" fill="%%BOTTOM_DARK%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Windows Matrix Tower 1 -->
  <g fill="#ffffff" opacity="0.85">
    <rect x="22" y="22" width="5" height="5" rx="1"/>
    <rect x="33" y="22" width="5" height="5" rx="1"/>
    <rect x="22" y="31" width="5" height="5" rx="1"/>
    <rect x="33" y="31" width="5" height="5" rx="1"/>
    <rect x="22" y="40" width="5" height="5" rx="1"/>
    <rect x="33" y="40" width="5" height="5" rx="1"/>
    <rect x="22" y="49" width="5" height="5" rx="1"/>
    <rect x="33" y="49" width="5" height="5" rx="1"/>
    <!-- Windows Tower 2 -->
    <rect x="50" y="34" width="4" height="4" rx="1"/>
    <rect x="58" y="34" width="4" height="4" rx="1"/>
    <rect x="50" y="42" width="4" height="4" rx="1"/>
    <rect x="58" y="42" width="4" height="4" rx="1"/>
    <rect x="50" y="50" width="4" height="4" rx="1"/>
    <rect x="58" y="50" width="4" height="4" rx="1"/>
  </g>
  <!-- Flag / Spire -->
  <line x1="31" y1="8" x2="31" y2="16" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <circle cx="31" cy="8" r="2" fill="%%ACCENT_RED%%"/>
</svg>`
  },
  {
    id: 'site-branch-office',
    style: 'flat',
    provider: 'generic',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Branch Office Site', zh: '分支机构 / 办事处 (Branch)' },
    code: 'BRANCH-SITE',
    tags: ['branch', 'office', 'site', 'fenzhi', '分支机构', '办事处', '分公司', '门店', '网点'],
    equivalentGroup: 'building-site',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Mid-rise office building -->
  <rect x="18" y="24" width="44" height="44" rx="4" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Entrance door & Awning -->
  <rect x="34" y="52" width="12" height="16" rx="2" fill="%%BOTTOM_DARK%%"/>
  <rect x="32" y="50" width="16" height="3" fill="%%ACCENT_CYAN%%"/>
  <!-- Windows -->
  <g fill="#ffffff" opacity="0.9">
    <rect x="24" y="30" width="7" height="6" rx="1"/>
    <rect x="36" y="30" width="7" height="6" rx="1"/>
    <rect x="48" y="30" width="7" height="6" rx="1"/>
    <rect x="24" y="40" width="7" height="6" rx="1"/>
    <rect x="36" y="40" width="7" height="6" rx="1"/>
    <rect x="48" y="40" width="7" height="6" rx="1"/>
  </g>
</svg>`
  },
  {
    id: 'site-idc-datacenter',
    style: 'flat',
    provider: 'generic',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Datacenter Facility (IDC)', zh: 'IDC 数据中心机房楼' },
    code: 'IDC-FACILITY',
    tags: ['idc', 'datacenter', 'facility', 'jifang', '数据中心', '机房楼', '灾备中心', '托管IDC'],
    equivalentGroup: 'building-site',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="18" width="52" height="50" rx="6" fill="%%BOTTOM_DARK%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Server Rack Columns inside IDC Facility -->
  <rect x="22" y="26" width="10" height="34" rx="2" fill="%%LEFT_FACE%%"/>
  <rect x="35" y="26" width="10" height="34" rx="2" fill="%%LEFT_FACE%%"/>
  <rect x="48" y="26" width="10" height="34" rx="2" fill="%%LEFT_FACE%%"/>
  <!-- Green Status LEDs -->
  <circle cx="27" cy="32" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="27" cy="38" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="40" cy="32" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="40" cy="38" r="1.5" fill="%%ACCENT_CYAN%%"/>
  <circle cx="53" cy="32" r="1.5" fill="%%ACCENT_GREEN%%"/>
  <circle cx="53" cy="38" r="1.5" fill="%%ACCENT_AMBER%%"/>
</svg>`
  },
  {
    id: 'site-smart-factory',
    style: 'flat',
    provider: 'generic',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Smart Factory / Campus', zh: '智能工厂 / 工业园区' },
    code: 'FACTORY-SITE',
    tags: ['factory', 'plant', 'industrial', 'campus', 'gongchang', '工厂', '车间', '智能制造', '工业园区'],
    equivalentGroup: 'building-site',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Industrial Sawtooth Roof & Factory Walls -->
  <path d="M 16 66 L 16 38 L 30 26 L 30 38 L 44 26 L 44 38 L 58 26 L 58 66 Z" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Chimney stack -->
  <rect x="58" y="16" width="8" height="50" rx="1" fill="%%BOTTOM_DARK%%" stroke="%%BORDER_STROKE%%" stroke-width="1.5"/>
  <!-- Gear in factory -->
  <circle cx="36" cy="50" r="7" fill="none" stroke="#ffffff" stroke-width="2.5"/>
  <circle cx="36" cy="50" r="3" fill="#ffffff"/>
</svg>`
  },
  {
    id: 'client-workstation-user',
    style: 'flat',
    provider: 'generic',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Workstation with User Avatar', zh: '办公电脑 (带业务人员头像)' },
    code: 'USER-PC',
    tags: ['pc', 'user', 'avatar', 'workstation', 'bangong', '办公电脑', '终端机', '职员电脑', '财务机', '运维人员'],
    equivalentGroup: 'endpoint-device',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Monitor Display Screen -->
  <rect x="8" y="24" width="42" height="28" rx="4" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <rect x="12" y="28" width="34" height="20" rx="2" fill="#ffffff"/>
  <!-- Monitor Stand -->
  <rect x="26" y="52" width="6" height="6" fill="%%BOTTOM_DARK%%"/>
  <rect x="18" y="58" width="22" height="3" rx="1" fill="%%BOTTOM_DARK%%"/>
  <!-- User Staff Avatar on the right -->
  <circle cx="60" cy="30" r="9" fill="%%ACCENT_CYAN%%" stroke="%%BORDER_STROKE%%" stroke-width="1.5"/>
  <path d="M 48 54 C 48 44 72 44 72 54 Z" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="1.5"/>
</svg>`
  },
  {
    id: 'client-desktop-pc',
    style: 'flat',
    provider: 'generic',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Standard Desktop PC', zh: '台式电脑终端 (显示器+主机)' },
    code: 'DESKTOP-PC',
    tags: ['desktop', 'pc', 'computer', 'host', 'taishiji', '台式机', '电脑', '微机', '工作站'],
    equivalentGroup: 'endpoint-device',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Display Screen -->
  <rect x="8" y="16" width="46" height="32" rx="4" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <rect x="12" y="20" width="38" height="24" rx="2" fill="#0f172a"/>
  <!-- PC Stand -->
  <rect x="28" y="48" width="6" height="8" fill="%%BOTTOM_DARK%%"/>
  <rect x="20" y="56" width="22" height="3" rx="1" fill="%%BOTTOM_DARK%%"/>
  <!-- Tower Chassis -->
  <rect x="58" y="20" width="16" height="40" rx="3" fill="%%BOTTOM_DARK%%" stroke="%%BORDER_STROKE%%" stroke-width="1.8"/>
  <!-- Optical drive and Power LED -->
  <line x1="62" y1="26" x2="70" y2="26" stroke="#ffffff" stroke-width="1.5"/>
  <circle cx="66" cy="32" r="1.5" fill="%%ACCENT_GREEN%%"/>
</svg>`
  },
  {
    id: 'client-business-laptop',
    style: 'flat',
    provider: 'generic',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Business Laptop', zh: '商务便携笔记本电脑' },
    code: 'LAPTOP',
    tags: ['laptop', 'notebook', 'macbook', 'bijiben', '笔记本', '便携机', '移动办公'],
    equivalentGroup: 'endpoint-device',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Screen open upright -->
  <rect x="16" y="18" width="48" height="32" rx="3" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <rect x="20" y="22" width="40" height="24" rx="1.5" fill="#0f172a"/>
  <!-- Base keyboard chassis -->
  <polygon points="10,54 70,54 66,60 14,60" fill="%%BOTTOM_DARK%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <rect x="34" y="55" width="12" height="2" rx="1" fill="#ffffff" opacity="0.6"/>
</svg>`
  },
  {
    id: 'client-mobile-phone',
    style: 'flat',
    provider: 'generic',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Mobile Phone / Tablet', zh: '智能手机 / 移动终端 (BYOD)' },
    code: 'MOBILE',
    tags: ['mobile', 'phone', 'smartphone', 'tablet', 'byod', 'shouji', '智能手机', '平板', '移动终端'],
    equivalentGroup: 'endpoint-device',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Smartphone Vertical Body -->
  <rect x="24" y="12" width="32" height="56" rx="7" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Screen Glass -->
  <rect x="28" y="18" width="24" height="42" rx="3" fill="#0f172a"/>
  <!-- Home Indicator / Notch -->
  <circle cx="40" cy="63" r="2" fill="#ffffff"/>
  <rect x="36" y="15" width="8" height="1.5" rx="0.5" fill="#ffffff" opacity="0.7"/>
</svg>`
  },
  {
    id: 'client-ip-camera',
    style: 'flat',
    provider: 'generic',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'IP Security Camera (IPC)', zh: '网络安防监控摄像头 (IPC)' },
    code: 'IPC-CAMERA',
    tags: ['camera', 'ipc', 'cctv', 'security', 'shexiangtou', '摄像头', '安防监控', '网络摄像机', '雪亮工程'],
    equivalentGroup: 'endpoint-device',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Bullet Camera Shell -->
  <polygon points="20,26 50,30 50,50 20,54" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Lens Front -->
  <ellipse cx="20" cy="40" rx="4" ry="14" fill="%%BOTTOM_DARK%%" stroke="%%BORDER_STROKE%%" stroke-width="1.5"/>
  <circle cx="20" cy="40" r="5" fill="#38bdf8"/>
  <!-- Wall Mount Bracket -->
  <path d="M 50 40 L 62 40 L 62 58 L 68 58" fill="none" stroke="%%BORDER_STROKE%%" stroke-width="3" stroke-linecap="round"/>
  <!-- Red Recording LED -->
  <circle cx="26" cy="32" r="1.5" fill="#ef4444"/>
</svg>`
  },
  {
    id: 'client-network-printer',
    style: 'flat',
    provider: 'generic',
    category: 'physical',
    deviceType: 'physical',
    name: { en: 'Network Multi-Function Printer', zh: '网络打印机 / 复合一体机' },
    code: 'PRINTER',
    tags: ['printer', 'copier', 'mfp', 'dayinji', '网络打印机', '多功能一体机', '复印机'],
    equivalentGroup: 'endpoint-device',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Printer Main Body -->
  <rect x="14" y="32" width="52" height="28" rx="5" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Top Scanner Lid / Paper Feed -->
  <polygon points="24,18 56,18 60,32 20,32" fill="#ffffff" stroke="%%BORDER_STROKE%%" stroke-width="1.8"/>
  <!-- Bottom Paper Tray Out -->
  <rect x="22" y="44" width="36" height="8" rx="2" fill="#0f172a"/>
  <!-- Ejected Sheet -->
  <rect x="28" y="46" width="24" height="12" rx="1" fill="#ffffff" stroke="%%BORDER_STROKE%%" stroke-width="1"/>
</svg>`
  },
  {
    id: 'tunnel-vpn-ipsec',
    style: 'flat',
    provider: 'generic',
    category: 'security',
    deviceType: 'physical',
    name: { en: 'IPSec / SSL VPN Secure Tunnel', zh: 'VPN 加密连接通道 (安全隧道)' },
    code: 'VPN-TUNNEL',
    tags: ['vpn', 'tunnel', 'ipsec', 'ssl vpn', 'suidao', 'VPN隧道', '加密通道', '点对点VPN', '跨公网通道'],
    equivalentGroup: 'vpn',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Horizontal Tunnel Pipe -->
  <rect x="12" y="28" width="56" height="24" rx="12" fill="%%LEFT_FACE%%" fill-opacity="0.25" stroke="%%BORDER_STROKE%%" stroke-width="2.5" stroke-dasharray="4 3"/>
  <!-- Brass Security Padlock in center -->
  <path d="M 33 34 C 33 28 47 28 47 34 L 47 38 L 33 38 Z" fill="none" stroke="#f59e0b" stroke-width="3"/>
  <rect x="28" y="38" width="24" height="18" rx="4" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/>
  <circle cx="40" cy="45" r="2.5" fill="#1e293b"/>
  <polygon points="38.5,45 41.5,45 42,51 38,51" fill="#1e293b"/>
</svg>`
  },
  {
    id: 'tunnel-mpls-circuit',
    style: 'flat',
    provider: 'generic',
    category: 'network',
    deviceType: 'physical',
    name: { en: 'MPLS / SD-WAN Virtual Circuit', zh: 'MPLS / EVPN 高速专线通道' },
    code: 'MPLS-CIRCUIT',
    tags: ['mpls', 'evpn', 'circuit', 'virtual tunnel', 'zhuanxian', '专线通道', '虚拟电路', '二层透传'],
    equivalentGroup: 'vpn',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Dual High-speed Circuit Beams -->
  <line x1="8" y1="34" x2="72" y2="34" stroke="%%BORDER_STROKE%%" stroke-width="3" stroke-dasharray="6 4"/>
  <line x1="8" y1="46" x2="72" y2="46" stroke="%%BORDER_STROKE%%" stroke-width="3" stroke-dasharray="6 4"/>
  <!-- Multi-protocol Packets with Label tag -->
  <rect x="24" y="26" width="14" height="28" rx="3" fill="%%ACCENT_CYAN%%"/>
  <rect x="44" y="26" width="14" height="28" rx="3" fill="%%ACCENT_GREEN%%"/>
</svg>`
  },
  {
    id: 'cloud-direct-connect',
    style: 'cloud',
    provider: 'generic',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'Cloud Direct Connect / Express', zh: '云物理专线接入 (Direct Connect)' },
    code: 'CLOUD-DX',
    tags: ['direct connect', 'express connect', 'dx', 'hybrid cloud', 'zhuanxian', '云专线', '高速通道', '物理专线入云'],
    equivalentGroup: 'vpn',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Interlock plug / High speed trunk cable icon -->
  <path d="M 22 40 L 36 40 M 44 40 L 58 40" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <rect x="34" y="30" width="12" height="20" rx="3" fill="#ffffff"/>
  <line x1="40" y1="30" x2="40" y2="50" stroke="%%LEFT_FACE%%" stroke-width="2"/>
</svg>`
  },
  {
    id: 'cloud-hybrid-vpn-gw',
    style: 'cloud',
    provider: 'generic',
    category: 'network',
    deviceType: 'cloud',
    name: { en: 'Cloud Hybrid VPN Gateway', zh: '混合云 VPN 对端网关' },
    code: 'CLOUD-VPNGW',
    tags: ['vpn gateway', 'hybrid cloud', 'ipsec', 'hunheyun', '混合云网关', '云端VPN', '对接本地'],
    equivalentGroup: 'vpn',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="%%LEFT_FACE%%" stroke="%%BORDER_STROKE%%" stroke-width="2"/>
  <!-- Shield + Intersecting arrows -->
  <path d="M 40 18 L 56 26 C 56 46 40 58 40 60 C 40 58 24 46 24 26 Z" fill="#ffffff" fill-opacity="0.2" stroke="#ffffff" stroke-width="2"/>
  <path d="M 32 38 L 48 38 M 42 32 L 48 38 L 42 44" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'cloud-security-firewall',
    style: 'cloud',
    provider: 'generic',
    category: 'security',
    deviceType: 'cloud',
    name: { en: 'Cloud Virtual Firewall (vFW)', zh: '云端虚拟化安全网关 (vFW)' },
    code: 'CLOUD-VFW',
    tags: ['firewall', 'vfw', 'cloud security', 'nsg', 'yunfanghuoqiang', '虚拟防火墙', '云防火墙', '边界防御'],
    equivalentGroup: 'firewall',
    isTintable: true,
    viewBox: '0 0 80 80',
    svgRaw: `<svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="60" height="60" rx="12" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
  <!-- Flame + Digital Grid -->
  <path d="M 40 22 C 43 28 48 32 48 38 C 48 45 43 50 40 54 C 37 50 32 45 32 38 C 32 32 37 28 40 22 Z" fill="#ffffff"/>
  <circle cx="40" cy="40" r="3" fill="#ef4444"/>
</svg>`
  }

];
