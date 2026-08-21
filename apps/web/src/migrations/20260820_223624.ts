import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_weddings_status" AS ENUM('draft', 'published');
  CREATE TABLE "weddings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"owner_id" integer NOT NULL,
  	"status" "enum_weddings_status" DEFAULT 'draft' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "weddings_id" integer;
  ALTER TABLE "weddings" ADD CONSTRAINT "weddings_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  CREATE UNIQUE INDEX "weddings_slug_idx" ON "weddings" USING btree ("slug");
  CREATE INDEX "weddings_owner_idx" ON "weddings" USING btree ("owner_id");
  CREATE INDEX "weddings_updated_at_idx" ON "weddings" USING btree ("updated_at");
  CREATE INDEX "weddings_created_at_idx" ON "weddings" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_weddings_fk" FOREIGN KEY ("weddings_id") REFERENCES "public"."weddings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_weddings_id_idx" ON "payload_locked_documents_rels" USING btree ("weddings_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "weddings" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "weddings" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_weddings_fk";
  
  DROP INDEX "payload_locked_documents_rels_weddings_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "weddings_id";
  DROP TYPE "public"."enum_weddings_status";`)
}
