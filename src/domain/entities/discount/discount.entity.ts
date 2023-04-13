import { BaseEntity } from '../base/base-entity';

export class DiscountEntity extends BaseEntity {
  readonly id?: number;
  readonly name: string;
  readonly desc: string;
  readonly discountPercent: number;
  readonly active: boolean;
}
