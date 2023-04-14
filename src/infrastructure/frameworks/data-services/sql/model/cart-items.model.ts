import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cart_item')
export class CartItemModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  readonly id?: number;
  @Column({ type: 'int', name: 'session_id' })
  readonly sessionId: number;
  @Column({ type: 'int', name: 'product_id' })
  readonly productId: number;
  @Column({ type: 'int', name: 'quantity' })
  readonly quantity: number;
  @Column({ type: 'timestamp', name: 'created_at' })
  readonly createdAt?: Date;
  @Column({ type: 'timestamp', name: 'updated_at' })
  readonly updatedAt?: Date;
  @Column({ type: 'timestamp', name: 'deleted_at' })
  readonly deletedAt?: Date;
}
