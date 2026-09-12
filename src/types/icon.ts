export type CloudProvider = 
  | 'generic'       // 通用中立 2.5D
  | 'physical'      // 物理硬件设备
  | 'cloud'         // 云上虚拟化
  | 'aws'           // Amazon Web Services
  | 'azure'         // Microsoft Azure
  | 'gcp'           // Google Cloud Platform
  | 'aliyun'        // 阿里云
  | 'tencent'       // 腾讯云
  | 'huawei'        // 华为云
  | 'k8s';          // 云原生 CNCF / Kubernetes

export type IconCategory = 
  | 'physical'      // 物理网络设备
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
  /** 唯一标识符，如 'generic-network-firewall' */
  id: string;

  /** 所属厂商或通用中立 */
  provider: CloudProvider;

  /** 标准化服务类别 */
  category: IconCategory;

  /** 设备类型划分：物理设备还是云上设备 */
  deviceType?: 'physical' | 'cloud';

  /** 多语言名称 */
  name: {
    en: string;
    zh: string;
  };

  /** 官方服务代号或缩写，如 'CORE-SW', 'NGFW', 'SLB', 'RDS' */
  code?: string;

  /** 搜索关键词（支持中英双语、常见缩写、拼音），方便前端秒级模糊搜索 */
  tags: string[];

  /** 跨云等价物概念组 ID */
  equivalentGroup?: string;

  /** 内联 2.5D SVG 矢量模板内容字符串 */
  svgRaw: string;

  /** 默认 viewBox，例如 '0 0 120 100' */
  viewBox?: string;

  /** 是否为支持自由换色的 2.5D 设备图标 */
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
}

export interface CategoryMeta {
  id: IconCategory;
  name: {
    en: string;
    zh: string;
  };
  iconName: string;
}
