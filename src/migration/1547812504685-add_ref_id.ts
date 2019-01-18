import {MigrationInterface, QueryRunner} from "typeorm";

export class addRefIds1547812504685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `ref_id` varchar(40) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `ref_id`");
    }

}
