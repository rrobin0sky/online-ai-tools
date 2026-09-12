import { IconMeta, ProviderMeta, CategoryMeta } from '../types/icon';

export const PROVIDERS: ProviderMeta[] = [
  {
    id: 'generic',
    name: { en: 'Vendor-Neutral (3D Cisco)', zh: '通用中立 (经典3D工程风)' },
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
  // ==================== 1. 经典 3D 思科/工程规范通用网络 (Cisco 3D Isometric Network) ====================
  {
    id: 'generic-network-firewall',
    provider: 'generic',
    category: 'network',
    name: { en: '3D Brick Firewall', zh: '3D 经典红砖防火墙' },
    code: 'FW-3D',
    tags: ['firewall', 'security', 'cisco', '3d', 'brick', 'fanghuoqiang', '防火墙', '红砖防火墙', '经典3d'],
    equivalentGroup: 'network-firewall',
    isTintable: false,
    viewBox: '0 0 140 65',
    svgRaw: `<svg viewBox="0 0 140 65" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#ffffff" stroke-width="1.25" stroke-linejoin="round">
    <!-- Top Face (lighter red with brick layout) -->
    <polygon points="10,22 45,6 135,6 100,22" fill="#d32f2f"/>
    <polygon points="10,22 45,6 63,6 28,22" fill="#ef5350"/>
    <polygon points="28,22 63,6 81,6 46,22" fill="#e53935"/>
    <polygon points="46,22 81,6 99,6 64,22" fill="#ef5350"/>
    <polygon points="64,22 99,6 117,6 82,22" fill="#e53935"/>
    <polygon points="82,22 117,6 135,6 100,22" fill="#ef5350"/>
    <!-- Top mid row division -->
    <polygon points="19,14 54,6 72,6 37,14" fill="#ff7961"/>
    <polygon points="37,14 72,6 90,6 55,14" fill="#ef5350"/>
    <polygon points="55,14 90,6 108,6 73,14" fill="#ff7961"/>
    <polygon points="73,14 108,6 126,6 91,14" fill="#ef5350"/>

    <!-- Right Side Face (dark shadow maroon) -->
    <polygon points="100,22 135,6 135,40 100,56" fill="#580000"/>
    <polygon points="100,22 117,14 117,31 100,39" fill="#800000"/>
    <polygon points="100,39 117,31 117,48 100,56" fill="#6a0000"/>
    <polygon points="117,14 135,6 135,23 117,31" fill="#750000"/>
    <polygon points="117,31 135,23 135,40 117,48" fill="#580000"/>

    <!-- Front Face (deep red staggered bricks) -->
    <polygon points="10,22 25,22 25,44 10,44" fill="#b71c1c"/>
    <polygon points="10,44 25,44 25,56 10,56" fill="#990000"/>
    <polygon points="25,22 40,22 40,34 25,34" fill="#990000"/>
    <polygon points="25,34 40,34 40,56 25,56" fill="#b71c1c"/>
    <polygon points="40,22 55,22 55,44 40,44" fill="#b71c1c"/>
    <polygon points="40,44 55,44 55,56 40,56" fill="#990000"/>
    <polygon points="55,22 70,22 70,34 55,34" fill="#990000"/>
    <polygon points="55,34 70,34 70,56 55,56" fill="#b71c1c"/>
    <polygon points="70,22 85,22 85,44 70,44" fill="#b71c1c"/>
    <polygon points="70,44 85,44 85,56 70,56" fill="#990000"/>
    <polygon points="85,22 100,22 100,34 85,34" fill="#990000"/>
    <polygon points="85,34 100,34 100,56 85,56" fill="#b71c1c"/>
  </g>
</svg>`,
    description: { en: 'Classic Cisco 3D isometric brick-wall network firewall (exact PPT standard)', zh: '经典思科 3D 等轴测红砖网络防火墙（PPT与技术方案经典原版规范）' }
  },
  {
    id: 'generic-network-router',
    provider: 'generic',
    category: 'network',
    name: { en: '3D Cylinder Router', zh: '3D 经典圆柱路由器' },
    code: 'RT-3D',
    tags: ['router', 'cisco', '3d', 'cylinder', 'l3', 'luyouqi', '路由器', '3d路由器', '思科路由器'],
    equivalentGroup: 'network-router',
    isTintable: false,
    viewBox: '0 0 90 65',
    svgRaw: `<svg viewBox="0 0 90 65" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- 3D Lower Cylinder Body -->
  <path d="M5,22 C5,22 5,42 5,42 C5,51 23,58 45,58 C67,58 85,51 85,42 C85,42 85,22 85,22 Z" fill="#004d80" stroke="#003366" stroke-width="1.2"/>
  <path d="M5,42 C5,51 23,58 45,58 C67,58 85,51 85,42" fill="none" stroke="#00b0f0" stroke-width="1.5" stroke-opacity="0.4"/>
  <!-- Top Ellipse Face -->
  <ellipse cx="45" cy="22" rx="40" ry="16" fill="#0080c0" stroke="#ffffff" stroke-width="1.5"/>
  <!-- Cisco 4-Way Cross Arrows on Top -->
  <g fill="#ffffff" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <!-- Left Arrow (pointing inwards) -->
    <line x1="16" y1="22" x2="34" y2="22"/>
    <polygon points="27,18 35,22 27,26"/>
    <!-- Right Arrow (pointing inwards) -->
    <line x1="74" y1="22" x2="56" y2="22"/>
    <polygon points="63,18 55,22 63,26"/>
    <!-- Top Arrow (pointing outwards) -->
    <line x1="45" y1="22" x2="45" y2="10"/>
    <polygon points="41,15 45,9 49,15"/>
    <!-- Bottom Arrow (pointing outwards) -->
    <line x1="45" y1="22" x2="45" y2="34"/>
    <polygon points="41,29 45,35 49,29"/>
  </g>
</svg>`,
    description: { en: 'Official Cisco 3D isometric blue cylindrical router with 4-way cross arrows', zh: '经典思科 3D 蓝色圆柱路由器，顶部配四向进出交叉箭头' }
  },
  {
    id: 'generic-network-switch-l2',
    provider: 'generic',
    category: 'network',
    name: { en: '3D Workgroup Switch (L2)', zh: '3D 二层以太网交换机' },
    code: 'SW-3D',
    tags: ['switch', 'cisco', '3d', 'workgroup', 'l2', 'jiaohuanji', '交换机', '3d交换机'],
    equivalentGroup: 'network-switch',
    isTintable: false,
    viewBox: '0 0 100 65',
    svgRaw: `<svg viewBox="0 0 100 65" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Right Side Face -->
  <polygon points="75,22 95,8 95,34 75,48" fill="#003d5c" stroke="#ffffff" stroke-width="1.2"/>
  <!-- Front Face -->
  <polygon points="5,22 75,22 75,48 5,48" fill="#005580" stroke="#ffffff" stroke-width="1.2"/>
  <!-- Top Face -->
  <polygon points="5,22 25,8 95,8 75,22" fill="#0088cc" stroke="#ffffff" stroke-width="1.2"/>
  <!-- 2 Pairs of Opposite Parallel Arrows (Cisco Switch Standard) -->
  <g stroke="#ffffff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff">
    <!-- Top line right -->
    <line x1="30" y1="13" x2="65" y2="13"/>
    <polygon points="60,10 68,13 60,16"/>
    <!-- Bottom line left -->
    <line x1="70" y1="18" x2="35" y2="18"/>
    <polygon points="40,15 32,18 40,21"/>
  </g>
</svg>`,
    description: { en: 'Official Cisco 3D isometric blue workgroup switch with dual parallel arrows', zh: '经典思科 3D 矩形以太网工作组交换机，顶部标准双向平行对射箭头' }
  },
  {
    id: 'generic-network-switch-l3',
    provider: 'generic',
    category: 'network',
    name: { en: '3D Multilayer Switch (L3 / Core)', zh: '3D 三层/核心交换机' },
    code: 'L3-SW-3D',
    tags: ['l3 switch', 'core switch', 'cisco', 'multilayer', '3d', 'sanceng', '三层交换机', '核心交换机'],
    equivalentGroup: 'network-switch',
    isTintable: false,
    viewBox: '0 0 95 70',
    svgRaw: `<svg viewBox="0 0 95 70" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Right Side Face -->
  <polygon points="65,28 90,12 90,44 65,60" fill="#003366" stroke="#ffffff" stroke-width="1.2"/>
  <!-- Front Face -->
  <polygon points="5,28 65,28 65,60 5,60" fill="#004c80" stroke="#ffffff" stroke-width="1.2"/>
  <!-- Top Face -->
  <polygon points="5,28 30,12 90,12 65,28" fill="#007acc" stroke="#ffffff" stroke-width="1.2"/>
  <!-- Cisco Multilayer 3D 4-Crossing Arrows -->
  <g stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff">
    <!-- Diagonal 1 -->
    <line x1="26" y1="23" x2="68" y2="17"/>
    <polygon points="29,20 23,23 29,26"/>
    <polygon points="65,14 71,17 65,20"/>
    <!-- Diagonal 2 -->
    <line x1="38" y1="16" x2="56" y2="24"/>
    <polygon points="41,13 35,16 41,19"/>
    <polygon points="53,21 59,24 53,27"/>
  </g>
</svg>`,
    description: { en: 'Cisco 3D multilayer routing core switch box with 3D crossing arrows', zh: '经典思科 3D 核心/三层多层路由交换机，顶部交叉立体箭头' }
  },
  {
    id: 'generic-compute-server',
    provider: 'generic',
    category: 'compute',
    name: { en: '3D Tower & Rack Server', zh: '3D 机架/物理服务器' },
    code: 'SRV-3D',
    tags: ['server', 'cisco', '3d', 'host', 'baremetal', 'fuwuqi', '服务器', '3d服务器'],
    isTintable: false,
    viewBox: '0 0 85 70',
    svgRaw: `<svg viewBox="0 0 85 70" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Right Side Face -->
  <polygon points="55,20 80,6 80,48 55,62" fill="#2d3748" stroke="#ffffff" stroke-width="1.2"/>
  <!-- Front Face -->
  <polygon points="8,20 55,20 55,62 8,62" fill="#4a5568" stroke="#ffffff" stroke-width="1.2"/>
  <!-- Top Face -->
  <polygon points="8,20 33,6 80,6 55,20" fill="#718096" stroke="#ffffff" stroke-width="1.2"/>
  <!-- Server Drive Bays & LEDs -->
  <rect x="14" y="26" width="35" height="5" rx="1" fill="#1a202c" stroke="#a0aec0" stroke-width="0.8"/>
  <rect x="14" y="34" width="35" height="5" rx="1" fill="#1a202c" stroke="#a0aec0" stroke-width="0.8"/>
  <rect x="14" y="42" width="35" height="5" rx="1" fill="#1a202c" stroke="#a0aec0" stroke-width="0.8"/>
  <!-- Power & Activity LEDs -->
  <circle cx="18" cy="54" r="1.5" fill="#48bb78"/>
  <circle cx="24" cy="54" r="1.5" fill="#4299e1"/>
</svg>`,
    description: { en: 'Cisco 3D metallic enterprise rack/tower server host', zh: '经典 3D 金属灰企业级服务器主机，带磁盘阵列槽与运行指示灯' }
  },
  {
    id: 'generic-network-internet',
    provider: 'generic',
    category: 'network',
    name: { en: '3D Volumetric Cloud / WAN', zh: '3D 质感云网 / 互联网' },
    code: 'WAN-3D',
    tags: ['cloud', 'internet', 'wan', '3d', 'cisco', 'gongwang', '云', '公网', '互联网'],
    isTintable: false,
    viewBox: '0 0 100 65',
    svgRaw: `<svg viewBox="0 0 100 65" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cloudGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
  </defs>
  <!-- 3D Shadow Layer -->
  <path d="M22,46 C12,46 5,38 5,28 C5,20 11,14 18,12 C21,5 29,1 38,1 C47,1 55,6 59,13 C63,9 70,7 76,7 C88,7 97,16 97,27 C97,38 88,46 78,46 Z" fill="#0c4a6e" transform="translate(4, 6)"/>
  <!-- Front Cloud Body -->
  <path d="M22,46 C12,46 5,38 5,28 C5,20 11,14 18,12 C21,5 29,1 38,1 C47,1 55,6 59,13 C63,9 70,7 76,7 C88,7 97,16 97,27 C97,38 88,46 78,46 Z" fill="url(#cloudGrad)" stroke="#ffffff" stroke-width="1.5"/>
  <!-- Highlighting gloss -->
  <path d="M25,18 C28,10 33,6 40,6 C48,6 53,10 56,16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6"/>
</svg>`,
    description: { en: 'Cisco 3D volumetric blue gradient public cloud and WAN network', zh: '经典思科 3D 渐变饱满云朵，代表公共互联网与广域网 WAN' }
  },
  {
    id: 'generic-db-relational',
    provider: 'generic',
    category: 'database',
    name: { en: '3D Cylindrical Database Stack', zh: '3D 经典数据库 (SQL)' },
    code: 'DB-3D',
    tags: ['database', 'sql', 'cisco', '3d', 'cylinder', 'shujuku', '数据库', '3d数据库'],
    equivalentGroup: 'db-relational',
    isTintable: false,
    viewBox: '0 0 80 75',
    svgRaw: `<svg viewBox="0 0 80 75" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Bottom Platter -->
  <path d="M10,42 C10,42 10,54 10,54 C10,62 23,68 40,68 C57,68 70,62 70,54 C70,54 70,42 70,42" fill="#005299" stroke="#ffffff" stroke-width="1.2"/>
  <ellipse cx="40" cy="42" rx="30" ry="10" fill="#0073cc" stroke="#ffffff" stroke-width="1.2"/>
  <!-- Middle Platter -->
  <path d="M10,26 C10,26 10,38 10,38 C10,46 23,52 40,52 C57,52 70,46 70,38 C70,38 70,26 70,26" fill="#005299" stroke="#ffffff" stroke-width="1.2"/>
  <ellipse cx="40" cy="26" rx="30" ry="10" fill="#0080e6" stroke="#ffffff" stroke-width="1.2"/>
  <!-- Top Platter -->
  <path d="M10,10 C10,10 10,22 10,22 C10,30 23,36 40,36 C57,36 70,30 70,22 C70,22 70,10 70,10" fill="#0066b3" stroke="#ffffff" stroke-width="1.2"/>
  <ellipse cx="40" cy="10" rx="30" ry="10" fill="#0099ff" stroke="#ffffff" stroke-width="1.5"/>
</svg>`,
    description: { en: 'Cisco 3D multi-tiered database disk platter stack', zh: '经典思科 3D 蓝色多层磁盘存储与在线数据库' }
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
