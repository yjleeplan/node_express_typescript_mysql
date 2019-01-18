import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Hotel {
    
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    length: 40,
  })
  'id': string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 20,
  })
  'name': string;

  @Column({
    name: 'address',
    type: 'varchar',
    length: 40,
    nullable: true,
  })
  'address': string;

}

export default Hotel;
