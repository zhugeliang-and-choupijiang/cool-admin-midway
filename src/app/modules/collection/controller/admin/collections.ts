import { Get, Inject, Provide, Query } from '@midwayjs/decorator';
import { CoolController, BaseController } from 'midwayjs-cool-core';
import { CollectionsService } from '../../service/collections';

/**
 * 商品
 */
@Provide()
@CoolController({
  // 添加通用CRUD接口
  api: [],
  // 设置表实体
  entity: null,
})
export class CollectionController extends BaseController {
  @Inject()
  collectionsService: CollectionsService;
  /**
   * 其他接口
   */
  @Get('/collections')
  async collections(@Query() page: number, @Query() size: number) {
    console.log(page, size);
    return this.ok(await this.collectionsService.collections(page, size));
  }
}
