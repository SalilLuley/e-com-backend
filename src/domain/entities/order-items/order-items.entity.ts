import { BaseEntity } from '../base/base-entity';

export class OrderItemsEntity extends BaseEntity {
  readonly id?: number;
  readonly orderId: number;
  readonly productId: number;
  readonly quantity: number;
}
