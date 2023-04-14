import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_payment')
export class UserPaymentModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  readonly id?: number;

  @Column({ type: 'int', name: 'user_login_info_id' })
  readonly userLoginInfoId: number;

  @Column({ type: 'varchar', name: 'payment_type' })
  readonly paymentType: string;

  @Column({ type: 'varchar', name: 'payment_type' })
  readonly provider: string;

  @Column({ type: 'int', name: 'account_no' })
  readonly accountNo: number;

  @Column({ type: 'date', name: 'expiry' })
  readonly expiry: string;
}
