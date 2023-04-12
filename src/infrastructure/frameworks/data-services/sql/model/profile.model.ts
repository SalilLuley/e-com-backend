import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile')
export class ProfileModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'profile_id' })
  readonly profileId?: number;
  @Column({ type: 'varchar', name: 'username' })
  readonly username: string;
  @Column({ type: 'varchar', name: 'firstname' })
  readonly firstname: string;
  @Column({ type: 'varchar', name: 'lastname' })
  readonly lastname: string;
  @Column({ type: 'varchar', name: 'role' })
  readonly role?: string;
}
