import { IconMeta, ProviderMeta, CategoryMeta } from '../types/icon';

export const PROVIDERS: ProviderMeta[] = [
  {
    id: 'generic',
    name: { en: 'Vendor-Neutral (Modern 2.5D)', zh: '通用中立 (现代2.5D立体风)' },
    color: '#0ea5e9',
    badgeBg: 'bg-sky-100 text-sky-950 border-sky-300 dark:bg-sky-500/20 dark:text-sky-200 dark:border-sky-500/40 font-bold',
  },
  {
    id: 'aws',
    name: { en: 'AWS Official', zh: '亚马逊云 AWS 官方原版' },
    color: '#ff9900',
    badgeBg: 'bg-amber-100 text-amber-950 border-amber-300 dark:bg-amber-500/20 dark:text-amber-200 dark:border-amber-500/40 font-bold',
  },
  {
    id: 'azure',
    name: { en: 'Azure Official', zh: '微软 Azure 官方原版' },
    color: '#0089d6',
    badgeBg: 'bg-blue-100 text-blue-950 border-blue-300 dark:bg-blue-500/20 dark:text-blue-200 dark:border-blue-500/40 font-bold',
  },
  {
    id: 'gcp',
    name: { en: 'Google Cloud', zh: '谷歌云 GCP 官方原版' },
    color: '#ea4335',
    badgeBg: 'bg-rose-100 text-rose-950 border-rose-300 dark:bg-rose-500/20 dark:text-rose-200 dark:border-rose-500/40 font-bold',
  },
  {
    id: 'aliyun',
    name: { en: 'Alibaba Cloud', zh: '阿里云 官方原版' },
    color: '#ff6a00',
    badgeBg: 'bg-orange-100 text-orange-950 border-orange-300 dark:bg-orange-500/20 dark:text-orange-200 dark:border-orange-500/40 font-bold',
  },
  {
    id: 'k8s',
    name: { en: 'Kubernetes / CNCF', zh: '云原生 / 开源官方原版' },
    color: '#326ce5',
    badgeBg: 'bg-indigo-100 text-indigo-950 border-indigo-300 dark:bg-indigo-500/20 dark:text-indigo-200 dark:border-indigo-500/40 font-bold',
  },
];

export const CATEGORIES: CategoryMeta[] = [
  { id: 'network', name: { en: 'Network & CDN', zh: '网络与分发' }, iconName: 'Network' },
  { id: 'physical', name: { en: 'Physical & Cabling', zh: '物理与布线' }, iconName: 'Server' },
  { id: 'compute', name: { en: 'Compute & Containers', zh: '计算与容器' }, iconName: 'Cpu' },
  { id: 'storage', name: { en: 'Storage & Backup', zh: '存储与归档' }, iconName: 'HardDrive' },
  { id: 'database', name: { en: 'Database & Cache', zh: '数据库与缓存' }, iconName: 'Database' },
  { id: 'security', name: { en: 'Security & IAM', zh: '安全与身份' }, iconName: 'Shield' },
  { id: 'integration', name: { en: 'Messaging & Queue', zh: '消息与中间件' }, iconName: 'Layers' },
  { id: 'general', name: { en: 'Zones & Devices', zh: '边界与终端' }, iconName: 'Box' },
];

