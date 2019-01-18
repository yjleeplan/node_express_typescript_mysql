import {MigrationInterface, QueryRunner} from "typeorm";

export class createCard1547807462858 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `card` (`id` varchar(40) NOT NULL, `seq_num` int(20) NOT NULL, `hotel_id` varchar(40) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `card`");
    }

}
