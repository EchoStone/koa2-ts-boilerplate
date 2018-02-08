import { BaseEntity } from './baseEntity';
import { User } from '../models/user';

export class UserEntity extends BaseEntity {
  private id: number;
  private username: string;
  private password: string;
  private isAdmin: number;


  public constructor(user: User) {
    super();

    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
    this.isAdmin = user.isAdmin
  }
}
