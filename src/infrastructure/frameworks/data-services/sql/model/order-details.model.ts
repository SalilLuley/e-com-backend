import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order_details')
export class OrderDetailsModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  readonly id?: number;
  @Column({ type: 'int', name: 'user_login_info_id' })
  readonly userLoginInfoId: number;
  @Column({ type: 'int', name: 'total' })
  readonly total: number;
  @Column({ type: 'int', name: 'payment_id' })
  readonly paymentId: number;
  @Column({ type: 'timestamp', name: 'created_at' })
  readonly createdAt?: Date;
  @Column({ type: 'timestamp', name: 'updated_at' })
  readonly updatedAt?: Date;
  @Column({ type: 'timestamp', name: 'deleted_at' })
  readonly deletedAt?: Date;
}
