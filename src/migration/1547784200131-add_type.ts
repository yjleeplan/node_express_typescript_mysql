import {MigrationInterface, QueryRunner} from "typeorm";

export class addType1547784200131 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `type` varchar(20) NOT NULL DEFAULT 'normal'");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `type`");
    }

}
