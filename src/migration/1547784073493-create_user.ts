import {MigrationInterface, QueryRunner} from "typeorm";

export class createUser1547784073493 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(40) NOT NULL, `password` int(20) NOT NULL, `name` varchar(20) NOT NULL, `email` varchar(40) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
