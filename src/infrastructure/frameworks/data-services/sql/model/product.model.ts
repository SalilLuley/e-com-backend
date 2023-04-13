import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  readonly id?: number;
  @Column({ type: 'varchar', name: 'name' })
  readonly name: string;
  @Column({ type: 'varchar', name: 'desc' })
  readonly desc: string;
  @Column({ type: 'varchar', name: 'SKU' })
  readonly SKU: string;
  @Column({ type: 'int', name: 'category_id' })
  readonly categoryId: number;
  @Column({ type: 'int', name: 'inventory_id' })
  readonly inventoryId: number;
  @Column({ type: 'int', name: 'discount_id' })
  readonly discountId: number;
  @Column({ type: 'int', name: 'price' })
  readonly price: number;
  @Column({ type: 'timestamp', name: 'created_at' })
  readonly createdAt?: Date;
  @Column({ type: 'timestamp', name: 'updated_at' })
  readonly updatedAt?: Date;
  @Column({ type: 'timestamp', name: 'deleted_at' })
  readonly deletedAt?: Date;
}
