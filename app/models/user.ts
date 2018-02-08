import { Column, Entity, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { StringUtils } from '../../utils/stringUtils';

@Entity({ name: 'zx_user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // @Column({ name: 'enable_access', default: false })
  // enableAccess: boolean;

  @Column({ name: 'is_admin' })
  isAdmin: number;

  // @CreateDateColumn({ name: 'created_at' })
  // createdAt: Date;

  // @UpdateDateColumn({ name: 'updated_at' })
  // updatedAt: Date;

  // @Column({ name: 'deleted_at' })
  // deletedAt: Date;
}
