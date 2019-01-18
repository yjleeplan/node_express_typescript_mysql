import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Card {
  
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    length: 40,
  })
  'id': string;

  @Column({
    name: 'seq_num',
    type: 'int',
    width: 20,
  })
  'seq_num': number;

  @Column({
    name: 'hotel_id',
    type: 'varchar',
    length: 40,
  })
  'hotel_id': string;

}

export default Card;
