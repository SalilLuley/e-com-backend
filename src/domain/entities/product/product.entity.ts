export class ProductEntity {
  readonly id?: number;
  readonly name: string;
  readonly desc: string;
  readonly SKU: string;
  readonly categoryId: number;
  readonly inventoryId: number;
  readonly discountId: number;
  readonly price: number;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date;
}
