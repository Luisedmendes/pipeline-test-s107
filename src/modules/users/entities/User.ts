import { Entity, Column } from 'typeorm';
import { Base } from '@shared/container/modules/entities/Base';

@Entity('users')
export class User extends Base {
  @Column({ type: 'varchar', unique: false })
  public name: string;

  @Column({ type: 'varchar', nullable: true })
  public description: string;
}
