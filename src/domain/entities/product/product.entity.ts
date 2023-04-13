import { BaseEntity } from '../base/base-entity';

export class ProductEntity extends BaseEntity {
  readonly id?: number;
  readonly name: string;
  readonly desc: string;
  readonly SKU: string;
  readonly categoryId: number;
  readonly inventoryId: number;
  readonly discountId: number;
  readonly price: number;
}
