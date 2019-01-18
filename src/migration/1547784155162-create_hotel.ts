import {MigrationInterface, QueryRunner} from "typeorm";

export class createHotel1547784155162 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `hotel` (`id` varchar(40) NOT NULL, `name` varchar(20) NOT NULL, `address` varchar(40) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `hotel`");
    }

}
