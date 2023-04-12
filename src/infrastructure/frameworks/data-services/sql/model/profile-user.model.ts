import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile_user_login_info')
export class ProfileUserModel {
  @PrimaryGeneratedColumn({ type: 'int' })
  id?: number;

  @Column({ type: 'int', name: 'profile_id' })
  profileId: number;

  @Column({ type: 'int', name: 'user_login_info_id' })
  userLoginInfoId: number;
}
