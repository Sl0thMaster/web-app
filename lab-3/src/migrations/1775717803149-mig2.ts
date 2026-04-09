import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig21775717803149 implements MigrationInterface {
    name = 'Mig21775717803149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "garage_make" DROP CONSTRAINT "FK_7713b54b08ec65a23f210dfd2dc"`);
        await queryRunner.query(`ALTER TABLE "garage_make" DROP CONSTRAINT "FK_3aaf2adfbe55be456548fbcd516"`);
        await queryRunner.query(`ALTER TABLE "garage_malfunction" DROP CONSTRAINT "FK_fd2c83b7e66b5bf3ba625ac8099"`);
        await queryRunner.query(`ALTER TABLE "garage_malfunction" DROP CONSTRAINT "FK_aaf4ebcfb74b04f2cdaed2b72d9"`);
        await queryRunner.query(`ALTER TABLE "garage_make" ADD CONSTRAINT "FK_7713b54b08ec65a23f210dfd2dc" FOREIGN KEY ("make_id") REFERENCES "makes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "garage_make" ADD CONSTRAINT "FK_3aaf2adfbe55be456548fbcd516" FOREIGN KEY ("garage_id") REFERENCES "garages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "garage_malfunction" ADD CONSTRAINT "FK_fd2c83b7e66b5bf3ba625ac8099" FOREIGN KEY ("garage_id") REFERENCES "garages"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "garage_malfunction" ADD CONSTRAINT "FK_aaf4ebcfb74b04f2cdaed2b72d9" FOREIGN KEY ("malfunction_id") REFERENCES "malfunctions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "garage_malfunction" DROP CONSTRAINT "FK_aaf4ebcfb74b04f2cdaed2b72d9"`);
        await queryRunner.query(`ALTER TABLE "garage_malfunction" DROP CONSTRAINT "FK_fd2c83b7e66b5bf3ba625ac8099"`);
        await queryRunner.query(`ALTER TABLE "garage_make" DROP CONSTRAINT "FK_3aaf2adfbe55be456548fbcd516"`);
        await queryRunner.query(`ALTER TABLE "garage_make" DROP CONSTRAINT "FK_7713b54b08ec65a23f210dfd2dc"`);
        await queryRunner.query(`ALTER TABLE "garage_malfunction" ADD CONSTRAINT "FK_aaf4ebcfb74b04f2cdaed2b72d9" FOREIGN KEY ("malfunction_id") REFERENCES "malfunctions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "garage_malfunction" ADD CONSTRAINT "FK_fd2c83b7e66b5bf3ba625ac8099" FOREIGN KEY ("garage_id") REFERENCES "garages"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "garage_make" ADD CONSTRAINT "FK_3aaf2adfbe55be456548fbcd516" FOREIGN KEY ("garage_id") REFERENCES "garages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "garage_make" ADD CONSTRAINT "FK_7713b54b08ec65a23f210dfd2dc" FOREIGN KEY ("make_id") REFERENCES "makes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
