import { Application } from 'egg';
import { ModuleConfig } from 'midwayjs-cool-core';

/**
 * 示例
 */
export default (app: Application) => {
  return {
    // 模块名称
    name: '品牌管理模块',
    // 模块描述
    description: 'NFT Collection管理',
  } as ModuleConfig;
};
