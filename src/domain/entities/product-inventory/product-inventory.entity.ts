import { BaseEntity } from '../base/base-entity';

export class ProductInventoryEntity extends BaseEntity {
  readonly id?: number;
  readonly quantity: number;
}
