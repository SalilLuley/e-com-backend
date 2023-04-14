import { BaseEntity } from '../base/base-entity';

export class OrderDetailsEntity extends BaseEntity {
  readonly id?: number;
  readonly userLoginInfoId: number;
  readonly total: number;
  readonly paymentId: number;
}
