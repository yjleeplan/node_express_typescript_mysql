import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class User {
  
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    length: 40,
  })
  'id': string;

  @Column({
    name: 'password',
    type: 'int',
    width: 20,
  })
  'password': number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 20,
  })
  'name': string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 40,
    nullable: true,
  })
  'email': string;

  @Column({
    name: 'type',
    type: 'varchar',
    length: 20,
    default: 'normal',
  })
  'type': string;

  @Column({
    name: 'hotel_id',
    type: 'varchar',
    length: 40,
  })
  'hotel_id': string;

  @Column({
    name: 'ref_id',
    type: 'varchar',
    length: 40,
  })
  'ref_id': string;

}

export default User;
