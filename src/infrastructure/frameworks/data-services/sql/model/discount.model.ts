import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('discount')
export class DiscountModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  readonly id?: number;
  @Column({ type: 'varchar', name: 'name' })
  readonly name: string;
  @Column({ type: 'text', name: 'desc' })
  readonly desc: string;
  @Column({ type: 'decimal', name: 'discount_percent' })
  readonly discountPercent: number;
  @Column({ type: 'boolean', name: 'active' })
  readonly active: boolean;
  @Column({ type: 'timestamp', name: 'created_at' })
  readonly createdAt?: Date;
  @Column({ type: 'timestamp', name: 'updated_at' })
  readonly updatedAt?: Date;
  @Column({ type: 'timestamp', name: 'deleted_at' })
  readonly deletedAt?: Date;
}
