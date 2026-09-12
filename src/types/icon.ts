export type CloudProvider = 
  | 'generic'       // 通用/厂商中立
  | 'aws'           // Amazon Web Services
  | 'azure'         // Microsoft Azure
  | 'gcp'           // Google Cloud Platform
  | 'aliyun'        // 阿里云
  | 'tencent'       // 腾讯云
  | 'huawei'        // 华为云
  | 'k8s';          // 云原生 CNCF / Kubernetes

export type IconCategory = 
  | 'network'       // 网络与分发
  | 'compute'       // 计算与容器
  | 'storage'       // 存储与归档
  | 'database'      // 数据库与缓存
  | 'security'      // 安全与身份
  | 'integration'   // 消息与集成
  | 'analytics'     // 大数据与 AI
  | 'general';      // 边界与客户端

export interface IconMeta {
  /** 唯一标识符，如 'generic-network-firewall', 'aws-compute-ec2' */
  id: string;

  /** 所属厂商或通用中立 */
  provider: CloudProvider;

  /** 标准化服务类别 */
  category: IconCategory;

  /** 多语言名称 */
  name: {
    en: string;
    zh: string;
  };

  /** 官方服务代号或缩写，如 'EC2', 'S3', 'RDS', 'OSS', 'LB' */
  code?: string;

  /** 搜索关键词（支持中英双语、常见缩写、拼音），方便前端秒级模糊搜索 */
  tags: string[];

  /** 跨云等价物概念组 ID，例如 'compute-vm', 'storage-object', 'db-relational' */
  equivalentGroup?: string;

  /** 内联 SVG 矢量内容字符串 (纯 SVG，便于一键复制、换色和即时无网络渲染) */
  svgRaw: string;

  /** 默认 viewBox，例如 '0 0 24 24' 或 '0 0 64 64' */
  viewBox?: string;

  /** 是否为支持自由换色的单色通用设备图标 */
  isTintable?: boolean;

  /** 推荐的默认色彩，如 '#2563eb' 或 '#ef4444' */
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
