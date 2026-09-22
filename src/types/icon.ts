export type IconStyle = 'isometric' | 'flat' | 'cloud' | 'frontpanel';

export type CloudProvider = 
  | 'generic'       // 通用中立
  | 'physical'      // 物理通用（兼容）
  | 'cloud'         // 云通用（兼容）
  | 'isp'           // 运营商 ISP (电信/联通/移动)
  | 'cisco'         // 思科 Cisco
  | 'huawei'        // 华为 / 信创
  | 'h3c'           // 新华三 H3C
  | 'fortinet'      // 飞塔 Fortinet
  | 'aws'           // Amazon Web Services
  | 'azure'         // Microsoft Azure
  | 'gcp'           // Google Cloud Platform
  | 'aliyun'        // 阿里云
  | 'tencent'       // 腾讯云
  | 'k8s';          // 云原生 CNCF / Kubernetes

export type IconCategory = 
  | 'physical'      // 物理硬件设备
  | 'cloud'         // 云上与虚拟化设备
  | 'security'      // 网络安全设备
  | 'network'       // 路由与交换
  | 'compute'       // 计算与服务器
  | 'storage'       // 集中式存储
  | 'database'      // 数据库与缓存
  | 'integration'   // 中间件与集成
  | 'analytics'     // 大数据与分析
  | 'general';      // 终端与周边

export interface IconMeta {
  /** 唯一标识符，如 'cisco-router' 或 'core-switch-chassis' */
  id: string;

  /** 图标风格体系，默认为 isometric */
  style?: IconStyle;

  /** 所属厂商或通用中立 */
  provider: CloudProvider;

  /** 标准化服务类别 */
  category: IconCategory;

  /** 设备类型划分：物理设备还是云上设备 */
  deviceType?: 'physical' | 'cloud';

  /** 多语言规范名称（纯净版，不包含无意义的前缀） */
  name: {
    en: string;
    zh: string;
  };

  /** 官方服务代号或缩写，如 'CORE-SW', 'NGFW', 'SLB', 'RDS' */
  code?: string;

  /** 搜索关键词（支持中英双语、常见缩写、拼音），方便前端秒级模糊搜索 */
  tags: string[];

  /** 跨厂商/跨云等价物概念组 ID，例如 'core-sw', 'firewall', 'router', 'slb', 'ecs' */
  equivalentGroup?: string;

  /** 内联 SVG 矢量模板内容字符串 */
  svgRaw: string;

  /** 默认 viewBox，例如 '0 0 120 100' 或 '0 0 64 64' */
  viewBox?: string;

  /** 是否支持自由换色（通常中立设备和 2.5D 设备支持） */
  isTintable?: boolean;

  /** 推荐的默认色彩 */
  defaultColor?: string;

  /** 官方参考文档或架构指南链接 */
  officialDocUrl?: string;

  /** 简要功能描述 */
  description?: {
    en: string;
    zh: string;
  };
}

export interface ProviderMeta {
  id: CloudProvider;
  name: {
    en: string;
    zh: string;
  };
  color: string;
  badgeBg: string;
  iconCount?: number;
  /** 支持该厂商的风格列表，不填则为全支持 */
  supportedStyles?: IconStyle[];
}

export interface StyleMeta {
  id: IconStyle;
  name: {
    en: string;
    zh: string;
  };
  badge: string;
  description: {
    en: string;
    zh: string;
  };
}

export interface CategoryMeta {
  id: IconCategory;
  name: {
    en: string;
    zh: string;
  };
  iconName: string;
}
