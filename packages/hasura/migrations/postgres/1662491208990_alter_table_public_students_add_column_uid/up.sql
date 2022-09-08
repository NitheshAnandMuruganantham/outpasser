CREATE EXTENSION IF NOT EXISTS pgcrypto;
alter table "public"."students" add column "uid" uuid
 not null default gen_random_uuid();
