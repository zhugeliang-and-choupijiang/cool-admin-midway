import { Inject, Provide } from '@midwayjs/decorator';
import { BaseService } from 'midwayjs-cool-core';
import { ICoolCache } from 'midwayjs-cool-core';
import axios from 'axios';

/**
 * 商品
 */
@Provide()
export class CollectionsService extends BaseService {
  @Inject('cool:cache')
  coolCache: ICoolCache;

  qs = require('qs');
  /**
   * 返回所有数据
   */
  async collections(page: number, size: number) {
    const json = await axios.get(
      'https://dev.ariginal.one/ariginalnfts/v1/collections',
      {
        params: { page: page, limit: size },
        paramsSerializer: params => {
          return this.qs.stringify(params, { indices: false });
        },
      }
    );
    return json.data.data;
  }
}
