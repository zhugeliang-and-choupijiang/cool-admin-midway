import { Inject, Provide } from '@midwayjs/decorator';
import { BaseService } from 'midwayjs-cool-core';
import { ICoolCache } from 'midwayjs-cool-core';

/**
 * 商品
 */
@Provide()
export class CollectionsService extends BaseService {
  @Inject('cool:cache')
  coolCache: ICoolCache;

  /**
   * 返回所有数据
   */
  async collections(keyWord) {
    const axios = require('axios');
    const json = await axios.get(
      'https://dev.ariginal.one/ariginalnfts/v1/collections',
      { param: {} }
    );
    return json.data.data;
  }
}
