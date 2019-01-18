import {MigrationInterface, QueryRunner} from "typeorm";

export class addHotelId1547809001717 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `hotel_id` varchar(40) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `hotel_id`");
    }

}
