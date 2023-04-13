import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_inventory')
export class ProductInventoryModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  readonly id?: number;
  @Column({ type: 'varchar', name: 'quantity' })
  readonly quantity: number;
  @Column({ type: 'timestamp', name: 'created_at' })
  readonly createdAt?: Date;
  @Column({ type: 'timestamp', name: 'updated_at' })
  readonly updatedAt?: Date;
  @Column({ type: 'timestamp', name: 'deleted_at' })
  readonly deletedAt?: Date;
}