export const ICONS: IconMeta[] = [
  // ==================== 1. 现代 2.5D 等轴测通用网络架构 (Modern 2.5D Isometric Architecture) ====================
  {
    id: 'generic-network-firewall',
    provider: 'generic',
    category: 'network',
    name: { en: '2.5D Security Firewall', zh: '2.5D 现代等轴测防火墙' },
    code: 'FW-2.5D',
    tags: ['firewall', 'security', '2.5d', 'isometric', 'gateway', 'fanghuoqiang', '防火墙', '立体防火墙', '等轴测'],
    equivalentGroup: 'network-firewall',
    isTintable: false,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-fw-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>
    <linearGradient id="iso-fw-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </linearGradient>
    <linearGradient id="iso-fw-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#991b1b"/>
      <stop offset="100%" stop-color="#450a0a"/>
    </linearGradient>
    <linearGradient id="iso-fw-shield" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="50%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
    <linearGradient id="iso-fw-grid" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fca5a5" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#f87171" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Base Chassis Faces -->
  <polygon points="60,26 98,46 60,66 22,46" fill="url(#iso-fw-top)" stroke="#ffffff" stroke-width="1" stroke-opacity="0.6"/>
  <polygon points="22,46 60,66 60,84 22,64" fill="url(#iso-fw-left)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <polygon points="60,66 98,46 98,64 60,84" fill="url(#iso-fw-right)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <!-- Top Face Isometric Laser Grid Lines -->
  <line x1="41" y1="36" x2="79" y2="56" stroke="url(#iso-fw-grid)" stroke-width="1.2"/>
  <line x1="31" y1="41" x2="69" y2="61" stroke="url(#iso-fw-grid)" stroke-width="1.2"/>
  <line x1="79" y1="36" x2="41" y2="56" stroke="url(#iso-fw-grid)" stroke-width="1.2"/>
  <line x1="69" y1="31" x2="51" y2="41" stroke="url(#iso-fw-grid)" stroke-width="1.2"/>
  <!-- Front Port LEDs & Status Indicators -->
  <circle cx="32" cy="56" r="2" fill="#22c55e"/>
  <circle cx="40" cy="60" r="2" fill="#38bdf8"/>
  <circle cx="48" cy="64" r="2" fill="#facc15"/>
  <!-- Upright 2.5D Glowing Shield Barrier -->
  <g transform="translate(60, 48)">
    <path d="M0,-24 L18,-15 L18,5 C18,17 0,26 0,26 C0,26 -18,17 -18,5 L-18,-15 Z" fill="url(#iso-fw-shield)" stroke="#ffffff" stroke-width="1.5"/>
    <path d="M0,-20 L14,-13 L14,4 C14,13 0,21 0,21 C0,21 -14,13 -14,4 L-14,-13 Z" fill="#ffffff" fill-opacity="0.2"/>
    <!-- Keyhole Emblem -->
    <path d="M0,-8 C-4,-8 -6,-5 -6,0 C-6,4 -3,7 -2,9 L-3,14 L3,14 L2,9 C3,7 6,4 6,0 C6,-5 4,-8 0,-8 Z" fill="#ffffff"/>
  </g>
</svg>`,
    description: { en: 'Modern 2.5D isometric security firewall gateway with neon barrier shield', zh: '现代 2.5D 等轴测立体安全防火墙网关，配高亮防护盾与激光阵列' }
  },
  {
    id: 'generic-network-router',
    provider: 'generic',
    category: 'network',
    name: { en: '2.5D Core Router', zh: '2.5D 现代等轴测路由器' },
    code: 'RT-2.5D',
    tags: ['router', '2.5d', 'isometric', 'l3', 'flow', 'luyouqi', '路由器', '立体路由器', '等轴测'],
    equivalentGroup: 'network-router',
    isTintable: false,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-rt-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <linearGradient id="iso-rt-side" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#082f49"/>
    </linearGradient>
    <linearGradient id="iso-rt-ring" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0c4a6e"/>
      <stop offset="50%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#082f49"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="80" rx="46" ry="15" fill="#0f172a" opacity="0.25"/>
  <!-- Lower Cylinder Body -->
  <path d="M 20,40 C 20,58 38,72 60,72 C 82,72 100,58 100,40 L 100,58 C 100,76 82,90 60,90 C 38,90 20,76 20,58 Z" fill="url(#iso-rt-side)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.3"/>
  <!-- Outer Bevel Edge -->
  <ellipse cx="60" cy="40" rx="40" ry="18" fill="url(#iso-rt-ring)"/>
  <!-- Inner Recessed Top Face -->
  <ellipse cx="60" cy="38" rx="36" ry="16" fill="url(#iso-rt-top)" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.8"/>
  <!-- Front Status Indicators -->
  <ellipse cx="60" cy="74" rx="28" ry="8" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="4 6" opacity="0.7"/>
  <circle cx="36" cy="62" r="2" fill="#22c55e"/>
  <circle cx="44" cy="66" r="2" fill="#38bdf8"/>
  <circle cx="52" cy="69" r="2" fill="#38bdf8"/>
  <!-- Luminous 4-Directional Flow Arrows on Top Face -->
  <g stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff">
    <!-- Inward Arrow Left -->
    <line x1="32" y1="38" x2="48" y2="38"/>
    <polygon points="43,35 51,38 43,41"/>
    <!-- Inward Arrow Right -->
    <line x1="88" y1="38" x2="72" y2="38"/>
    <polygon points="77,35 69,38 77,41"/>
    <!-- Outward Arrow Top -->
    <line x1="60" y1="36" x2="60" y2="26"/>
    <polygon points="57,29 60,24 63,29"/>
    <!-- Outward Arrow Bottom -->
    <line x1="60" y1="40" x2="60" y2="50"/>
    <polygon points="57,47 60,52 63,47"/>
    <!-- Central Core Node -->
    <circle cx="60" cy="38" r="3" fill="#ffffff"/>
  </g>
</svg>`,
    description: { en: 'Modern 2.5D isometric cylindrical router with 4-directional luminous flow arrows', zh: '现代 2.5D 等轴测圆柱路由器，顶部配四向多路径立体寻址流向' }
  },
  {
    id: 'generic-network-switch-l2',
    provider: 'generic',
    category: 'network',
    name: { en: '2.5D Workgroup Switch (L2)', zh: '2.5D 现代二层以太网交换机' },
    code: 'SW-L2-2.5D',
    tags: ['switch', '2.5d', 'isometric', 'l2', 'ethernet', 'ports', 'jiaohuanji', '交换机', '立体交换机'],
    equivalentGroup: 'network-switch',
    isTintable: false,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-sw-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <linearGradient id="iso-sw-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0369a1"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="iso-sw-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="80" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Isometric 1U Switch Chassis -->
  <polygon points="60,26 98,46 60,66 22,46" fill="url(#iso-sw-top)" stroke="#ffffff" stroke-width="1" stroke-opacity="0.6"/>
  <polygon points="22,46 60,66 60,82 22,62" fill="url(#iso-sw-left)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <polygon points="60,66 98,46 98,62 60,82" fill="url(#iso-sw-right)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <!-- Top Face: Dual Opposite Parallel High-Speed Traffic Arrows -->
  <g stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff">
    <!-- Top Arrow (flowing right) -->
    <line x1="42" y1="41" x2="72" y2="47"/>
    <polygon points="68,43 76,48 67,49"/>
    <!-- Bottom Arrow (flowing left) -->
    <line x1="78" y1="51" x2="48" y2="45"/>
    <polygon points="52,43 44,44 53,49"/>
  </g>
  <!-- Front Left Panel: 2.5D Isometric 24-Port RJ45 / SFP Matrix with LEDs -->
  <g stroke="#38bdf8" stroke-width="0.8" fill="#082f49">
    <!-- Upper Port Row in 2.5D perspective -->
    <polygon points="26,52 32,55 32,58 26,55"/>
    <polygon points="34,56 40,59 40,62 34,59"/>
    <polygon points="42,60 48,63 48,66 42,63"/>
    <polygon points="50,64 56,67 56,70 50,67"/>
    <!-- Lower Port Row -->
    <polygon points="26,57 32,60 32,63 26,60"/>
    <polygon points="34,61 40,64 40,67 34,64"/>
    <polygon points="42,65 48,68 48,71 42,68"/>
    <polygon points="50,69 56,72 56,75 50,72"/>
  </g>
  <!-- Port Link Status Activity LEDs (Luminous Green & Amber) -->
  <circle cx="28" cy="50" r="1.2" fill="#22c55e"/>
  <circle cx="36" cy="54" r="1.2" fill="#22c55e"/>
  <circle cx="44" cy="58" r="1.2" fill="#22c55e"/>
  <circle cx="52" cy="62" r="1.2" fill="#facc15"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric 1U rackmount switch with 24-port LED matrix and dual parallel flow arrows', zh: '现代 2.5D 等轴测 1U 交换机，配备精细以太网口阵列、双向对射流向与运行指示灯' }
  },
  {
    id: 'generic-network-switch-l3',
    provider: 'generic',
    category: 'network',
    name: { en: '2.5D Multilayer Switch (L3 / Core)', zh: '2.5D 现代三层/核心交换机' },
    code: 'SW-L3-2.5D',
    tags: ['l3 switch', 'core switch', '2.5d', 'isometric', 'multilayer', 'sanceng', '三层交换机', '核心交换机'],
    equivalentGroup: 'network-switch',
    isTintable: false,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-l3-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4f46e5"/>
      <stop offset="50%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="iso-l3-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="iso-l3-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#030712"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="84" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Multi-layer Modular 2U Chassis -->
  <polygon points="60,20 98,40 60,60 22,40" fill="url(#iso-l3-top)" stroke="#ffffff" stroke-width="1" stroke-opacity="0.7"/>
  <polygon points="22,40 60,60 60,82 22,62" fill="url(#iso-l3-left)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <polygon points="60,60 98,40 98,62 60,82" fill="url(#iso-l3-right)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <!-- Top Face: 4-Way Diagonal Cross Routing Matrix (L3 Switch Emblem) -->
  <g stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff">
    <line x1="38" y1="36" x2="82" y2="44"/>
    <polygon points="42,35 34,35 38,39"/>
    <polygon points="78,41 86,45 82,47"/>
    <line x1="72" y1="30" x2="48" y2="50"/>
    <polygon points="74,34 76,27 69,30"/>
    <polygon points="51,46 44,53 47,46"/>
    <!-- Central Routing Engine Core Diamond -->
    <polygon points="60,36 65,40 60,44 55,40" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/>
  </g>
  <!-- Front Panel: High-Density 100G QSFP28 Fiber Ports & Activity LEDs -->
  <g fill="#0284c7" stroke="#38bdf8" stroke-width="0.8">
    <polygon points="26,48 34,52 34,56 26,52"/>
    <polygon points="37,54 45,58 45,62 37,58"/>
    <polygon points="48,60 56,64 56,68 48,64"/>
  </g>
  <!-- Redundant Power & Sys Status LEDs -->
  <circle cx="28" cy="58" r="1.5" fill="#22c55e"/>
  <circle cx="32" cy="60" r="1.5" fill="#22c55e"/>
  <circle cx="50" cy="74" r="1.5" fill="#38bdf8"/>
  <circle cx="54" cy="76" r="1.5" fill="#a855f7"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric multilayer core switch with 4-way diagonal routing matrix and QSFP ports', zh: '现代 2.5D 等轴测核心/三层交换机，带四向立体交叉路由矩阵与高速光口' }
  },
  {
    id: 'generic-compute-server',
    provider: 'generic',
    category: 'compute',
    name: { en: '2.5D Enterprise Server', zh: '2.5D 现代机架服务器' },
    code: 'SRV-2.5D',
    tags: ['server', '2.5d', 'isometric', 'host', 'compute', 'fuwuqi', '服务器', '机架服务器'],
    equivalentGroup: 'compute-vm',
    isTintable: false,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-srv-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="iso-srv-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="iso-srv-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="iso-srv-bay" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Server Blade Chassis -->
  <polygon points="60,22 98,42 60,62 22,42" fill="url(#iso-srv-top)" stroke="#ffffff" stroke-width="1" stroke-opacity="0.6"/>
  <polygon points="22,42 60,62 60,82 22,62" fill="url(#iso-srv-left)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <polygon points="60,62 98,42 98,62 60,82" fill="url(#iso-srv-right)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <!-- Top Face: Tech Circuit Silkscreen Lines -->
  <g stroke="#38bdf8" stroke-width="1" stroke-opacity="0.5" fill="none">
    <path d="M42,36 L52,41 L52,48 L64,54"/>
    <circle cx="42" cy="36" r="1.5" fill="#38bdf8"/>
    <circle cx="64" cy="54" r="1.5" fill="#38bdf8"/>
    <path d="M78,36 L68,41 L68,46"/>
    <circle cx="78" cy="36" r="1.5" fill="#38bdf8"/>
  </g>
  <!-- Front Panel: 2.5D Hot-Swap NVMe Drive Bays -->
  <g fill="url(#iso-srv-bay)" stroke="#475569" stroke-width="0.8">
    <polygon points="26,48 38,54 38,59 26,53"/>
    <polygon points="42,56 54,62 54,67 42,61"/>
    <polygon points="26,55 38,61 38,66 26,60"/>
    <polygon points="42,63 54,69 54,74 42,68"/>
  </g>
  <!-- Drive Activity LEDs (Green/Amber) -->
  <circle cx="28" cy="50" r="1" fill="#22c55e"/>
  <circle cx="44" cy="58" r="1" fill="#22c55e"/>
  <circle cx="28" cy="57" r="1" fill="#facc15"/>
  <circle cx="44" cy="65" r="1" fill="#22c55e"/>
  <!-- Power Switch & Diagnostics -->
  <circle cx="56" cy="77" r="2" fill="#38bdf8"/>
  <circle cx="56" cy="77" r="3.2" fill="none" stroke="#38bdf8" stroke-width="0.8" opacity="0.6"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric enterprise rack server with hot-swap NVMe bays and PCB traces', zh: '现代 2.5D 等轴测企业级机架服务器，带热插拔硬盘舱、电路蚀刻与状态指示灯' }
  },
  {
    id: 'generic-network-internet',
    provider: 'generic',
    category: 'network',
    name: { en: '2.5D Cloud & Internet', zh: '2.5D 现代云网与广域网' },
    code: 'WAN-2.5D',
    tags: ['cloud', 'internet', 'wan', '2.5d', 'isometric', 'gongwang', '云', '公网', '互联网'],
    equivalentGroup: 'network-cdn',
    isTintable: false,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-wan-cloud" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="iso-wan-base" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <!-- Ground Isometric Projected Ring -->
  <ellipse cx="60" cy="80" rx="46" ry="15" fill="#0f172a" opacity="0.25"/>
  <ellipse cx="60" cy="80" rx="42" ry="14" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.6"/>
  <!-- Floating 2.5D Volumetric Cloud Mesh -->
  <!-- Shadow/Under-cloud -->
  <path d="M30,52 C20,52 14,44 14,35 C14,27 20,20 28,18 C31,10 40,5 50,5 C60,5 68,11 72,19 C77,15 84,13 90,13 C102,13 110,22 110,33 C110,44 100,52 90,52 Z" fill="#1e3a8a" opacity="0.4" transform="translate(0, 10)"/>
  <!-- Main Cloud Body -->
  <path d="M30,52 C20,52 14,44 14,35 C14,27 20,20 28,18 C31,10 40,5 50,5 C60,5 68,11 72,19 C77,15 84,13 90,13 C102,13 110,22 110,33 C110,44 100,52 90,52 Z" fill="url(#iso-wan-cloud)" stroke="#ffffff" stroke-width="1.5"/>
  <!-- Front Highlight Curve -->
  <path d="M30,22 C34,12 42,8 50,8 C58,8 65,12 68,18" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
  <!-- Isometric Constellation Grid / Satellite Interconnect Lines -->
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
    description: { en: 'Modern 2.5D volumetric cloud with constellation data interconnect nodes', zh: '现代 2.5D 等轴测立体云朵与星型互联网络节点，代表公共云与广域网 WAN' }
  },
  {
    id: 'generic-db-relational',
    provider: 'generic',
    category: 'database',
    name: { en: '2.5D Relational Database', zh: '2.5D 现代关系型数据库' },
    code: 'DB-2.5D',
    tags: ['database', 'sql', '2.5d', 'isometric', 'storage', 'shujuku', '数据库', '立体数据库'],
    equivalentGroup: 'db-relational',
    isTintable: false,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-db-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <linearGradient id="iso-db-side" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#082f49"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="86" rx="42" ry="12" fill="#0f172a" opacity="0.25"/>
  <!-- Tier 3 (Bottom Disk) -->
  <path d="M26,52 C26,65 41,75 60,75 C79,75 94,65 94,52 L94,64 C94,77 79,87 60,87 C41,87 26,77 26,64 Z" fill="url(#iso-db-side)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <ellipse cx="60" cy="52" rx="34" ry="12" fill="url(#iso-db-top)" stroke="#ffffff" stroke-width="1" stroke-opacity="0.6"/>
  <!-- Tier 2 (Middle Disk) -->
  <path d="M26,35 C26,48 41,58 60,58 C79,58 94,48 94,35 L94,47 C94,60 79,70 60,70 C41,70 26,60 26,47 Z" fill="url(#iso-db-side)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <ellipse cx="60" cy="35" rx="34" ry="12" fill="url(#iso-db-top)" stroke="#ffffff" stroke-width="1" stroke-opacity="0.6"/>
  <!-- Tier 1 (Top Disk) -->
  <path d="M26,18 C26,31 41,41 60,41 C79,41 94,31 94,18 L94,30 C94,43 79,53 60,53 C41,53 26,43 26,30 Z" fill="url(#iso-db-side)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <ellipse cx="60" cy="18" rx="34" ry="12" fill="url(#iso-db-top)" stroke="#ffffff" stroke-width="1.5"/>
  <!-- Glowing Circumference Data Rings -->
  <ellipse cx="60" cy="18" rx="24" ry="8" fill="none" stroke="#ffffff" stroke-width="1" stroke-dasharray="3 3" opacity="0.8"/>
  <ellipse cx="60" cy="18" rx="14" ry="4.5" fill="none" stroke="#ffffff" stroke-width="1.2"/>
  <!-- Vertical Luminous Data Bus Beam & Indicator Dots -->
  <line x1="38" y1="23" x2="38" y2="72" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
  <circle cx="38" cy="23" r="2" fill="#22c55e"/>
  <circle cx="38" cy="40" r="2" fill="#22c55e"/>
  <circle cx="38" cy="57" r="2" fill="#22c55e"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric tiered database platter stack with laser data bus', zh: '现代 2.5D 等轴测分层数据库系统，带高速光纤读写总线与存储磁道' }
  },
  {
    id: 'generic-network-loadbalancer',
    provider: 'generic',
    category: 'network',
    name: { en: '2.5D Load Balancer (SLB)', zh: '2.5D 现代负载均衡 (SLB)' },
    code: 'SLB-2.5D',
    tags: ['loadbalancer', 'slb', 'alb', 'nlb', 'traffic', 'fuzaijunheng', '负载均衡'],
    equivalentGroup: 'network-loadbalancer',
    isTintable: false,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-slb-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7"/>
      <stop offset="50%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#6d28d9"/>
    </linearGradient>
    <linearGradient id="iso-slb-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#581c87"/>
      <stop offset="100%" stop-color="#3b0764"/>
    </linearGradient>
    <linearGradient id="iso-slb-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b0764"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Isometric Balancer Hub Chassis -->
  <polygon points="60,24 98,44 60,64 22,44" fill="url(#iso-slb-top)" stroke="#ffffff" stroke-width="1" stroke-opacity="0.7"/>
  <polygon points="22,44 60,64 60,82 22,62" fill="url(#iso-slb-left)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <polygon points="60,64 98,44 98,62 60,82" fill="url(#iso-slb-right)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <!-- Top Face: 1-to-3 Flow Traffic Splitting Distributor System -->
  <g stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff">
    <!-- Inflow from left -->
    <line x1="32" y1="44" x2="48" y2="44"/>
    <circle cx="32" cy="44" r="2.5" fill="#38bdf8"/>
    <!-- Central Distributor Hub Node -->
    <circle cx="52" cy="44" r="3.5" fill="#facc15"/>
    <!-- Outflow 1 (Upper Right) -->
    <line x1="56" y1="42" x2="78" y2="34"/>
    <polygon points="73,32 82,32 77,37"/>
    <!-- Outflow 2 (Middle Right) -->
    <line x1="56" y1="44" x2="84" y2="44"/>
    <polygon points="79,41 87,44 79,47"/>
    <!-- Outflow 3 (Lower Right) -->
    <line x1="56" y1="46" x2="78" y2="54"/>
    <polygon points="77,51 82,56 73,56"/>
  </g>
  <!-- Front Panel Status Matrix -->
  <circle cx="32" cy="56" r="2" fill="#22c55e"/>
  <circle cx="40" cy="60" r="2" fill="#22c55e"/>
  <circle cx="48" cy="64" r="2" fill="#38bdf8"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric load balancer node with 1-to-3 dynamic traffic distribution', zh: '现代 2.5D 等轴测应用负载均衡器，具备 1 对多智能分流引擎' }
  },
  {
    id: 'generic-physical-rack',
    provider: 'generic',
    category: 'physical',
    name: { en: '2.5D 42U Server Rack', zh: '2.5D 现代 42U 机柜' },
    code: 'RACK-2.5D',
    tags: ['rack', 'cabinet', 'datacenter', '42u', 'jigui', '机柜', '数据中心机柜'],
    isTintable: false,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-rk-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="iso-rk-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="iso-rk-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="88" rx="36" ry="10" fill="#0f172a" opacity="0.25"/>
  <!-- Tall Isometric 42U Cabinet Shell -->
  <polygon points="60,8 88,22 60,36 32,22" fill="url(#iso-rk-top)" stroke="#ffffff" stroke-width="1" stroke-opacity="0.6"/>
  <polygon points="32,22 60,36 60,90 32,76" fill="url(#iso-rk-left)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <polygon points="60,36 88,22 88,76 60,90" fill="url(#iso-rk-right)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <!-- Top Exhaust Ventilation Fans -->
  <ellipse cx="50" cy="20" rx="6" ry="3" fill="#0f172a" stroke="#64748b" stroke-width="0.8"/>
  <ellipse cx="70" cy="24" rx="6" ry="3" fill="#0f172a" stroke="#64748b" stroke-width="0.8"/>
  <!-- 4 Mounted Internal Server Units with Status Lights (Front Face) -->
  <g stroke="#475569" stroke-width="0.8" fill="#0f172a">
    <!-- Server 1 -->
    <polygon points="35,35 57,46 57,54 35,43"/>
    <circle cx="39" cy="40" r="1" fill="#22c55e"/>
    <circle cx="43" cy="42" r="1" fill="#38bdf8"/>
    <!-- Server 2 -->
    <polygon points="35,46 57,57 57,65 35,54"/>
    <circle cx="39" cy="51" r="1" fill="#22c55e"/>
    <circle cx="43" cy="53" r="1" fill="#22c55e"/>
    <!-- Server 3 -->
    <polygon points="35,57 57,68 57,76 35,65"/>
    <circle cx="39" cy="62" r="1" fill="#22c55e"/>
    <circle cx="43" cy="64" r="1" fill="#facc15"/>
    <!-- Server 4 (Bottom UPS / Switch) -->
    <polygon points="35,68 57,79 57,87 35,76"/>
    <circle cx="39" cy="73" r="1" fill="#38bdf8"/>
    <circle cx="43" cy="75" r="1" fill="#38bdf8"/>
  </g>
  <!-- Tempered Glass Door Border Accent -->
  <polygon points="33,24 59,37 59,88 33,75" fill="#38bdf8" fill-opacity="0.08" stroke="#38bdf8" stroke-width="0.8" stroke-opacity="0.5"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric 42U data center server cabinet with glass door and rackmount servers', zh: '现代 2.5D 等轴测 42U 标准数据中心机柜，内置多台满载服务器与顶部排风单元' }
  },
  {
    id: 'generic-network-ap',
    provider: 'generic',
    category: 'network',
    name: { en: '2.5D Wireless AP', zh: '2.5D 现代企业级无线 AP' },
    code: 'AP-2.5D',
    tags: ['wifi', 'wireless', 'ap', 'access point', '2.5d', 'wuxian', '无线AP', '无线接入点'],
    isTintable: false,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-ap-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="50%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <linearGradient id="iso-ap-side" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="80" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Radiating 2.5D Isometric Wi-Fi Wave Rings -->
  <g fill="none" stroke="#06b6d4" stroke-width="1.8" stroke-linecap="round">
    <path d="M22,30 C32,18 88,18 98,30" opacity="0.3"/>
    <path d="M28,38 C36,28 84,28 92,38" opacity="0.6"/>
    <path d="M36,46 C42,38 78,38 84,46" opacity="0.9"/>
  </g>
  <!-- Access Point Dome Base Body -->
  <path d="M30,50 C30,64 43,74 60,74 C77,74 90,64 90,50 L90,58 C90,72 77,82 60,82 C43,82 30,72 30,58 Z" fill="url(#iso-ap-side)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <!-- Top Saucer Disc -->
  <ellipse cx="60" cy="50" rx="30" ry="14" fill="url(#iso-ap-top)" stroke="#ffffff" stroke-width="1.5"/>
  <!-- Center Wi-Fi Glowing Ring & Status Indicator -->
  <ellipse cx="60" cy="50" rx="12" ry="5.5" fill="#06b6d4" fill-opacity="0.2" stroke="#06b6d4" stroke-width="1.5"/>
  <circle cx="60" cy="50" r="3" fill="#06b6d4"/>
  <circle cx="60" cy="50" r="1.5" fill="#ffffff"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric enterprise Wi-Fi 6/7 access point with radiating signal waves', zh: '现代 2.5D 等轴测企业级吸顶无线 AP，配环形指示灯与立体射频信号波' }
  },
  {
    id: 'generic-physical-transceiver',
    provider: 'generic',
    category: 'physical',
    name: { en: '2.5D Optical Transceiver (SFP+)', zh: '2.5D 现代光模块与光纤' },
    code: 'SFP-2.5D',
    tags: ['sfp', 'optical', 'transceiver', 'fiber', 'guangxian', '光模块', '光纤', 'LC光纤'],
    isTintable: false,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-sfp-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="50%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
    <linearGradient id="iso-sfp-side" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="80" rx="42" ry="12" fill="#0f172a" opacity="0.25"/>
  <!-- SFP Metallic Body -->
  <polygon points="50,26 84,43 54,58 20,41" fill="url(#iso-sfp-top)" stroke="#ffffff" stroke-width="1" stroke-opacity="0.6"/>
  <polygon points="20,41 54,58 54,74 20,57" fill="url(#iso-sfp-side)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <polygon points="54,58 84,43 84,59 54,74" fill="#0f172a" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <!-- Optical Transceiver Bale Clasp Latch (Cyan / Blue) -->
  <polygon points="16,42 22,39 22,55 16,58" fill="#0ea5e9" stroke="#ffffff" stroke-width="0.8"/>
  <path d="M16,42 L8,46 L8,62 L16,58" fill="#0284c7" stroke="#ffffff" stroke-width="0.8"/>
  <!-- Duplex LC Optical Fiber Pair extending outward -->
  <g stroke-linecap="round" fill="none">
    <!-- Fiber Cable 1 (Orange Multi-mode) -->
    <path d="M54,66 C68,73 80,70 96,65 C104,62 108,56 112,56" stroke="#f59e0b" stroke-width="3"/>
    <!-- Fiber Cable 2 (Blue Single-mode / Return) -->
    <path d="M60,63 C74,70 86,67 102,62 C110,59 114,53 118,53" stroke="#0ea5e9" stroke-width="3"/>
    <!-- Laser Core Glow -->
    <circle cx="54" cy="66" r="2" fill="#fde047"/>
    <circle cx="60" cy="63" r="2" fill="#38bdf8"/>
  </g>
</svg>`,
    description: { en: 'Modern 2.5D isometric SFP+ optical transceiver module and duplex LC fiber connector', zh: '现代 2.5D 等轴测 SFP+ 经典金属光模块，连接双芯 LC 光纤跳线' }
  },
  {
    id: 'generic-physical-ups',
    provider: 'generic',
    category: 'physical',
    name: { en: '2.5D Smart UPS Power', zh: '2.5D 现代在线式 UPS 电源' },
    code: 'UPS-2.5D',
    tags: ['ups', 'power', 'pdu', 'battery', 'backup', 'dianyuan', '电源', '不间断电源'],
    isTintable: false,
    viewBox: '0 0 120 100',
    svgRaw: `<svg viewBox="0 0 120 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iso-ups-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="iso-ups-left" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="iso-ups-right" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="iso-ups-bolt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  </defs>
  <!-- Ground Soft Shadow -->
  <ellipse cx="60" cy="82" rx="46" ry="14" fill="#0f172a" opacity="0.25"/>
  <!-- Heavy Duty UPS Chassis -->
  <polygon points="60,22 98,42 60,62 22,42" fill="url(#iso-ups-top)" stroke="#ffffff" stroke-width="1" stroke-opacity="0.6"/>
  <polygon points="22,42 60,62 60,82 22,62" fill="url(#iso-ups-left)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <polygon points="60,62 98,42 98,62 60,82" fill="url(#iso-ups-right)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
  <!-- Top Face: High-Voltage Lightning Energy Emblem -->
  <g transform="translate(60, 42)">
    <polygon points="1,-14 -7,-1 -1,-1 -4,14 7,1 1,1 5,-14" fill="url(#iso-ups-bolt)" stroke="#ffffff" stroke-width="1"/>
  </g>
  <!-- Front Panel: LCD Battery Gauge & In/Out Status -->
  <!-- LCD Display Screen -->
  <polygon points="26,50 38,56 38,62 26,56" fill="#022c22" stroke="#10b981" stroke-width="0.8"/>
  <!-- Battery Charge Level Bars (Green 100%) -->
  <line x1="28" y1="53" x2="28" y2="56" stroke="#22c55e" stroke-width="1.5"/>
  <line x1="31" y1="55" x2="31" y2="58" stroke="#22c55e" stroke-width="1.5"/>
  <line x1="34" y1="56" x2="34" y2="59" stroke="#22c55e" stroke-width="1.5"/>
  <!-- AC Input Normal & Inverter Status LEDs -->
  <circle cx="44" cy="62" r="1.5" fill="#22c55e"/>
  <circle cx="48" cy="64" r="1.5" fill="#22c55e"/>
  <circle cx="52" cy="66" r="1.5" fill="#38bdf8"/>
</svg>`,
    description: { en: 'Modern 2.5D isometric online UPS battery backup unit with LCD battery level meter', zh: '现代 2.5D 等轴测双变换在线式 UPS 电源，配液晶电量状态屏与运行指示' }
  },

  // ==================== 2. 亚马逊云官方原版 (AWS Official Architecture Icons) ====================
  {
    id: 'aws-compute-ec2',
    provider: 'aws',
    category: 'compute',
    name: { en: 'Amazon EC2', zh: 'Amazon EC2 弹性计算 (官方)' },
    code: 'EC2',
    tags: ['aws', 'ec2', 'virtual server', 'official', 'tanxingjisuan', '云服务器', '官方'],
    equivalentGroup: 'compute-vm',
    isTintable: false,
    viewBox: '0 0 64 64',
    svgRaw: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Official AWS EC2 Orange Box -->
  <rect width="64" height="64" rx="8" fill="#FF9900"/>
  <!-- Inner Official Compute Cube Artwork -->
  <path d="M49 22.5L32 12.5L15 22.5V41.5L32 51.5L49 41.5V22.5Z" fill="#FFFFFF" fill-opacity="0.2"/>
  <path d="M32 14L47 23V41L32 50L17 41V23L32 14Z" stroke="#FFFFFF" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
  <path d="M32 14V32M32 32L17 41M32 32L47 41" stroke="#FFFFFF" stroke-width="2.5" stroke-linejoin="round"/>
  <!-- EC2 Chevron Arrow -->
  <path d="M23 27L29 32L23 37M35 37H41" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    officialDocUrl: 'https://aws.amazon.com/ec2/',
    description: { en: 'Official Amazon Web Services EC2 compute capacity icon', zh: '亚马逊云官方原版 EC2 弹性计算服务图标' }
  },
  {
    id: 'aws-storage-s3',
    provider: 'aws',
    category: 'storage',
    name: { en: 'Amazon S3', zh: 'Amazon S3 对象存储 (官方)' },
    code: 'S3',
    tags: ['aws', 's3', 'bucket', 'official', 'duixiangcunchu', '存储桶', '官方'],
    equivalentGroup: 'storage-object',
    isTintable: false,
    viewBox: '0 0 64 64',
    svgRaw: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Official AWS S3 Green Box -->
  <rect width="64" height="64" rx="8" fill="#107C41"/>
  <!-- Official S3 Bucket Structure -->
  <path d="M16 20C16 16.5 23.2 14 32 14C40.8 14 48 16.5 48 20V44C48 47.5 40.8 50 32 50C23.2 50 16 47.5 16 44V20Z" fill="#FFFFFF" fill-opacity="0.15"/>
  <ellipse cx="32" cy="20" rx="16" ry="5.5" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
  <path d="M16 20V44C16 47.5 23.2 50 32 50C40.8 50 48 47.5 48 44V20" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
  <path d="M16 32C16 35.5 23.2 38 32 38C40.8 38 48 35.5 48 32" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
</svg>`,
    officialDocUrl: 'https://aws.amazon.com/s3/',
    description: { en: 'Official Amazon Web Services Simple Storage Service (S3) bucket icon', zh: '亚马逊云官方原版 S3 对象存储桶标准图标' }
  },
  {
    id: 'aws-db-rds',
    provider: 'aws',
    category: 'database',
    name: { en: 'Amazon RDS', zh: 'Amazon RDS 关系型数据库 (官方)' },
    code: 'RDS',
    tags: ['aws', 'rds', 'database', 'sql', 'mysql', 'postgres', 'official', '云数据库'],
    equivalentGroup: 'db-relational',
    isTintable: false,
    viewBox: '0 0 64 64',
    svgRaw: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Official AWS Blue Box -->
  <rect width="64" height="64" rx="8" fill="#3B48CC"/>
  <!-- Official RDS Database Platters -->
  <ellipse cx="32" cy="18" rx="17" ry="5.5" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
  <path d="M15 18V46C15 49.5 22.6 52 32 52C41.4 52 49 49.5 49 46V18" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
  <path d="M15 32C15 35.5 22.6 38 32 38C41.4 38 49 35.5 49 32" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
</svg>`,
    officialDocUrl: 'https://aws.amazon.com/rds/',
    description: { en: 'Official Amazon Relational Database Service (RDS) icon', zh: '亚马逊云官方原版 RDS 关系型数据库图标' }
  },
  {
    id: 'aws-compute-lambda',
    provider: 'aws',
    category: 'compute',
    name: { en: 'AWS Lambda', zh: 'AWS Lambda 无服务器 (官方)' },
    code: 'Lambda',
    tags: ['aws', 'lambda', 'serverless', 'faas', 'official', '函数计算'],
    equivalentGroup: 'compute-function',
    isTintable: false,
    viewBox: '0 0 64 64',
    svgRaw: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="8" fill="#ED7100"/>
  <!-- Official Greek Lambda Symbol -->
  <path d="M18 48L29 18H35L46 48H39L32 27L25 48H18Z" fill="#FFFFFF"/>
</svg>`,
    officialDocUrl: 'https://aws.amazon.com/lambda/',
    description: { en: 'Official AWS Lambda event-driven serverless computing icon', zh: '亚马逊云官方原版 Lambda 无服务器事件驱动计算图标' }
  },

  // ==================== 3. 微软云官方原版 (Microsoft Azure Official) ====================
  {
    id: 'azure-compute-vm',
    provider: 'azure',
    category: 'compute',
    name: { en: 'Azure Virtual Machines', zh: 'Azure 虚拟机 (官方)' },
    code: 'VM',
    tags: ['azure', 'vm', 'virtual machine', 'iaas', 'official', '微软云'],
    equivalentGroup: 'compute-vm',
    isTintable: false,
    viewBox: '0 0 64 64',
    svgRaw: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="azureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0078D4"/>
      <stop offset="100%" stop-color="#004578"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="8" fill="url(#azureGrad)"/>
  <rect x="14" y="16" width="36" height="32" rx="4" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
  <circle cx="21" cy="23" r="2" fill="#FFFFFF"/>
  <circle cx="28" cy="23" r="2" fill="#FFFFFF"/>
  <path d="M14 34H50" stroke="#FFFFFF" stroke-width="2.5"/>
</svg>`,
    officialDocUrl: 'https://azure.microsoft.com/products/virtual-machines/',
    description: { en: 'Official Microsoft Azure Virtual Machines icon', zh: '微软云官方原版 Azure 虚拟机服务标准图标' }
  },
  {
    id: 'azure-storage-blob',
    provider: 'azure',
    category: 'storage',
    name: { en: 'Azure Blob Storage', zh: 'Azure Blob 对象存储 (官方)' },
    code: 'Blob',
    tags: ['azure', 'blob', 'storage', 'official', 'duixiangcunchu'],
    equivalentGroup: 'storage-object',
    isTintable: false,
    viewBox: '0 0 64 64',
    svgRaw: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="8" fill="#0089D6"/>
  <path d="M20 22C20 18.5 25.4 16 32 16C38.6 16 44 18.5 44 22V42C44 45.5 38.6 48 32 48C25.4 48 20 45.5 20 42V22Z" fill="#FFFFFF" fill-opacity="0.2" stroke="#FFFFFF" stroke-width="2.5"/>
  <path d="M20 30C20 33.5 25.4 36 32 36C38.6 36 44 33.5 44 30" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
</svg>`,
    officialDocUrl: 'https://azure.microsoft.com/products/storage/blobs/',
    description: { en: 'Official Microsoft Azure Blob Storage icon', zh: '微软云官方原版 Blob 海量对象存储图标' }
  },

  // ==================== 4. 阿里云官方原版 (Alibaba Cloud Official) ====================
  {
    id: 'aliyun-compute-ecs',
    provider: 'aliyun',
    category: 'compute',
    name: { en: 'Elastic Compute Service (ECS)', zh: '阿里云 ECS 云服务器 (官方)' },
    code: 'ECS',
    tags: ['aliyun', 'ecs', 'cloud server', 'official', 'ali', '云主机', '阿里云'],
    equivalentGroup: 'compute-vm',
    isTintable: false,
    viewBox: '0 0 64 64',
    svgRaw: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="8" fill="#FF6A00"/>
  <!-- Official Alibaba Cloud Bracket System -->
  <path d="M16 20H48V42H16V20Z" stroke="#FFFFFF" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
  <path d="M25 42V48H39V42" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
  <circle cx="23" cy="31" r="2" fill="#FFFFFF"/>
  <circle cx="31" cy="31" r="2" fill="#FFFFFF"/>
</svg>`,
    officialDocUrl: 'https://www.aliyun.com/product/ecs',
    description: { en: 'Official Alibaba Cloud Elastic Compute Service (ECS) icon', zh: '阿里云官方原版 ECS 弹性计算服务器标准图标' }
  },
  {
    id: 'aliyun-storage-oss',
    provider: 'aliyun',
    category: 'storage',
    name: { en: 'Object Storage Service (OSS)', zh: '阿里云 OSS 对象存储 (官方)' },
    code: 'OSS',
    tags: ['aliyun', 'oss', 'bucket', 'official', 'duixiangcunchu', '阿里云存储'],
    equivalentGroup: 'storage-object',
    isTintable: false,
    viewBox: '0 0 64 64',
    svgRaw: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="8" fill="#FF6A00"/>
  <rect x="18" y="18" width="28" height="28" rx="5" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
  <circle cx="32" cy="32" r="6" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
</svg>`,
    officialDocUrl: 'https://www.aliyun.com/product/oss',
    description: { en: 'Official Alibaba Cloud Object Storage Service (OSS) icon', zh: '阿里云官方原版 OSS 对象存储标准图标' }
  },

  // ==================== 5. 云原生与开源官方原版 (Kubernetes / CNCF / Docker) ====================
  {
    id: 'k8s-compute-pod',
    provider: 'k8s',
    category: 'compute',
    name: { en: 'Kubernetes Pod / Helm Wheel', zh: 'Kubernetes 官方舵轮 / Pod' },
    code: 'K8s',
    tags: ['k8s', 'kubernetes', 'pod', 'cncf', 'helm', 'official', '云原生'],
    equivalentGroup: 'compute-container',
    isTintable: false,
    viewBox: '0 0 64 64',
    svgRaw: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="8" fill="#326CE5"/>
  <!-- Official Kubernetes 7-Spoke Helm Wheel -->
  <circle cx="32" cy="32" r="14" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
  <circle cx="32" cy="32" r="5" fill="#FFFFFF"/>
  <!-- 7 Spokes -->
  <line x1="32" y1="18" x2="32" y2="8" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="43" y1="23" x2="51" y2="17" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="45" y1="35" x2="54" y2="39" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="37" y1="45" x2="41" y2="54" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="27" y1="45" x2="23" y2="54" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="19" y1="35" x2="10" y2="39" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="21" y1="23" x2="13" y2="17" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,
    officialDocUrl: 'https://kubernetes.io/',
    description: { en: 'Official Kubernetes CNCF 7-spoke blue helm wheel vector icon', zh: 'CNCF 官方 Kubernetes 经典七辐舵轮矢量图标' }
  },
  {
    id: 'k8s-compute-docker',
    provider: 'k8s',
    category: 'compute',
    name: { en: 'Docker Container Whale', zh: 'Docker 官方容器鲸鱼' },
    code: 'Docker',
    tags: ['docker', 'container', 'whale', 'official', 'cgroups', '开源容器'],
    equivalentGroup: 'compute-container',
    isTintable: false,
    viewBox: '0 0 64 64',
    svgRaw: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="8" fill="#0db7ed"/>
  <!-- Containers Stacked on Whale -->
  <rect x="18" y="23" width="5" height="5" rx="0.5" fill="#FFFFFF"/>
  <rect x="25" y="23" width="5" height="5" rx="0.5" fill="#FFFFFF"/>
  <rect x="32" y="23" width="5" height="5" rx="0.5" fill="#FFFFFF"/>
  <rect x="25" y="16" width="5" height="5" rx="0.5" fill="#FFFFFF"/>
  <rect x="32" y="16" width="5" height="5" rx="0.5" fill="#FFFFFF"/>
  <!-- Whale Body -->
  <path d="M12 32C12 40 20 44 32 44C44 44 50 38 52 32H12Z" stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
  <circle cx="46" cy="35" r="1.5" fill="#FFFFFF"/>
</svg>`,
    officialDocUrl: 'https://www.docker.com/',
    description: { en: 'Official Docker container whale vector icon', zh: 'Docker 官方经典集装箱蓝鲸矢量标准图标' }
  },
  {
    id: 'k8s-db-redis',
    provider: 'k8s',
    category: 'database',
    name: { en: 'Redis In-Memory Store', zh: 'Redis 官方内存缓存' },
    code: 'Redis',
    tags: ['redis', 'cache', 'in-memory', 'nosql', 'official', 'huancun'],
    equivalentGroup: 'db-cache',
    isTintable: false,
    viewBox: '0 0 64 64',
    svgRaw: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="8" fill="#DC382D"/>
  <path d="M16 23L32 15L48 23L32 31L16 23Z" stroke="#FFFFFF" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
  <path d="M16 31L32 39L48 31" stroke="#FFFFFF" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
  <path d="M16 39L32 47L48 39" stroke="#FFFFFF" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
</svg>`,
    officialDocUrl: 'https://redis.io/',
    description: { en: 'Official Redis in-memory data store layered icon', zh: 'Redis 官方红立方分层内存存储标准图标' }
  }
];
