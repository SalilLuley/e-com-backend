import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_address')
export class UserAddressModel {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  readonly id?: number;

  @Column({ name: 'user_login_info_id', type: 'int' })
  readonly userLoginInfoId: number;

  @Column({ name: 'address_line_1', type: 'varchar' })
  readonly addressLine1: string;

  @Column({ name: 'address_line_2', type: 'varchar' })
  readonly addressLine2: string;

  @Column({ name: 'city', type: 'varchar' })
  readonly city: string;

  @Column({ name: 'postal_code', type: 'varchar' })
  readonly postalCode: string;

  @Column({ name: 'country', type: 'varchar' })
  readonly country: string;

  @Column({ name: 'telephone', type: 'varchar' })
  readonly telephone: string;

  @Column({ name: 'mobile', type: 'varchar' })
  readonly mobile: string;
}
